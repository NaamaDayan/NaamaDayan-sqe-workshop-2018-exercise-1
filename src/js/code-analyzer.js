import * as esprima from 'esprima';
var lineColumn = require('line-column');

const makeRecord = (line, type, name, condition, value) =>
    ({line:line, type:type, name:name, condition:condition, value:value});


let notSupported = '{problem:null}';
let variable_declaration = 'variable declaration';
let function_declaration = 'function declaration';
let assignment_expression = 'assignment expression';

//global variable:
let code_to_parse = null;


const parseCode = (codeToParse) => {
    code_to_parse = codeToParse;
    let parsedCode = esprima.parseScript(codeToParse, {loc:true});
    return convertToString(createRecords(parsedCode));
};

export {parseCode};




const convertToString = (expr_arr) =>{
    let str = '';
    for (let i=0; i<expr_arr.length; i++)
        str = str.concat(JSON.stringify(expr_arr[i], null, 2)).concat(', ');
    return str;
};

const getStringByLocation = (str, assignmentValue) =>{
    let start_index = lineColumn(str).toIndex(assignmentValue['loc']['start']);
    let end_index = lineColumn(str).toIndex(assignmentValue['loc']['end']);
    return str.substring(start_index+1,end_index+1);
};

const createRecords = (parsedCode) => {
    let type = parsedCode['body'][0]['type'];
    if (type == 'FunctionDeclaration' && parsedCode['body'].length==1) //only one function
        return functionHandler(parsedCode['body'][0]);
    return notSupported;
};

const functionHandler = (exp_function) => {
    let functionName = nameHandler(exp_function['id'], function_declaration);
    let params = exp_function['params'].map(function(x) { return nameHandler(x, variable_declaration); });
    let body_records = exp_function['body']['body'].map(expressionHandler).flat();
    return [functionName].concat(params).concat(body_records);
};

const nameHandler = (exp, type) =>{
    let name = exp['name'];
    let loc = exp['loc']['start']['line'];
    return makeRecord(loc,type,name,'','');
};


const varDeclHandler = (exp) =>{
    let decl_json = nameHandler(exp['id'],variable_declaration);
    let assignmentValue = exp['init'];
    if (assignmentValue!=null)
        decl_json.value = getStringByLocation(code_to_parse,assignmentValue);
    return decl_json;
};

const assignmentHandler = (exp) =>{
    let assignmentExp = nameHandler(exp['left'], assignment_expression);
    let assignmentValue = exp['right'];
    if (assignmentValue!=null)
        assignmentExp.value = getStringByLocation(code_to_parse,assignmentValue);
    return assignmentExp;
};

const whileHandler = (exp) =>{
    let condition = getStringByLocation(code_to_parse,exp['test']);
    let loc = exp['test']['loc']['start']['line'];
    let test = makeRecord(loc, 'while statement','',condition,'');
    let bodyRecords =  exp['body']['body'].map(expressionHandler);
    return [test].concat(bodyRecords);
};

//statementType = 'if statement' or 'else if statement'
const ifHandler = (exp, statementType) =>{
    let condition = getStringByLocation(code_to_parse,exp['test']);
    let test = makeRecord(exp['loc']['start']['line'], statementType, '', condition,'');
    let consequent = expressionHandler(exp['consequent']);
    let alternate = null;
    if (exp['alternate']['type'] == 'IfStatement')//else if
        alternate = ifHandler(exp['alternate'],'else if statement');
    else
        alternate = expressionHandler(exp['alternate']);
    return [test].concat(consequent.flat()).concat(alternate.flat());
};

const returnHandler = (exp) =>{
    let argument = getStringByLocation(code_to_parse, exp['argument']);
    return [makeRecord(exp['loc']['start']['line'], 'Return Statement', '','',argument)];
};

const toVarDeclHandler = (exp) =>{
    return exp['declarations'].map(varDeclHandler);
};

const toAssignmentHandler = (exp)=>{
    if (exp['expression']['type'] == 'AssignmentExpression')
        return [assignmentHandler(exp['expression'])];
    else
        return notSupported;
};

const toExpressionHandler = (exp) =>{
    return exp['body'].map(expressionHandler);
};

const toIfHandler = (exp) =>{
    return ifHandler(exp,'If Statement');
};


let handlers = {'VariableDeclaration': toVarDeclHandler, 'ExpressionStatement':toAssignmentHandler,
    'WhileStatement':whileHandler, 'BlockStatement':toExpressionHandler, 'IfStatement':toIfHandler, 'ReturnStatement':returnHandler};
//return records array
const expressionHandler = (exp) => {
    let type =  exp['type'];
    return handlers[type](exp);
};
