function copyEmail() {
  // Get the text field
  var copyText = document.getElementById("email").innerHTML;

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
}
