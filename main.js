var names = [
    "1.Late Charandas Kararia",
    "2.Sharda Kararia",
    "3.Atul Kararia",
    "4.Kavita Kararia",
    "5.Krishna Kararia"
  ];
  var images = [
    "https://i.pinimg.com/originals/d5/6c/d2/d56cd25436d0d3f56ad2f143750f7455.png",
    "https://e7.pngegg.com/pngimages/8/82/png-clipart-cartoon-grandparent-grandma-s-purple-comics.png",
    "https://www.kindpng.com/picc/m/14-147062_vector-bright-office-man-cartoon-papa-ki-pari.png",
    "https://static.toiimg.com/thumb/msid-65903478,imgsize-67002,width-800,height-600,resizemode-75/65903478.jpg",
    "https://thumbs.dreamstime.com/b/cute-boy-cartoon-illustration-90163697.jpg"];
  var i = 0;
  function changename() {
    document.getElementById("i1").src = images[i];
    document.getElementById("p1").innerHTML = names[i];
    i++;
    if (i >= names.length) {
      i = 0;
    }
  }