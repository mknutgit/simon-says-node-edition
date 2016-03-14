function randomColor() {
  var colorSelection = ['blue', 'green', 'yellow', 'red'];
  var rColor = Math.floor(Math.random() * (colorSelection.length))
  var color = colorSelection[rColor];
  return color;
}

function simon() {
  var counter = 0;
    var simonArray = [randomColor()];
  while (true) {
    var colors = simonArray.join(" ");
    if (counter == 0) {
      console.log(simonArray);
      var answer = prompt("Input the color(s)");
      if (answer == colors) {
        simonArray.push(randomColor());
        var colors = simonArray.join(" ");
        counter = counter + 1;
      }
      else {
        break;
      }
    }

    if (counter > 0){
      console.log(simonArray);
      var answer = prompt("Input the color(s)");
        if (answer == colors) {
          simonArray.push(randomColor());
          var colors = simonArray.join(" ");
          counter = counter + 1;
        }
        else {
          break;
        }
    }
  }
}
