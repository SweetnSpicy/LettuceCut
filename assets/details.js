//adaptive images
document.cookie='resolution='+Math.max(screen.width,screen.height)+'; path=/~cxm1544/252/P2/';

//setting up for json file to be read
let xhr = new XMLHttpRequest(),
  url = "assets/data.json";

//retrieves the json information and calls a function to display it
xhr.onreadystatechange = function() {
  console.log(xhr);
  if(xhr.readyState === 4 && xhr.status === 200){
    let menuItems = JSON.parse(xhr.responseText);
    showDetails(menuItems);
  }
}
xhr.open("GET", url, true);
xhr.send();

//display function for certain json elements
function showDetails(items){
  let hStr = "";
  let selId = localStorage.getItem("selection") || 0;
  items.forEach( function(item){
    if(selId == item.id){
      hStr += "<div> <h2>" + item.name + "</h2>" +
                "<img src='img/" + item.pic + ".jpg'/>" +
                "<p><strong>Details: </strong>" + item.description + "</p>" +
                "<p><strong>Pairs Well With: </strong>" + item.dressing + "</p>" +
                "</div>";
    }
  });
  document.getElementById("details").innerHTML = hStr;
}

//my local storage would not clear so I forced it to
function clearLS(){
  window.localStorage.removeItem("selection");
}