
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var items = JSON.parse(this.responseText);
    for (var i = 0; i < items.length; i++) {
      addElement(items[i]);
    }
  }
};
xhttp.open("GET", "http://192.168.1.215:8080", true);
xhttp.send();


function addElement(item) {
  var newsfeed = document.getElementById('newsfeed');
  newsfeed.innerHTML += '' +
  '<article>' +
    '<div class="info">' +
      '<div class="img"></div>' +
      '<h3>'+item.name+'</h3>' +
    '</div>' +
    '<img src="'+item.img+'" alt="">' +
    '<div class="comment">' +
      '<div class="icons">' +
        '<i class="fas fa-heart"></i>' +
        '<i class="fas fa-comment"></i>' +
      '</div>' +
      '<input type="text" name="" value="" placeholder="jsjjs">' +
    '</div>' +
  '</article>';
}
