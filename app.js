//Closes the modal
$(document).on('click',"#modalClose",function(){
    $("#modalbody").css('display','none');
})

//Open modal function
function openModal(){
    $("#modalbody").css('display','block');
}

//Timer that runs the function that opends modal
window.onload = function(){
    setTimeout(openModal,3000);
}



//Grabs email and changes modal message
$(document).on('click','#submit',function(){



  let email = document.getElementById("emailInput").value

  if(email == ""){
      alert("You must enter an email")
  } else{
    let modalBackground = $("#modalcontent");
    modalBackground.css('background-image','none');
    modalBackground.css('background','#0b0080');
    let modalMessage = $("#modalMessage");
    modalMessage.empty();
    let p = $("<p>");
    p.text("Welcome to the Fam! Your savings have been sent.").css('font-family',"'Quicksand'")
    let planeImg = $("<img>");
    planeImg.attr('src','https://onetwopixel.com/wp-content/uploads/2018/02/animat-paper-airplane-color.gif').css('height','300px');
    modalMessage.append(planeImg);
    modalMessage.prepend(p);
    let input = $("#emailInput");
    let button = $("#submit");
    input.css('display','none');
    button.css('display','none');
    event.preventDefault();
  }

  
})

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }






