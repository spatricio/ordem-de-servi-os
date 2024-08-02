document.addEventListener("DOMContentLoaded", function() {
    // Função para confirmar exclusão de registro
    var deleteLinks = document.querySelectorAll('a[href*="/delete/"]');
    deleteLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (!confirm('Tem certeza que deseja excluir este registro?')) {
                event.preventDefault();
            }
        });
    });
});
