const registroForm =
document.getElementById("registroForm");



if(registroForm){


registroForm.addEventListener(
"submit",

(e)=>{


e.preventDefault();



localStorage.setItem(
"usuario",
"true"
);



alert(
"Cuenta creada correctamente"
);



window.location.href =
"index.html";


});


}