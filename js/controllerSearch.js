window.addEventListener("load", show);
function show() {
  var search = document.getElementById("result");
  if (search.style.display === "none") {
    search.style.display = "flex";
  } else {
    search.style.display = "none";
  }
}
