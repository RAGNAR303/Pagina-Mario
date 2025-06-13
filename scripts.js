const background = document.querySelector(".formsBackground");
const form = document.querySelector(".fale-Conosco");
const enviar = document.querySelector(".enviar");
const email = "goncalves303.gt@gmail.com";


console.log()
const getForm = () => {
  background.style.visibility = "visible";
  form.style.visibility = "visible";
  enviar.style.opacity= "1";
};

const toCloseForm = () => {
  background.style.visibility = "hidden";
  form.style.visibility = "hidden";
  enviar.style.opacity = "0";
};
