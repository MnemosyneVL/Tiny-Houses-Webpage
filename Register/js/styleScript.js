function dropDownMenuGames() {
    document.getElementById("dropdownMenuGames").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.headerDropdownButton')) {

    var dropdowns = document.getElementsByClassName("headerDropdownList");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}