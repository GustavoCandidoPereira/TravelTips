function adicionarDestino() {
    let nomeDestino = document.getElementById("nome-destino").value;
    let descricaoDestino = document.getElementById("descricao-destino").value;
    let imagemDestino = document.getElementById("imagem-destino").value;

    let listaDestinos = document.getElementById("lista-destinos");
    let novoDestino = document.createElement("li");
    let novaImagem = document.createElement("img");
    let novoTitulo = document.createElement("h3");
    let novaDescricao = document.createElement("p");

    novaImagem.src = imagemDestino;
    novaImagem.alt = nomeDestino;
    novoTitulo.textContent = nomeDestino;
    novaDescricao.textContent = descricaoDestino;

    novoDestino.appendChild(novaImagem);
    novoDestino.appendChild(novoTitulo);
    novoDestino.appendChild(novaDescricao);

    listaDestinos.appendChild(novoDestino);

    document.getElementById("nome-destino").value = "";
    document.getElementById("descricao-destino").value = "";
    document.getElementById("imagem-destino").value = "";
}

document.getElementById("adicionar-destino").addEventListener("click", adicionarDestino);