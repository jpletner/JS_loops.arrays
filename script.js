function updateHeader() {
 	var newHeader =
        document.getElementById('myTextBox').value;

	var oldHeader =
        document.getElementById('header');

oldHeader.innerHTML = newHeader;

}






function changeClass() {
  if ( document.getElementById('header').className == "" ) {
    document.getElementById('header').className="bottom";
  } else if (document.getElementById('header').className=="bottom") {
    document.getElementById('header').className="top";
  } else if(document.getElementById('header').className=="top") {
    document.getElementById('header').className = "";
  }
}



function loop (array) {
  for (var i = 0; i < array.length; i++) {
      alert (array[i]);
    }
  }

	var myStringArray = ["Hello","World", "Oh", "My", "God"];

loop(myStringArray);


/*
  var newData = ["Jenny", "Toby"];

  function storage () {
    data = newData.push(document.getElementById("loopBox").value);

    function loop (data) {
      for (var i = 0; i < data.length; i++) {
          alert (data[i]);
        }
      }
};

document.getElementById("demo").innerHTML == newData.toString();
*/

function storage () {
 	var newData =
        document.getElementById('loopBox').value;
	var oldData =
        document.getElementById('demo');
oldData.innerHTML = newData;
}
