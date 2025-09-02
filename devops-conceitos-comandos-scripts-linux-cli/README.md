# DevOps: explorando conceitos, comandos e scripts no Linux CLI

## Ementa

- Entenda a relevância do mundo de DevOps
- Aprenda a trabalhar com o servidor do Linux
- Entenda como instalar um servidor web
- Construa scripts no shell
- Gerencie e automatize tarefas em um fluxo
- Monitore recursos e agende tarefas

## Linux e DevOps

Nesta seção voê irá aprender:

- Que um sistema operacional exerce o papel de gerenciar a utilização dos recursos de um hardware.
- Que há diferentes distribuições do Linux para selecionar a opção mais adequada em um determinado caso de uso.
- Como instalar um sistema operacional em uma máquina virtual para realização de testes e estudos.
- Como utilizar o protocolo SSH para acessar servidores remotamente.

### Mundo DevOps

Analisaremos um caso concreto de um desenvolvimento de software. Suponha que temos uma equipe alocada para desenvolver a solução. Assim que está pronta, testada e aprovada, precisa ser disponibilizada para as pessoas usuárias, ao público-alvo. Quem faz isso? A própria equipe de desenvolvimento?

É nesse momento que entramos na parte de infraestrutura, que cuidará exatamente deste local em que a nossa solução estará disponível às pessoas usuárias.

Existe uma equipe de pessoas dedicada à manutenção e monitoramento dessa parte do sistema, o time de operações, que lida com tarefas relacionadas à implementação e à manutenção de um sistema em produção.

O time dev cuida da construção do software, dos testes, e a equipe de operações cuida da função de colocar esse sistema em produção, disponibilizar e mantê-lo funcionando eficientemente, com bom desempenho, para as pessoas usuárias.

Mas, essas equipes atuam de forma isolada? Não. É nesse momento que entra a abordagem DevOps. O DevOps surge como uma cultura com o objetivo de integrar essas duas equipes e torná-las corresponsáveis pela criação, manutenção, desempenho, segurança e eficiência dessa solução que está sendo disponibilizada as pessoas usuárias.

> É exatamente por isso que usamos o termo DevOps. Agora, esse termo faz sentido, não é mesmo? Ele é a junção da palavra desenvolvimento com a palavra operações, por isso DevOps.

Essa abordagem colaborativa visa integrar todas as pessoas em algumas práticas, como:

> - Melhoria da qualidade do software;
> - Automatização e o monitoramento de todas as operações;
> - Realização de testes, integrações e entregas de modo contínuo.

Dessa forma, DevOps é também um movimento cultural que visa eliminar barreiras e tornar o ambiente de operações e desenvolvimento mais colaborativo e integrado. Já deu para perceber que essa é uma abordagem bem ampla.

Vamos explorar um sistema operacional muito utilizado na infraestrutura computacional em que disponibilizamos essa solução, o Linux.

#### Máquina Virtual

Uma VM é um software que emula o funcionamento de um sistema operacional sobre outro sistema operacional, sobre o nosso dispositivo. Dessa forma, temos, sobre um único hardware, diferentes sistemas operacionais em funcionamento.

Isso é muito útil para podermos testar nossa solução, o seu funcionamento e a sua integração em ambientes diferentes do utilizado no nosso computador.

Para administrar a VM utilizaremos o VirtualBox com um Ubuntu Server LTS.

> LTS significa Long Term Support, ou seja, suporte a longo prazo. Como os servidores vão estar em operação por vários anos.

