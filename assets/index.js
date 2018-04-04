//adaptive images
document.cookie='resolution='+Math.max(screen.width,screen.height)+'; path=/~cxm1544/252/P2/';

//button target
function changeMe(){
  window.open("menu.html", "_self");
}

//set up json page to be read
let xhr = new XMLHttpRequest(),
  url = "assets/data.json";
//reads json information, parses it, then calls a function to display it
xhr.onreadystatechange = function() {
  console.log(xhr);
  if(xhr.readyState === 4 && xhr.status === 200){
    let menuItems = JSON.parse(xhr.responseText);
    buildMenu(menuItems);
  }
}
xhr.open("GET", url, true);
xhr.send();

//display function for the menu items
function buildMenu(items){
  let output = "";
  items.forEach(function(item){
    output += "<div class='item'" + "onclick='saveSelection(" + item.id + ");'>" +
                "<h1>" + item.name + "</h1>" +
                "<img src='img/" + item.pic + ".jpg'/>" +
                "</div>";
  });
  document.getElementById("menu_items").innerHTML = output;
}
//saving the selected id so that the details page can call
//whichever lettuce you clicked on for more information
function saveSelection(selId){
  window.localStorage.setItem("selection", selId);
  window.open("details.html", "_self");
}

