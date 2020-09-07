$(document).ready(function () {

    $(document).on('click', '.editar', function () {
        let parent = $(this).parent().parent();
        let id = $(this).attr('id');
        console.log(parent);
        let nombre = parent.children("td:nth-child(1)");
        let apellido = parent.children("td:nth-child(2)");
        let email = parent.children("td:nth-child(3)");
        let telefono = parent.children("td:nth-child(4)");
        let botones = parent.children("td:nth-child(5)");
        nombre.html("<input type='text' class='form-control' id='nombre' value='" + nombre.html() + "'/>");
        apellido.html("<input type='text' class='form-control' id='apellido' value='" + apellido.html() + "'/>");
        email.html("<input type='email' class='form-control' id='email' value='" + email.html() + "'/>");
        telefono.html("<input type='text' class='form-control' id='telefono' value='" + telefono.html() + "'/>");

        botones.html("<button class='btn btn-primary guardar' id='" + id + "'> Guardar </button>");
    });

    $(document).on('click', '.guardar', function () {
        let formData = {
            nombre: $("#nombre").val(),
            apellido: $("#apellido").val(),
            email: $("#email").val(),
            telefono: $("#telefono").val()
        }

        let id = $(this).attr('id');

        $.ajax({
            type: "PUT",
            contentType: "application/json",
            url: "/editPerson/" + id,
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (result) {
                if (result.status == "success") {
                    $("#putResultDiv").html("<p class='text-success'>Usuario guardado con éxito</p>");
                    setTimeout(
                            function ()
                            {
                                location.reload(true)
                                //do something special
                            }, 1000);
                    
                } else {
                    $("#putResultDiv").html("<strong class='text-danger'>Error</strong>");
                }

            },
            error: function (e) {
                alert("Error!");
                console.log("ERROR: ", e);
            }
        });

    });
});



