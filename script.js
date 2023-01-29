var a = document.querySelector("#num");
var b = document.querySelector("#even");

b.addEventListener("click", function (e) {
  e.preventDefault();
  const result = Number(a.value);
  if (result % 2 == 0) {
    alert(result + "  is even ");
  } if else(result == 0){
alert("error no number found");
}
else {
    alert(result + "  is Odd ");
  }
});
