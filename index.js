const nemo = ["nemo"];
const boxes = [0,1];
const large=new Array(10000).fill("nemo")

function findNemo(array) {
 
  // Linear Opertion O(n) linear time
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Nemo Found");
    }
    /*let j=8,k="8"
    if(j==k){console.log("not type strict match")}
    if(j===k){console.log("type strict match")} 
    else { console.log("type strict match failed") }*/
  }
};

function WriteData(boxes)
{
  console.log(boxes[0]);
  console.log(boxes[1]);
}
// Big O notations
findNemo(nemo);
// O(n)-- Linear , operations increase acc to input- FAIR

WriteData(boxes);
// O(1)-- COnstant , Opertion is constant 
// irresptive of the input size EXCELLENT