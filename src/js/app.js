/* eslint-disable indent,complexity,max-lines-per-function */
import $ from 'jquery';
import {parseCode} from './code-analyzer';



$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let output = parseCode(codeToParse);
        $('#parsedCode').val(JSON.stringify(output, null, 0));
    });
});

