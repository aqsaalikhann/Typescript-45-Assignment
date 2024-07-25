function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("making a ".concat(size, " shirt with the message ").concat(printMessage, " printed on it"));
}
//calling a function:
make_shirt();
make_shirt("medium");
make_shirt("small", "Happy summers");
