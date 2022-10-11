Categorias = [
    {
        id: 1,
        tags: ["petshop", "pet shop", "animais"]
    },
    {
        id: 2,
        tags: ["lanches", "lanchonete", "hamburguer"]
    }
]

Produtos = {
    pets: [{
        id: 1,
        nome: "Ração para cachorros"
    },
    {
        id: 2,
        nome: "Ração Para Gatos"
    }
    ]
}

Empresas = {
    petshops: [
        {
            id: 1,
            produtos: [Produtos.pets[0], Produtos.pets[1]],
            categorias: [Categorias[0]],
            nome: "Me Pegue! Pet Shop",
            cidade: ["Belo Horizonte", "BH"],
            estado: ["Minas Gerais", "Minas",]
        },
        {
            id: 2,
            produtos_fk: Produtos[0],
            categorias_fk: Categorias[0],
            nome: "Pet",
            cidade: ["Belo Horizonte", "BH"],
            estado: ["Minas Gerais", "Minas",]
        },
        {
            id: 3,
            produtos_fk: Produtos[0],
            categorias_fk: Categorias.id,
            nome: "Pet Shop",
            cidade: ["Belo Horizonte", "BH"],
            estado: ["Minas Gerais", "Minas",]
        }
    ] //FIM PETS
}; //FIM EMPRESAS


function resposta(pesquisa) {
    console.log(Empresas.petshops[0])
}