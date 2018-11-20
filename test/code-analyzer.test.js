import assert from 'assert';
import {parseCode} from '../src/js/code-analyzer';

let expected_1 = '[{"line":1,"type":"function declaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"variable declaration","name":"X","condition":"","value":""},{"line":1,"type":"variable declaration","name":"V","condition":"","value":""},{"line":1,"type":"variable declaration","name":"n","condition":"","value":""},{"line":2,"type":"Return Statement","name":"","condition":"","value":"-1"}]';

describe('The javascript parser', () => {
    it('is parsing a simple function correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('function binarySearch(X, V, n){\n' +
                '    return -1;\n' +
                '}\n')), expected_1);
    });



});
