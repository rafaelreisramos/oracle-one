let amigos = [];

function formatarNome(nome) {
  return nome
    .split(' ')
    .map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1))
    .join(' ');
}

function adicionaItemNaLista(lista, item) {
  const li = document.createElement('li');
  li.textContent = item;
  lista.appendChild(li);
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  for (let amigo of amigos) {
    adicionaItemNaLista(listaAmigos, formatarNome(amigo));
  }
}

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const amigo = input.value.trim().toLowerCase();
  input.value = '';

  if (!amigo) {
    alert('Por favor, insira um nome.');
    return;
  }

  if (amigos.includes(amigo)) {
    alert('Um amigo com este nome já foi inserido.');
    return;
  }

  amigos.push(amigo);
  atualizarListaAmigos();
}

function mostrarAmigoSorteado(amigo) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  adicionaItemNaLista(resultado, `O amigo secreto sorteado é: ${amigo}`);

  amigos = [];
  atualizarListaAmigos();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Você não inseriu nenhum amigo na lista.');
    return;
  }

  const indiceAmigoSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = formatarNome(amigos[indiceAmigoSorteado]);
  mostrarAmigoSorteado(amigoSorteado);
}
