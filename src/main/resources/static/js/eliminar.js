$(document).ready(function () {
    $(document).on( 'click', '.eliminar',function () {
        if (confirm('¿Seguro de eliminar?')) {
            let id = $(this).attr('id');
            $.ajax({
                type: "DELETE",
                url: "deletePerson/" + id,
                cache: false,
                success: function () {
                    $(this).remove();
                    location.reload(true)
                },
                error: function () {
                    alert("Error al eliminar");
                }
            });
        }
    });

});