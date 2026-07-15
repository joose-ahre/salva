const loginForm =
document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener(
"submit",

(e)=>{


e.preventDefault();


localStorage.setItem(
"usuario",
"true"
);



alert(
"Sesión iniciada correctamente"
);



window.location.href =
"index.html";


});


}