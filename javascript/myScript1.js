function form() {
    var y = document.forms["myForm"]["tell"].value;
    if (y == "") {
      alert("Must be filled out");
      return false;
    }

  }