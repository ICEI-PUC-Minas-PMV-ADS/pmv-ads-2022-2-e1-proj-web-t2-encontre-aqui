# Registro de Testes de Software

## Registro de Teste: Cadastro de Pessoa Física

### Caso de Sucesso

<p> O sistema cadastrou o cliente na base de dados(localStorage) </p>

<p align="center"> 
  <img src="img/testes/RegistroTesteSucesso.PNG" width="800">
</p>

##### _Figura 1- Registro de Teste para Pessoa Física_

<p> O sistema direcionou o cliente para a página de Perfil de Usuário </p>

<p align="center"> 
  <img src="img/testes/RegistroTesteSucesso1.PNG" width="600">
</p>

##### _Figura 2- Cliente Direcionado para página de Perfil_

<p> O sistema não permitiu o cadastro do cliente na base de dados(localStorage), pois os dados informados pelo cliente, não atendem os requisitos para o cadastro.  </p>

<p align="center"> 
  <img src="img/testes/CadastroSenhasNc.PNG" width="600">
</p>

##### _Figura 3- Registro de Teste, Dados Invalidos Para Cadastro_

## Registro de Teste: Criar Página de divulgação de produto ou serviço pessoa Jurídica

### Caso de Sucesso

<p> O sistema cadastrou o produto/serviço na base de dados(localStorage) </p>

<p align="center"> 
  <img src="img/testes/RegistroTesteSucesso3.JPG" width="800">
</p>

##### _Figura 4- Registro de Teste, dados de armazenamento de produto/serviço cadastrado_

<p> O sistema direcionou a pessoa jurídica para a página de publicar página </p>

<p align="center"> 
  <img src="img/testes/RegistroTeste_Sucesso2.JPG" width="600">
</p>

##### _Figura 5- Registro de Teste, sistema redirecionou a pessoa jurídica para a página de publicar página_

## Registro de Teste: Login de Cliente(Pessoa Física e Jurídica)

### Caso de Sucesso

<p> O sistema realizou o login do cliente com a base de dados salvos (localStorage)  </p>

<p align="center"> 
  <img src="img/testes/RegistroTesteLogin.PNG" width="800">
</p>

##### _Figura 6- Registro de Teste, dados de armazenamento realizado no login._

<p> O Sistema informou mensagens de indicação de e-mail e senha inválidos. </p>

<p align="center"> 
  <img src="img/testes/RegistroLoginPassword.PNG" width="800">
</p>

##### _Figura 7- Registro de Teste, mensagem de indicação de senha inválida._

<p>  Registro de Teste, mensagem de indicação de e-mail inválido. </p>

<p align="center"> 
  <img src="img/testes/RegistroLoginEmailInvalido.PNG" width="800">
</p>

##### _Figura 8- Registro de Teste, mensagem de indicação de e-mail inválido._

<p> Registro de Teste, mensagem de indicação de e-mail inválido. </p>

<p align="center"> 
  <img src="img/testes/RegistroLoginEmailSenhaVaz.PNG" width="800">
</p>

##### _Figura 9- Registro de Teste, mensagem de indicação de e-mail e senha inválidos._

## Registro de Teste: Adicionar e Remover aos favoritos

### Caso de Sucesso

<p> O sistema realizou a adição e remoção de empresas, serviços e produtos da lista de favoritos com a base de dados salvos (localStorage)  </p>

<p align="center"> 
  <img src="img/testes/RegistroFavoritosLocalstorage.PNG" width="800">
</p>

##### _Figura 10- Registro de Teste, adição de empresas, produtos e serviços a lista de favoritos._

<p> Sistema mostra a adição e remoção de empresas, produtos e serviços a lista de favoritos na página de pefil do cliente. </p>

<p align="center"> 
  <img src="img/testes/RegistroFavoritoUserProf.PNG" width="800">
</p>

##### _Figura 11- Registro de Teste, adição de empresas, produtos e serviços a lista de favoritos._

<p align="center"> 
  <img src="img/testes/RegistroRemocaoFavoritos.PNG" width="800">
</p>

##### _Figura 12- Registro de Teste, remoção de empresas, produtos e serviços a lista de favoritos_

## Registro de Teste: Editar Página de Divulgação de Produto ou Serviço.

### Caso de Sucesso

