<script type="text/javascript" src="formParser.js"></script>
<script type="text/javascript" src="convert.js"></script>
<style>pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

#input{
width:100%;
min-height: 23em;
font-family:monospace;
}
form span {
    display: block;
}
</style>
# Form converter
Whoa this is exciting! So, you see I'm tired of doing HTML forms by hand, validating them by hand, and doing absolutely everything, there are of course some HTML form creators but they're not that good, right?
So, what did I do! My own solution! This is very new which is why I would like a lot of feedback I'm very doubtful on how to implement features that are easy to use, and that everyone understands.
Ok, so let me tell you how this language works.

First you define some Classes, then you define the available values of these ranges

After the form is done you can then edit it, but you can already be sure of the values you're gonna receive!
<textarea id="input">
//comment
/*multiline comment*/
//So you define new classes by classname then colon : and then the type of the input element
String:text;
Number:number;
Volvo:optgroup ("ok"|"then");
Genders:radio ("male"|"female"|"other");
Boolean:checkbox ("test","test2")
Cars:select (Volvo);
Email:text;

String name, Number age,Genders gender</textarea>
<button onclick="lol()">Convert</button>
<div id="result"></div>
<pre id="preview"></pre>
