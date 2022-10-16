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
        nome: "Ração para cachorros",
        descricao: "",
        imagens:['','']
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
            nome: "Pet Shop",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: ["Juiz de Fora", "Juiz", "Fora"],
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            logo: "https://github.com/pauloosilas/pmv-ads-2022-2-e1-proj-web-t2-encontre-aqui/blob/dev/src/assets/images/logos/logo1.PNG?raw=true"
        },
        {
            id: 2,
            produtos: [Produtos.pets[0], Produtos.pets[1]],
            categorias: [Categorias[0]],
            nome: "Pet Shop",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: ["Juiz de Fora", "Juiz", "Fora"],
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            logo: "https://github.com/pauloosilas/pmv-ads-2022-2-e1-proj-web-t2-encontre-aqui/blob/dev/src/assets/images/logos/logo2.PNG?raw=true"
        },

        {
            id: 3,
            produtos: [Produtos.pets[0], Produtos.pets[1]],
            categorias: [Categorias[0]],
            nome: "Pet Shop",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: ["Juiz de Fora", "Juiz", "Fora"],
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            logo: "https://github.com/pauloosilas/pmv-ads-2022-2-e1-proj-web-t2-encontre-aqui/blob/dev/src/assets/images/logos/logo3.PNG?raw=true"
        },
        {
            id: 4,
            produtos: [Produtos.pets[0], Produtos.pets[1]],
            categorias: [Categorias[0]],
            nome: "Pet Shop",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            cidade: ["Juiz de Fora", "Juiz", "Fora"],
            estado: ["Minas Gerais", "Minas",],
            logradouro: "Avenida João Pinheiro, 469",
            logo: "https://github.com/pauloosilas/pmv-ads-2022-2-e1-proj-web-t2-encontre-aqui/blob/dev/src/assets/images/logos/logo4.PNG?raw=true"
        },
              
    ] //FIM PETS
}; //FIM EMPRESAS

console.log(Produtos.pets.empresas[0]);