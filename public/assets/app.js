
$(document).on("click", "#savecomment", function(event) {
    event.preventDefault();
    let thisId = $(this).attr("data-id");
$.ajax({
    method: "POST",
    url: "/article/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from body textarea
      body: $("#bodyinput").val()
    }
  })    
  .then(function(data) {
    // Log the response
    console.log(data);
  

  });
//   $("#titleinput").val("");
//   $("#bodyinput").val("");
});