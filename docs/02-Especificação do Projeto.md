# 2 Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

<p>Visando melhor entendimento da proposta do projeto entrevistamos duas pessoas que sempre precisam de um serviço (mão de obra) ou necessitam de comprar algo (físico) no estabelecimento da sua cidade.</p>

<hr/>

## 2.1. Personas

<p>
Acompanhe conosco o estudo realizado mediante nosso futuro usuário abaixo:
</p>

<p align="center">
<img src="https://github.com/pauloosilas/pmv-ads-2022-2-e1-proj-web-t2-encontre-aqui/blob/main/docs/img/Personas/Marcos-Nunes.PNG?raw=true" >
</p>
<br/>
<p align="center">
<img src="https://github.com/pauloosilas/pmv-ads-2022-2-e1-proj-web-t2-encontre-aqui/blob/main/docs/img/Personas/Regiane-Rodrigues.PNG?raw=true">
</p>

## 2.2. Histórias de usuários

<p>A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.</p>

<p>
Com base na análise das personas forma identificadas as seguintes histórias de usuários:
</p>

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                            | PARA ... `MOTIVO/VALOR`                                     |
| -------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Marcos Nunes         | Quero poder buscar por profissionais de perto de onde será realizada a obra   | Para poder calcular o custo com transporte                  |
| Marcos Nunes         | Desejo obter os dados de contato em evidência                                 | Para entrar em contato caso goste do perfil do profissional |
| Marcos Nunes         | Desejo buscar por especialidade                                               | Para encontrar tudo em um mesmo lugar                       |
| Regiane Rodrigues    | Desejo ter opção de comentar e ler opiniões de outras pessoas sobre o produto | Para ter mais confiança em adquirir o produto               |
| Regiane Rodrigues    | Desejo que as empresas cadastradas forneçam os detalhes de suas mercadorias   | Para comparar com outros fornecedores                       |
| Regiane Rodrigues    | Desejo que o site tenha um layout adaptável                                   | Para poder acessar de vários dispositivos                   |

<p>
Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.
</p>

## 3 LISTA DE REQUISITOS

<p>
Para que o usuário possa interagir juntamente com o site é necessária uma lista de requisitos para que o mesmo tenha uma experiência e almeje voltar interagir e até mesmo compartilhar com demais usuários sua experiência. Os requisitos são fundamentais para que o site funcione conforme o desejo do cliente, trazendo consigo comodidade e satisfação em cada interação.
</p>

### 3.1 Requisitos funcionais

<p>
A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.
</p>

| ID     | Descrição do Requisito                                                                                                                                                     | Prioridade |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | O sistema, em sua página principal na web, deverá apresentar as empresas ou prestadores de serviços mais próximos à localização do usuário que acessou a página.           | ALTA       |
| RF-002 | O sistema deve permitir ao usuário pesquisar por empresas, produtos ou serviços cadastrados no sistema.                                                                    | ALTA       |
| RF-003 | O sistema deverá filtrar as buscas por cidade                                                                                                                              | MÉDIA      |
| RF-004 | O sistema deve permitir ao usuário filtrar o resultado de pesquisas por categoria, e por estado de funcionamento (aberto ou fechado), no horário em que a busca foi feita. | MÉDIA      |
| RF-005 | O sistema deve permitir que o usuário se cadastre.                                                                                                                         | ALTA       |
| RF-006 | O sistema deve permitir ao usuário fazer login.                                                                                                                            | ALTA       |
| RF-007 | O sistema deve permitir ao usuário editar seus dados cadastrais.                                                                                                           | ALTA       |
| RF-008 | O sistema deve permitir ao usuário criar uma nova senha, caso não saiba sua senha de login.                                                                                | BAIXA      |
| RF-009 | O sistema deve permitir que o usuário/empresa cadastrado crie sua página na plataforma, para divulgação de sua empresa, produtos ou serviços.                              | ALTA       |
| RF-010 | O sistema deve permitir a edição da página criada para a divulgação de produto ou serviço, pelo usuário/empresa que a criou                                                | MÉDIA      |
| RF-011 | O sistema deve permitir ao usuário adicionar empresas, produtos ou serviços, em sua lista de favoritos, que está disponível em seu perfil.                                 | ALTA       |
| RF-012 | O sistema deve permitir ao usuário remover empresas, produtos ou serviços da sua lista de favoritos, que está disponível em seu perfil.                                    | MÉDIA      |
| RF-013 | O sistema deve permitir o upload de imagens JPEG/JPG, GIF, PNG, TIFF e SVG.                                                                                                | BAIXA      |
| RF-014 | O sistema disponibilizará o endereço da página na web para o usuário.                                                                                                      | MÉDIA      |
| RF-015 | O sistema disponibilizará na(s) página(s) do usuário, através da API de mapas do Microsoft Bing, um mapa informando sua localização comercial.                             | BAIXA      |

### 3.2 Requisitos não Funcionais

<p>
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.
</p>

| ID      | Descrição do Requisito                                                                                                                                                                                                                                                                                 | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| RNF-001 | O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.                                                                                                                                                                                                                | ALTA       |
| RNF-002 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).                                                                                                                                                                                          | ALTA       |
| RNF-003 | Em páginas públicas do site, o site deve mostrar apenas informações públicas.                                                                                                                                                                                                                          | ALTA       |
| RNF-004 | O sistema dará status de usuário-empresa ao usuário que divulgar sua empresa, produto ou serviço.                                                                                                                                                                                                      | ALTA       |
| RNF-005 | O formulário de cadastro deverá conter os campos de entrada: NOME DE USUÁRIO, EMAIL e SENHA                                                                                                                                                                                                            | ALTA       |
| RNF-006 | O formulário de criação de página deverá conter os campos de entrada para: NOME FANTASIA, RAZÃO SOCIAL, ENDEREÇO, TELEFONE, HORÁRIO DE FUNCIONAMENTO, DESCRIÇÃO DOS SERVIÇOS OFERECIDOS, UPLOAD DE IMAGEM PARA BANNER, UPLOAD DE IMAGEM PARA DESCRIÇÃO DE PRODUTO OU SERVIÇO e URL PARA REDES SOCIAIS. | ALTA       |

### 3.3 Restrições

<p>
As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.
</p>

| ID      | Descrição do Requisito                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| RNF-001 | O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.                       |
| RNF-002 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). |
| RNF-003 | O sistema não deve permitir o cadastro de empresas por usuários menores de 18 anos.                           |
| RNF-004 | A implementação do sistema deverá ser feita até o dia 11/12/2022, não podendo extrapolar a data.              |
