let userNames: string []= ["admin","ali","hamza","rehan","zeeshan"];

userNames.forEach(userName => {
    if (userName === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    } else{
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
});
