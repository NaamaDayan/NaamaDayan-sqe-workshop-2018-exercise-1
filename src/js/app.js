import $ from 'jquery';
import {parseCode} from './code-analyzer';



$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        //let output = parseCode(codeToParse);
        //$('#parsedCode').val(output);
        makeTable(parseCode(codeToParse));
    });
});

function makeTable(records) {
    var result = '<table border=1>';
    result += '<tr> <th>Line</th> <th>Type</th> <th>Name</th> <th>Condition</th> <th>Value</th> </tr>';
    for(var i=0; i<records.length; i++) {
        result += '<tr>';
        var keysbyindex = Object.keys(records[i]);
        for(var j=0; j<keysbyindex.length; j++){
            result += '<td>'+records[i][keysbyindex[j]] +'</td>';
        }
        result += '</tr>';
    }
    result += '</table>';
    document.body.innerHTML = result;
}

