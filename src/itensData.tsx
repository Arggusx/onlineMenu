const menuItems = [
    {
        id: 1,
        name: "Let's Go Simples",
        description: "Burger artesanal 150g, queijo cheddar, presunto e salada.",
        price: 16.49,
        image: "src/assets/logo/logo.png",
        type: "artesanal",
    },
    {
        id: 2,
        name: "Let's Go Duplo",
        description: "Dois burgers artesanais 150g, queijo cheddar duplo e bacon.",
        price: 22.99,
        image: "src/assets/logo/logo.png",
        type: "artesanal",
    },
    {
        id: 3,
        name: "Let's Go Bacon",
        description: "Burger artesanal 150g, queijo cheddar e bacon crocante.",
        price: 18.99,
        image: "src/assets/logo/logo.png",
        type: "artesanal",
    },
    {
        id: 4,
        name: "Let's Go Eggs",
        description: "Burger artezanal 150g, ovo, queijo cheddar, presunto e salada.",
        price: 24.49,
        image: "src/assets/logo/logo.png",
        type: "artesanal",
    },
    {
        id: 5,
        name: "Let's Go Calabresa",
        description: "Calabresa fatiada 170g, ovo, queijo cheddar, presunto e salada.",
        price: 16.49,
        image: "src/assets/logo/logo.png",
        type: "tradicional",
    },
    {
        id: 6,
        name: "Let's Go Frango",
        description: "Frango em cubos 170g, ovo, queijo cheddar, presunto e salada.",
        price: 16.49,
        image: "src/assets/logo/logo.png",
        type: "tradicional",
    },
    {
        id: 7,
        name: "Let's Go Calafrango",
        description: "Calabresa fatiada 85g, frango em cubos 85g, ovo, queijo cheddar, presunto e salada.",
        price: 17.49,
        image: "src/assets/logo/logo.png",
        type: "tradicional",
    },
    {
        id: 8,
        name: "Let's Go Carne do Sol",
        description: "Carne do sol em cubos 190g, ovo, queijo cheddar, cebola caramelizada, presunto e salada.",
        price: 23.99,
        image: "src/assets/logo/logo.png",
        type: "tradicional",
    },
    {
        id: 9,
        name: "Let's Go Alcatra",
        description: "Carne de alcatra em cubos 190g, ovo, queijo cheddar, cebola caramelizada, presunto e salada.",
        price: 26.49,
        image: "src/assets/logo/logo.png",
        type: "tradicional",
    },
    {
        id: 10,
        name: "Coca-Cola 1L",
        description: "Garrafa",
        price: 7.00,
        image: "src/assets/logo/logo.png",
        type: "refrigerante",
    },
    {
        id: 11,
        name: "Guaraná 1L",
        description: "Garrafa",
        price: 6.00,
        image: "src/assets/logo/logo.png",
        type: "refrigerante",
    },
    {
        id: 12,
        name: "Coca-Cola 350ml",
        description: "Lata",
        price: 5.00,
        image: "src/assets/logo/logo.png",
        type: "refrigerante",
    },
    {
        id: 13,
        name: "Guaraná 350ml",
        description: "Lata",
        price: 5.00,
        image: "src/assets/logo/logo.png",
        type: "refrigerante",
    },
    { 
        name: "Suco de Maracujá", 
        description: "Suco natural de Maracujá", 
        price: 7.99, 
        image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "agua" 
    },
    {   
        name: "Suco de Cajú", 
        description: "Suco natural de Cajú", 
        price: 7.99, image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "agua" 
    },
    { 
        name: "Suco de Acerola", 
        description: "Suco natural de Acerola", 
        price: 7.99, 
        image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "agua" 
    },
    {   
        name: "Suco de Goiaba", 
        description: "Suco natural de Goiaba", 
        price: 7.99, image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "agua" 
    },
    {   
        name: "Suco de Graviola", 
        description: "Suco natural de Graviola", 
        price: 7.99, image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "agua" 
    },
    { 
        name: "Suco de Maracujá", 
        description: "Suco natural de Maracujá", 
        price: 7.99, 
        image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "leite" 
    },
    {   
        name: "Suco de Cajú", 
        description: "Suco natural de Cajú", 
        price: 7.99, image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "leite" 
    },
    { 
        name: "Suco de Acerola", 
        description: "Suco natural de Acerola", 
        price: 7.99, 
        image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "leite" 
    },
    {   
        name: "Suco de Goiaba", 
        description: "Suco natural de Goiaba", 
        price: 7.99, image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "leite" 
    },
    {   
        name: "Suco de Graviola", 
        description: "Suco natural de Graviola", 
        price: 7.99, image: "src/assets/logo/logo.png", 
        type: "suco", 
        juiceType: "leite" 
    },
    {   
        name: "Água", 
        description: "Água mineral", 
        price: 7.99, image: "src/assets/logo/logo.png", 
        type: "agua",
        juiceType: "mineral"
    },
    {   
        name: "Água", 
        description: "Água com gás", 
        price: 7.99, image: "src/assets/logo/logo.png", 
        type: "agua", 
        juiceType: "mineral"
    },
    {
        name: "Sobremesa 01",
        description: "",
        price: 0.00,
        image: "src/assets/logo/logo.png",
        type: "sobremesa",
    },
    {
        name: "Sobremesa 02",
        description: "",
        price: 0.00,
        image: "src/assets/logo/logo.png",
        type: "sobremesa",
    },
    {
        name: "Sobremesa 03",
        description: "",
        price: 0.00,
        image: "src/assets/logo/logo.png",
        type: "sobremesa",
    },
    {
        name: "Sobremesa 04",
        description: "",
        price: 0.00,
        image: "src/assets/logo/logo.png",
        type: "sobremesa",
    },
  ];
  
  export default menuItems;
  