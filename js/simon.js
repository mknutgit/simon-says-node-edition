//To Export functions use exports.functioname = function(){..}
//To Export Constructor use module.exports = ConstructorName (ref. line 23);

function randomColor() {
  var colors = ['blue', 'green'];
  var rColor = Math.floor(Math.random() * (colors.length))
  return colors[rColor];
}

function simon(answer) {
  var counter = 3;
  var colorArray = [randomColor()];

  if (counter > 0){
    colorArray.push(randomColor());
    var colors = colorArray.join(" ");

      if (answer == colors) {
        console.log(true);
      }
      else {
        console.log(false);
      }
      return colorArray;
  }

  if (counter == 0) {
    var colors = colorArray.join(" ");

    if (answer == colors) {
      console.log(true);
    }
    else {
      console.log(false);
    }
      return colorArray;
  }
}
