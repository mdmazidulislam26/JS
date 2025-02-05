//!------------------IIFE-------------------
/** (IIF)(E) */

(function sayHi(){
    // named IIFE
    console.log(`HI`);
    
})();

((num) => {
    // named IIFE
    console.log(`Hello ${num}`);
    
})("mazid");

