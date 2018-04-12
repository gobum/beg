console.log("RUNNING ...");

beg("Test by normal function:", function(){
  beg(true);
  beg(!false);
});

beg("Test by async function:", async function(value){
  value = await beg.delay(1000, true);
  beg(value);
  value = await beg.delay(1000, false);
  beg(!value);
});