function urnaeletronica() {
    let contador = 0 ;
    let opcao;

    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let vtbranco = 0;
    let vtnulo = 0;
    do{
        opcao = parseInt(prompt("Digite a opção"));
        console.log("Linha de intrução");
        contador = contador + 1;
    } while (opcao !== 0); 
    contador = contador - 1;
    console.log("Contagem:", contador);
    if (opcao == 1) {
            console.log("Você votou no candidato 1");
            candidato1++;
    }else if (opcao == 2) {
            console.log("Você votou no candidato 2");
            candidato2++;
    }else if (opcao == 3) {
            console.log("Você votou no candidato 3")
            candidato3++;
    }else if (opcao == 4) {
            console.log("Você votou em branco")
            vtbranco++;
    }else if (opcao == 5) {
            console.log("Você votou nulo")
            vtnulo++;
    }
    
}


urnaeletronica();