/*Update Header Text*/
function updateHeader() {
 	var newHeader =
        document.getElementById('myTextBox').value;

	var oldHeader =
        document.getElementById('header');

oldHeader.innerHTML = newHeader;

}


/*Change Header Class*/
function changeClass() {
  if (document.getElementById('header').className == "" ) {
    document.getElementById('header').className = "red";
  } else if (document.getElementById('header').className == "red") {
    document.getElementById('header').className = "blue";
  } else {
    document.getElementById('header').className = "";
  }
}

/*Update Mailing List*/
var mailingList = ["Bob", "Joe", "Sally", "Katie"];

function myFunction() {
	mailingList.toString();
  document.getElementById("list").innerHTML = mailingList;
}

function addName() {
	mailingList.push(document.getElementById("newName").value);
}

function addNameReprint() {
	mailingList.push(document.getElementById("newName").value);
	mailingList.toString();
  document.getElementById("newList").innerHTML = mailingList;
}

/*Use loop to display array data*/
function loop (array) {
  for (var i = 0; i < array.length; i++) {
   document.getElementById("omg").innerHTML = array;
    }
  }

	var myStringArray = ["Hello","World", "Oh", "My", "God","I","Did","It!"];

	loop(myStringArray);



	
	

