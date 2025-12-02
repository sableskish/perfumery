function myFunction() {
          var password = document.getElementById("password").value;
          var password2 = document.getElementById("password2").value;
          if (password != password2) {
            alert("Пароли не совпадают");
            document.getElementById("password").style.borderColor = "#E34234";
            document.getElementById("password2").style.borderColor = "#E34234";
            return false;
        }
        else {
            alert("Аккаунт успешно создан!");
        }
        return true;
    }