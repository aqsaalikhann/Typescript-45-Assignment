let guest_list: string []=["parishah","ayaan","zeeshan","farhan","shanzey","affan"];

console.log("Unfortunately , I can invite only two people for dinner.");

while (guest_list.length > 2) {
let removed_guest = guest_list.pop();
console.log(`Sorry, ${removed_guest}, I can't invite you to dinner.`);
}

guest_list.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guest_list.splice(0, guest_list.length);
console.log(guest_list);