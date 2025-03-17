let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const amigo = input.value;
  input.value = '';

  amigos.push(amigo);
  console.log(amigos);
}
