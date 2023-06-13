# Artigo-ArquiteturaLimpa-beneficios

# Como arquitetura limpa pode nos ajudar com futuras atualizações e mudanças no projeto

Você já se perguntou por que muitas empresas têm adotado os conceitos de arquitetura limpa, transformando o modelo de criação e modificação de seus projetos? Descubra como essa metodologia nos ajuda a não cair em armadilhas comuns e impulsionar o sucesso de um grande projeto.

A Arquitetura Limpa é um conceito que separa todas as partes em camadas, em que cada camada possui vários outros componentes. Isso proporciona facilidade na manutenção e no desenvolvimento de software, onde as principais camadas são:

- Dependências e Frameworks: são todas as partes externas da sua aplicação que podem usar uma biblioteca que valida se o e-mail do usuário é válido ou até mesmo um framework que cria um servidor.
- Controllers e Presenters: são as partes que definem toda a comunicação da sua aplicação com o cliente.
- Use Case: é toda a parte de regras de negócios e ações que são definidas para chegar a um certo resultado, como fazer um login, onde o usuário tem que estar com a senha correta, não é?
- Entidades: são basicamente todos os objetos ou funções que são independente dentro do problema principal, resumindo são tudo aquilo que nao depende de estrutura, tecnologia e pode ser usada em varias situações.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71cc983b-699a-4759-b1ee-306063abfcf6/Untitled.png)

Um dos maiores problemas de projetos médios e grandes é o acoplamento total com suas dependências, o que o torna muito dependente de seus frameworks, caso não seja abordada a arquitetura limpa.

A arquitetura limpa traz grandes benefícios. Por exemplo, digamos que você esteja usando um query builder para consultar o banco de dados. Com a arquitetura limpa, você tem a liberdade de trocar o query builder para outro ou até mesmo para um ORM, como se estivesse trocando uma peça de Lego.

Agora que te mostrei por que arquitetura é muito importante na criação de um projeto médio e grande, vamos ver um pouco a fundo sobre os conceitos com exemplos práticos, para isso vamos começar com a camada do meio que é o controlador.

Vamos começar criando uma classe de cadastro de usuário, ela vai receber uma parâmetro que vai ser HttpResponse com tipo any e opcional, e a classe vai retornar um HttpResponse com statusCode, que é o status da resposta e o body da resposta com o tipo any também.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2ac6b6f-528d-4ce6-b2ca-0af8ae1bf523/Untitled.png)

Depois que nos Criamos as interfaces de Resposta e Requisição, nos vamos criar agora a interface de todos os controladores, a onde todos os controladores vão ser implementados com essa interface,

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1dd3073-f4a3-4cec-8738-80237466f034/Untitled.png)

Nosso próximo passo nos vamos criar a interface de httpServer que vai ter basicamente dois métodos, on para cadastrar uma rota e o listen para rodar a porta do servidor, no metodo On vamos ter os seguintes parametros: Method: String, Url: String, Callback: Function.
 

Método On:

- Method: Recebe o método usado do end-point, Exemplo: Post, Get, Put e etc.
- Url: End-point da rota, Exemplo: “./users/”
- CallBack: Funcao que sera executando que poderá ser um controlador ou ate mesmo middlewere.

Método Listen: 

- Porta: porta que o servidor será iniciado.

Obs: os dois métodos vão retornar void(vazio).