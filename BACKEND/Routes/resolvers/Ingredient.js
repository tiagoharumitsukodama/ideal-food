function description(ingredient){
    return `Ingredient: ${ingredient.description}`
}

function unit(ingredient){
    return `Unit: ${ingredient.unit}`
}

function quantity(ingredient){
    return ingredient.quantity
}

module.exports = {
    description,
    unit,
    quantity
}