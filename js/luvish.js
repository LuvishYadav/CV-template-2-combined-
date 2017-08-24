
$( document ).ready(function() {
    console.log( "ready!" );
	$("#loader-wrapper").show();
	$(".navbar ").hide();
	
	setTimeout(function(){
	$("#myBtn").trigger("click");
	},1000);
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document


 
  setTimeout(function(){
  $("#loader-wrapper").hide();
  $(".navbar ").show();
  $(function(){

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date();
var secondDate = new Date(2015,10,12);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

var expY = (diffDays/365).toFixed(1);

      $(".animated-intro").typed({
        strings: ["I'm <b>24</b>. I live in <b>Pune</b>. <br> I am developing and managing web applications for <b>"+expY+" years</b>. ",
        		  <!-- "I'm a <b>Star Wars</b> fan <br> and a father of <b>2 awesome</b> kids!", -->
				  "Experienced with all stages of the development cycle for dynamic web projects","Having an in-depth knowledge including advanced <b>HTML5, CSS3, JavaScript, jQuery</b>.",
        		  ], 			//just wrote what text you want to appear
        typeSpeed: 0,
        backSpeed: 0,
        loop: true,
        startDelay: 1500,
        backDelay: 2000,
      });
  });
  
  
  swal({
  title: "Check the latest version!",
  
  type: "info",
  showCancelButton: true,
  confirmButtonColor: "black",
  confirmButtonText: "Take me there!",
  cancelButtonText: "No,Stay here!",
  closeOnConfirm: false
},	
function(){
  swal("Redirecting!", "", "success");
  
  setTimeout(function(){
	 /* $("#modalBtn").trigger('click'); */
	  window.location.replace("http://luvishyadav.com/indexcoffee.html");
  },1000);
});
  
  
  }, 3000);
  
  
function clickMenL(){

$("#menuBtnL").trigger("click");

}  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function  documentDwl(){
swal("SORRY","User has not uploaded the document.You will get it soon","info");
}

function scrollToAnchor(aid){
    var aTag = $("section[id='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},1200);
}


function scrollToAnchorHome(aid){
    var aTag = $("div[id='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top-100},1200);
}

$("#1h").click(function() {
   scrollToAnchor('skills');
});

$("#2h").click(function() {
   scrollToAnchor('education');
});

$("#3h").click(function() {
   scrollToAnchor('experience');
});
  
  
  $("#4h").click(function() {
   scrollToAnchor('interest');
});
  
  
  $("#5h").click(function() {
   scrollToAnchor('contact');
});
  
    $("#myBtnHome").click(function() {
   scrollToAnchorHome('topScroll');
});

	$("#myBtn").click(function() {
   scrollToAnchorHome('topScroll');
});	
  