// this file contains the js to make the search bar work 
 const searchInput = document.querySelector('.input');
 const clearButton = document.getElementById('clear');

 searchInput.addEventListener ("input", (event) => {
    let searchValue = event.target.value;
    //checks if input exists and if it is larger than 0 
    if (searchValue && searchValue.trim().length > 0 ){ 
        searchValue = searchValue.trim().toLowerCase()
        searchList()
    } else {
    }

 })

 clearButton.addEventListener("click", () => {

 })

 function searchList(results){
    let artworks = document.querySelectorAll(".card")
    artworks.forEach( element =>{
        let title = element.innerText
        if (title === results) {
            results.classList.add("result");
        }
        else{
            results.classList.remove("result");
        }
    })
       
    

 }