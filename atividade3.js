<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3 de JS</title>
</head>
<body>
    <script> 
        let area = prompt('Qual área da programação você quer seguir? Digite Front-End ou Back-End.');

        let tecnologia = " "

        if (area === "Front-End") {
            tecnologia = prompt ("Você quer aprender React ou Vue?");
        }
        else {
            tecnologia = prompt ("Você quer aprender C# ou Java?")
        }

        let especializacao = prompt("Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?")

        let mensagem = " "
        
        if (especializacao === 'Especialização') {
            mensagem = `Você escolheu se especializar em ${tecnologia}. Boa sorte!`
        }
        else {
            mensagem = `Você escolheu se tornar Fullstack, combinando ${area} e ${tecnologia}.`
        }
        alert(mensagem);

        let tecnologias = [];
        let continuar = true;

        while (continuar) {
            let tecnologiaAdicional = prompt("Tem mais alguma tecnologia que você gostaria aprender?");
            if (tecnologiaAdicional) {
                tecnologias.push(tecnologiaAdicional);
                continuar = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
            }
            else {
                continuar = false ; 
            }
        }
        tecnologias.forEach((tech) => {
    let comentario = "";
    switch (tech.toLowerCase()) {
        case 'react':
            comentario = "React é uma biblioteca JavaScript popular para construção de interfaces de usuário.";
            break;
        case 'vue':
            comentario = "Vue é um framework JavaScript progressivo para construção de interfaces e aplicações.";
            break;
        case 'c#':
            comentario = "C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft.";
            break;
        case 'java':
            comentario = "Java é uma linguagem de programação amplamente usada em sistemas corporativos e Android.";
            break;
        default:
            comentario = `A tecnologia ${tech} é interessante e pode ser uma ótima adição ao seu conjunto de habilidades!`;
    }
    alert(comentario);
});
    </script>
</body>
</html>
