var isFromCapeTown = function(CapeTown) {
registrationPlate = CapeTown.startsWith("CA");
return registrationPlate;
}
console.log(isFromCapeTown("CA541236"));
