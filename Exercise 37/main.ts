function make_shirt(size:string = "large", printMessage:string = "I love typescript"){
    console.log(`making a ${size} shirt with the message ${printMessage} printed on it`);

}
//calling a function:
make_shirt();
make_shirt("medium");
make_shirt("small","Happy summers")