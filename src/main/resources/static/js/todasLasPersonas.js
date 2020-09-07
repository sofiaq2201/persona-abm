$(document).ready(
        function () {

            // GET REQUEST
            $("#getAllPeople").click(function (event) {
                event.preventDefault();
                ajaxGet();
            });

            // DO GET
            function ajaxGet() {
                $.ajax({
                    type: "GET",
                    url: "getAllPeople",
                    success: function (result) {
                        if (result != null) {
                            
                            $.each(result, function (i, persona) {
                                       let personas = "<tr>" +
                                                        "<td>" + persona.nombre + "</td>"
                                                        + " <td>" + persona.apellido + "</td>"
                                                        + " <td>"+ persona.email +"</td>"
                                                        + " <td>"+ persona.telefono +"</td>"
                                                        + " <td> <button class='btn btn-outline-warning editar' id='"+persona.id+"'>Editar</button> \n\
                                                           <button type='button' class='btn btn-outline-danger eliminar' id='"+persona.id+"'>Eliminar</button></td>"+
                                                         "</tr>";
                                        $('#personas').append(personas);
                                    });
                            
                            //console.log("Success: ", result);
                            
                        } else {
                            $("#getResultDiv").html("<strong>Aun no hay persona enlistadas</strong>");
                            console.log("Fail: ", result);
                        }
                    },
                    error: function (e) {
                        $("#getResultDiv").html("<strong>Error</strong>");
                        console.log("ERROR: ", e);
                    }
                });
            }
        })