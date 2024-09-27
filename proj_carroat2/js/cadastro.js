const url = 'https://go-wash-api.onrender.com/api/user';


async function cadastroUsuario() {
    try {
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        let cpf = document.getElementById('cpf').value;
        let data_nascimento = document.getElementById('data_nascimento').value;
        let termos = document.getElementById('aceito').checked;

        let api = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "name": nome,
                "email": email,
                "user_type_id": 1,
                "password": senha,
                "cpf_cnpj": cpf,
                "terms": termos ? 1 : 0,
                "birthday": data_nascimento
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (api.ok) {
            let response = await api.json();
            console.log("Cadastro realizado com sucesso:", response);
            alert("Cadastro realizado com sucesso!");

            window.location.assign("../view/modelos.html");
        } else {
            let responseError = await api.json();
            console.error("Erro no Cadastro", responseError);

            if (responseError.data.errors.email) {
                alert("Erro no cadastro: O email já está cadastrado.");
            }
            if (responseError.data.errors.cpf_cnpj) {
                alert("Erro no cadastro: O CPF já está cadastrado.");
            }
        }
    } catch (error) {
        console.error("Erro ao tentar se conectar com a API:", error);
        alert("Não foi possível concluir o cadastro no momento. Por favor, verifique sua conexão e tente novamente em alguns instantes.");
    }
}
// Fetch para fazer a requisição
// Primeiro o parametro é a URL - segundo Parametro um objeto  {}
// primero parametro objeto : metodo
// segundo parametro do objeto : body
// terceiro parametro do objeto : Headers
// tem que converter o body em Json - json é um objeto - 
// GET(obter dados) , PUT(ATUALIZAR DADOS existentes), POST (inserir novos dados). SELECT(excluir dados)
//A escolha do metodo vai depender de quem criou a api
// ENDPOINT é a mesmo que LINK.
// document.getElementByid é uma funçao para identificar cada elento da pagina html