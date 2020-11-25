$(document).ready(() => {
  // gets current user email and appends to HTML
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  // On event to add new user wish item to database
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
      $("#item").val("");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Click event to retrieve family member wish list.
  $(".family-member").click(function(event) {
    event.preventDefault();
    $("#familyWishList").empty();
    const memberId = $(this).data("id");
    const memberEmail = $(this)
      .text()
      .trim();
    $("#familyMemberName").text(memberEmail);
    $.get("api/items/" + memberId).then(data => {
      for (let i = 0; i < data.length; i++) {
        $("#familyWishList").append(
          `<li class="list-group-item"><a class="familyListItem ${data[i]
            .bought && "bought"}" data-id=${data[i].id}>${
            data[i].name
          }</a></li>`
        );
      }
      // Click event to update family member wish item to 'bought'
      $(".familyListItem").click(function(event) {
        event.preventDefault();
        const listItemId = $(this).data("id");
        console.log(listItemId);
        $.ajax({
          url: "/api/items/" + listItemId,
          data: { bought: true },
          method: "PUT"
        }).then(() => {
          // location.reload();
          $(this).addClass("bought");
        });
      });
    });
  });

  // On click event for delete button
  $(".delete").on("click", function(event) {
    event.preventDefault();
    const deleteId = $(this).data("id");
    console.log($(this).data());
    $.ajax({
      method: "DELETE",
      url: "/api/items/delete/" + deleteId
    }).then(() => {
      console.log("Deleted user item.");
      location.reload();
    });
  });
});
