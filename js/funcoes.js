//Cria uma variável para manipular um arquivo XML
xmlhttp = new XMLHttpRequest();
//le um determinado arquivo XMl no diretório do prejeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//Envia o arquivo aberto para leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmldoc = xmlhttp.responseXMl;
//Cria um array 
x = xmldoc.getElementsBytagName("postagem");