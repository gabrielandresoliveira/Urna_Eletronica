function data_fim() {
        const data = new Date();
        return data
}

function urnaeletronica() {

        let contador = 0;
        let opcao;

        let nome1 = "Kid Bengala";
        let nome2 = "Hola e Bola";
        let nome3 = "Gato Louco";
        let nome4 = "Fábio Gago";
        let nome5 = "Nair Bocuda";
        let senha_adm;
        let senha_mesario;

        const data_inicio = new Date();
        console.log("Inicialização da urna às: " + data_inicio.toLocaleString())

        senha_adm = prompt("Digite uma senha de administrador")
        senha_mesario = prompt("Digite uma senha de mesário:")


        confirm_nome = confirm("Está é a pré definição de nome se deseja alterar clique em ok, se não cancele. \n Candidato 1 como : " + nome1)
        if (confirm_nome == true) {
                nome1 = prompt("Digite o nome do candidato")
        }



        confirm_nome = confirm("Está é a pré definição de nome se deseja alterar clique em ok, se não cancele. \n Candidato 2 como : " + nome2)
        if (confirm_nome == true) {
                nome2 = prompt("Digite o nome do candidato")
        }



        confirm_nome = confirm("Está é a pré definição de nome se deseja alterar clique em ok, se não cancele. \n Candidato 3 como : " + nome3)
        if (confirm_nome == true) {
                nome3 = prompt("Digite o nome do candidato")
        }



        confirm_nome = confirm("Está é a pré definição de nome se deseja alterar clique em ok, se não cancele. \n Candidato 4 como : " + nome4)
        if (confirm_nome == true) {
                nome4 = prompt("Digite o nome do candidato")
        }



        confirm_nome = confirm("Está é a pré definição de nome se deseja alterar clique em ok, se não cancele. \n Candidato 5 como : " + nome5)
        if (confirm_nome == true) {
                nome5 = prompt("Digite o nome do candidato")
        }

        inicicao = confirm("Você deseja iniciar a urna ou reeditar os nomes? \nUse 'cancelar' para iniciar e 'ok' para reeditar. \nOs nomes atuais são \n" + "Candidato 1:" + nome1 + "\n" + "Candidato 2:" + nome2 + "\n" + "Candidato 3:" + nome3 + "\n" + "Candidato 4:" + nome4 + "\n" + "Candidato 5:" + nome5)
        if (inicicao == true) {
                nome1 = prompt("Digite o nome do candidato 1");
                nome2 = prompt("Digite o nome do candidato 2");
                nome3 = prompt("Digite o nome do candidato 3");
                nome4 = prompt("Digite o nome do candidato 4");
                nome5 = prompt("Digite o nome do candidato 5");
        }
        else (inicicao == false);

        let candidato1 = 0;
        let candidato2 = 0;
        let candidato3 = 0;
        let candidato4 = 0;
        let candidato5 = 0;
        let vtbranco = 0;
        let vtnulo = 0;
        let decisao_de_saida = false;
        let decisao_de_vtnulo = false;


        do {
                opcao = parseInt(prompt("Digite a opção \n" +
                        "[24]" + nome1 + "\n" +
                        "[25]" + nome2 + "\n" +
                        "[17]" + nome3 + "\n" +
                        "[11]" + nome4 + "\n" +
                        "[69]" + nome5 + "\n" +
                        "[4] Voto branco\n" +
                        "Digite a senha para encerrar \n "));
                console.log("Linha de instrução");
                contador++

                if (opcao == 24) {
                        decisao_De_voto = confirm("Você votou em " + nome1 + ", deseja continuar?")
                        if (decisao_De_voto == true) {
                                console.log("Você votou no", nome1);
                                candidato1++;
                        }
                } else if (opcao == 25) {
                        decisao_De_voto = confirm("Você votou em " + nome2 + ", deseja continuar?")
                        if (decisao_De_voto == true) {
                                console.log("Você votou no", nome2);
                                candidato2++;
                        }
                } else if (opcao == 17) {
                        decisao_De_voto = confirm("Você votou em " + nome3 + ", deseja continuar?")
                        if (decisao_De_voto == true) {
                                console.log("Você votou no", nome3);
                                candidato3++;
                        }
                } else if (opcao == 11) {
                        decisao_De_voto = confirm("Você votou em " + nome3 + ", deseja continuar?")
                        if (decisao_De_voto == true) {
                                console.log("Você votou no", nome3);
                                candidato3++;
                        }
                } else if (opcao == 69) {
                        decisao_De_voto = confirm("Você votou em " + nome5 + ", deseja continuar?")
                        if (decisao_De_voto == true) {
                                console.log("Você votou no", nome5);
                                candidato5++;
                        }
                } else if (opcao == 4) {
                        decisao_De_voto = confirm("Você votou em branco, deseja continuar?")
                        if (decisao_De_voto == true) {
                                console.log("Você votou em branco");
                                vtbranco++;
                        }
                } else if (opcao == senha_adm || opcao == senha_mesario) {
                        decisao_de_saida = confirm("Se realmente deseja encerrar a votação clique em ok se não cancele")

                } else {
                        decisao_de_vtnulo = confirm("Opção de voto inválida, seu voto será anulado, se concordar clique em 'ok' se deseja refazer seu voto aperte em 'cancelar'")
                        if (decisao_de_vtnulo == true) {
                                console.log("Você votou em nulo");
                                vtnulo++;
                        }
                }
        } while (decisao_de_saida != true);


        const totaldevotos = (candidato1 + candidato2 + candidato3 + candidato4 + candidato5 + vtbranco + vtnulo)
        contador = contador - 1;
        percentual_candidato1 = (candidato1 / totaldevotos) * 100;
        percentual_candidato2 = (candidato2 / totaldevotos) * 100;
        percentual_candidato3 = (candidato3 / totaldevotos) * 100;
        percentual_candidato3 = (candidato4 / totaldevotos) * 100;
        percentual_candidato3 = (candidato5 / totaldevotos) * 100;
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

        console.log("Este é o total de votos do ", nome4, candidato4)
        console.log("Este é o percentual ", percentual_candidato3.toFixed(2) + '%');

        console.log("Este é o total de votos do ", nome5, candidato5)
        console.log("Este é o percentual ", percentual_candidato3.toFixed(2) + '%');

        console.log("Este é o total de votos em brancos ", vtbranco)
        console.log("Este é o percentual ", percentual_brancos.toFixed(2) + '%');

        console.log("Este é o total de votos nulos ", vtnulo)
        console.log("Este é o percentual ", percentual_nulos.toFixed(2) + '%')

        porcentagem_vencedor_candidato1 = ((candidato1 + vtbranco) / totaldevotos) * 100
        porcentagem_vencedor_candidato2 = ((candidato2 + vtbranco) / totaldevotos) * 100
        porcentagem_vencedor_candidato3 = ((candidato3 + vtbranco) / totaldevotos) * 100
        porcentagem_vencedor_candidato4 = ((candidato4 + vtbranco) / totaldevotos) * 100
        porcentagem_vencedor_candidato5 = ((candidato5 + vtbranco) / totaldevotos) * 100

        if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4 && candidato1 > candidato5 ) {
                console.log("O vencedor é ", nome1)
                console.log("O total de votos é ", candidato1 + vtbranco)
                console.log("A porcentagem de votos desse candidato é: ", porcentagem_vencedor_candidato1.toFixed(2) + '%')

        } else if (candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > candidato4 && candidato2 > candidato5) {
                console.log("O vencedor é ", nome2)
                console.log("O total de votos é ", candidato2 + vtbranco)
                console.log("A porcentagem de votos desse candidato é: ", porcentagem_vencedor_candidato2.toFixed(2) + '%')

        } else if (candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > candidato4 && candidato3 > candidato5) {
                console.log("O vencedor é ", nome3)
                console.log("O total de votos é ", candidato3 + vtbranco)
                console.log("A porcentagem de votos desse candidato é: ", porcentagem_vencedor_candidato3.toFixed(2) + '%')

        } else if (candidato4 > candidato1 && candidato4 > candidato2 && candidato4 > candidato3 && candidato4 > candidato5) {
                console.log("O vencedor é ", nome4)
                console.log("O total de votos é ", candidato4 + vtbranco)
                console.log("A porcentagem de votos desse candidato é: ", porcentagem_vencedor_candidato4.toFixed(2) + '%')

        } else if (candidato5 > candidato1 && candidato5 > candidato2 && candidato5 > candidato3 && candidato5 > candidato4) {
                console.log("O vencedor é ", nome5)
                console.log("O total de votos é ", candidato5 + vtbranco)
                console.log("A porcentagem de votos desse candidato é: ", porcentagem_vencedor_candidato5.toFixed(2) + '%')

        } else {
                console.log("Empate")
        }
        console.log("A data de inicialização da urna foi às: " + data_inicio.toLocaleString() + "\nA data de finalização da urna foi às: \n" + data_fim().toLocaleString())
}

