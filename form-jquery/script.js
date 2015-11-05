(function() {
  $( document ).ready(function() {
      
      $("#register").submit( function() {
        
        var text = $("#email").val();
        console.log(text);
      
        if (text === "") {
          $("#register").before("<p>Email can't be blank!</p>");
        }
        //event.preventDefault();
          return false;
      });
      
  });

    
}());