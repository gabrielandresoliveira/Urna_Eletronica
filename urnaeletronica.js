function urnaeletronica() {
        let contador = 0;
        let opcao;

        let nome1;
        let nome2;
        let nome3;
        let senha;

        senha = prompt("Digite uma senha de 6 digitos")
        nome1 = prompt("Digite o nome do candidato 1");
        nome2 = prompt("Digite o nome do candidato 2");
        nome3 = prompt("Digite o nome do candidato 3");

        let candidato1 = 0;
        let candidato2 = 0;
        let candidato3 = 0;
        let vtbranco = 0;
        let vtnulo = 0;
        let decisao = "N";

        do {
                opcao = parseInt(prompt("Digite a opção \n " +
                        "[1]" + nome1 + "\n" +
                        "[2]" + nome2 + "\n" +
                        "[3]" + nome3 + "\n" +
                        "[4] Voto branco\n" +
                        "[5] Voto nulo\n" +
                        "Digite a senha para encerrar \n"));
                console.log("Linha de instrução");
                contador++
                if (opcao == 1) {
                        console.log("Você votou no", nome1);
                        candidato1++;
                } else if (opcao == 2) {
                        console.log("Você votou no", nome2);
                        candidato2++;
                } else if (opcao == 3) {
                        console.log("Você votou no", nome3)
                        candidato3++;
                } else if (opcao == 4) {
                        console.log("Você votou em branco")
                        vtbranco++;
                } else if (opcao == 5) {
                        console.log("Você votou nulo")
                        vtnulo++;
                } else if (opcao == senha) {
                        decisao = prompt("Se realmente deseja encerrar a votação digite 'S' para sim e 'N' para não")
                        // if (decisao == "N") {
                        // }
                }
        } while (decisao != "S");

        contador = contador - 1;
        console.log("Contagem:", contador);

        let totaldevotos = (candidato1 + candidato2 + candidato3 + vtbranco + vtnulo)
        console.log("Este é o total de votos", totaldevotos)

        console.log("Este é o total de votos do", nome1, candidato1)
        console.log("Este é o percentual", (candidato1 / totaldevotos) * 100)

        console.log("Este é o total de votos do", nome2, candidato2)
        console.log("Este é o percentual", (candidato2 / totaldevotos) * 100)

        console.log("Este é o total de votos do", nome3, candidato3)
        console.log("Este é o percentual", (candidato3 / totaldevotos) * 100)

        console.log("Este é o total de votos em brancos", vtbranco)
        console.log("Este é o percentual", (vtbranco / totaldevotos) * 100)

        console.log("Este é o total de votos nulos", vtnulo)
        console.log("Este é o percentual", (vtnulo / totaldevotos) * 100)


        if (candidato1 > candidato2 && candidato1 > candidato3) {
                console.log("O vencedor é ", nome1)
                console.log("O total de votos é", candidato1 + vtbranco)
                console.log("A porcentagem de votos desse candidato é:", ((candidato1 + vtbranco) / totaldevotos) * 100)
        } else if (candidato2 > candidato1 && candidato2 > candidato3) {
                console.log("O vencedor é ", nome2)
                console.log("O total de votos é", candidato2 + vtbranco)
                console.log("A porcentagem de votos desse candidato é:", ((candidato2 + vtbranco) / totaldevotos) * 100)
        } else if (candidato3 > candidato1 && candidato3 > candidato2) {
                console.log("O vencedor é ", nome3)
                console.log("O total de votos é", candidato3 + vtbranco)
                console.log("A porcentagem de votos desse candidato é:", ((candidato3 + vtbranco) / totaldevotos) * 100)
        } else {
                console.log("Empate")
        }
}