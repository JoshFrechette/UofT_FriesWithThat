// jquery code goes here
$(function() {
    $(".change-state").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("newBurger");
  
      var newEatState = {
        devoured: true
      };
  
      // Update the burger state to "devoured"
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed burger state to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        choice: $("#burgs").val().trim(),
        devoured: false
      };
  
      // Add a new burger and send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });