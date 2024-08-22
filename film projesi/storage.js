function Storage(){

}
Storage.prototype.addFilmToStorage = function(newfilm){
    let films = this.getFilmsFromStorage();
    films.push(newfilm);
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.getFilmsFromStorage = function(){
    let films;
    if(localStorage.getItem("films") === null){
        films = [];
    }else{
        films = JSON.parse(localStorage.getItem("films"));  
    }
    return films;
}
Storage.prototype.deleteFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films))
}