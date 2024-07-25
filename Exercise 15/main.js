var guest_list = ["ayaan", "farhan", "madiha"];
var notcoming = "madiha";
console.log("".concat(notcoming, " can't make it to dinner"));
var new_guest = "shanzey";
guest_list[guest_list.indexOf(notcoming)] = new_guest;
guest_list.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
