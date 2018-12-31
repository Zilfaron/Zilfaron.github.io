(function(d) {
  var forms = document.forms,
      email_validate = /[\w\dа-яё.]+@[\w\dа-яё.]+\.[\w\dа-яё]{1,10}/i;

  var formInputValidate = function formInputValidate(input, pattern, mlength) {
    var minlength = mlength || 5;
    if (input) {
      if ( pattern.test( input.value.trim() ) && input.value.trim().length >= minlength ) {
        input.classList.remove("input_error");

        return true;
      } else {
        input.classList.add("input_error");

        return false;
      }
    } else {
      throw new Error("Input is not defined");
    }
  }

  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function(evt) {
      evt.preventDefault();

      var form_inputs = Array.prototype.filter.call( evt.target.querySelectorAll("input"), function(inp) {
        return inp.type !== "submit";
      });

      for (var l = 0; l < form_inputs.length; l++) {
        var pattern = /.+/;
        if (form_inputs[l].name == "email-address") {
          pattern = email_validate;
        }

        if ( !formInputValidate(form_inputs[l], pattern) ) {
          return false;
        } else continue;
      }

      evt.target.submit();
    });
  }
})(document);
