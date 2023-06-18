import { getApi } from './apiConnection.js'
import { addIntoHTML } from './addIntoHTML.js'
import { NewEventListenner } from './EventListenner.js'
import { start } from '../app.js'

export function setFilters(){
    // let testeR= performance.navigation
    createCategoryFilter()
    NewEventListenner("button-submit", "click", treatForm)
}

export function treatForm(){
    // let teste = document.getElementsByName("select-category")

    let form = document.getElementById("filtro")
    const categoria = form.elements['category-select']['value']
    const valorMin = form.elements['price-min']['value']
    const valorMax = form.elements['price-max']['value']
    let objetoFiltro = [
        {
            "nome" : "category",
            "valor": categoria == undefined ? "" : categoria
        },
        {
            "nome" : "price",
            "valor": valorMin == undefined || valorMin == "" ? 0 : valorMin
        },
        {
            "nome" : "price",
            "valor": valorMax == undefined || valorMax == ""  ? 100000 : valorMax
        }
    ]
    start(objetoFiltro)
}

export function searchFilter(){
    let form = document.getElementById("search-form")

    const search = form.elements['inputSearch']['value']

    let objetoFiltro = [
        {
            "nome" : "title",
            "valor": search == undefined ? "" : search
        }
    ]

    start(objetoFiltro)
}

async function createCategoryFilter(){
    let categoriasApi = await getApi("products/categories")
    let options = "<option value=\"\">Selecione a categoria</option>"
    for(let i = 0; i < categoriasApi.length; i++){
        options += createOption(categoriasApi[i])
    }
    addIntoHTML(options, "category-select")

}

function createOption(categoria){
    var categoriaOption = `
        <option value="${categoria}">${categoria}</option>
    `
    return categoriaOption
}

export function filtrate(products, filters){
    let productsReturn = products
    if(filters.length == 3){
        productsReturn = productsReturn.filter(x => x[filters[0].nome].includes(filters[0].valor))
        productsReturn = productsReturn.filter(x => x[filters[1].nome] >= filters[1].valor)
        productsReturn = productsReturn.filter(x => x[filters[2].nome] <= filters[2].valor)
    }else{
        productsReturn = productsReturn.filter(x => x[filters[0].nome].includes(filters[0].valor))
    }
    return productsReturn
}