/*  Identify Prime Factors of a number n
 Step 1: Identify first prime number that divides n fully
 Step 2 (a): Push the first prime multiple to store []
 Step 2 (b): If both multiples are same, stop and return store []
 Step 3: If step 2(b) fails, repeat from step 1 for second multiple
*/

function primeFactors(n,result){
 for(var p=2; p<n/2; p++){
  if(isPrime(p)){
   var remainder = n%p, quotient = n/p;
   if(remainder == 0){
    result.push(p);
    if(isPrime(quotient)){
     result.push(quotient);
     console.log(result);
    } else {
     primeFactors(quotient, result);
    }
   }
  }
 }
};
 
 var isPrime = function(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n==leastFactor(n)) return true;
 return false;
}

// leastFactor(n)
// returns the smallest prime that divides n
//     NaN if n is NaN or Infinity
//      0  if n=0
//      1  if n=1, n=-1, or n is not an integer

var leastFactor = function(n){
 if (isNaN(n) || !isFinite(n)) return NaN;  
 if (n==0) return 0;  
 if (n%1 || n*n<2) return 1;
 if (n%2==0) return 2;  
 if (n%3==0) return 3;  
 if (n%5==0) return 5;  
 var m = Math.sqrt(n);
 for (var i=7;i<=m;i+=30) {
  if (n%i==0)      return i;
  if (n%(i+4)==0)  return i+4;
  if (n%(i+6)==0)  return i+6;
  if (n%(i+10)==0) return i+10;
  if (n%(i+12)==0) return i+12;
  if (n%(i+16)==0) return i+16;
  if (n%(i+22)==0) return i+22;
  if (n%(i+24)==0) return i+24;
 }
 return n;
}
