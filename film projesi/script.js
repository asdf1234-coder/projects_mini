const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1];
const temizle = document.querySelector("#clear-films")
const filmList = document.getElementById("films");

const ui = new UI();
const storage = new Storage();

eventListeners()

function eventListeners(){
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilms)
    temizle.addEventListener("click",hepsiniSil)
}
function addFilm(e){
    const title=titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        ui.displayMessages("tüm alanları doldurun","danger");

    }else{
        const newFilm = new Film(title,director,url);


        ui.addFilmToUI(newFilm)
        storage.addFilmToStorage(newFilm)
        ui.displayMessages("başarıyla eklendi","success");
    }


    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}
function deleteFilms(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target)
        storage.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages("başarıyla silindi","success")
    }
}
function hepsiniSil(){
    filmList.innerHTML = ""
    localStorage.removeItem("films")
}
