//import CoffeeJelly from 'src/assets/Coffee-Jelly-4800-I-1.jpg'
//import { useId } from "react"

// let id1 = useId();
// let id2 = useId();
// let id3 = useId();

//where the array of recipes is currently stored
let Recipes = [
    {
        'title': "Coffee Jelly",
        'cooked': false, 
        'id': `1`, 
        'image': '/images/Coffee-Jelly-4800-I-1.jpg',
        'ingredients': [
            '2½ cups strong-brewed coffee ', 
            '1 stick packet kanten (agar) powder', 
            '⅓ cup sugar'
        ],
        'instructions': [
            'In a small saucepan, add 2½ cups strong-brewed coffee.', 
            'Whisk well and bring the mixture to a gentle boil over medium-high heat. Once boiling, reduce the heat to low and cook for 2 minutes, continuously whisking the mixture.', 
            'Turn off the heat. Add ⅓ cup sugar', 
            'Run a square or rectangular mold (I used a nagashikan that is 15 x 14 cm or about 6 x 5½ inches) under running tap water so the jelly doesn‘t stick. Shake off the excess water, but do not wipe it dry. Pour the hot mixture into the mold.', 
            'Remove the bubbles on the surface by quickly touching them with the flame from a butane torch (also called a kitchen torch) or a long-stemmed utility/candle lighter.', 
            'Once the coffee jelly cools down, cover it with a paper towel and plastic (or a silicone lid) and refrigerate for 4-5 hours.'
        ]
    },
    {
        'title': "Crockpot BBQ Pulled Chicken",
        'cooked': false, 
        'id': `2`, 
        'image': "/images/Crockpot-BBQ-Chicken1.jpg",
        'ingredients': [
            '3 lbs chicken breasts, (boneless, skinless), about 5-6 count', 
            '1 1/2 cups BBQ Sauce, I used Sweet Baby Rays Honey BBQ', 
            '1/2 medium onion, grated (with juice)', 
            '1 Tbsp olive oil', 
            '1 Tbsp Worcestershire sauce', 
            '2 Tbsp brown sugar'
        ],
        'instructions': [
            'Stir together all sauce ingredients in a 5-6 qt slow cooker.', 
            'Add chicken and turn to coat. Cover and cook on high for 2 to 3 hours or for 6 to 7 hours on low. Check on the chicken earlier if using smaller chicken pieces, if making a smaller batch, or if you know your slow cooker runs hot. Chicken is done when cooked through to an internal temperature of 165˚F and is easy to shred.', 
            'Remove chicken to a cutting board and shred each breast using two forks. Place shredded chicken back in the crock pot and stir to coat with the yummy sauce.'
        ]
    },
    {
        'title': "Tuscan Chicken Gnocchi", 
        'cooked': false, 
        'id': `3`, 
        'image': "/images/k_Photo_Recipes_2024-07-tuscan-chicken-gnocchi_Tuscan-Chicken-Gnocchi-.jpg",
        'ingredients': [
            '1 medium shallot', 
            '3 cloves garlic', 
            '1/2 cup drained oil-packed sun-dried tomatoes (2 1/2 ounces)', 
            '1 ounce Parmesan cheese (1/2 cup firmly packed freshly grated or 1/3 cup store-bought grated)', 
            '1 1/2 pounds boneless, skinless chicken thighs (about 6)', 
            '1 teaspoon kosher salt, divided', 
            '1/2 teaspoon freshly ground black pepper, plus more for serving', 
            '2 tablespoons olive oil, divided', 
            '1 tablespoon all-purpose flour', 
            '2 cups whole or 2% milk, plus more as needed', 
            '1 pound shelf-stable potato gnocchi', 
            '3 packed cups baby spinach (about 3 ounces)'
        ],
        'instructions': [
            'Finely dice 1 medium shallot (about 1/4 cup). Mince 3 garlic cloves. Thinly slice 1/2 cup drained oil-packed sun-dried tomatoes. Finely grate 1 ounce Parmesan cheese (about 1/2 packed cup) if needed, or measure out 1/3 cup store-bought grated.', 
            'Pat 1 1/2 pounds boneless, skinless chicken thighs dry with paper towels. Season all over with 1/2 teaspoon of the kosher salt and 1/2 teaspoon black pepper.', 
            'Heat 1 tablespoon of the olive oil in a 12-inch cast iron or high-sided nonstick skillet over medium-high heat. Add the chicken in a single layer and cook until deeply browned and an instant-read thermometer inserted into the thickest part registers 165°F, about 5 minutes per side. Transfer the chicken to a plate.', 
            'Reduce the heat to medium. Add the remaining 1 tablespoon olive oil and heat until shimmering. Add the shallot, garlic, sun-dried tomatoes, and remaining 1/2 teaspoon kosher salt. Cook until fragrant, about 1 minute. Sprinkle 1 tablespoon all-purpose flour evenly over the tomato mixture and cook until the flour begins to brown, 30 seconds to 1 minute. Add 2 cups whole or 2% milk and bring to a rapid simmer, stirring regularly.', 
            'Add 1 pound shelf-stable potato gnocchi (breaking the gnocchi apart if needed). Cook, stirring frequently, until the sauce is reduced slightly and thickened and the gnocchi is tender, about 3 minutes. Remove the skillet from the heat.', 
            'Add the Parmesan and 3 packed cups baby spinach. Stir until the cheese melts and the spinach wilts. If the sauce gets too thick, add more milk 1 tablespoon at a time until you reach the desired consistency. Nestle the chicken into the gnocchi mixture, and add any accumulated juices on the plate, before serving.'
        ]
    }
];

export default Recipes

//moved Recipe type to database to export easier instead of having it local in every file
export type Recipe =     {
    title: string, 
    cooked: boolean, 
    id: string, 
    image: string, 
    ingredients: Array<string>, 
    instructions: Array<string>
  }

/*empty object
    {
        'title': "", 
        'id': "", 
        'image': "", 
        'ingredients': [], 
        'instructions': []
    }
        */