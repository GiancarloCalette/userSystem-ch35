function User(e,p,fn,ln,ag,ad,pn,py,c){
    this.email = e;
    this.password = p;
    this.firstName = fn;
    this.lastName = ln;
    this.age = ag;
    this.address = ad;
    this.phoneNumber = pn;
    this.payment = py;
    this.color = c;
}
function validation(user){
    let valid = true;
    if(user.email === ''){
        valid = false;
        $("#txtEmail").addClass("input-alert-error");
    }
    if(user.password === ''){
        valid = false;
        $("#txtPassword").addClass("input-alert-error");
    }
    if(user.firstName === ''){
        valid = false;
        $("#txtFirstName").addClass("input-alert-error");
    }
    if(user.lastName === ''){
        valid = false;
        $("#txtLastName").addClass("input-alert-error");
    }
    if(user.payment === null){
        valid = false;
        $("#selPayment").addClass("input-alert-error");
    }
    return valid;
}
function validatePass(){
    let inputPassword = $("#txtPassword");
    let password = inputPassword.val();
    if(password.length<4){
        inputPassword.css("background-color","red");
    }else{
        inputPassword.css("background-color","green");
    }
}
function register(){
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFirstName = $("#txtFirstName").val();
    let inputLastName = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputPhoneNumber = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();
    let newUser = new User(inputEmail,inputPassword,inputFirstName,inputLastName,inputAge,inputAddress,inputPhoneNumber,inputPayment,inputColor);
    if(validation(newUser)){
        console.log(newUser);
        clearForm();
        saveUser(newUser);
    }
}
function clearForm(){
    $("input").val('');
    $("select").val('');
}
function init(){
    $("#btnAdd").click(register);
    $("#txtPassword").keyup(validatePass);
}
window.onload=init;