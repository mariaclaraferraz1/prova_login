document.addEventListener('DOMContentLoaded', () => {
    const btnSalvarInscricao = document.getElementById('btnSalvarInscricao');
    const btnVoltar = document.getElementById('btnVoltar');

    if (btnSalvarInscricao) {
        btnSalvarInscricao.addEventListener('submit', (event) => {

            event.preventDefault(); // impede o envio do formulário

            let valido = true;

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const confirmarSenha = document.getElementById('confirmarSenha').value;

            document.getElementById('erroEmail').textContent = "";
            document.getElementById('erroSenha').textContent = "";
            document.getElementById('erroConfirmarSenha').textContent = "";

            if (!email.includes('@')) {
                document.getElementById('erroEmail').textContent =
                    "O e-mail deve obrigatoriamente conter o caractere @.";
                valido = false;
            }

            const temMaiuscula = /[A-Z]/.test(senha);

            if (senha.length < 8) {
                document.getElementById('erroSenha').textContent =
                    "A senha deve ter no mínimo 8 caracteres.";
                valido = false;
            } else if (!temMaiuscula) {
                document.getElementById('erroSenha').textContent =
                    "A senha deve conter pelo menos uma letra maiúscula.";
                valido = false;
            }

            if (senha !== confirmarSenha) {
                document.getElementById('erroConfirmarSenha').textContent =
                    "As senhas não coincidem.";
                valido = false;
            }

            if (valido) {
                alert("Inscrição salva com sucesso!");
                window.location.href = 'index.html';
            }
        });
    }

    if (btnVoltar) {
        btnVoltar.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});