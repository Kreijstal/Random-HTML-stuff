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
}</style>
# Form converter
Whoa this is exciting! So, you see I'm tired of doing HTML forms by hand, validating them by hand, and doing absolutely everything, there are of course some HTML form creators but they're not that good, right?
So, what did I do! My own solution! This is very new which is why I would like a lot of feedback I'm very doubtful on how to implement features that are easy to use, and that everyone understands.
Ok, so let me tell you how this language works.

First you define some Classes, then you define the available values of these ranges
<textarea id="input">
//comment
/*multiline comment*/
//So you define new classes by classname then colon : and then the type of the input element
String:text; //This is a class String input type text
Number:number; //This is a class number input type number
Genders:radio ("male"|"female"|"other"); //An array is defined by being between parentheses and having | as a delimeter, radio type elements always expects an array
b
//So the idea I had, forms are like function parameters, so I thought about displaying it like the parameters of a function in a Strong Typed language like Java (but without the function (is there a better way?))
String name, Number age,Genders gender
//Ok there is still the issue what if you want to have a different display text</textarea>
<button onclick="lol()">Convert</button>
<div id="result"></div>
<pre id="preview"></pre>
