module.exports = function gcd(a, b) {
  //assumes that b is the smaller of the two
  
  //base case, if b gets passed in to the function as zero
  //then a is the least common denominator
  if(b === 0) {
    return a;
  }
  //recursively calls till we find our base case
  return gcd(b, a % b)
}
