import "/js/snow.js";
import "/js/flowers.js";

const today = new Date();
const winter = new Date(today.getFullYear(), 11, 21);
const spring = new Date(today.getFullYear(), 2, 22);

if (today < spring) {
    console.log("It's winter!");
}

console.log(today.toString());
console.log(winter.toString());
console.log(spring.toString());