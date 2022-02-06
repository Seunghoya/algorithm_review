function solution(n, m) {
  var answer = [];
  
  const gcf = (a, b) => {
      if (b === 0) return a;
      return gcf (b, a % b)
  }
  
  const lcm = (a, b) => (a * b) / gcf(a, b)
  
  answer.push(gcf(n, m))
  answer.push(lcm(n, m))
  return answer;
}

// 다른 사람 풀이
// 내가 여기까진 어떻게 이해해 보겠는데.. 이 다음부터는 머리가 아프다..

function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}


// 두통 유발 1
function gcdlcm(a, b) {
  var r;
  for(var ab= a*b;r = a % b;a = b, b = r){}
  return [b, ab/b];
}

// 두통 유발 2
function gcdlcm(a, b) {
  return ((x,y) => ((x, y, g) => [g, (x*y)/g ])(x, y, ((a, b) => ((x, y, f) => f(x, y, f))(a, b, ((x, y, f) => x % y == 0 ? y : f(y, x % y, f))))(x, y)))(a,b)
}