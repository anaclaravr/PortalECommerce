export function createCards(products, funcaoCriacaoCards, parcial = false){
    let cardsHTML = ''
    if(products){
        if(parcial){
            for(let i = 0; i < products.length; i+=2)
                cardsHTML += funcaoCriacaoCards(products[i])
        }
        else{
            for(let i = 0; i < products.length; i++)
                cardsHTML += funcaoCriacaoCards(products[i])
        }
        
    }
    return cardsHTML
}

export function createCardProductMaisPedidos(product){
    let cardMaisPedido = `
    <div class="col-12 col-md-6 col-xxl-4 pb-4">
        <div class="card" style=>
            <img class="d-block d-md-none" src="${product.image}" alt="Modelo">
            <img class="d-none d-md-block d-xl-none" src="${product.image}">
            <img class="d-none d-xl-block" src="${product.image}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.category}</p>
                <p> R$${product.price}</p>
                <a href="produto.html?id=${product.id}" class="btn btn-primary botao-lilas border-0">Comprar</a> <a href="produto.html?id=${product.id}" class="btn btn-primary">Espiar</a>
            </div>
        </div>
    </div>
    `
    return cardMaisPedido
}

export function createCardCategoriaIdeal(product){
    let cardCategoriaIdeal = `
    <div class="div-card col-6 col-md-4 col-xxl-2">
        <div class="card">
            <img class="d-md-none d-block" src="${product.image}" alt="Para Dois">
            <img class="d-none d-md-block d-xl-none" src="${product.image}" alt="Para Dois">
            <img class="d-none d-xl-block" src="${product.image}" alt="Para Dois">
            <div class="card-header bg-black text-bg-dark">
                <p class="text-center card-text">${product.category}
                </p>
            </div>
        </div>
    </div>
    `
    return cardCategoriaIdeal
}

export function createCardProductDetails(product){
    
    let cardMaisPedido = `
    <div class="col-12 col-md-6 col-xxl-4 pb-4">
        <div class="card" style=>
            <img class="d-block d-md-none" style="{width: 100%;}" src="${product.image}" alt="Modelo">
            <img class="d-none d-md-block d-xl-none" style="{width: 100%;}" src="${product.image}">
            <img class="d-none d-xl-block" style="{width: 100%;}" src="${product.image}">
            <div class="card-body">
                <h5 class="card-title">Título: ${product.title}</h5>
                <h5 class="card-title">Id: ${product.id}</h5>
                <p class="card-text">Categoria: ${product.category}</p>
                <p>Preço: R$${product.price}</p>
                <p>Descrição: ${product.description}</p>
                <p>Rating: ${product.rating.rate}</p>
            </div>
        </div>
    </div>
    `
    return cardMaisPedido
}