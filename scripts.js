document.addEventListener('DOMContentLoaded', function() {
    // Define a imagem de fundo inicial
    document.body.style.backgroundImage = "url('inteleon.jpg')";

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obter o valor do campo de senha
        const password = document.getElementById('password').value;

        // Verificar se a senha está correta
        if (password === "Aphonsy Ossinho Santos de Azevedo Gutemberg") {
            // Ocultar o formulário
            document.getElementById('access-form').style.display = 'none';

            // Exibir o conteúdo principal
            document.getElementById('main-content').style.display = 'block';

            // Alterar a imagem de fundo
            document.body.style.backgroundImage = "url('fundo.jpg')"; // Substitua pelo caminho da nova imagem de fundo
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    });
});
