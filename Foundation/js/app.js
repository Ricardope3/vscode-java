/*variable =$ ("#otro")
console.log(variable);
variable.innerHTML += "hola";
*/
$("#otro").html("hola");
$(document).ready()
{
    alert("ya se cargo");  
}
$(window ).scroll(function() {
   $("body").css('background-color', 'blue');
  });