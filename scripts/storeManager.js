function saveUser(user){
    let oldUsers = readUsers();
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers);
    localStorage.setItem("users",val);
}
function readUsers(){
    let users = localStorage.getItem("users");
    if(!users){
        return [];
    }else{
        let listUsers = JSON.parse(users);
        return listUsers;
    }
}