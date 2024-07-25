let guest_list:string[] =["ayaan","farhan","madiha"];



let notcoming: string = "madiha";
console.log(`${notcoming} can't make it to dinner`);

let new_guest: string ="shanzey";
guest_list[guest_list.indexOf(notcoming)] =new_guest;


guest_list.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