- [Instruções para download e instalação do VirtualBox](https://www.virtualbox.org/wiki/Downloads)

- [Instruções de download da imagem do Ubuntu server](https://ubuntu.com/download/server#manual-install)

### Quiz: Atuação do time de operações

<details>
<summary>
Você acabou de finalizar a primeira versão de um novo software na organização em que atua como pessoa desenvolvedora. Agora é hora de disponibilizar esta plataforma para os usuários. Seu time é responsável pelo desenvolvimento desta solução, enquanto o de Operações é responsável por colocá-la em produção.

Considerando que a sua organização adota a abordagem DevOps, qual das seguintes atividades é considerada uma responsabilidade essencial do time de Operações?

</summary>

> Desenvolver novas funcionalidades para o software.

> Decidir qual linguagem de programação e arquitetura devem ser adotadas na construção do software.

> ✅ Garantir a disponibilidade, estabilidade e monitoramento de desempenho do software.

> Refazer o teste de QA após a implementação do software.

> Criar interfaces para o software.

</details>

### Configurando um ambiente Linux

Com a imagem do Ubuntu Server baixada no computador, acessamos novamente o VirtualBox e clicamos em "Novo".

No campo Nome preenchemos "Linux", que é a finalidade para a qual utilizaremos essa VM. No campo Imagem ISO, selecionamos a que baixamos no vídeo anterior na versão 24.04.3, localizada na "Downloads".

Nessa mesma janela, é importante marcar a opção "Pular Instalação Desassistida, pois faremos o passo a passo manualmente e entender na prática como funciona.

Depois, clicamos no botão "Próximo" e surge uma janela para selecionarmos as opções de Hardware. A primeira coisa é a memória. É importante não alocar toda a memória do computador nem todos os processadores para a Máquina Virtual.

Portanto, é importante não passar de um terço da barra de memória. Precisaremos de aproximadamente 2048 MB de memória. Então, colocamos 4096, para isso, basta clicar e arrastar o slider. Lembrando que 1024 MB é o mínimo.

Em termos de CPU, alocaremos duas CPUs, porque é o que é necessário para as atividades. Fazemos isso também arrastando o slider. Em seguida, clicamos no botão "Próximo".

Aparece a opção Criar um novo disco rígido virtual. Deixaremos selecionado na opção Default de 25 GB, será mais do que necessário para o nosso caso.

Lembrando que a seleção das especificações do dispositivo, do hardware que teremos que dedicar a essa VM, é um pouco diferente quando estamos configurando na prática um servidor que utilizaremos para hospedar a solução que estamos construindo. Muitas vezes será necessário analisar com maior cuidado esses detalhes e especificações, conforme o sistema que manteremos em execução.

Clicamos em "Próximo" e aparece um resumo de tudo o que selecionamos, após conferir, clicamos em "Finalizar". Feito isso, na barra de menu superior, clicamos no botão "Iniciar".

Abre uma tela do Linux. Selecionamos a primeira opção, "Try or Install Ubuntu Server" para testar ou instalar e pressionamos "Enter". Feito isso, o sistema é carregado na VM.

Ao concluir, aparece agora uma tela mais amigável, para selecionar o idioma que utilizaremos nessa VM. É comum usarmos o idioma inglês, considerando que é a principal língua adotada no mundo tech. Apertamos "Enter".

Em seguida, pressionamos "Enter" para continuar sem atualizar para a opção disponível e recomendada. Depois, precisamos definir a configuração do teclado.

Após, aparece uma página na qual devemos selecionar a opção de base para a nossa instalação. Nesse caso, optamos pela opção "Ubuntu Server (minimized)". Para navegar nas opções, usamos as setas do teclado e pressionamos "Espaço" para selecionar a opção desejada, seguido de "Enter" para confirmar.

Aparece uma nova janela com a opção Ligações de Rede). Como queremos fazer o acesso remoto da VM, usaremos SSH, é importante garantir que estamos vinculando essa VM com uma placa de rede física. No nosso caso está, estamos usando uma placa Gigabit Ethernet da Intel. Só é preciso garantir que há uma placa física vinculada com essa VM nessa parte.

Então, como está alocada, tem aqui um DHCPv4, com o "Concluído" selecionado, pressionamos "Enter". Somos encaminhados para a tela de configuração de proxy, vamos mantê-la como está, então pressionamos "Enter".

Na tela seguinte, está sendo configurado a imagem do Ubuntu, então aguardamos. Apareceu umas mensagens failed, para sair pressionamos "Enter" e agurdamos.

Aparece uma tela com o sistema rodando. Após concluir, aparece a opção de fazermos o login, então preenchemos com login e senha, seguido de "Enter". Feito isso, a VM com Ubuntu Server já está pronta para ser utilizada ao longo da nossa jornada DevOps.

É comum estarmos ao lado de um servidor quando colocamos um software em produção? Não, muitas vezes esse servidor está bem distante, muitas vezes sequer conhecemos a localização geográfica dele.

Mas, como acessamos e configuramos essa máquina? Usando um mecanismo de acesso remoto, o SSH.

#### WSL como alternativa ao uso do VirtualBox

Alguns computadores podem apresentar certa lentidão e até mesmo alguns bugs quando usamos máquinas virtuais (VMs) através de softwares de virtualização como o VirtualBox.

Se este for o caso, temos uma alternativa de virtualização de ambiente Linux no Windows: o uso do Windows Subsystem for Linux (WSL). O WSL é um recurso do Windows 10 e Windows 11 que permite executar um ambiente Linux diretamente no Windows, sem a necessidade de uma VM. Com o WSL, você pode instalar distribuições Linux (como Ubuntu, Debian, e outras) e utilizá-las como se fossem aplicativos nativos do Windows.

Todos os passos e configurações que faremos são compatíveis com o WSL, sendo assim você não terá nenhuma perda de aprendizado ao optar por esse ambiente.

Para começar a usar o WSL, siga os passos abaixo:

Abra o PowerShell como administrador e execute o comando

```bash
wsl --install.
```

Após a instalação inicial, você pode instalar outras distribuições disponíveis na Microsoft Store. Assim, basta escolher a distribuição Ubuntu (a mesma que estamos usando).

Para acessar o WSL, basta procurar pela distribuição instalada no menu iniciar (pesquise, por exemplo, "Ubuntu"). Com alguns poucos passos, você terá um terminal Linux pronto para dar sequência aqui no curso!

Consulte este [artigo](https://www.alura.com.br/artigos/wsl-executar-programas-comandos-linux-no-windows) caso tenha alguma dúvida em relação ao processo de configuração e funcionamento do WSL.

#### Para saber mais: distribuições Linux

É muito comum nos depararmos com menções ao Linux como um sistema operacional de código aberto. Em certa medida, essa afirmação é verídica, o Linux é o núcleo (kernel) de diversas distribuições de sistemas operacionais de código aberto e uso livre.

Um sistema operacional é formado por um conjunto de diferentes programas estruturados em blocos funcionais (utilitários, drivers, ferramentas de gerenciamento, aplicativos, bibliotecas etc.) que operam de modo integrado no gerenciamento de um hardware. Dessa forma, apesar de baseadas no mesmo kernel, podemos ter distribuições bem distintas, concebidas para melhor atendimento de demandas em contextos de uso específicos.

O Android, bem comum em smartphones, é um exemplo de sistema operacional baseado no kernel do Linux, assim como o Ubuntu Server adotado em servidores e o Tizen utilizado em Smart TVs. Se fossemos listar aqui a grande variedade de distribuições disponíveis, destacando suas principais características e aplicações, precisaríamos de muitas páginas (daria para construir um livro digital só sobre isso!).

Vamos listar algumas distros de uso mais comum:

- **Debian**: é conhecida como uma distribuição estável e com alta confiabilidade por ser uma das mais antigas. Destaca-se por apresentar suporte a múltiplas arquiteturas de hardware, sendo adotada em uma grande variedade de dispositivos como servidores, desktops e sistemas embarcados.

- **Ubuntu**: distribuição bastante popular, concebida a partir do Debian, sendo conhecida por oferecer grande facilidade de uso para usuários pouco familiarizados com distribuições do Linux. Possui versões para desktops, servidores e dispositivos IoT.

- **Linux Mint**: desenvolvida para uso em notebooks e desktops, é reconhecida por sua usabilidade.

- **Fedora**: criada para unir inovação e estabilidade, sendo distribuições Linux reconhecidas pela frequente atualização tecnológica. Possui versões para desktops, notebooks, servidores, nuvem, contêineres e dispositivos IoT.

Quer conhecer mais distribuições do Linux e acompanhar o lançamento de suas novas versões? Visite o site [DistroWatch](https://distrowatch.com/)! Lá você também encontrará informações sobre o FreeBSD, outro sistema operacional de código aberto que pode ser adotado em diferentes plataformas de hardware.

### Acesso via SSH

Talvez você esteja se perguntando por que estamos usando o **Linux** e por que ele é tão importante no contexto DevOps.

O Linux é um projeto **open source** (código aberto) de sistema operacional registrado sob a licença GPL, uma licença pública geral. Dessa forma, podemos utilizar esse projeto, criar outras versões para dispositivos específicos, seja um dispositivo IoT, servidor ou smartphone, gratuitamente e nos comprometemos em deixar esse projeto que criamos também de forma aberta.

Uma curiosidade a respeito do Linux é que ele não é um sistema operacional, ele é um **kernel**, um núcleo de sistema operacional. Esse _kernel_ é a base principal que utilizamos para criar diferentes distribuições, por isso que é comum falarmos em distros do Linux, que são **distribuições do Linux**.

Para reforçar a importância desse sistema open source, desse _kernel open source_, podemos notar que uma variedade enorme de sistemas operacionais com os quais lidamos no dia a dia são baseados nesse kernel.

Por exemplo, o Android do smartphone, o Tizen de algumas smart TVs, sistemas embarcados em dispositivos de rede, quase toda a infraestrutura da internet está baseada no kernel do Linux, usando diferentes distribuições construídas e implementadas conforme o dispositivo para o qual seria utilizada.

Com isso, temos a visão de que o sistema operacional não é uma caixa, na verdade, são **módulos** que são **integrados** para oferecer uma série de **funcionalidades** para a pessoa usuária final.

O _kernel_ é essa parte principal, o núcleo, mas conforme a aplicação, com o dispositivo no qual esse sistema operacional será executado, podemos instalar módulos como _drivers_ e outras coisas.

Havíamos comentado sobre esse acesso remoto, não estamos na mesma sala que o servidor, muitas vezes nem no mesmo prédio ou cidade. Por isso é importante dominarmos bem como fazer esse **acesso remoto** para conseguirmos configurar e também **monitorar o desempenho** desse servidor.

Então, para começar, usaremos o **SSH**, um protocolo que nos permite **conectar com uma máquina remotamente**.

#### Protocolo SSH

Para fazer o acesso remoto precisamos ter o endereço IP dessa VM. Por isso falamos na instalação sobre estar vinculado com uma placa física.

Anteriormente, não fizemos algo importante, então retomemos. Precisamos abrir a VM, na barra de menu superior, clicamos em "Dispositivos" e depois em "Rede" e "Configurações de Rede".

Abra uma janela na qual temos o adaptador 1, que está conectado à opção "NAT". Clicamos e mudamos para "Placa em modo Bridge". Feito isso, precisamos garantir que essa é a placa física.

Agora, precisamos digitar um comando para identificar qual é o endereço IP que a VM recebeu. Então digitamos ip address e pressionamos "Enter".

```bash
ip address
```

Feito isso, temos a interface **loopback** que a máquina usa para falar com ela mesma e provavelmente uma outra interface. É nessa segunda interface que receberemos o endereço IP.

Se a máquina não recebeu o endereço IP. Então, na barra de menu superior, clicamos em "Dispositivos > Rede > Conectar Placa de Rede".

Feito isso, passamos novamente o comando ip address seguido de "Enter". Agora recebemos o endereço IP. Se formos na interface encontramos o dado tipo:

```bash
192.168.40.36/24
```

Anote esse número, pois esse é o endereço que usaremos para fazer a conexão com a nossa VM. Para isso, usaremos o prompt de comando. Como estamos usando o Windows, no menu iniciar digitamos "CMD",

Com o prompt aberto, vanis acessar a máquina. Para isso, digitamos ssh, indicando o protocolo que desejamos usar. Na sequência indicaremos o nome de usuário que configuramos na VM. Adicionamos @ e indicamos o endereço da máquina com a qual desejamos conexão, ou seja, o endereço que IP que levantamos anteriormente.

```bash
vboxuser@192.168.40.36
```

Pressionamos "Enter" e é solicitado a senha, digitamos e novamente apertamos "Enter". Feito isso, já é visível na tela:

```bash
ubuntu-server@vboxuser:~$
```

Para conferir se estamos conectados, usaremos um comando que é próprio do ambiente Linux. Passamos

```bash
ls
```

Repare que não apareceu nada. Isso indica que não temos nada nesse diretório que seja visível. O ls é um comando que lista tudo que está nesse diretório. Como não criamos nada na nossa VM, não tem como listar algo. Porém, esse é um comando que daria erro se estivéssemos executando no ambiente Windows.

Agora que já temos a nossa VM, já sabemos acessá-la remotamente, vamos descobrir como usar o ambiente Linux.

#### Quiz: Desempenho de servidores

<details>
<summary>
Imagine que você trabalha em um instituto de pesquisa. Sua equipe precisa configurar um servidor para processamento de grandes conjuntos de dados. Sendo assim, vocês estão avaliando diferentes aspectos das distribuições Linux para que o servidor tenha seu desempenho otimizado e seus recursos sejam utilizados de modo eficaz.

Qual característica das distribuições Linux é mais relevante para atender essa demanda?

</summary>

> Diversidade de aplicativos de escritório.

> Facilidade de personalização do ambiente de trabalho.

> Suporte para interfaces gráficas avançadas.

> ✅ Escalabilidade de recursos.

> Velocidade de inicialização.

</details>

### Hora da prática

<details>
<summary>Liste todos os arquivos e diretórios existentes dentro da home de sua máquina virtual.</summary>

```bash
ls
```

</details>

<details>
<summary>Verifique a existência de arquivos ocultos em sua home.</summary>

```bash
ls -a
```

</details>
<details>
<summary>Utilize um comando para exibir o path (caminho) do diretório em que você se encontra.
</summary>

```bash
pwd
```

</details>
<details>
<summary>Percorra outros diretórios de sua máquina virtual.
</summary>

```bash
cd /caminho/do/diretorio/desejado
```

</details>
<details>
<summary>Utilize um comando para exibir o conteúdo do diretório percorrido de forma mais detalhada.
</summary>

```bash
ls -l
```

</details>

## Explorando o Linux Server

### Navegando no Linux Server

Já conseguimos acessar remotamente o servidor Ubuntu que configuramos na nossa VirtualBox. No entanto, agora temos que lidar com uma tela que pode não ser muito familiar, numa interface sem botões ou links clicáveis para navegação, que é o Prompt de Comando. Temos o seguinte nela:

```bash
vboxuser@ubuntu-server:~$
```

Vamos começar entendendo essas informações. Temos primeiro `vboxuser`, que é o nome do **usuário** que cadastramos quando estávamos configurando o servidor. Já `ubuntu-server` é o nome do **servidor**.

Depois, temos um cifrão, que indica que nós não somos usuários com privilégios, ou seja, não conseguimos executar tarefas como administradores desse sistema.

#### Verificando atualizações

No ambiente Linux, é comum a prática de verificar quais pacotes e atualizações estão disponíveis para o nosso sistema. Ao contrário do ambiente Windows, que fica mostrando uma série de notificações sobre atualizações, inclusive forçando e deixando até o sistema mais lento, no Linux temos mais liberdade e flexibilidade para escolher quais atualizações, pacotes e dependências desejamos instalar.

Para verificar quais atualizações estão disponíveis para o servidor, precisaríamos escalar em termos de **privilégios**.

E para fazer isso usamos o `sudo`, uma ferramenta para executar tarefas como **administrador**, e o pacote `apt`, que é uma ferramenta que faz o gerenciamento de pacotes. Por último, fazemos o `update` para verificar quais pacotes estão disponíveis para atualização.

```bash
sudo apt update
```

Ao executar esse comando, é pedida a nossa senha do `sudo`. Inserimos e executamos novamente. Então, são mostradas as atualizações disponíveis para instalarmos as desejadas:

```bash
Hit:1 http://br.archive.ubuntu.com/ubuntu jammy InRelease
Hit:2 http://br.archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:3 http://br.archive.ubuntu.com/ubuntu jammy-backports InRelea
se
Hit:4 http://br.archive.ubuntu.com/ubuntu jammy-security InReleas
e
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
32 packages can be upgraded. Run 'apt list --upgradable' to see them.
```

#### Ferramentas do ambiente Linux

Como sabemos quais ferramentas e comandos podemos usar nesse ambiente? Podemos rodar um `help` para listar uma série de comandos que podemos usar, inclusive como usá-los no ambiente do Linux.

```bash
echo [-neE] [arg ...]
enable [0a] [-dnps] [-f filen>
[...]
```

Estamos lidando com o que conhecemos como **_Shell_** CLI (Interface de Linha de Comando). Shell é um termo em inglês cuja tradução é concha, e tem esse nome porque o Shell exerce um papel importante de **proteger** o nosso sistema, executando apenas ações pré-definidas.

Ou seja, o _Shell CLI_ só vai executar os comandos que estão nessa lista, previamente definidos e configurados em nosso sistema, para impedir que alguém execute uma tarefa que vá corromper ou danificar o nosso sistema.

#### Listando arquivos de um diretório

Anteriormente, havíamos utilizado o comando `ls` para testar se estávamos mesmo fazendo acesso remoto ao ambiente Linux. O `ls` é um comando que lista tudo o que temos em uma pasta, ou melhor, um diretório.

Os **diretórios** nada mais são do que uma forma de organizar o nosso sistema. É como se tivéssemos uma estante em casa: organizamos todas as nossas informações em pequenas partes para encontrá-las mais facilmente depois.

Em que pasta que estamos no momento? Estamos na pasta "Home" do usuário `vboxuser`. Para verificar isso, rodamos o comando `pwd`, que vai mostrar onde estamos no sistema:

```bash
/home/vboxuser
```

Como não temos uma janela para informar claramente onde estamos, podemos usar esse atalho para verificar a pasta em que estamos.

Se rodarmos o `ls` nessa pasta "home", nada aparece, porque não temos nenhum arquivo nela. Acabamos de criar a nossa VM. Mas se colocarmos um `ls`, um espaço e o `-a`, vão aparecer alguns arquivos.

```bash
ls -a
```

```bash
.   .bash_history .bashrc .profile .sudo_as_admin
..  .bash_logout  .cache  .ssh
```

Esses são **arquivos ocultos** no sistema. Repare que, para encontrá-los, acabamos de usar uma **opção**: o `-a`.

E como verificamos como usar um comando de uma forma diferente? Basta colocarmos o `ls` dois hífens e o `help`:

```bash
ls --help
```

Ao executar esse comando, ele vai listar uma série de informações e opções de **modificação de uso de um mesmo comando, para fazer diferentes tarefas.**

#### Criando novos diretórios

Conforme verificamos, estamos na Home do usuário `vboxuser`. E se quisermos criar um novo diretório, específico para armazenar os logs de um sistema que instalamos no servidor, por exemplo, para organizá-los melhor? Será que podemos ou temos que usar os diretórios padrões pré-definidos nosso sistema?

Claro que sim: podemos criar novos diretórios! Para isso vamos usar o comando `mkdir`, que significa _make directory_, ou seja, **crie um diretório**. E podemos já inserir, por exemplo, o nome desse novo diretório, que pode ser `devops`.

```bash
mkdir devops
```

Ao executar esse comando, nada acontece. Mas, não se preocupe: não é um erro. Quando o comando é executado e encontra um erro, ele é notificado no terminal. Quando o comando é executado normalmente, sem qualquer intercorrência, não aparece nada.

Então se dermos o comando `ls` agora, o diretório `devops` vai estar listado dentro da nossa Home, porque criamos essa pasta dentro de "home".

#### Navegando entre diretórios

E como fazemos para nos dirigir até o diretório `devops`? Não temos mouse ou janelas para interagir com o nosso sistema. Então, como navegar de uma pasta para outra para verificar, por exemplo, um arquivo que eventualmente está lá, verificar os logs de erro do sistema, etc.?

Usamos o comando `cd`, que significa _change directory_ (mude o diretório). Se rodarmos junto de `devops`, mudamos da pasta "home" para a pasta "devops".

```bash
cd devops
```

Observe a mudança: nosso usuário indicava que estávamos na pasta "home" com um til `~` apenas. Agora temos `~/devops`, indicando o caminho de onde nos encontramos no sistema. No diretório "devops".

E para voltar para o Home, o que fazemos? Por padrão, se executamos `cd` sem nada, voltamos para nossa Home.

#### Recuperando comandos

Executamos uma série de comandos. Para retomar um comando anterior, não precisamos ficar reescrevendo toda vez. Basta usar as **setas** do nosso teclado, para cima e para baixo, para recuperar sequencialmente os comandos que utilizamos, e podemos reexecutá-los.

Também podemos usar o comando `history` para listar todos os comandos que utilizamos no nosso ambiente.

Já sabemos navegar pelo ambiente Linux, como criar novos diretórios e até como organizar melhor os arquivos de um sistema. Vamos dar alguns passos adiante nesse ambiente.

### Gerenciando arquivos

À primeira vista, esse ambiente com o qual estamos lidando agora parece ser um pouco **diferente**. Parece ser pouco prático, não tem janelas, bem distinto do ambiente que normalmente utilizamos em nossos computadores pessoais.

No entanto, quando colocamos soluções em produção, utilizando servidores, é esse o tipo de ambiente que encontramos. E há uma certa praticidade nele, porque todas essas ferramentas e comandos que estamos utilizando são muito **práticos** e **lógicos**.

Independentemente do servidor e da localização desse servidor, podemos usar essas mesmas ferramentas e práticas para verificar o funcionamento da solução, para movimentar arquivos, criar diretórios e assim por diante.

Isso tudo é bastante prático quando temos que lidar com essa infraestrutura, que está cada vez mais dispersa com a evolução da internet e dos dispositivos computacionais.

#### Criando arquivos: `touch`

Aprendemos como criar um diretório no sistema, mas como **criamos arquivos**? Podemos usar o comando `touch` junto do nome do arquivo a ser criado, por exemplo, `notas.txt`:

```bash
notas.txt
```

Ao executar, nada aparece. Sabemos que isso é um bom sinal!

Agora vamos executar o comando `ls` para listar os arquivos da nossa pasta atual, "home". Lá está o arquivo:

```bash
devops notas.txt
```

#### Preenchendo arquivos: `cat`

Criamos um arquivo, mas não colocamos nenhuma informação dentro dele.

Se quisermos **adicionar alguma informação**, podemos usar o comando `cat`. Depois dele, adicionamos um `>` (sinal de maior), depois o nome do arquivo a ser preenchido, `notas.txt`.

```bash
cat > notas.txt
```

Com isso, perceba que o nosso cursor começa a piscar na linha de baixo. Isso significa que podemos digitar nesse arquivo.

Vamos escrever, por exemplo, "Explorando DevOps". Podemos até dar um "Enter" para ir para a próxima linha e escrever outro texto, como "Servidor Ubuntu" e "Ambiente Linux - apenas algumas notas sobre o estudo que estamos fazendo.

```bash
Explorando DevOps
Servidor Ubuntu
Ambiente Linux
```

Para sair desse modo de digitação no arquivo, podemos pressionar "Ctrl + D".

Agora, para **verificar o conteúdo** desse arquivo, podemos usar a mesma ferramenta:

```bash
cat notas.txt
```

O retorno é o texto que digitamos acima, ou seja, o conteúdo adicionado anteriormente ao arquivo `notas.txt`.

#### Notificações e textos: `echo`

Também podemos usar o comando `echo`. Por exemplo, se digitamos o comando `echo` com um texto entre aspas como `"Hello world"`, ele exibe no retorno essa exata mensagem.

```bash
echo "Hello world"
```

```bash
Hello world
```

Esse comando é bem útil quando estamos construindo algum programa dentro desse ambiente, o que abordaremos em breve, para exibir uma mensagem de **notificação** para a pessoa usuária.

Também podemos usar o `echo` para mandar uma mensagem para dentro do nosso arquivo. Por exemplo:

```bash
echo hello world > notas.txt
```

Em seguida, se dermos o `cat` nesse arquivo, notaremos que ele sobrescreveu o conteúdo do nosso arquivo, que era nossa lista de notas, com o texto "hello world" que enviamos agora por meio do `echo`. Ou seja, o conteúdo foi substituído.

#### Editor de texto: `nano`

Será que só conseguimos construir arquivos usando o `echo` ou `cat`, só usando essa interface? Não conseguimos acessar um editor de texto por aqui? Não teremos a interface gráfica como a do _Word_, por exemplo, mas temos outra ferramenta, chamada `nano`, que é o **editor de texto padrão** do ambiente Linux.

Se executarmos esse comando, teremos a mensagem _"command not found"_ (comando não encontrado) como retorno. Isso aconteceu porque provavelmente não temos o `nano` instalado. Para instalar, vamos executar:

```bash
sudo apt-get install nano
```

Pronto! Após a execução, vamos executar apenas o `nano` novamente para verificar se já o temos. Se ele tiver sido instalado com sucesso no nosso servidor, nossa tela sera redirecionada para o editor de texto!

Aagora conseguimos editar o texto usando uma ferramenta melhor. Vamos escrever o seguinte texto:

```
Notas de estudo
Explorando um Servidor Ubuntu
Conexao SSH
```

Para sair desse ambiente, podemos pressionar "Ctrl + X". Antes de sair, ele perguntará se queremos **salvar essas modificações**. Vamos pressionar "Y" de yes para confirmar. Ao fazer isso, ele vai pedir o nome desse arquivo, que pode ser `arquivo_2.txt`. Pronto!

Se dermos um `ls` na nossa pasta atual, "home", o novo arquivo estará lá, assim como o primeiro, `notas.txt`:

```bash
arquivo_2.txt devops notas.txt
```

#### Compactando e movendo arquivos: `tar` e `mv`

Mas agora queremos organizar, para evitar que a pasta "home" fique poluída com esses arquivos que estamos criando. Queremos colocar todos esses arquivos de teste no diretório "devops", que criamos no vídeo anterior justamente para isso.

Podemos movê-los usando o **comando _mv_ (move)**. Mas, se usarmos o `mv` para mover os nossos arquivos, teremos que repeti-lo para o `notas.txt` e para o `arquivo_2.txt`, duas vezes seguidas. Não conseguimos mover esses arquivos de uma forma mais ágil?

Podemos **compactá-los**, ou seja, gerar um arquivo que reúne esses dois arquivos, e mover esse único arquivo apenas **uma vez**.

Para isso, vamos usar o comando `tar`. Para especificar que queremos criar um arquivo compactado, usamos o modificador `c`, depois o `z` para gerar um _zip_, e o `f` para nomear esse arquivo depois: `-czf`.

O primeiro parâmetro que vamos passar para esse comando é o **nome** do arquivo, que pode ser `compactado.tar.gz`, com a extensão desse arquivo final.

Vamos passar mais dois parâmetros, que serão os **arquivos que desejamos compactar** dentro do arquivo `compactado.tar.gz`. São eles: `arquivo_2.txt` e `notas.txt`. Nosso comando ficará assim:

```bash
tar -czf compactado.tar.gz arquivo_2.txt notas.txt
```

Após executar, vamos dar mais um `ls` para listar os arquivos do nosso diretório atual. Já aparece o nosso arquivo compactado , ainda mantendo os dois arquivos originais:

```bash
arquivo_2.txt compactado.tar.gz devops notas.txt
```

Agora podemos mover o arquivo compactado. Para isso, após digitar o comando `mv`, primeiro precisamos especificar o arquivo a ser movido: `compactado.tar.gz`. O segundo parâmetro servirá para informar o diretório para o qual esse arquivo será encaminhado. Ou seja, passaremos o **caminho** desse diretório: `/home/vboxuser/devops`.

```bash
mv compactado.tar.gz /home/vboxuser/devops
```

Vamos executar. Não deu erro! Agora, vamos mudar de diretório para o "devops":

```bash
cd devops
```

Vamos dar um `ls` para listar os arquivos desse diretório agora. Observe que o nosso arquivo compactado está lá, conforme podemos observar no retorno:

```bash
compactado.tar.gz
```

Sucesso!

#### Deletando arquivos: `rm`

Vamos retornar para o diretório "home", com o comando `cd`. Se quiséssemos remover os arquivos movidos dessa pasta, poderíamos usar o comando `rm` com o nome do arquivo a ser deletado, por exemplo, `notas.txt`:

```bash
rm notas.txt
```

#### Conclusões

Podemos perceber que os diretórios são organizados numa estrutura hierárquica, como se fosse uma árvore. Esses caminhos nos ajudam a ter uma orientação de para onde podemos ir para acessar um determinado arquivo, além de como podemos também estruturar essas pastas aqui no nosso sistema de modo a organizar melhor os logs de uma aplicação e os dados de um determinado conjunto de usuários.

Isso é o que chamamos de **estrutura hierárquica** de arquivos no ambiente Linux, um conceito bastante útil para nós.

Repare: até agora tivemos que executar comando a comando. Na tarefa de monitoramento, de configuração de um sistema, será que teremos que fazer o mesmo? Ou será que conseguimos gerar um código para fazer uma série de tarefas de modo mais organizado e consistente, executando apenas o código que geramos?

Vamos entender isso melhor a seguir!

### Removendo arquivos e diretórios

No Linux, a remoção de arquivos e diretórios pode ser feita de forma simples utilizando comandos no terminal como `rm` para arquivos e `rmdir` ou `rm -r` para diretórios. No entanto, é importante ter cautela ao utilizar opções como `-f` e `-r`, pois a remoção é definitiva e` não há uma lixeira para recuperação posterior.

Para remover um arquivo, use o comando `rm` (remove):

```bash
rm nome_do_arquivo
```

Para remover um diretório vazio, use o comando `rmdir`:

``bash
rmdir pasta_vazia

````
Remover um diretório com conteúdo Para remover um diretório e todos os seus arquivos e subdiretórios, use o comando `rm` com a opção `-r` (recursivo):

```bash
rm -r nome_do_diretorio
````

### Criando diretórios

### Navegando entre arquivos

### Mãos na massa: copiando e movendo arquivos entre diretórios

### Hora da prática

## Shell scripting

### Construindo scripts no shell

A interface de linha de comando não é mais um mistério para nós. Conquistamos uma boa navegação nesse ambiente, que é melhor do que usar uma interface gráfica. Se cada servidor usa uma versão diferente de um sistema operacional, nós teríamos que nos habituar com a navegabilidade. Usando essa forma de navegação, fica mais simples acessar recursos e alterar configurações desse sistema.

Mencionamos anteriormente que é muito comum quando lidamos com um servidor, termos que realizar algumas configurações, processos de atualização, manutenção e verificação do desempenho. Como fazemos isso? Ficamos no nosso terminal executando comando a comando ou tem um jeito mais simples e ágil de executar esse tipo de tarefa?

#### Automatização de tarefas

Aqui entra um tópico importante chamado automatização de tarefas. Quando falamos em automatização, o que vem à sua mente? Talvez você pense num robô, numa linha de montagem executando uma série de tarefas para montar um item que está sendo manufaturado.

> A nossa principal ideia com automatização é executar de uma forma mais inteligente e ágil uma série de comandos que teríamos que fazer manualmente na interface.

Então, criamos o que chamamos de script para fazer isso. E aí já demos até uma pista do que vamos usar. Vamos usar aqui o que chamamos de _Shell Scripting_ (roteiro de comandos).

E o que é o `script`? O próprio nome sugere que é um roteiro, que vai definir como uma atividade será desempenhada de forma automatizada em nosso servidor. Vamos criá-lo usando uma linguagem própria de script. No nosso caso vai ser o **Bash**.

Vamos começar pensando num caso prático para entender como a construção e execução de um script funcionam. Pense, por exemplo, numa empresa que tem um sistema que armazena alguns dados críticos e precisa, de forma rotineira, criar um backup desses dados. Como você faria isso? Entraria todo dia em um determinado horário no terminal e acessaria o servidor para fazer isso? Não. Podemos criar um script para isso.

#### Criando um script de backup

Vamos começar abrindo o terminal. Lembrando que estamos fazendo o acesso remoto do servidor, usando o protocolo SSH. E a primeira coisa que faremos é abrir o editor de texto com o comando `nano`.

A primeira linha será dedicada a informar quem será o interpretador. Aqui será o próprio Bash. Como formamos isso? Vamos inserir `#! /bin/bash` e pressionar o `Enter`.

Vamos criar uma variável para armazenar o caminho do diretório em que se encontram os arquivos de dados críticos do sistema, que precisam do backup frequente.

Escreveremos `diretorio_backup=`, vamos abrir uma aspas e vamos inserir, por exemplo, pode ser o diretório que criamos, o diretório `devops`, que está dentro do home. Então, vamos colocar o caminho dele, que é o `/home/vboxuser/devops`. A linha completa ficou da seguinte forma:

```bash
diretorio_backup="/home/vboxuser/devops"
```

Já criamos a variável, inserimos dentro dela o nome do diretório, e na sequência vamos criar também uma variável para armazenar o nome desse arquivo, que será atribuído para esse backup.

Vamos colocar o nome do arquivo, `nome_arquivo="backup_` e aqui vamos colocar um cifrão e abrir parênteses `($())`. Quando usamos esse tipo de instrumento na construção de script, estamos informando que aqui dentro vamos executar um comando.

Esse comando será uma interpretação da data, ou seja, vamos querer executar o comando `date`, que vai informar a data, a hora, o minuto e até mesmo o segundo em que esse backup foi realizado.

Essa saída será usada para a nomeação desse arquivo, porque queremos armazenar um backup e queremos saber também em que momento esse backup foi realizado. É importante que saibamos, tem ali uma linha do tempo muito clara de quando o ecossistema começou a apresentar um desempenho ruim, ou quando perdemos um arquivo, ou quando o arquivo surgiu.

Então, dentro dos parênteses escreverermos `date +%Y%m%d_%H%M%S`, as letras depois dos símbolos de porcentagem indicam o `ano (%Y), o mês (%m), o dia (%d), a hora (%H), os minutos (%M), e os segundos (%S)` em que o backup foi realizado. Por fim, vamos colocar a extensão desse arquivo, `.tar.gz`.

```bash
nome_arquivo="backup_$(date +%Y%m%d_%H%M%S).tar.gz"
```

Já criamos o nome do nosso arquivo, e agora precisamos compactar esses arquivos, que estão dentro do diretório `devops`. Como vamos compactar eles? Vamos pegar todos os arquivos que estão lá, compactar, integrar tudo em um único arquivo?

Vamos usar um comando específico, o `tar`, que realiza essa tarefa no ambiente Linux, e vamos usar esse comando com essas três opções, `tar -czf`, que criam compactam um arquivo. Vamos passar alguns parâmetros para esse comando, o primeiro parâmetro será o nome do arquivo. O segundo informa o caminho do diretório, que está armazenado na nossa variável `diretorio_backup`.

Agora usamos o comando `tar`, está faltando ainda um detalhe: informar para a pessoa usuária que o backup foi realizado com sucesso, como fazemos isso? Usando aquele comando que já vimos, que permite fazer um _Hello World_ no terminal, que é o comando `echo`, vamos escrever echo `"Backup concluído em"` e vamos informar também o nome do arquivo que foi criado nesse backup.

```bash
diretorio_backup="/home/lucasrm/devops"
nome_arquivo="backup_$(date +%Y%m%d_%H%M%S).tar.gz
tar -czf "$nome_arquivo" "$diretorio_backup"
echo "Backup concluído em $nome_arquivo"
```

Agora podemos dar um `Ctrl + X`. Vamos pressionar a tecla `Y` para salvar e vamos colocar o nome desse script como `backup.sh`.

Agora que já criamos o nosso script para solucionar essa demanda de fazer um backup dos arquivos, o primeiro passo que temos que fazer é dar um `chmod` para mudar o modo de execução desse arquivo.

Escreveremos `chmod +x backup.sh`, não apareceu nada, mas isso não quer dizer que houve um erro, apenas que o comando foi executado corretamente. Quando ocorre um erro na execução do comando, vai aparecer uma mensagem para nós.

E agora para executar esse `script` basta colocar o termo bash mais o nome do arquivo que acabamos de criar agora, `bash backup.sh`. E aí aparece que o backup foi concluído e mostra o nome do arquivo de backup, observe que segue o padrão que definimos dentro do nosso `script`.

Apareceu também uma mensagem do tar dizendo que ele removeu uma `/` dos nomes dos membros. Isso não é uma mensagem de erro, é só uma indicação.

```bash
tar: removing leading `/` from member names
Backup concluído em backup_20231122_175022.tar.gz
```

Assim, criamos o nosso primeiro `script` que cria um backup de todos os arquivos que estão dentro do diretório `devops`, que está contido dentro do `home`.

E agora, como podemos aprimorar esses nossos scripts, até para que possamos interagir e passar os nossos arquivos para eles enquanto estão executados no nosso terminal de comando, vamos dar mais esse passo?

### Para saber mais: testando diferentes condições

De maneira bastante similar ao que aprendemos em lógica de programação, quando implementamos um script no shell também podemos testar uma condição para direcionar a execução de diferentes blocos de instruções.

Usamos o comando condicional `if` para avaliar uma condição e direcionar o próximo passo na execução do código. O trecho de código a seguir apresenta a sintaxe adotada no Bash para execução do comando.

```bash
if [ condição ]; then
  # Comandos a serem executados se a condição testada for verdadeira.
elif [ outra condição ]; then
  # Comandos a serem executados se a primeira condição testada for falsa e a segunda condição testada for verdadeira.
else
  # Comandos a serem executados se nenhuma das condições testadas for verdadeira.
fi
```

Repare que a sintaxe do comando possibilita o teste de várias condições, permitindo a execução de diferentes blocos de comandos com base nesses testes.

Na criação dos testes adotamos operadores relacionais e lógicos de diferentes maneiras, como vemos nos exemplos a seguir:

#### Igualdade entre duas strings

```bash
if [ "$string1" = "$string2" ]; then
  # Comandos a serem executados se as strings forem iguais.
fi
```

#### Desigualdade entre duas strings

```bash
if [ "$string1" != "$string2" ]; then
  # Comandos a serem executados se as strings forem distintas.
fi
```

#### Igualdade entre dois números

```bash
if [ "$numero1" -eq "$numero2" ]; then
  # Comandos a serem executados se os números forem iguais.
fi
```

#### Desigualdade entre dois números

```bash
if [ "$numero1" -ne "$numero2" ]; then
  # Comandos a serem executados se os números forem distintos.
fi
```

#### Testando se um número é maior que outro

```bash
if [ "$numero1" -gt "$numero2" ]; then
  # Comandos a serem executados se o primeiro número for maior que o segundo.
fi
```

#### Testando se um número é menor que outro

```bash
if [ "$numero1" -lt "$numero2" ]; then
  # Comandos a serem executados se o primeiro número for menor que o segundo.
fi
```

#### Testando se um número é maior ou igual a outro

```bash
if [ "$numero1" -ge "$numero2" ]; then
  # Comandos a serem executados se o primeiro número for maior ou igual ao segundo.
fi
```

#### Verificando a existência de um arquivo ou diretório

```bash
if [  -e "/caminho/do/arquivo" ]; then
  # Comandos a serem executados caso seja constatada a existência do diretório ou arquivo.
fi
```

Note que as expressões condicionais devem estar entre `[ ]` e os espaços em branco são importantes na sintaxe. Os valores de strings devem ser colocados entre aspas para evitar problemas com espaços e caracteres especiais.

### Passagem de parâmetros

Vimos como utilizar o comando `tar` e como ele ajuda na compactação de arquivos. Isso é bastante útil quando precisamos movimentar arquivos entre diretórios e servidores, ou até mesmo mudar de infraestrutura ou plataforma. Dominar essa ferramenta é crucial, especialmente para realizar backups de dados críticos em nosso sistema.

Uma das coisas que mencionamos sobre a criação de _scripts_ é a possibilidade de **automação**. Dessa forma, podemos realizar uma série de tarefas de forma mais autônoma, sem a necessidade de escrever comando a comando no terminal.

No `script` que desenvolvemos como teste, informamos o diretório dos arquivos que queríamos compactar para salvar os dados de backup de um sistema. Contudo, imagine que precisamos criar um `script` mais genérico, que permita informar diferentes diretórios para compactar arquivos, e um diretório específico para salvar.

#### Script para compactar arquivos

Como fazemos isso na prática? A pessoa usuária precisa informar no momento da execução do script quais arquivos deseja compactar e o nome do arquivo final.

A seguir, vamos abrir o `nano`, que é o nosso terminal de texto. A primeira coisa a fazer sempre é informar o interpretador desse script, com o comando `#!/bin/bash`.

Em seguida, a nossa lógica funcionará da seguinte forma: a pessoa usuária precisará informar alguns parâmetros. Pode informar o nome do arquivo final e o diretório em que deseja que esse arquivo seja salvo, além dos arquivos a serem compactados. Precisaremos de, pelo menos, dois parâmetros para o nosso `script`.

Para isso, podemos usar um comando bastante conhecido das linguagens de programação como Python e C, que é o `if`.

Nesse `if`, vamos testar o número de parâmetros passados pela pessoa usuária. Para isso, utilizaremos um cifrão e um jogo da velha (`$#`). Faremos uma contagem, e esse número precisa ser, pelo menos, igual a 2. Usaremos `"-lt 2"` para isso. Depois, fechamos o colchete.

Na sintaxe do `if` no **Bash**, colocamos um ponto e vírgula, seguido de um espaço, e então um then. Se essa condição for verdadeira, o que ele vai fazer? Primeiro, vai mostrar para a pessoa usuária usando um `echo`. Dentro desse echo, vai mostrar: `"O programa, $0 requer nome do arquivo e arquivos a serem compactados"`.

Agora, podemos iniciar uma nova linha. Vamos prestar atenção à indentação e dar uma saída de erro, `exit 1`. Agora, precisamos fechar esse bloco do `if`. Abrimos com o `then`, e para fechar, usamos um if ao contrário, que é o `fi`.

```bash
if [ "$#" -lt 2 ]; then
    echo "O programa, $0 requer nome do arquivo e arquivos a serem compactados"
    exit 1
fi
```

A pessoa usuária passará alguns parâmetros. Como selecionamos esses parâmetros para executar o processo de compactação corretamente? O primeiro parâmetro será o **nome do arquivo**. Criaremos uma variável que receberá o primeiro parâmetro informado pela pessoa usuária, **arquivo_saida**.

Os demais parâmetros serão agrupados em uma variável que será um array, que agrupará todos os arquivos que serão compactados. Essa variável será passada para o nosso comando tar.

Vamos pegar do segundo parâmetro em diante. O primeiro é somente o nome do arquivo ou diretório que a pessoa usuária passará, onde esse arquivo será armazenado. Do segundo parâmetro em diante serão os arquivos a serem compactados.

Para fazer isso, vamos abrir os parênteses do _array_ e aspas, cifrão, e agora vamos abrir chaves. O arroba iria pegar todos os parâmetros, mas não queremos pegar todos. O primeiro será usado como nome do arquivo. Então, todos os parâmetros a partir do segundo parâmetro.

```bash
arquivo_saida="$1"
arquivos=("${@:2}")
```

Agora, falta fazer duas coisas. A primeira delas é compactar, realizar a ação desejada. Então, as opções são `czf`. Se você trocar uma dessas letras, o script pode funcionar de maneira inadequada ou apresentar até um erro que pode demorar um tempo para debugar.

Então, é `czf` e o primeiro parâmetro que passamos é o nome da variável de saída, `arquivo_saida`. E o segundo parâmetro são os arquivos a serem compactados, aquele array que criamos na variável `arquivos`. Então, vamos abrir chaves, arquivos e vamos colocar um arroba entre colchetes. Fechamos as chaves, fechamos as aspas.

```bash
arquivo_saida="$1"
arquivos=("${@:2}")
tar -czf "$arquivo_saida" "${arquivos[@]}"
```

Vamos para a próxima linha, que será o `echo "Compactado com sucesso em $arquivo_saida"`. Assim, ele informa o nome da variável de saída.

É muito importante prestar atenção ao nome das variáveis para que não tenhamos nenhum erro aqui no nosso script. Assim como nos espaços e na indentação.

Vamos dar um `Ctrl + X` agora para salvar o nosso arquivo. Vamos dar um `Yes` e o nome do nosso arquivo pode ser, por exemplo, compactador e pressionar a tecla Enter.

Se dermos um `ls`, o que vai ocorrer? Temos lá o compactador dentro do nosso diretório home. Mas observe que não salvamos com a extensão .sh. Podemos retornar ao nano `compactador` e agora podemos dar um Ctrl + X.

Note que dentro do diretório home, o compactador, o script que acabamos de criar, já está lá. O que podemos fazer é mudar a permissão de execução dele com o chmod. Vamos escrever `chmod +x compactador`.

Mudamos agora a permissão e podemos executá-lo diretamente no Bash. Então, vamos colocar o `./compactador`. Observe que agora estamos executando só com um ponto e uma barra. Já que mudamos a permissão de execução desse arquivo. E não vamos passar parâmetro nenhum. Vamos dar um Enter para ver o que aparece para nós.

Aparece o seguinte: `"O programa /compactador requer o nome do arquivo e os arquivos a serem compactados"`. Então, ele exibe uma mensagem de erro para a pessoa usuária. Isso já facilita bastante o uso desse script.

Agora, vamos testá-lo passando alguns parâmetros de fato. Vamos escrever `./compactador`. O primeiro parâmetro será sempre o nome do arquivo de saída.

Vamos colocar, por exemplo, `saida.tar.gz`, que é a extensão final dele. E vamos informar dois arquivos que serão usados para compactar. Aqui, claro, precisaremos informar o caminho que esses arquivos se encontram no nosso sistema. Por isso, vou inserir `/home/vboxuser/texto2.txt` `/home/vboxuser/texto3.txt`, usando esses dois arquivos em formato txt que estão dentro do diretório home mesmo, `texto2.txt` e `texto3.txt`.

```bash
./compactador saida.tar.gz /home/vboxuser/texto2.txt /home/vboxuser/texto3.txt
```

Observe que ele removeu algumas barras dos endereços que colocamos. E deu `Compactado com sucesso em saida.tar.gz`. Vamos dar um `ls` no nosso diretório. Observe que está lá, `saida.tar.gz`.

Para verificar o que tem dentro dele, se de fato foi compactado corretamente, podemos usar o `tar` em uma função de descompactar: `tar -tf`. Vamos indicar `saida.tar.gz` e verificar. Estão lá os dois arquivos que passamos os parâmetros corretamente.

Então, nosso script funcionou. Conseguimos fazer a passagem de parâmetros. Agora, vamos explorar um pouco mais o uso dos scripts na automatização de tarefas em nosso sistema.

### Para saber mais: passando parâmetros em scripts

A passagem de parâmetros em scripts em Bash no Ubuntu é uma forma de fornecer informações ou argumentos para o script durante sua execução. Isso torna os scripts mais **flexíveis e reutilizáveis**, pois seu comportamento é ajustado de acordo com os argumentos fornecidos.

Essa passagem de parâmetros é realizada por meio de variáveis especiais, conhecidas como variáveis de posição. Elas são numeradas de 1 a 9, com `$1` representando o primeiro argumento, $2 representando o segundo, e assim por diante. Além disso, todos os argumentos posicionais podem ser acessados através do `$@`.

A seguir, temos um exemplo de script que verifica se foram fornecidos exatamente dois argumentos na linha de comando. Se não, ele exibe uma mensagem de erro. Caso contrário, ele atribui os valores dos argumentos às variáveis `arg1` e `arg2` e os imprime.

```bash
#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Erro! Nao foram fornecidos dois argumentos"
  exit 1
fi

arg1=$1
arg2=$2

echo "O primeiro argumento é: $arg1"
echo "O segundo argumento é: $arg2"
```

### Quiz: Verificando a existência de arquivos

<details open>
<summary>
Você trabalha na empresa Hermex Log, uma empresa de logística conhecida por seus serviços de entrega. Seu time está trabalhando em um script para otimizar o processo de compactação de arquivos e fazer as entregas de maneira mais eficiente.

Esse script permite ao usuário selecionar um conjunto de arquivos a serem compactados, fornecer o nome do arquivo compactado e o direcionamento para a pasta onde este será armazenado. O script já está quase pronto, mas você percebe que ainda falta uma última peça no código.

Utilizando a passagem de parâmetros, como você pode checar se os arquivos escolhidos para compactação existem no diretório?

</summary>

> ```bash
> arquivos=("$@")
> for arquivo in "${arquivos[@]}"; do
>   if [ ! -e "$arquivo" ]; then
>     echo "Arquivo não encontrado: $arquivo"
>     exit 1
>   fi
> done
> ```

```bash
arquivos=("$@")
for arquivo in "${arquivos[@]}"; do
  if [ -e "$arquivo" ]; then
    echo "Arquivo encontrado: $arquivo"
  else
    exit 1
  fi
done
```

```bash
arquivos=("$@")
while [ "$#" -gt 0 ]; do
  if [ ! -e "$1" ]; then
    echo "Arquivo não encontrado: $1"
    exit 1
  fi
  shift
done
```

```bash
arquivos=("$@")
for arquivo in "${arquivos[@]}"; do
  if [ -e "$arquivo" ]; then
    continue
  else
    echo "Arquivo não encontrado: $arquivo"
    exit 1
  fi
done
```

```bash
arquivos=("$@")
for arquivo in "${@}"; do
  if [ ! -e "$arquivo" ]; then
    echo "Arquivo não encontrado: $arquivo"
    exit 1
  fi
done
```

</details>

### Mãos na massa: verificando um diretório

É bem comum pedirmos ao usuário que nos indique o caminho (path) do diretório no qual um arquivo ou uma saída de um script deve ser armazenada, ou mesmo para que o script consiga acessar os dados que serão processados. Desse modo, uma etapa importante nesses scripts consiste na verificação da validade do caminho informado pelo usuário.

Como é que você faria essa verificação de forma simples usando apenas o comando `if`?

Vamos praticar?

<details open>
  <summary>Escreva um script que teste a validade de um caminho de diretório informado por um usuário!</summary>

```bash
#!/bin/bash

# Solicitamos ao usuário o caminho do diretório
read -p "Digite o caminho do diretório: " caminho

# Verificamos se o caminho do diretório é válido
if [ -d "$caminho" ]; then
    echo "O caminho é um diretório válido."
else
    echo "O caminho não é um diretório válido ou ele não existe."
fi
```

</details>

### Hora da prática

A compreensão de práticas de scripting no shell possibilita que sejamos capazes de criar fluxos de trabalho otimizados, implementando práticas de integração e entrega contínuas. Além disso, essa abordagem facilita a configuração e gerenciamento da infraestrutura como código. Dessa forma, o aprofundamento dos estudos em Shell Scripting é um passo crucial no desenvolvimento como pessoa profissional em DevOps.

Sendo assim, criamos uma lista de atividades (não obrigatórias) para você praticar ainda mais todo o conteúdo que foi abordado ao longo dessa aula. Bora praticar a construção de scripts!?

Atividades

<details>
  <summary>Elabore um script simples que exiba uma mensagem de boas-vindas quando executado.</summary>

```bash
#!/bin/bash

echo "Bem-vindo ao script."
```

</details>

<details>
  <summary>Construa um script que seja capaz de criar uma cópia de segurança de um diretório específico.</summary>

```bash
#!/bin/bash
tar -czf backup.tar.gz /home/vboxuser/devops
```

</details>

<details>
  <summary>Crie um script que solicite ao usuário o nome de um diretório e, em seguida, o crie.</summary>

```bash
#!/bin/bash
read -p "Nome do diretorio a ser criado: " diretorio
mkdir $diretorio
```

</details>

<details>
  <summary>Escreva um script que aceite um nome de arquivo como argumento e verifique se o arquivo existe.</summary>

```bash
#!/bin/bash
echo "Digite o nome do arquivo:"
read nome_arquivo
if [-e $nome_arquivo]; then
  echo "O arquivo existe"
else
  echo "O arquivo não existe"
fi
```

</details>

<details>
  <summary>Desenvolva um script que utilize um loop para contar de 1 a 5.</summary>

```bash
#!/bin/bash
for i in {1..5}
do
  echo i
done

```

</details>

## Automatização de tarefas

## Monitoramento e agendamento
