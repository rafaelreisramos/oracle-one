let amigos = [];

function formatarNome(nome) {
  return nome
    .split(' ')
    .map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1))
    .join(' ');
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  for (let amigo of amigos) {
    const li = document.createElement('li');
    const nomeCompleto = formatarNome(amigo);
    li.textContent = nomeCompleto;
    listaAmigos.appendChild(li);
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

  const li = document.createElement('li');
  li.textContent = `O amigo secreto sorteado é: ${amigo}`;
  resultado.appendChild(li);

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
