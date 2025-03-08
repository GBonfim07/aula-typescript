type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta recebida: ${resposta}`);
    } else {
        console.log(resposta ? "Operação bem-sucedida!" : "Falha na operação.");
    }
}

processarResposta("Tudo certo!");
processarResposta(true);
processarResposta(false);

type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia de Software",
    empresa: "Tech Corp",
    cargo: "Desenvolvedor Júnior"
};

console.log(estudanteTrabalhador);
