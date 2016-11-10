var isFromPaarl = function(paarl){
  registrationPlate = paarl.startsWith("CJ");
return registrationPlate;
}
console.log(isFromPaarl("CJ789654"));
