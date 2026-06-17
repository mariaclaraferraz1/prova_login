document.addEventListener('DOMContentLoaded', () => {

    
    function validarCampos(email, senha, confirmarSenhaField = null) {
        let valido = true;

        
        document.getElementById('erroEmail').textContent = "";
        document.getElementById('erroSenha').textContent = "";
        if (confirmarSenhaField) {
            document.getElementById('erroConfirmarSenha').textContent = "";
        }

        
        if (!email.includes('@')) {
            document.getElementById('erroEmail').textContent = "O e-mail deve conter o caractere '@'.";
            valido = false;
        }

        
        const temMaiuscula = /[A-Z]/.test(senha);
        if (senha.length < 8 || !temMaiuscula) {
            document.getElementById('erroSenha').textContent = "A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra maiúscula.";
            valido = false;
        }

        if (confirmarSenhaField && senha !== confirmarSenhaField.value) {
            document.getElementById('erroConfirmarSenha').textContent = "As senhas digitadas não são iguais.";
            valido = false;
        }

        return valido;
    }


    
    const loginForm = document.getElementById('loginForm');
    const btnIrParaCadastro = document.getElementById('btnIrParaCadastro');

    if (btnIrParaCadastro) {
        btnIrParaCadastro.addEventListener('click', () => {
            window.location.href = 'cadastro.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            
            if (!validarCampos(email, senha)) {
                event.preventDefault(); 
            } else {
                event.preventDefault();
                alert("Login aceito! (Lógica de entrada simulada)");
            }
        });
    }


    
    const cadastroForm = document.getElementById('cadastroForm');
    const btnVoltar = document.getElementById('btnVoltar');

    if (btnVoltar) {
        btnVoltar.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const confirmarSenhaField = document.getElementById('confirmarSenha');

            
            if (validarCampos(email, senha, confirmarSenhaField)) {
                
                alert("Inscrição salva com sucesso!"); 
                window.location.href = 'index.html';    
            }
        });
    }

    btnCadastro.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});
