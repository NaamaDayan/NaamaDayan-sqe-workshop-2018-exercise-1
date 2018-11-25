import assert from 'assert';
import {parseCode} from '../src/js/code-analyzer';
let function_1 = 'function binarySearch(X, V, n){\n' + '    return -1;\n' + '}\n';
let function_2 = 'function binarySearch(X, V, n){\n' +
    '    let low, high, mid;\n' +
    'let r;\n' +
    '    low = 0, mid = 0;\n' +
    '    high = n - 1;\n' +
    '    while (low <= high) {\n' +
    '        mid = (low + high)/2;\n' +
    '        if (X < V[mid])\n' +
    '            high = mid - 1;\n' +
    '        else if (X > V[mid])\n' +
    '            low = mid + 1;\n' +
    '        else\n' +
    '            return mid;\n' +
    '    }\n' +
    '    return -1;\n' +
    '}\n';
let function_3 = 'function binarySearch(X, V, n){\n' +
    '        if (X < V[mid])\n' +
    '            high = mid - 1;\n' +
    '    return mid - 1;\n' +
    '}\n';

let function_4 = 'function binarySearch(){\n' +
    '    let low;\n' +
    'let  high, mid;\n' +
    '    low = 0;\n' +
    '    high = n - 1;\n' +
    '    while (low <= high) {\n' +
    '        mid = (low + high)/2;\n' +
    '        if (X < V[mid])\n' +
    '            high = mid - 1;\n' +
    '        else if (X > V[mid])\n' +
    '            low = mid + 1;\n' +
    '        else\n' +
    '            return mid;\n' +
    '    }\n' +
    '    return -1;\n' +
    '}\n';
let function_5= 'function binarySearch(){\n' +
    '    let low;\n' +
    'let  high, mid;\n' +
    '    low = 0;\n' +
    '    high = n - 1;\n' +
    '    while (low <= high) {\n' +
    '        mid = (low + high)/2;\n' +
    '        if (X < V[mid])\n' +
    '            high = mid - 1;\n' +
    '        else\n' +
    '            return mid;\n' +
    '    }\n' +
    '    return -1;\n' +
    '}\n';

let function_6= 'function binarySearch(){\n' + '}\n';
let function_7 = 'function binarySearch(X, V, n){\n' +
    '\n' +
    'for (high = 1; high <= low; high = high+1)\n' +
    'mid  = low +1;\n' +
    '\n' +
    '}\n';

let function_8 = 'function binarySearch(){\n' +
    '    low = 0, high = 0;\n' +
    '    \n' +
    '}\n';

let function_9 = 'function binarySearch(X, V, n){\n' +
    '    \n' +
    '        if (X < V[mid])\n' +
    '            high = mid - 1;\n' +
    '        else if (X > V[mid])\n' +
    '            low = mid + 1;\n' +
    'else if (X > mid - 2)\n' +
    'low = mid - 1; \n' +
    '        else\n' +
    '            return mid;\n' +
    '}\n';

let function_10 = 'function binarySearch(){\n' +
    '    let low = 0;\n' +
    '}\n';
let function_11 = 'function binarySearch(){\n' +
    '    let low = 0, high = 1;\n' +
    '}\n';
let function_12 = 'function binarySearch(X, V, n){\n' +
    ' \n' +
    '        if (X < V[mid]){\n' +
    '            high = mid - 1;\n' +
    '}\n' +
    '        \n' +
    '}\n';
let function_13 = 'function binarySearch(X, V, n){\n' +
    '    let low, high, mid;\n' +
    '    low = 0;\n' +
    '    high = n - 1;\n' +
    '    while (low <= high) \n' +
    '        mid = (low + high)/2;\n' +
    '      \n' +
    '}\n';
let function_14 = 'let a =1;';
let function_15 = 'function x(){\n' +
    'let a = null;\n' +
    '}';
let function_16 = 'function x(){\n' +
    'let a;\n' +
    'a;\n' +
    '}';
