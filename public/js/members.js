$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  const testListItem = {
    name: "Pony",
    UserId: 1
  };

  function submitListItem(item) {
    $.post("/api/items", item).then(data => {
      console.log(data);
    });
  }

  submitListItem(testListItem);
});
