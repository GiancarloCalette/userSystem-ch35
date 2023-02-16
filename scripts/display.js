function display(usersArray){
    const TABLE = $("#users");
    let tr="";
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        tr =`
        <tr>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.payment}</td>
            
            <td style="background-color:${user.color}"></td>
        </tr>`;
        TABLE.append(tr);
    }
}

function init(){
    let users = readUsers();
    display(users);
}
window.onload=init;