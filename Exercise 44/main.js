function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("enjoy sandwich");
}
//calling function
make_sandwich("bread", "chicken", "cheese", "mayo");
make_sandwich("bread", "mayo", "cheese");
make_sandwich("bread", "beef", "mayo", "ketchup", "egg", "cheese");
