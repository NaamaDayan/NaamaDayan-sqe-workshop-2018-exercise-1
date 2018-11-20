import assert from 'assert';
import {parseCode} from '../src/js/code-analyzer';

let function_1 = '{\n' +
    '  "line": 1,\n' +
    '  "type": "function declaration",\n' +
    '  "name": "binarySearch",\n' +
    '  "condition": "",\n' +
    '  "value": ""\n' +
    '}, {\n' +
    '  "line": 1,\n' +
    '  "type": "variable declaration",\n' +
    '  "name": "X",\n' +
    '  "condition": "",\n' +
    '  "value": ""\n' +
    '}, {\n' +
    '  "line": 1,\n' +
    '  "type": "variable declaration",\n' +
    '  "name": "V",\n' +
    '  "condition": "",\n' +
    '  "value": ""\n' +
    '}, {\n' +
    '  "line": 1,\n' +
    '  "type": "variable declaration",\n' +
    '  "name": "n",\n' +
    '  "condition": "",\n' +
    '  "value": ""\n' +
    '}, {\n' +
    '  "line": 3,\n' +
    '  "type": "Return Statement",\n' +
    '  "name": "",\n' +
    '  "condition": "",\n' +
    '  "value": "-1"\n' +
    '}, ';


describe('The javascript parser', () => {
    it('is parsing an empty function correctly', () => {
        assert.equal(
            parseCode('function binarySearch(X, V, n){\n' +
                ' \n' +
                '    return -1;\n' +
                '}\n'), function_1);
    });



});
