// print something n times
let count = 0;
function recursion() {
  if (count === 4) return;
  console.log(count);
  count++;
  recursion();
}

recursion();
