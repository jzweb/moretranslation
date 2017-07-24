$(document).ready(function(){
    var x=$('#parner1').offset();// conseguimos la ubicacion
    //alert(x.top);//mostramos ubicacion top (1874.8999938964844)

	$('#parner1').hide();
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 1000.8999938964844) {
	    $('#parner1').fadeIn();
	  }
	  else {
	    $('#parner1').fadeOut();
	  }
});

});