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
  console.log(amigos);
}
