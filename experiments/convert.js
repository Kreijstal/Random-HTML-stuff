function lol() {
  document.getElementById('result').innerHTML = document.getElementById('preview').innerText = convert(document.getElementById('input').value)
}

function convert(someStr) {
  var str, e
  try {
    str = formParse.parse(someStr)
  } catch (e) {
    str = e.toString()
  }
  return str;
}
