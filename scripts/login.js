function login(){
    let inputUserName = $("#txtUserName").val();
    let inputPassword = $("#txtPassword").val();
    let users = readUsers();
    let flag = true;
    for(let i=0;i<users.length;i++){
        let user = users[i];
        if(inputUserName == user.email && inputPassword == user.password){
            window.location="users.html";
        }else{
            flag = false;
        }
    }
    if(!flag){
        $("#alert-error").removeClass("hide");
        setTimeout(function(){
            $("#alert-error").addClass("hide");
        },1000);
    }
}