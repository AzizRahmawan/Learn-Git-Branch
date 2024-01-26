// First Method
function countBy(x, n) {
    let z = [];
    let result = 0;
    for(let i = 1; i <= n; i++){
      result += x;
      z.push(result);
    }
    return z;
}