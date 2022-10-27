
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
    },
    {
        id: 5,
        nome: "Anti pulgas e carrapatos Simparic",
        descricao: `O Antipulgas Zoetis Simparic 5 mg para Cães 5,1 a 10 Kg (20 mg) é utilizado para o tratamento das infestações por pulgas e sarna sarcótica.`,
        imagens:['./assets/images/products/pets/03/1.jpg'],
        domicilio:true,
        agendamento:false,
        nfavoritos: 55,
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
            imgBanner:'',
            imagens: ["./assets/images/companies/logos/logo3.PNG"],
            hfunc:[''],
            tel: '9546-54684',
            nfavoritos: 55,
            rsocial:[''],            
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
            imgBanner:'',
            hfunc:[''],
            tel: '9546-54684',
            nfavoritos: 55,
            rsocial:[''],      
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
            imgBanner:'',
            hfunc:[''],
            tel: '9546-54684',
            nfavoritos: 55,
            rsocial:[''], 
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
            imgBanner:'',
            hfunc:[''],
            tel: '',
            nfavoritos: 55,
            rsocial:[''], 
        },                 
    ], //FIM PETS
    moveis:[
        {
            id: 3,
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
        },
        {
            id: 4,
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
        },
    ]
}; //FIM EMPRESAS

Categorias = [
    {
        id: 1,
        tags: ['petshop', 'pet shop', 'animais'],
        empresas:[Empresas.petshops]
    },
    {
        id: 2,
        tags: ['moveis', 'madeira' ],
        empresas:[Empresas.moveis]
    }
]//Fim Catgorias
/*
console.log(Categorias[0].empresas[0])
var p = Categorias[0].empresas[0]
console.log(p[0].produtos)
*/