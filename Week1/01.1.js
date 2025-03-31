const pi = 3.14
let accName = "dsp"
var accNo = 11
 
accState = "AP" //don't use
console.log(accState);
/*
Another way to print
*/
console.table([pi,accName,accNo]);

/*
Usage of let is recommended over var because of block scope and functional scope
*/

/*
function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}



*/