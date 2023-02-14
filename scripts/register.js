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
    console.log(newUser);
    clearForm();
}
function clearForm(){
    $("input").val('');
}
function init(){
    $("#btnAdd").click(register);
}
window.onload=init;