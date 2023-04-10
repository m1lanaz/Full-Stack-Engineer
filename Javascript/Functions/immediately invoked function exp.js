const runOnce = function() {
    console.log("This'll never run again");
};
runOnce();


(function() {
    console.log("This will never run again");
})();

(() => console.log("This will never run again"))();

