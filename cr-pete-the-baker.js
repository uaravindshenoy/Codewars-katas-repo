/* https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript */

/* Two objects, take all the properties of the recipe, check if they're 
available in the necessary quantities in the available 
quantities or at all, and if they are available, find out which is the 
lowest quantity.

so get all the properties, check for each property if it's available,
and if so how many whole multiples it is of the recipe value. capture that
minimum value and by the end return it.

can use a map function to iterate through the array.

reduce can be used to get a single value.

Writing the standard logic and then refactoring into map 
and reduce seems to be the better approach.

Writing some basic tests to test output at every level would have been good as well.

*/

function cakes(recipe, available) {
    let ingredients = Object.keys(recipe);
    let cakes;
    for(let i=0;i<ingredients.length; i++) {
        if(!available.hasOwnProperty(ingredients[i])) {return 0;}
        else {let new_cakes=Math.floor(available[ingredients[i]]/recipe[ingredients[i]]);
        if (i==0) cakes=new_cakes;
        else if(new_cakes<cakes) cakes=new_cakes;}
    }
    return cakes;
  }



/* function cakes(recipe, available) {
    let ingredients = recipe.keys;
    let cakenum = 0;
    return ingredients.reduce((checked_values,current_value)=> available.hasOwnProperty(current_value)?cake_num(available[current_value],recipe[current_value],cakenum))
  }

  function cake_num(available_quantity,required_quantity,current_cakes) {
let new_cakes=Math.floor(available_quantity/required_quantity);
if (new_cakes<=current_cakes)
return current_cakes;
return new_cakes;
  } */