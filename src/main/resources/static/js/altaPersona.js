$(document).ready(
        function () {
            
            $("#personForm").submit(function (event) {
                event.preventDefault();
                ajaxPost();
            });

            function ajaxPost() {

                var formData = {
                    nombre: $("#nombre").val(),
                    apellido: $("#apellido").val(),
                    email: $("#email").val(),
                    telefono: $("#telefono").val()
                }
                
                // DO POST
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "/savePerson",
                    data: JSON.stringify(formData),
                    dataType: 'json',
                    success: function (result) {
                        
                        if (result.status == "success") {
                            $("#postResultDiv").html("Usuario guardado con éxito");
                        } else {
                            $("#postResultDiv").html("<strong>Error</strong>");
                        }
                        console.log(result);
                    },
                    error: function (e) {
                        alert("Error!");
                        console.log("ERROR: ", e);
                    }
                });
     }
});