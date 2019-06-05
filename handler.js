const contentRepository = require('./services/contentRepository')
const nunjucksRenderer = require('./services/nunjucksRenderer')

/**
 * Function attache to the Homepage Lambda
 * Return the content of the homepage
 */
module.exports.homepage = async () => {
  const recipes = contentRepository.getAll()

  const body = nunjucksRenderer.render('homepage.njk', { recipes })

  return {
    statusCode: 200,
    body,
    headers: {
      'Content-Type': 'text/html'
    }
  }
}

/**
 * Function attache to the RecipeDetails Lambda
 * Return the content of a recipe
 */
module.exports.recipeDetails = async (event) => {
  const recipe = contentRepository.getById(event.pathParameters.recipeId)

  const body = nunjucksRenderer.render('recipeDetails.njk', { recipe })

  return {
    statusCode: 200,
    body,
    headers: {
      'Content-Type': 'text/html'
    }
  }
}
