export function addIntoHTML(textHTML, id){
    let tagHTML = document.getElementById(id)
    tagHTML.innerHTML = textHTML
}