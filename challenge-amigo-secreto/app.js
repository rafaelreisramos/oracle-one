function formatarNome(nome) {
  return nome
    .split(' ')
    .map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1))
    .join(' ');
}

const buttonSortearAmigo = Array.from(document.querySelectorAll('button')).find(
  (button) => button.innerText === 'Sortear amigo'
);
buttonSortearAmigo.setAttribute('disabled', '');

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  if (amigos.length > 0) {
    buttonSortearAmigo.removeAttribute('disabled');
  } else {
    buttonSortearAmigo.setAttribute('disabled', '');
  }

  for (let amigo of amigos) {
    const li = document.createElement('li');
    const nomeCompleto = formatarNome(amigo);
    li.textContent = nomeCompleto;
    listaAmigos.appendChild(li);
  }
}

let amigos = [];
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
