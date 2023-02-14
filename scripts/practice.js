// document.getElementById('txtEmail').style.display="none";
// $("#txtPassword").hide();

// for(let i=0;i<9;i++){
//     document.getElementsByTagName("label")[i].style.display="none";
// }

// $("label").hide();

// document.getElementsByClassName("menu")[0].style.display="none";
// $(".menu a:first").hide();

// $("#btnAdd").click(example);
// function example(){
//     console.log
// }
$("#btnAdd").click(hideElements);
function hideElements(){
    $(".container-md").hide();
}
