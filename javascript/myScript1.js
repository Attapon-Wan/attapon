function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["tell"].value;
    if (x|y == "") {
      alert("Name must be filled out");
      return false;
    }

  }