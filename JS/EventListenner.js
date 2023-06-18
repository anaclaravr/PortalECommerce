export function NewEventListenner(id, acao, funcao){
    let element = document.getElementById(id)
    element.addEventListener(acao, funcao(element))
}


// const form = document.getElementById("myForm");

// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Evita que o formulário seja enviado normalmente

//   // Obtenha os valores dos campos do formulário
//   const nome = form.elements.nome.value;
//   const email = form.elements.email.value;

//   // Faça algo com os valores do formulário (por exemplo, envie-os para o servidor)
//   console.log("Nome:", nome);
//   console.log("Email:", email);

//   // Limpe os campos do formulário, se necessário
//   form.reset();
// });
