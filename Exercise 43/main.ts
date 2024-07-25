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
return magicians;
} 
//making a copy of original array through .slice function
let copy_magician_names =magician_names.slice()

//modify the copied array to include the great with their names
let copy_great_magicians = makeGreat(copy_magician_names);

show_magicians(magician_names);
show_magicians(copy_great_magicians);
