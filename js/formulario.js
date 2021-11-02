
$('#submit').click(function (e) {
  e.preventDefault();
  let inputs = $('#formulario').find(':input[type="text"]')
  let email = $('#formulario').find(':input[type="email"]').val()
  // Muestra por Consola los datos del Formulario
  inputs.each(function (index, elemento) {
    console.log($(elemento).val());
  })
  console.log(email);
  Toastify({
    text: "Formulario Enviado Recibiras una Respuesta a: " + email,

    className: "info",
    style: {
      background: "linear-gradient(to right, ##49313b, ##f8bfe7)",
    }
  }).showToast();

})

