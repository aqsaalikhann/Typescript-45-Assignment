let magician_names :string[]= ["john","david","mickal"];


function show_magicians(magicians: string[]){
for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
}
  }
function makeGreat(magicians:string[]) {
  for (let i =0; i < magicians.length; i ++) {
  magicians[i] = "the Great " + magicians[i];
}
} 
makeGreat(magician_names)

  show_magicians(magician_names)