function urnaeletronica() {
        let contador = 0;
        let opcao;

        let nome1;
        let nome2;
        let nome3;
        let senha_adm;
        let senha_mesario;

        senha_adm = prompt("Digite uma senha de administrador")
        senha_mesario = prompt("Digite uma senha de mesário:")
        
        do {
                nome1 = prompt("Digite o nome do candidato 1");
                nome2 = prompt("Digite o nome do candidato 2");
                nome3 = prompt("Digite o nome do candidato 3");

                inicicao = confirm("VocÊ deseja iniciar a urna ou reeditar os nomes? \nUse 'ok' para iniciar e 'cancelar' para reeditar. \nOs nomes atuais são \n" + "Candidato 1:" + nome1 + "\n" + "Candidato 2:" + nome2 + "\n" + "Candidato 3:" + nome3)
                
        }while (inicicao == false)

        let candidato1 = 0;
        let candidato2 = 0;
        let candidato3 = 0;
        let vtbranco = 0;
        let vtnulo = 0;
        let decisao_de_saida = false;
        let decisao_de_vtnulo = false;

        do {
                opcao = parseInt(prompt("Digite a opção \n" +
                        "[1]" + nome1 + "\n" +
                        "[2]" + nome2 + "\n" +
                        "[3]" + nome3 + "\n" +
                        "[4] Voto branco\n" +
                        "[5] Voto nulo\n" +
                        "Digite a senha para encerrar \n "));
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

                } else if (opcao == senha_adm || opcao == senha_mesario) {
                        decisao_de_saida = confirm("Se realmente deseja encerrar a votação clique em ok se não cancele")

                } else {
                        decisao_de_vtnulo = confirm("Opção de voto inválida, seu voto será anulado se concordar clique em 'ok' se deseja refazer seu voto aperte em 'cancelar'")
                        if (decisao_de_vtnulo == true) {
                                console.log("Você votou em nulo");
                                vtnulo++;
                        }
                }
        } while (decisao_de_saida != true);


        const totaldevotos = (candidato1 + candidato2 + candidato3 + vtbranco + vtnulo)
        contador = contador - 1;
        percentual_candidato1 = (candidato1 / totaldevotos) * 100;
        percentual_candidato2 = (candidato2 / totaldevotos) * 100;
        percentual_candidato3 = (candidato3 / totaldevotos) * 100;
        percentual_brancos = (vtbranco / totaldevotos) * 100;
        percentual_nulos = (vtnulo / totaldevotos) * 100

        console.log("Contagem:", contador);

        console.log("Este é o total de votos ", totaldevotos)

        console.log("Este é o total de votos do ", nome1, candidato1)
        console.log("Este é o percentual ", percentual_candidato1.toFixed(2) + '%');

        console.log("Este é o total de votos do ", nome2, candidato2)
        console.log("Este é o percentual ", percentual_candidato2.toFixed(2) + '%');

        console.log("Este é o total de votos do ", nome3, candidato3)
        console.log("Este é o percentual ", percentual_candidato3.toFixed(2) + '%');

        console.log("Este é o total de votos em brancos ", vtbranco)
        console.log("Este é o percentual ", percentual_brancos.toFixed(2) + '%');

        console.log("Este é o total de votos nulos ", vtnulo)
        console.log("Este é o percentual ", percentual_nulos.toFixed(2) + '%')

        porcentagem_vencedor_candidato1 = ((candidato1 + vtbranco) / totaldevotos) * 100
        porcentagem_vencedor_candidato2 = ((candidato2 + vtbranco) / totaldevotos) * 100
        porcentagem_vencedor_candidato3 = ((candidato3 + vtbranco) / totaldevotos) * 100

        if (candidato1 > candidato2 && candidato1 > candidato3) {
                console.log("O vencedor é ", nome1)
                console.log("O total de votos é ", candidato1 + vtbranco)
                console.log("A porcentagem de votos desse candidato é: ", porcentagem_vencedor_candidato1.toFixed(2) + '%')

        } else if (candidato2 > candidato1 && candidato2 > candidato3) {
                console.log("O vencedor é ", nome2)
                console.log("O total de votos é ", candidato2 + vtbranco)
                console.log("A porcentagem de votos desse candidato é: ", porcentagem_vencedor_candidato2.toFixed(2) + '%')

        } else if (candidato3 > candidato1 && candidato3 > candidato2) {
                console.log("O vencedor é ", nome3)
                console.log("O total de votos é ", candidato3 + vtbranco)
                console.log("A porcentagem de votos desse candidato é: ", porcentagem_vencedor_candidato3.toFixed(2) + '%')

        } else {
                console.log("Empate")
        }
}

