function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    var arrowIcon = document.querySelector(".arrow-down");
  
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      arrowIcon.classList.remove("arrow-up");
      arrowIcon.classList.add("arrow-down");
    } else {
      dropdownContent.style.display = "block";
      arrowIcon.classList.remove("arrow-down");
      arrowIcon.classList.add("arrow-up");
    }
  }
  