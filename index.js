const nemo = ["nemo"];
const large=new Array(10000).fill("nemo")

function findNemo(array) {
  //let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Nemo Found");
    }
    /*let j=8,k="8"
    if(j==k){console.log("not type strict match")}
    if(j===k){console.log("type strict match")} 
    else { console.log("type strict match failed") }*/
  }
  //let t1 = performance.now();
 //Console.log("Performance time in " + (t1 - t0) + " Millisocnds");
};

findNemo(large);
// O(n)-- Linear , operations increase acc to input