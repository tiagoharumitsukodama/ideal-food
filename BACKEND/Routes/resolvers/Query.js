function ola(_, { valor }){
    return "Hello world " + valor
}

function ingredient(){
    const data = {
        description: "Batata",
        unit: "Gram",
        quantity: 5
    }

    return data
}

function recipe(){
    const ingredient = {
        description: "Batata",
        unit: "Gram",
        quantity: 5
    }

    return {
        id: "my-id",
        description: "Pure de batata",
        status: "ACTIVE",
        price: 34,
        difficult: "EASY",
        ingredients: [ingredient]
    }
}

module.exports = {
    ola,
    ingredient,
    recipe
}