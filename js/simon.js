//To Export functions use exports.functioname = function(){..}
//To Export Constructor use module.exports = ConstructorName (ref. line 23);

function randomColor() {
  var colors = ['blue', 'green', 'red', 'yellow'];
  var rColor = Math.floor(Math.random() * (colors.length))
  return colors[rColor];
}

function simon(answer) {
  var counter = 3;
  var answer = [];
  var simonColors = [randomColor()];
  if (counter > 0){
    simonColors.push(randomColor());

    if (answer == simonColors) {
      console.log(true);
    }
    else {
      console.log(false);
    }
      return simonColors;
  }

  if (counter == 0) {

    if (answer == simonColors) {
      console.log(true);
    }
    else {
      return false;
    }
      return simonColors;
  }
}
