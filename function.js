// problem on JS Hero
function add(str){
  let a = parseInt(str,10);
  let ind =str.indexOf('+');
  let b = parseInt(str.substr(ind,str.length+1));
  console.log(a+" "+b);

  return a+b;
  }

let str='102+17';
console.log(add(str));