let expected_1 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"variable declaration","name":"X","condition":"","value":""},{"line":1,"type":"variable declaration","name":"V","condition":"","value":""},{"line":1,"type":"variable declaration","name":"n","condition":"","value":""},{"line":2,"type":"Return Statement","name":"","condition":"","value":"-1"}]';
let expected_2 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"variable declaration","name":"X","condition":"","value":""},{"line":1,"type":"variable declaration","name":"V","condition":"","value":""},{"line":1,"type":"variable declaration","name":"n","condition":"","value":""},{"line":2,"type":"variable declaration","name":"low","condition":"","value":""},{"line":2,"type":"variable declaration","name":"high","condition":"","value":""},{"line":2,"type":"variable declaration","name":"mid","condition":"","value":""},{"line":3,"type":"variable declaration","name":"r","condition":"","value":""},{"line":4,"type":"assignment expression","name":"low","condition":"","value":"0"},{"line":4,"type":"assignment expression","name":"mid","condition":"","value":"0"},{"line":5,"type":"assignment expression","name":"high","condition":"","value":"n - 1"},{"line":6,"type":"while statement","name":"","condition":"low <= high","value":""},{"line":7,"type":"assignment expression","name":"mid","condition":"","value":"(low + high)/2"},{"line":8,"type":"If Statement","name":"","condition":"X < V[mid]","value":""},{"line":9,"type":"assignment expression","name":"high","condition":"","value":"mid - 1"},{"line":10,"type":"else if statement","name":"","condition":"X > V[mid]","value":""},{"line":11,"type":"assignment expression","name":"low","condition":"","value":"mid + 1"},{"line":13,"type":"Return Statement","name":"","condition":"","value":"mid"},{"line":15,"type":"Return Statement","name":"","condition":"","value":"-1"}]';
let expected_3 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"variable declaration","name":"X","condition":"","value":""},{"line":1,"type":"variable declaration","name":"V","condition":"","value":""},{"line":1,"type":"variable declaration","name":"n","condition":"","value":""},{"line":2,"type":"If Statement","name":"","condition":"X < V[mid]","value":""},{"line":3,"type":"assignment expression","name":"high","condition":"","value":"mid - 1"},{"line":4,"type":"Return Statement","name":"","condition":"","value":"mid - 1"}]';
let expected_4 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":2,"type":"variable declaration","name":"low","condition":"","value":""},{"line":3,"type":"variable declaration","name":"high","condition":"","value":""},{"line":3,"type":"variable declaration","name":"mid","condition":"","value":""},{"line":4,"type":"assignment expression","name":"low","condition":"","value":"0"},{"line":5,"type":"assignment expression","name":"high","condition":"","value":"n - 1"},{"line":6,"type":"while statement","name":"","condition":"low <= high","value":""},{"line":7,"type":"assignment expression","name":"mid","condition":"","value":"(low + high)/2"},{"line":8,"type":"If Statement","name":"","condition":"X < V[mid]","value":""},{"line":9,"type":"assignment expression","name":"high","condition":"","value":"mid - 1"},{"line":10,"type":"else if statement","name":"","condition":"X > V[mid]","value":""},{"line":11,"type":"assignment expression","name":"low","condition":"","value":"mid + 1"},{"line":13,"type":"Return Statement","name":"","condition":"","value":"mid"},{"line":15,"type":"Return Statement","name":"","condition":"","value":"-1"}]';
let expected_5 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":2,"type":"variable declaration","name":"low","condition":"","value":""},{"line":3,"type":"variable declaration","name":"high","condition":"","value":""},{"line":3,"type":"variable declaration","name":"mid","condition":"","value":""},{"line":4,"type":"assignment expression","name":"low","condition":"","value":"0"},{"line":5,"type":"assignment expression","name":"high","condition":"","value":"n - 1"},{"line":6,"type":"while statement","name":"","condition":"low <= high","value":""},{"line":7,"type":"assignment expression","name":"mid","condition":"","value":"(low + high)/2"},{"line":8,"type":"If Statement","name":"","condition":"X < V[mid]","value":""},{"line":9,"type":"assignment expression","name":"high","condition":"","value":"mid - 1"},{"line":11,"type":"Return Statement","name":"","condition":"","value":"mid"},{"line":13,"type":"Return Statement","name":"","condition":"","value":"-1"}]';
let expected_6 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""}]';
let expected_7 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"variable declaration","name":"X","condition":"","value":""},{"line":1,"type":"variable declaration","name":"V","condition":"","value":""},{"line":1,"type":"variable declaration","name":"n","condition":"","value":""},{"line":3,"type":"for statement","name":"","condition":"high <= low","value":""},{"line":4,"type":"assignment expression","name":"mid","condition":"","value":"low +1"}]';
let expected_8 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":2,"type":"assignment expression","name":"low","condition":"","value":"0"},{"line":2,"type":"assignment expression","name":"high","condition":"","value":"0"}]';
let expected_9 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"variable declaration","name":"X","condition":"","value":""},{"line":1,"type":"variable declaration","name":"V","condition":"","value":""},{"line":1,"type":"variable declaration","name":"n","condition":"","value":""},{"line":3,"type":"If Statement","name":"","condition":"X < V[mid]","value":""},{"line":4,"type":"assignment expression","name":"high","condition":"","value":"mid - 1"},{"line":5,"type":"else if statement","name":"","condition":"X > V[mid]","value":""},{"line":6,"type":"assignment expression","name":"low","condition":"","value":"mid + 1"},{"line":7,"type":"else if statement","name":"","condition":"X > mid - 2","value":""},{"line":8,"type":"assignment expression","name":"low","condition":"","value":"mid - 1"},{"line":10,"type":"Return Statement","name":"","condition":"","value":"mid"}]';
let expected_10 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":2,"type":"variable declaration","name":"low","condition":"","value":"0"}]';
let expected_11 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":2,"type":"variable declaration","name":"low","condition":"","value":"0"},{"line":2,"type":"variable declaration","name":"high","condition":"","value":"1"}]';
let expected_12 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"variable declaration","name":"X","condition":"","value":""},{"line":1,"type":"variable declaration","name":"V","condition":"","value":""},{"line":1,"type":"variable declaration","name":"n","condition":"","value":""},{"line":3,"type":"If Statement","name":"","condition":"X < V[mid]","value":""},{"line":4,"type":"assignment expression","name":"high","condition":"","value":"mid - 1"}]';
let expected_13 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"variable declaration","name":"X","condition":"","value":""},{"line":1,"type":"variable declaration","name":"V","condition":"","value":""},{"line":1,"type":"variable declaration","name":"n","condition":"","value":""},{"line":2,"type":"variable declaration","name":"low","condition":"","value":""},{"line":2,"type":"variable declaration","name":"high","condition":"","value":""},{"line":2,"type":"variable declaration","name":"mid","condition":"","value":""},{"line":3,"type":"assignment expression","name":"low","condition":"","value":"0"},{"line":4,"type":"assignment expression","name":"high","condition":"","value":"n - 1"},{"line":5,"type":"while statement","name":"","condition":"low <= high","value":""},{"line":6,"type":"assignment expression","name":"mid","condition":"","value":"(low + high)/2"}]';
let expected_14 = '[]';
let expected_15 = '[{"line":1,"type":"function declaration","name":"x","condition":"","value":""},{"line":2,"type":"variable declaration","name":"a","condition":"","value":"null"}]';
let expected_16 = '[{"line":1,"type":"function declaration","name":"x","condition":"","value":""},{"line":2,"type":"variable declaration","name":"a","condition":"","value":""}]';
describe('The javascript parser', () => {
    it('is parsing a simple function with return correctly', () => {assert.equal(JSON.stringify(parseCode(function_1)), expected_1);});
    it('is parsing a standard function correctly', () => {assert.equal(JSON.stringify(parseCode(function_2)), expected_2);});
    it('is parsing a simple function with if and no else correctly', () => {assert.equal(JSON.stringify(parseCode(function_3)), expected_3);});
    it('is parsing a simple function with let statements correctly', () => {assert.equal(JSON.stringify(parseCode(function_4)), expected_4);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_5)), expected_5);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_6)), expected_6);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_7)), expected_7);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_8)), expected_8);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_9)), expected_9);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_10)), expected_10);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_11)), expected_11);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_12)), expected_12);});
    it('is parsing a simple function correctly', () => {assert.equal(JSON.stringify(parseCode(function_13)), expected_13);});
    it('is parsing a non-function input correctly', () => {assert.equal(JSON.stringify(parseCode(function_14)), expected_14);});
    it('is parsing a simple function with let statement correctly', () => {assert.equal(JSON.stringify(parseCode(function_15)), expected_15);});
    it('is parsing a wrong type of expression statement correctly', () => {assert.equal(JSON.stringify(parseCode(function_16)), expected_16);});

});