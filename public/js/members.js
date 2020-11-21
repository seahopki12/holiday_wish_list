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

  // $.get("/api/user").then(data => {
  //   console.log(data);
  //   for (let i = 0; i < data.length; i++ {
  //     $()
  //   });
  // });

  // function getUsers() {
  //   $.get("/api/user", data => {
  //     // const rowsToAdd = [];
  //     // for (let i = 0; i < data.length; i++) {
  //     //   rowsToAdd.push(createUserRow(data[i]));
  //     // }
  //     // renderUserList(rowsToAdd);
  //     // nameInput.val("");
  //   });
  // }

  // function renderAuthorList(rows) {
  //   authorList.children().not(":last").remove();
  //   authorContainer.children(".alert").remove();
  //   if (rows.length) {
  //     console.log(rows);
  //     authorList.prepend(rows);
  //   }
  //   else {
  //     renderEmpty();
  //   }
  // }

  // function createUserRow(userData) {
  //   let newLi = $("<li>");
  //   newLi.data("user", userData.id);
  //   newLi.append("<a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
  //   newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
  //   newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
  //   return newTr;
  // }

  // const testListItem = {
  //   name: "Pony",
  //   UserId: 1
  // };

  // function submitListItem(item) {
  //   $.post("/api/items", item).then(data => {
  //     console.log(data);
  //   });
  // }

  // submitListItem(testListItem);
});
