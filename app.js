import { getApi } from './JS/apiConnection.js'
import { createCards, createCardProductMaisPedidos, createCardCategoriaIdeal } from './JS/createCard.js'
import { setFilters, filtrate, treatForm, searchFilter } from './JS/filter.js'
import { addIntoHTML } from './JS/addIntoHTML.js'

window.onload=function(){
    let botaoSubmit = document.getElementById("button-submit");

    botaoSubmit.onclick = function () {
        treatForm()
    };

    let inputSearch = document.getElementById("input-search")

    inputSearch.onchange = function (){
        searchFilter()
    }
}

window.onbeforeunload = function() {
    event.preventDefault();
  }; 
start()

export async function start(filters = ""){
    if(filters.length == 0)
        setFilters()
    let products = await getApi()
    let cardsCategoriaIdeal = createCards(products, createCardCategoriaIdeal, true)
    addIntoHTML(cardsCategoriaIdeal, "cardsCategoriaIdeal-container")

    products = filters === "" ? products : filtrate(products, filters)
    let cardsMaisPedidos = createCards(products, createCardProductMaisPedidos)
    if(products.length == 0){
        cardsMaisPedidos = "<p>Nenhum item foi encontrado por essa busca</p>"
        alert("Nenhum item encontrado pela busca")
    }
    addIntoHTML(cardsMaisPedidos, "cardsMaisPedidos-container")
}

function print(object){
}

export function teste(){
    treatForm()
}
