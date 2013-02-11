$(document).ready(function(){

  var formHandler = function(event){
    console.log("submitted"); // fixme: validate form here

    event.preventDefault(); // prevents the page from reloading


	  var errors = [];
	  var billamount = /^\d+(\.\d{1,2})?$/;
	  var ccnumber = /\d{16}/;
	  var ccv =/\d{3}/;
	  var expiration1 =/^\d{2}\/\d{2,4}$/;
	  var expiration2 =/^\d{2}\d{2,4}$/;
	  var zip = /^\d{5}(\-\d{4})?$/;
	  
	  if ($('#desc').val() == '') {
	  	errors.push("Please type in a description");
	  }

	  if (!billamount.test($('#amount').val()) ){
	  	errors.push("Not a valid price.");
	  }

	  if (!ccnumber.test($('#ccnumber').val())){
		errors.push("Not a valid credit card number, no spaces please");
	  }

	  if (!ccv.test($('#ccv').val())){
	  	errors.push("Not a valid CCV, no spaces please");
	  }

	  if ( !expiration1.test($('#expiration').val()) && !expiration2.test($('#expiration').val()) ) {
	    errors.push("Not a valid expiration date.");	
	  }

	  if ($('#name') == "") {
	  	errors.push("Please type in a cardholder's name.");
	  }

	  if ($('#address1') == "") {
	  	errors.push("Please type in an address.");
	  }

	  if ($('#city') == "") {
	  	errors.push("Please type in a city.");
	  }

	  if ($('#state') == "") {
	  	errors.push("Please type in a state.");
	  }

	  if (!zip.test( $('#zip').val() )) {
	  	errors.push("Please type in a zipcode.");
	  }

	  // If there are errors, print them in the Errors div
	  if (errors.length > 0 ){
	  	$('#errors').text("");
	  	for (var i = 0; i < errors.length; i++) {
	  		$('#errors').append("<span class='alert'>"+errors[i]+'</span><br/>');
	  	}
	  	$('.modal').modal('show');

	  }else{
	  	$('#errors').text("");
	  	$('.modal-header h3').text("No errors!");
	  	$('#errors').append("<span class='alert-success'>"+'All is well in the world'+'</span><br/>');
	  	$('.modal').modal('show');

	  }


  };


  $('#emailcheck').click(function(){
  	$('#email').slideToggle('slow');

});
  $("form").submit(formHandler); // register a callback
  $('#ccv').keydown(function(e){
	if($('#ccv').val().length ==3 )  {
		e.preventDefault();
	}	


  })


});