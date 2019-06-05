const data = require('../data')


function getAll() {
  return data
}

function getById(recipeId) {
  return data.filter((recipe) => {
    return recipe.id === recipeId
  })[0]
}

module.exports = {
  getAll,
  getById
}