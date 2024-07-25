let current_users: string[] =["ali","sana","fariyal","danish","zarron"];
let new_users: string[] =["ayan","MARIA","zarron","ariba","SANA"];

new_users.forEach((new_user) => {
let user =current_users.some(current_users => current_users.toLowerCase() === new_user.toLowerCase ())
    if(user){
        console.log(`sorry ${new_user} is already taken`)
    }else{
        console.log(`This username ${new_user} is available`)
    }
});