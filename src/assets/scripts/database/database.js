
Produtos = {
    petshops : [{
        id: 1,
        nome: "Ração Pedigree Nutrição Essencial Carne para Cães Adultos",
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
        preco: "22.99",
        
    },
    {
        id: 2,
        nome: "Ração Golden Special para Cães Adultos Frango e Carne",
        descricao: `Preparada com nobres ingredientes, a Ração Golden Special para Cães Adultos Frango e Carne é o alimento ideal para manter o seu cão saudável. Além de render mais por quilograma, ela é livre de corantes e aromatizantes artificiais, proporcionando uma dieta mais balanceada.

        A Ração Golden Special também ajuda a eliminar o odor das fezes, graças à sua fórmula que é rica em vitaminas e minerais. Isso faz com que a musculatura do animal sempre esteja fortalecida, o que consequentemente torna o cão mais ativo e menos propenso a doenças.
        
        Produzida pela Premier Pet – que é referência no mercado pet -, a Ração Golden Special possui um delicioso sabor de frango e carne. Esse blend de proteínas satisfaz amplamente o paladar dos cães.`,
        imagens:['./assets/images/products/pets/02/1.webp','./assets/images/products/pets/02/2.webp'],
        preco: "55.98",

    }
    ],
    moveis : [{
        id: 3,
        nome: "Mesa de Madeira Maciça 4 Lugares com Bancos Mandacaru",
        descricao: `
        Mesa de Madeira Maciça 4 Lugares com Bancos Mandacaru CabeCasa MadeiraMadeira `,
        imagens:['./assets/images/products/moveis/03/1.webp','./assets/images/products/moveis/03/2.webp'],
        preco: "869.59",
        
    },
    {
        id: 4,
        nome: "Mesa de Jantar com 4 Cadeiras Indekes Salvia",
        descricao: `O conjunto de Mesa de Jantar com 4 Cadeiras Indekes Salvia une o belo, prático e a durabilidade que a sua cozinha merece. Onde temos a mesa ideal para cozinha, com produção mista de MDP e MDF, e a cadeira 100% MDF com assento revestido de courino. A estrutura, ambas da mesa e cadeira são em pintura ultra-violeta. A mesa vem acompanhada por tampo em MDP de 15mm, e o seu formato retangular com desenho em quatro pés, permite atender com perfeição e elegância as suas necessidades.`,
        imagens:['./assets/images/products/moveis/04/1.jpg','./assets/images/products/moveis/04/2.webp'],
        preco: "484.03",
        
    },
]//Fim Produtos
}
Empresas = {
    petshops: [
        {
            id: 1,
            produtos: [Produtos.petshops[0],Produtos.petshops[1]],
            nome: "Pet Shop 1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: "juiz de fora",
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            imagens: ["./assets/images/logos/logo2.PNG"]
        },
        {
            id: 2,
            produtos: [Produtos.petshops[1]],
            nome: "Pet Shop 2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: "juiz de fora",
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            imagens: ["./assets/images/logos/logo3.PNG"]
        },              
        {
            id: 3,
            produtos: [Produtos.petshops[0]],
            nome: "Pet Shop 3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: "belo horizonte",
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            imagens: ["./assets/images/logos/logo1.PNG"]
        },           
    ], //FIM PETS
    moveis:[
        {
            id: 3,
            produtos: [Produtos.moveis[0]],
            nome: "Decoração",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: "juiz de fora",
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            imagens: ["./assets/images/logos/logo2.PNG"]
        },
        {
            id: 4,
            produtos: [Produtos.moveis[1]],
            nome: "Moveis",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: "juiz de fora",
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            imagens: ["./assets/images/logos/logo4.PNG"]
        },
    ]
}; //FIM EMPRESAS

Categorias = [
    {
        id: 1,
        tags: ["petshop", "pet shop", "animais"],
        empresas:[Empresas.petshops]
    },
    {
        id: 2,
        tags: ["moveis", "madeira" ],
        empresas:[Empresas.moveis]
    }
]//Fim Catgorias
/*
console.log(Categorias[0].empresas[0])
var p = Categorias[0].empresas[0]
console.log(p[0].produtos)
*/