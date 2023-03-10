function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "inline-block";
    evt.currentTarget.className += " active";
  }

  function giveAdvice() {
    //document.getElementById("choiceResult").innerHTML = "Button Clicked";
    techChoice = document.querySelector("#technology");
    yes = document.getElementById("yes");
    no = document.getElementById("no");
    //alert("Submit button clicked! " + techChoice.options[techChoice.selectedIndex].value + " " + no.value + " " + yes.value);
    if(techChoice.selectedIndex == -1 || (!no.checked && !yes.checked)){
      alert("Fill out all input fields");
    }
    else{
      var str = "";
      if(no.checked){
        str = str.concat("Learn OOP first! Then ");
      }
      if(techChoice.selectedIndex == 0){
        str = str.concat("learn Solidity!");
      }
      else{
        str = str.concat("learn HTML, CSS, & Javascript!");
      }
      //Always capitalize the 1st letter in the string
      str = str.charAt(0).toUpperCase() + str.slice(1);
      document.getElementById("choiceResult").innerHTML = str;
      //alert(str);
      document.getElementById("choiceResult").style.display = "inline";
    }
  }

  function profileNotif(){
    alert("don't mess with the skog.");
  }


  /*
  References: 
  https://www.w3schools.com/howto/howto_js_todolist.asp
  https://www.educative.io/answers/how-to-create-a-simple-to-do-list-with-html-css-and-js
  */
  function todoAdd() {
    var list = document.getElementById('todoList');
    list.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      }
    }, false);
  
    var entry = document.getElementById('todoInput').value;
    var newItem = document.createElement('li');
  
    if (entry === '') {
      alert("Empty entry");
    } else {
      var spanValue = document.createElement('span');
      var spanBtn = document.createElement('button');
      spanBtn.className = "remove";
  
      spanValue.innerText = entry;
      spanBtn.innerText = "x";
      spanBtn.addEventListener('click', todoDelete);
      
      newItem.appendChild(spanValue);
      newItem.appendChild(spanBtn);
      document.getElementById('todoList').appendChild(newItem);
    }
  
    document.getElementById('todoInput').value = "";
  
    function todoDelete() {
      document.getElementById('todoList').removeChild(newItem);
    }
  }