(function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow_night");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(document.documentElement.innerHTML);
}());