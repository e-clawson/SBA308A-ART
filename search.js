function search() {
    let input = document.getElementById("input");
    let searchValue = input.value.toLowerCase();
    cards = document.getElementsByClassName("artistId")
    titles = document.getElementsByClassName("card-title");
  
    for (i = 0; i < cards.length; i++) {
      a = titles[i];
      if (a.innerHTML.toLowerCase().indexOf(searchValue) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
      console.log(cards[i])
    }
  }