<p> O sistema carregou as informações já cadastradas anteriormente pelo cliente, na página de edição.  </p>

<p align="center"> 
  <img src="img/testes/RegistroEdPagCarrega.PNG" width="800">
</p>

##### _Figura 13- Registro de Teste, Página de Edição._

<p> O sistema fez alterações na base de dados(localStorage), de acordo com os dados informados na página de edição, pelo cliente </p>

<p align="center"> 
  <img src="img/testes/RegistroSemEdLocal.PNG" width="800">
</p>

##### _Figura 14- Registro de Teste, localStorage, Página sem Edição._

<p align="center"> 
  <img src="img/testes/RegistroEditarPagSemEd.PNG" width="800">
</p>

##### _Figura 15- Registro de Teste,Página sem Edição._

<p align="center"> 
  <img src="img/testes/RegistroEdLocal.PNG" width="800">
</p>

##### _Figura 16- Registro de Teste, localStorage, Página Editada._

<p align="center"> 
  <img src="img/testes/RegistroEdPagCarrega.PNG" width="800">
</p>

##### _Figura 17- Registro de Teste,Página Editada._

## Registro de Teste: Remover Página de Divulgação de Produto ou Serviço.

### Caso de Sucesso

<p>O sistema removeu corretamente a página criada pelo cliente, para divulgação de produtos ou serviços.  </p>

<p>locaStorage antes da remoção</p>

<p align="center"> 
  <img src="img/testes/RegistroEdLocal.PNG" width="800">
</p>

##### _Figura 18- Registro de Teste, Remover Página(localStorage)._

<p>Página de perfil antes da remoção</p>

<p align="center"> 
  <img src="img/testes/RegistroEditarPagSemEd.PNG" width="800">
</p>

##### _Figura 19- Registro de Teste, Remover Página._

<p>locaStorage depois da remoção</p>

<p align="center"> 
  <img src="img/testes/RegistroLocalRem.PNG" width="800">
</p>

##### _Figura 20- Registro de Teste, Remover Página(localStorage)._

<p>Página de perfil depois da remoção</p>

<p align="center"> 
  <img src="img/testes/RegistroDepoisRem.PNG" width="800">
</p>

##### _Figura 21- Registro de Teste, Remover Página._

## Registro de Teste: Pesquisa na Plataforma.

### Caso de Sucesso

<p>O sistema encontrou produtos ou serviços, de acordo com os termos informados nos campos de entrada para pesquisa.</p>

<p align="center"> 
  <img src="img/testes/RegistroTestePesquisaRes.PNG" width="800">
</p>

##### _Figura 22- Registro de Teste, Pesquisa._

<p>O cliente clicou em pesquisar, não informando os termos para pesquisa.</p>
<p>A plataforma expõe uma empresa,um produto ou serviço cadastrado de cada categoria cadastrada no sistema.</p>
<p align="center"> 
  <img src="img/testes/RegistroTestePesquisa.PNG" width="800">
</p>

##### _Figura 23- Registro de Teste, Pesquisa com campos vazios._

<p>O cliente pesquisou por empresas, produtos ou serviços, que ainda não estão cadastrados no sistema</p>
<p align="center"> 
  <img src="img/testes/RegistroTestePesquisaNen.PNG" width="800">
</p>

##### _Figura 24- Registro de Teste, Nenhum Resultado Encontrado._

## Registro de Teste: Cliente Altera a Senha.

### Caso de Sucesso

<p>O cliente clicou em alterar senha, foi direcionado para a página recoverpassword.html, preencheu uma os campos solicitados corretamente e clicou no botão Alterar Senha</p>

<p>Registro do localStorage antes da alteração de senha</p>
<p align="center"> 
  <img src="img/testes/RegistroSenhaAlte.PNG" width="800">
</p>

##### _Figura 25- Registro do localStorage._

<p>Registro do localStorage após da alteração de senha</p>
<p align="center"> 
  <img src="img/testes/RegistroSenhaNao.PNG" width="800">
</p>

##### _Figura 26- Registro do localStorage após alteração de senha._

### Caso de Falha

<p>O usuário não está cadastrado no sistema</p>
<p align="center"> 
  <img src="img/testes/Usuarioinvalido.PNG" width="800">
</p>

##### _Figura 27- Cliente não está cadastrado._
