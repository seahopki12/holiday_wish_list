$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $(".create-form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newItem = {
      name: $("#item")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/items", {
      type: "POST",
      data: newItem
    }).then(() => {
      console.log("added new item");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Click event to retrieve family member wish list.
  $(".family-member").click(function(event) {
    event.preventDefault();
    $("#familyWishList").empty();
    const memberId = $(this).data("id");
    $.get("api/items/" + memberId).then(data => {
      for (let i = 0; i < data.length; i++) {
        $("#familyWishList").append(
          `<li class="list-group-item"><a class="familyListItem" data-id=${data[i].id}>${data[i].name}</a></li>`
        );
      }
    });
  });

  // Write click event for update here
});
