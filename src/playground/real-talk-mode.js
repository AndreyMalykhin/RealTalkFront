import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/addon/mode/simple';

CodeMirror.defineSimpleMode("realtalk", {
    start: [
        {
            regex: /(?:homie|roll|keeprollin|holdon|bringitback|if|elz|fresh|real|yeah|nah|void|bool|char|int|long|double|string)\b/,
            token: "keyword"
        }
    ]
});
