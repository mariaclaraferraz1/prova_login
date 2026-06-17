document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const btnIrParaCadastro = document.getElementById('btnIrParaCadastro');

    if (btnIrParaCadastro) {
        btnIrParaCadastro.addEventListener('click', () => {
            window.location.href = 'cadastro.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            let valido = true;

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            document.getElementById('erroEmail').textContent = "";
            document.getElementById('erroSenha').textContent = "";

            if (!email.includes('@')) {
                document.getElementById('erroEmail').textContent = "O e-mail deve obrigatoriamente conter o caractere @.";
                valido = false;
            }

            const temMaiuscula = /[A-Z]/.test(senha);
            if (senha.length < 8 || !temMaiuscula) {
                document.getElementById('erroSenha').textContent = "A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra maiúscula.";
                valido = false;
            }

            if (!valido) {
                event.preventDefault();
            } else {
                event.preventDefault();
                alert("Login realizado com sucesso!");
            }
        });
    }

});
