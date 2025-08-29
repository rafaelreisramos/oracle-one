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

## Shell scripting

## Automatização de tarefas

## Monitoramento e agendamento
