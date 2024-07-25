function make_sandwich(...items:string[]){
    console.log("\nmaking a sandwich with the following items:\n")

    items.forEach(singleItem => console.log(singleItem));
    console.log("enjoy sandwich");

}
//calling function
make_sandwich("bread","chicken","cheese","mayo");

make_sandwich("bread","mayo","cheese");

make_sandwich("bread","beef","mayo","ketchup","egg","cheese");