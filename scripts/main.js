// Next, you import that function into the main module. Then you can invoke the function and store the fish collection in a variable that is scoped to the main module. Then just log each fish object to the developer console.
import { getFish } from "./database.js";

const allFish = getFish();

for (const fish of allFish) {
  console.log(fish);
}
