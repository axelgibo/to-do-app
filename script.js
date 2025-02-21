$(document).ready(function () {
  function newItem(event) {
    event.preventDefault(); // Prevent form submission

    let inputValue = $("#input").val().trim();

    if (inputValue === "") {
      alert("You must write something!");
    } else {
      let li = $("<li></li>").text(inputValue);
      $("#list").append(li);

      // Double-click to toggle strikethrough
      li.on("dblclick", function () {
        li.toggleClass("strike");
      });

      // Create delete button
      let crossOutButton = $("<button></button>")
        .text("X")
        .attr("class", "delete-button");
      li.append(crossOutButton);

      // Click to remove item
      crossOutButton.on("click", function () {
        li.remove();
      });

      // Make list sortable
      $("#list").sortable();

      // Clear input field
      $("#input").val("");
    }
  }

  // Attach event to the form instead of just the button
  $("form").on("submit", newItem);
  $("#button").on("click", newItem); // Keep click functionality too
});
