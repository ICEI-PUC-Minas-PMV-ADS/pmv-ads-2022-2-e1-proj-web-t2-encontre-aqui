
Produtos = {
    petshops : [{
        id: 1,
        nome: 'Ração Pedigree Nutrição Essencial Carne para Cães Adultos',
        descricao: `- Indicada para cães
        - Nutrição essencial sabor carne para cães adultos;
        - Alimento premium 100% completo e balanceado;
        - Sem corantes artificiais presentes na ração;
        - Nutrição essencial com 23 vitaminas e minerais;
        - Proteína de alta qualidade para manutenção de músculos fortes;
        - Com ômega 6 para pele e pelo saudáveis de seu cachorro;
        - Vida saudável: nível ideal de ingredientes para qualidade de vida;
        - Disponível em embalagens de 900g, 10,1kg, leve 10,1kg pague 9kg, 15kg e leve 15kg pague 13,5kg.`,
        imagens:['./assets/images/products/pets/01/1.webp','./assets/images/products/pets/01/2.webp','./assets/images/products/pets/01/3.webp'],
        preco: '22.99',
        domicilio:true,
        agendamento:false,
        nfavoritos: 55,
        categoria: 'petshop' 
    },
    {
        id: 2,
        nome: 'Ração Golden Special para Cães Adultos Frango e Carne',
        descricao: `Preparada com nobres ingredientes, a Ração Golden Special para Cães Adultos Frango e Carne é o alimento ideal para manter o seu cão saudável. Além de render mais por quilograma, ela é livre de corantes e aromatizantes artificiais, proporcionando uma dieta mais balanceada.

        A Ração Golden Special também ajuda a eliminar o odor das fezes, graças à sua fórmula que é rica em vitaminas e minerais. Isso faz com que a musculatura do animal sempre esteja fortalecida, o que consequentemente torna o cão mais ativo e menos propenso a doenças.
        
        Produzida pela Premier Pet – que é referência no mercado pet -, a Ração Golden Special possui um delicioso sabor de frango e carne. Esse blend de proteínas satisfaz amplamente o paladar dos cães.`,
        imagens:['./assets/images/products/pets/02/1.webp','./assets/images/products/pets/02/2.webp'],
        preco: "55.98",
        domicilio:true,
        agendamento:false,
        nfavoritos: 55,
        categoria: 'petshop' 
    },
    {
        id: 3,
        nome: "Anti pulgas e carrapatos Simparic",
        descricao: `O Antipulgas Zoetis Simparic 5 mg para Cães 5,1 a 10 Kg (20 mg) é utilizado para o tratamento das infestações por pulgas e sarna sarcótica. Após a administração do Simparic, a sua atividade contra pulgas dura, pelo menos, 5 semanas`,
        imagens:['./assets/images/products/pets/03/1.jpg'],
        preco: "22.99",
        domicilio:true,
        agendamento:false,
        nfavoritos: 55,
        categoria: 'petshop' 
    },

    {
        id: 4,
        nome: "Special para Cães Adultos Frango e Carne",
        descricao: `Preparada com nobres ingredientes, a ração Golden Special para Cães Adultos Frango e Carne é o alimento ideal para manter o seu cão saudável. Além de render mais por quilograma, ela é livre de corantes e aromatizantes artificiais, proporcionando uma dieta mais balanceada.

        A Ração Golden Special também ajuda a eliminar o odor das fezes, graças à sua fórmula que é rica em vitaminas e minerais. Isso faz com que a musculatura do animal sempre esteja fortalecida, o que consequentemente torna o cão mais ativo e menos propenso a doenças.
        
        Produzida pela Premier Pet – que é referência no mercado pet -, a Ração Golden Special possui um delicioso sabor de frango e carne. Esse blend de proteínas satisfaz amplamente o paladar dos cães.`,
        imagens:['./assets/images/products/pets/01/2.webp','./assets/images/products/pets/02/2.webp'],
        preco: "55.98",
        domicilio:true,
        agendamento:false,
        nfavoritos: 55,
        categoria: 'petshop' 
    },
    {
        id: 5,
        nome: "Anti pulgas e carrapatos Simparic",
        descricao: `O Antipulgas Zoetis Simparic 5 mg para Cães 5,1 a 10 Kg (20 mg) é utilizado para o tratamento das infestações por pulgas e sarna sarcótica.`,
        imagens:['./assets/images/products/pets/03/1.jpg'],
        domicilio:true,
        agendamento:false,
        nfavoritos: 55,
        categoria: 'petshop' 
    },

    ],
    moveis : [{
        id: 3,
        nome: "Mesa de Madeira Maciça 4 Lugares com Bancos Mandacaru",
        descricao: `
        Mesa de Madeira Maciça 4 Lugares com Bancos Mandacaru CabeCasa MadeiraMadeira `,
        imagens:['./assets/images/products/moveis/03/1.webp','./assets/images/products/moveis/03/2.webp'],
        preco: "869.59",
        domicilio:true,
        agendamento:false,
        nfavoritos: 55,
        categoria: 'moveis' 
        
    },
    {
        id: 4,
        nome: "Mesa de Jantar com 4 Cadeiras Indekes Salvia",
        descricao: `O conjunto de Mesa de Jantar com 4 Cadeiras Indekes Salvia une o belo, prático e a durabilidade que a sua cozinha merece. Onde temos a mesa ideal para cozinha, com produção mista de MDP e MDF, e a cadeira 100% MDF com assento revestido de courino. A estrutura, ambas da mesa e cadeira são em pintura ultra-violeta. A mesa vem acompanhada por tampo em MDP de 15mm, e o seu formato retangular com desenho em quatro pés, permite atender com perfeição e elegância as suas necessidades.`,
        imagens:['./assets/images/products/moveis/04/1.jpg','./assets/images/products/moveis/04/2.webp'],
        preco: "484.03",
        domicilio:true,
        agendamento:false,
        nfavoritos: 55,
        categoria: 'moveis' 
        
    },
]//Fim Produtos
}
Empresas = {
    petshops: [
        {
            id: 1,
            produtos: [Produtos.petshops[0],Produtos.petshops[1]],
            nome: 'Pet Shop Delivery',
            descricao: `Pet Shop online e delivery de rações e outros produtos para cães e gatos. Entregues em até 2 horas de 9 as 21 de segunda a sexta e sábado até as 17.`,
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais', 
            logradouro: "Rua Doutor Gil Horta, 15, São Mateus",
            imgBanner:'./assets/images/companies/banners/01/banner.jpg',
            imagens: ["./assets/images/companies/logos/logo5.PNG"],
            hfunc:[''],
            tel: '9546-54684',
            nfavoritos: 55,
            rsocial:[''],
            empresa:true,  
            categoria: 'petshop'          
        },
        {
            id: 2,
            produtos: [Produtos.petshops[1], Produtos.petshops[4]],
            nome: 'Cão Carinho - Veterinária e Pet Shop',
            descricao: "Contamos com uma especializada equipe de veterinários, tosadores e atendentes que fazem o sucesso da Cão Carinho.",
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Rua Sampaio, 233, Granbery',
            imagens: ['./assets/images/companies/logos/petshop3.PNG','./assets/images/companies/logos/logo3.PNG'],
            imgBanner:'./assets/images/companies/banners/02/banner.jpg',
            hfunc:[''],
            tel: '9546-54684',
            nfavoritos: 55,
            rsocial:[''],
            empresa:true,
            categoria: 'petshop'      
        },              
        {
            id: 3,
            produtos: [Produtos.petshops[0]],
            nome: 'Me Pegue! Pet Shop',
            descricao: 'Me Pegue! Pet Shop. Artigos para animais de estimação. Eles nunca viram nada igual! ',
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Rua Halfeld, 584, Centro',
            imagens: ['./assets/images/companies/logos/petshop2.PNG'],
            imgBanner:'./assets/images/companies/banners/03/banner.jpg',
            hfunc:[''],
            tel: '9546-54684',
            nfavoritos: 55,
            rsocial:[''],
            empresa:true ,
            categoria: 'petshop'
        }, 
        {
            id: 4,
            produtos: [Produtos.petshops[0],Produtos.petshops[2], Produtos.petshops[3]],
            nome: 'Pet Shop Castelo Das Racoes',
            descricao: 'Compre Online e Receba em Horas, ração Frete Grátis Brasil* e Parcele em até 3x Sem Juros. Cobasi Já: Compre Online e Receba em Horas*',
            cidade: 'Belo Horizonte',
            estado: 'Minas Gerais',
            logradouro: 'Avenida João Pinheiro, 469',
            imagens: ['./assets/images/companies/logos/petshop3.PNG'],
            imgBanner:'./assets/images/companies/banners/01/banner.jpg',
            hfunc:[''],
            tel: '',
            nfavoritos: 55,
            rsocial:[''],
            empresa:true ,
            categoria: 'petshop'
        },                 
    ], //FIM PETS
    moveis:[
        {
            id: 5,
            produtos: [Produtos.moveis[0]],
            nome: 'Decoração',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Avenida João Pinheiro, 469',
            imagens: ['./assets/images/companies/logos/logo2.PNG'],
            imgBanner:'',
            hfunc:[''],
            tel: '',
            nfavoritos: 55,
            rsocial:[''],
            empresa:true, 
            categoria: 'moveis'
        },
        {
            id: 6,
            produtos: [Produtos.moveis[1]],
            nome: 'Moveis',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Avenida João Pinheiro, 469',
            imagens: ['./assets/images/companies/logos/logo4.PNG'],
            imgBanner:'',
            hfunc:[''],
            tel: '',
            nfavoritos: 55,
            rsocial:[''],
            empresa:true,
            categoria: 'moveis' 
        },
    ],
    eletricistas:[
        {
            id: 6,
            produtos: [Produtos.moveis[1]],
            nome: 'Enrico Gonçalves',
            descricao: `Atua na cidade de Juiz de Fora.  Montar, manter e reparar equipamentos mecânicos, bem como executar a manutenção preventiva e corretiva de maquinário. Auxiliar em trabalhos de pesquisa e aperfeiçoamento. Executar esboços e desenhos de sua especialidade.`,
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Rua Barão de Santa Helena, 180, Granbery',
            imagens: ['./assets/images/companies/logos/eletricista.jpg'],
            imgBanner:'',
            hfunc:['08:00 - 16:00'],
            tel: '9111-53197',
            nfavoritos: 55,
            rsocial:['https://www.facebook.com/Enrico.Goncalves.545553'],
            empresa:false,
            categoria: 'eletricista' 
        },
    ],
    advogados:[
        {
            id: 7,
            produtos: [Produtos.moveis[1]],
            nome: 'Dra. Brenda Porto',
            descricao: `mais de 20 anos de Advocacia, prima pela excelência na prestação de serviços, objetivando o melhor resultado para seus clientes.

            Possui profissionais especializados em Direito do Trabalho, Previdenciário, Direito Empresarial, Direito Imobiliário, do Consumidor, de Família e Sucessão, dentre outras áreas.
            
            O escritório vem construindo um legado de reputação e credibilidade ao longo dos anos, decorrente da intensa dedicação e comprometimento com as demandas de seus clientes, operando, hoje, em todo o país.`,
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Rua Oscár Vidal, 121, Centro',
            imagens: ['./assets/images/companies/logos/advogado.png'],
            imgBanner:'',
            hfunc:['10:00 - 17:00'],
            tel: '9223-53197',
            nfavoritos: 55,
            rsocial:['https://www.facebook.com/Isadora.Cardoso.5415553a'],
            empresa:false,
            categoria: 'advogado' 
        },

        {
            id: 8,
            produtos: [Produtos.moveis[1]],
            nome: 'Dr. Davi Lucas Viana',
            descricao: `mais de 20 anos de Advocacia, prima pela excelência na prestação de serviços, objetivando o melhor resultado para seus clientes.

            Possui profissionais especializados em Direito do Trabalho, Previdenciário, Direito Empresarial, Direito Imobiliário, do Consumidor, de Família e Sucessão, dentre outras áreas.
            
            O escritório vem construindo um legado de reputação e credibilidade ao longo dos anos, decorrente da intensa dedicação e comprometimento com as demandas de seus clientes, operando, hoje, em todo o país.`,
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Rua Oscár Vidal, 125, Centro',
            imagens: ['./assets/images/companies/logos/advogado2.png'],
            imgBanner:'',
            hfunc:['10:00 - 17:00'],
            tel: '9224-53197',
            nfavoritos: 55,
            rsocial:['https://www.facebook.com/Davi.Lucas.55553a'],
            empresa:false,
            categoria: 'advogado' 
        },
    ],
    barbearia:[
         {
            id: 9,
            produtos: [Produtos.moveis[1]],
            nome: 'Marcos Vinicius Cardoso',
            descricao: `Barbearia criada com paixão pela arte, aqui fazemos barba, cabelo, negócios e o mais importante, fazemos amigos. Mais que uma barbearia, um local para estar e relaxar. Valorizamos cada personalidade e perfil, seja o homem tradicional ou moderno.`,
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Rua Espírito Santo, 946, Centro',
            imagens: ['./assets/images/companies/logos/salao.jpg'],
            imgBanner:'',
            hfunc:['10:00 - 16:00'],
            tel: '9777-53197',
            nfavoritos: 55,
            rsocial:['https://www.facebook.com/Brenda.Porto.6653a'],
            empresa:false,
            categoria: 'barbearia' 
        },
        {
            id: 10,
            produtos: [Produtos.moveis[1]],
            nome: 'Kaique Farias',
            descricao: ` Barbearia criada com paixão pela arte, aqui fazemos barba, cabelo, negócios e o mais importante, fazemos amigos. Mais que uma barbearia, um local para estar e relaxar. Valorizamos cada personalidade e perfil, seja o homem tradicional ou moderno.`,
            cidade: 'Juiz de Fora',
            estado: 'Minas Gerais',
            logradouro: 'Rua Farmacêutico José Mostaro, 25, Alto dos Passos',
            imagens: ['./assets/images/companies/logos/salao2.jpg'],
            imgBanner:'',
            hfunc:['10:00 - 17:00'],
            tel: '9897-53197',
            nfavoritos: 55,
            rsocial:['https://www.facebook.com/Kaique.Farias.6653a'],
            empresa:false,
            categoria: 'barbearia' 
        },
    ]
}; //FIM EMPRESAS

Categorias = [
    {
        id: 1,
        tags: ['petshop','pet', 'animais'],
        empresas:[Empresas.petshops]
    },
    {
        id: 2,
        tags: ['moveis', 'madeira' ],
        empresas:[Empresas.moveis]
    },
    {
        id: 3,
        tags: ['eletricistas'],
        empresas:[Empresas.eletricistas]
    },
     {
        id: 4,
        tags: ['advogado','advogada'],
        empresas:[Empresas.advogados]
    },
    {
        id: 5,
        tags: ['barbearia','salão'],
        empresas:[Empresas.barbearia]
    }
]//Fim Catgorias
/*
console.log(Categorias[0].empresas[0])
var p = Categorias[0].empresas[0]
console.log(p[0].produtos)
*/