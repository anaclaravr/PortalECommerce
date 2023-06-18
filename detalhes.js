import { createCardProductDetails } from './JS/createCard.js'
import { getApi } from './JS/apiConnection.js'
import { addIntoHTML } from './JS/addIntoHTML.js'

const params = new URLSearchParams(window.location.search);
// Obtenha o valor de um parâmetro específico
const id = params.get('id');
let retornoApi = await getApi(`products/${id}`)
let card = createCardProductDetails(retornoApi)
addIntoHTML(card, "detalhes")

const parametro2 = params.get('parametro2');