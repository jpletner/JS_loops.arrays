function loop () {
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
      alert(myStringArray[i]);
    }
  }

  var loop = function () {
    for (var i = 0; i < this.length; i++) {
        alert(this[i]);
      }
    }


  var myStringArray = ["Hello","World", "Oh", "My", "God"];


  loop.myStringArray;
