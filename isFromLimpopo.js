var isFromLimpopo = function(Limpopo){
  registrationPlate = Limpopo.endsWith("DRT");
  return registrationPlate;
}
console.log(isFromLimpopo("DRT 122 L"));
