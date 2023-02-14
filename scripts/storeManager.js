function saveUser(user){
    let oldUsers = readUsers();
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers);
    localStorage.setItem("users",val);
}
function readUsers(){
    let users = localStorage.getItem("users");
    console.log(users);
    if(!users){
        return [];
    }else{
        let listUsers = JSON.parse(users);
        console.log(listUsers);
        return listUsers;
    }
}