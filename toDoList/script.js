const ekleme = document.querySelector(".giris");
const eklebutton = document.querySelector(".ekle");
const arama = document.querySelector(".arama");
const silme = document.querySelector(".hepsinisil");
const container = document.querySelector(".container");
function addevent(){
    eklebutton.addEventListener("click", ekle);
    document.addEventListener("DOMContentLoaded", sayfayuklenme)
    silme.addEventListener("click", silmek)
    arama.addEventListener("keyup", filtre)
}
function getStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function ekle(){
    const yeniInput = ekleme.value.trim();
    if (yeniInput) {
        eklemeFonk(yeniInput);
        localEkle(yeniInput);
        ekleme.value = "";
    }
}
function eklemeFonk(yeniElement){
    toDoElement = document.createElement("div");
    toDoElement.className = "element";
    toDoElement.appendChild(document.createTextNode(yeniElement));
    container.appendChild(toDoElement);
}
function localEkle(element){
    let todos = getStorage();
    todos.push(element);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function sayfayuklenme(){
    container.innerHTML = '';
    let todos = getStorage();
    todos.forEach(function(todo){
        eklemeFonk(todo);
    })
}
function silmek(){
    container.innerHTML = '';
    localStorage.removeItem("todos");
}
function filtre(){
    const deger = arama.value.toLowerCase();
    const elementler = document.querySelectorAll(".element");
    elementler.forEach(function(herbiri){
        let text = herbiri.textContent.toLocaleLowerCase();
        if(text.indexOf(deger) === -1){
            herbiri.setAttribute("style","display: none")
        }else{
            herbiri.setAttribute("style","display: block")
        }
    })
}
addevent()