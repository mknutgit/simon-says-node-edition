//To Export functions use exports.functioname = function(){..}
//To Export Constructor use module.exports = ConstructorName (ref. line 23);

function randomColor() {
  var colors = ['blue', 'green', 'red', 'yellow'];
  var rColor = Math.floor(Math.random() * (colors.length))
  return colors[rColor];
}

function simon(answer) {
  var counter = 0;
  var simonColors = [randomColor()];
  if (counter == 0 && answer == simonColors) {
    console.log(true);
    return simonColors;
  }
    else {
      console.log(false);
    }

  // for (var i = 0; i < array.length; i++) {
  //   array[i]
  // }


}
