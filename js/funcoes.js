//Cria uma variável para manipular um arquivo XML
xmlhttp = new XMLHttpRequest();
//le um determinado arquivo XMl no diretório do prejeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//Envia o arquivo aberto para leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;
//Cria um array a partir da quantidade de postagems
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(i=0; i<=2; i++){
        document.write ( 
            "<tr>"+ 
                "<td>" + x[i].getAttribute("codigo") + "</td>" +
                "<td> <img src='imgs/" + x[i].getElementsByTagName("imagen")[0].chlIdModes[0].modeValue + "' width = '150' ></td>"+
                "<td>" + x[i].getElementsByTagName("titulo")[0].chlIdModes[0].modeValue + "</td>"+
                "<td>" + x[i].getAttribute("codigo") + "</td>"+
            "<tr>"
        );
    }
}