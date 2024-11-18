<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercício 4 de JS</title>
  </head>
  <body>
    <script>
      let numerocorreto = math.floor(math.random() * 11);
      let tentativas = 3;

      for (let i = 0; i < tentativas; i++) {
        let chute = parseInt(prompt("Tente advinhar o número entre 0 a 10:"));

        if (chute === numerocorreto) {
          alert("Parabéns! Você acertou!");
          break;
        } else {
          alert("Errou! Tente novamente.");
        }
        
        if (i === tentativas -1) {
          alert("Suas tentativas acabaram! O número era " + numeroCorreto);
        }
      }
    </script>
  </body>
</html>
