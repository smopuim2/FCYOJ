let cmirror={};

function cmirror_setup(e,id){
    cmirror[id]=CodeMirror.fromTextarea(e,{
            lineNumbers:true,
            indentUnit:4,
            styleActiveLine:true,
            matchBrackets:true,
            mode:'text/x-c++src',
            theme:'dracula'
    });
}
