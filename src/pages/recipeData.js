const recipeData = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      image: '/images/1.jpg',
      cookingTime: '20 min',
      level: 'Easy',
      calories: '600 kcal',
      ingredients: [
        '200g spaghetti',
        '100g pancetta',
        '2 large eggs',
        '50g pecorino cheese, grated',
        'Freshly ground black pepper',
        'Salt'
      ],
      steps: [
        'Bring a large pot of salted water to a boil and cook the spaghetti until al dente.',
        'In a pan, fry the pancetta over medium heat until crisp.',
        'Beat the eggs in a bowl and mix in the grated cheese and a generous amount of black pepper.',
        'Drain the pasta and quickly toss it with the pancetta and egg mixture to create a creamy sauce. Serve immediately.'
      ],
    },
    {
      id: 2,
      name: 'Chicken Curry',
      image: '/images/2.jpg',
      cookingTime: '45 min',
      level: 'Medium',
      calories: '450 kcal',
      ingredients: [
        '500g chicken pieces',
        '2 onions, finely chopped',
        '3 cloves garlic, minced',
        '1 tbsp grated ginger',
        '400ml coconut milk',
        '2 tbsp curry powder',
        '1 can tomato puree',
        'Salt and pepper',
        'Fresh cilantro for garnish'
      ],
      steps: [
        'Sauté the chopped onions, garlic, and ginger in a large pan until soft.',
        'Add the chicken pieces and brown on all sides.',
        'Mix in the curry powder and tomato puree; cook for 1 minute to develop the flavors.',
        'Pour in the coconut milk, bring to a simmer, and cook until the chicken is tender. Garnish with fresh cilantro and serve with rice.'
      ],
    },
    {
      id: 3,
      name: 'Grilled Lemon Herb Salmon',
      image: '/images/3.jpg',
      cookingTime: '30 min',
      level: 'Easy',
      calories: '380 kcal',
      ingredients: [
        '4 salmon fillets',
        '2 tbsp olive oil',
        '2 cloves garlic, minced',
        '1 tbsp fresh rosemary, chopped',
        '1 tbsp fresh thyme, chopped',
        'Zest and juice of 1 lemon',
        'Salt and black pepper to taste',
        'Lemon slices and parsley for garnish'
      ],
      steps: [
        'Preheat your grill or grill pan to medium-high heat.',
        'In a small bowl, mix olive oil, garlic, rosemary, thyme, lemon zest, lemon juice, salt, and pepper.',
        'Brush the marinade generously over the salmon fillets and let them sit for 10–15 minutes.',
        'Grill the salmon for about 4–5 minutes per side, or until the fish flakes easily with a fork.',
        'Serve hot with lemon slices and a sprinkle of fresh parsley.'
      ],
    }
    ,
    {
      id: 4,
      name: 'Vegetable Stir Fry',
      image: '/images/4.jpg',
      cookingTime: '15 min',
      level: 'Easy',
      calories: '300 kcal',
      ingredients: [
        '1 head broccoli, cut into florets',
        '1 red bell pepper, sliced',
        '2 carrots, julienned',
        '100g snap peas',
        '2 tbsp soy sauce',
        '1 tbsp sesame oil',
        '2 cloves garlic, minced',
        '1 tsp grated ginger'
      ],
      steps: [
        'Heat the sesame oil in a wok over high heat and add the minced garlic and ginger.',
        'Add the broccoli, bell pepper, carrots, and snap peas; stir fry for 5-6 minutes until just tender.',
        'Drizzle with soy sauce, toss well, and serve immediately over rice or noodles.'
      ],
    },
    {
      id: 5,
      name: 'Margherita Pizza',
      image: '/images/5.jpg',
      cookingTime: '30 min',
      level: 'Medium',
      calories: '800 kcal',
      ingredients: [
        'Pizza dough',
        '200ml tomato sauce',
        '150g mozzarella cheese, sliced',
        'Fresh basil leaves',
        'Olive oil',
        'Salt'
      ],
      steps: [
        'Preheat your oven to 220°C (428°F).',
        'Roll out the pizza dough on a floured surface and spread the tomato sauce evenly.',
        'Arrange mozzarella slices on top and sprinkle lightly with salt.',
        'Bake for 12-15 minutes until the crust is golden and the cheese is bubbly. Garnish with fresh basil leaves and a drizzle of olive oil before serving.'
      ],
    },
    {
      id: 6,
      name: 'Caesar Salad',
      image: '/images/6.jpg',
      cookingTime: '10 min',
      level: 'Easy',
      calories: '200 kcal',
      ingredients: [
        'Romaine lettuce, torn into pieces',
        'Croutons',
        '50g Parmesan cheese, grated',
        'Caesar dressing',
        'Anchovies (optional)'
      ],
      steps: [
        'Wash and dry the romaine lettuce thoroughly.',
        'Toss the lettuce with Caesar dressing in a large bowl until well coated.',
        'Sprinkle with croutons and grated Parmesan cheese.',
        'Optionally, top with anchovy fillets. Serve immediately.'
      ],
    },
    {
      id: 7,
      name: 'Grilled Salmon',
      image: '/images/7.jpg',
      cookingTime: '20 min',
      level: 'Medium',
      calories: '400 kcal',
      ingredients: [
        '2 salmon fillets',
        '1 lemon, sliced',
        '2 tbsp olive oil',
        'Salt and pepper',
        'Fresh dill'
      ],
      steps: [
        'Preheat your grill to medium-high heat.',
        'Brush the salmon fillets with olive oil and season with salt and pepper.',
        'Grill the salmon for 4-5 minutes on each side until it flakes easily with a fork.',
        'Serve with lemon slices and garnish with fresh dill.'
      ],
    },
    {
      id: 8,
      name: 'Pasta Primavera',
      image: '/images/8.jpg',
      cookingTime: '30 min',
      level: 'Medium',
      calories: '500 kcal',
      ingredients: [
        '250g pasta (penne or farfalle)',
        '1 cup cherry tomatoes, halved',
        '1 zucchini, sliced',
        '1 red bell pepper, chopped',
        '2 cloves garlic, minced',
        '2 tbsp olive oil',
        '50g Parmesan cheese, grated',
        'Salt and pepper'
      ],
      steps: [
        'Cook the pasta in salted boiling water until al dente, then drain.',
        'Heat olive oil in a pan and sauté the garlic until fragrant.',
        'Add the cherry tomatoes, zucchini, and bell pepper, cooking until just tender.',
        'Toss the pasta with the vegetables and sprinkle with Parmesan cheese, salt, and pepper to taste.'
      ],
    },
    {
      id: 9,
      name: 'Tacos',
      image: '/images/9.jpg',
      cookingTime: '15 min',
      level: 'Easy',
      calories: '300 kcal',
      ingredients: [
        '8 taco shells',
        '500g ground beef',
        '1 cup shredded lettuce',
        '1 tomato, diced',
        '100g cheddar cheese, shredded',
        'Salsa',
        'Sour cream',
        'Taco seasoning'
      ],
      steps: [
        'Brown the ground beef in a skillet and stir in taco seasoning.',
        'Warm the taco shells in the oven or microwave.',
        'Fill each taco shell with beef, lettuce, tomato, and cheddar cheese.',
        'Top with a dollop of salsa and sour cream, and serve immediately.'
      ],
    },
    {
      id: 10,
      name: 'Baked Ziti',
      image: '/images/10.jpg',
      cookingTime: '45 min',
      level: 'Medium',
      calories: '650 kcal',
      ingredients: [
        '400g ziti pasta',
        '500ml marinara sauce',
        '200g ricotta cheese',
        '150g mozzarella cheese, shredded',
        '50g Parmesan cheese, grated',
        'Fresh basil',
        'Salt and pepper'
      ],
      steps: [
        'Preheat the oven to 180°C (356°F).',
        'Cook the ziti pasta until al dente and drain.',
        'Mix the pasta with marinara sauce and ricotta cheese.',
        'Transfer the mixture into a baking dish, top with mozzarella and Parmesan, and bake for 20-25 minutes until bubbly. Garnish with fresh basil before serving.'
      ],
    },
    {
      id: 11,
      name: 'Chicken Alfredo',
      image: '/images/11.jpg',
      cookingTime: '30 min',
      level: 'Medium',
      calories: '700 kcal',
      ingredients: [
        '300g fettuccine pasta',
        '2 chicken breasts, sliced',
        '200ml heavy cream',
        '50g butter',
        '2 cloves garlic, minced',
        '100g Parmesan cheese, grated',
        'Salt and pepper'
      ],
      steps: [
        'Cook the fettuccine in salted water until al dente, then drain.',
        'Sauté the chicken slices in a pan until browned and cooked through.',
        'In another pan, melt butter, add garlic and then heavy cream, bringing it to a simmer.',
        'Stir in the Parmesan cheese until the sauce thickens, then mix with the pasta and chicken. Season with salt and pepper and serve hot.'
      ],
    },
    {
      id: 12,
      name: 'Egg Salad Sandwich',
      image: '/images/12.jpg',
      cookingTime: '15 min',
      level: 'Easy',
      calories: '350 kcal',
      ingredients: [
        '6 hard-boiled eggs, chopped',
        '3 tbsp mayonnaise',
        '1 tsp Dijon mustard',
        '1 celery stalk, diced',
        'Salt and pepper',
        '4 slices of whole grain bread'
      ],
      steps: [
        'In a bowl, mix the chopped eggs with mayonnaise, Dijon mustard, and diced celery.',
        'Season with salt and pepper to taste.',
        'Spread the egg salad evenly between slices of bread to form sandwiches.',
        'Serve immediately or chilled.'
      ],
    },
    {
      id: 13,
      name: 'Vegetable Soup',
      image: '/images/13.jpg',
      cookingTime: '1 hour',
      level: 'Easy',
      calories: '250 kcal',
      ingredients: [
        '1 onion, chopped',
        '2 carrots, diced',
        '2 celery stalks, chopped',
        '3 tomatoes, peeled and chopped',
        '1 cup green beans, trimmed',
        '500ml vegetable broth',
        '2 cloves garlic, minced',
        'Salt, pepper, and mixed herbs'
      ],
      steps: [
        'In a large pot, sauté onion and garlic until soft.',
        'Add carrots, celery, and tomatoes, cooking for 10 minutes.',
        'Pour in the vegetable broth and add green beans and herbs.',
        'Simmer for 40-50 minutes until all vegetables are tender. Season with salt and pepper and serve hot.'
      ],
    },
    {
      id: 14,
      name: 'Chicken Schnitzel',
      image: '/images/14.jpg',
      cookingTime: '30 min',
      level: 'Medium',
      calories: '550 kcal',
      ingredients: [
        '4 chicken breasts, pounded thin',
        '1 cup flour',
        '2 eggs, beaten',
        '1 cup breadcrumbs',
        'Salt, pepper, and paprika',
        'Vegetable oil for frying'
      ],
      steps: [
        'Season the chicken breasts with salt, pepper, and paprika.',
        'Dredge each piece in flour, dip in the beaten eggs, and coat well with breadcrumbs.',
        'Fry in hot oil for 3-4 minutes per side until golden and cooked through.',
        'Drain on paper towels and serve with a squeeze of lemon.'
      ],
    },
    {
      id: 15,
      name: 'Lemon Garlic Shrimp',
      image: '/images/15.jpg',
      cookingTime: '20 min',
      level: 'Easy',
      calories: '400 kcal',
      ingredients: [
        '500g shrimp, peeled and deveined',
        '2 cloves garlic, minced',
        'Juice of 1 lemon',
        '2 tbsp olive oil',
        'Salt, pepper, and chopped parsley'
      ],
      steps: [
        'Heat olive oil in a pan over medium heat and add minced garlic. Sauté until fragrant.',
        'Add the shrimp and cook for 2-3 minutes per side until they turn pink.',
        'Drizzle with lemon juice, season with salt and pepper, and garnish with chopped parsley before serving.'
      ],
    },
    {
      id: 16,
      name: 'Mushroom Risotto',
      image: '/images/16.jpg',
      cookingTime: '45 min',
      level: 'Medium',
      calories: '650 kcal',
      ingredients: [
        '200g Arborio rice',
        '200g mushrooms, sliced',
        '1 onion, finely chopped',
        '2 cloves garlic, minced',
        '750ml vegetable broth, kept warm',
        '100ml white wine',
        '50g Parmesan cheese, grated',
        '2 tbsp butter',
        'Salt and pepper'
      ],
      steps: [
        'Melt butter in a large pan and sauté the chopped onion and garlic until translucent.',
        'Add the Arborio rice and toast for 2 minutes.',
        'Pour in white wine, stirring until almost fully absorbed.',
        'Gradually add warm vegetable broth, stirring constantly until the rice becomes creamy and tender.',
        'Mix in the mushrooms and Parmesan cheese, season with salt and pepper, and serve hot.'
      ],
    },
    {
      id: 17,
      name: 'Bolognese',
      image: '/images/17.jpg',
      cookingTime: '1 hour',
      level: 'Hard',
      calories: '700 kcal',
      ingredients: [
        '500g ground beef',
        '1 onion, chopped',
        '2 carrots, diced',
        '2 celery stalks, diced',
        '3 cloves garlic, minced',
        '400g canned tomatoes',
        '100ml red wine',
        'Salt, pepper, and Italian herbs'
      ],
      steps: [
        'Sauté the onion, carrots, celery, and garlic in a large pot until softened.',
        'Add the ground beef and cook until browned.',
        'Pour in the red wine and let it reduce for 2 minutes.',
        'Add the canned tomatoes and herbs, then simmer on low heat for 45-60 minutes until the sauce thickens. Adjust salt and pepper before serving.'
      ],
    },
    {
      id: 18,
      name: 'BBQ Ribs',
      image: '/images/18.jpg',
      cookingTime: '2 hours',
      level: 'Hard',
      calories: '800 kcal',
      ingredients: [
        '1 rack of pork ribs',
        'Your favorite BBQ sauce',
        'Salt, pepper, and garlic powder'
      ],
      steps: [
        'Preheat the oven to 150°C (300°F).',
        'Season the ribs generously with salt, pepper, and garlic powder.',
        'Wrap the ribs tightly in foil and bake for 1.5 hours until tender.',
        'Remove the foil, brush with BBQ sauce, and grill for 10 minutes until caramelized. Allow to rest slightly before serving.'
      ],
    },
    {
      id: 19,
      name: 'Fish Tacos',
      image: '/images/19.jpg',
      cookingTime: '25 min',
      level: 'Medium',
      calories: '350 kcal',
      ingredients: [
        '400g white fish fillets',
        '8 small tortillas',
        'Shredded cabbage',
        '1 avocado, sliced',
        'Lime wedges',
        'Sour cream',
        'Taco seasoning'
      ],
      steps: [
        'Season the fish with taco seasoning and grill until cooked through, about 3-4 minutes per side.',
        'Warm the tortillas and fill with fish, shredded cabbage, and avocado slices.',
        'Top with a dollop of sour cream and serve with lime wedges.'
      ],
    },
    {
      id: 20,
      name: 'Caprese Salad',
      image: '/images/20.jpg',
      cookingTime: '10 min',
      level: 'Easy',
      calories: '250 kcal',
      ingredients: [
        '3 ripe tomatoes, sliced',
        '200g fresh mozzarella, sliced',
        'Fresh basil leaves',
        'Olive oil',
        'Balsamic vinegar',
        'Salt and pepper'
      ],
      steps: [
        'Arrange the tomato and mozzarella slices alternately on a plate.',
        'Scatter fresh basil leaves on top.',
        'Drizzle with olive oil and balsamic vinegar, and season with salt and pepper.',
        'Serve immediately.'
      ],
    },
    {
      id: 21,
      name: 'Falafel Wrap',
      image: '/images/21.jpg',
      cookingTime: '35 min',
      level: 'Medium',
      calories: '500 kcal',
      ingredients: [
        '400g chickpeas (soaked overnight)',
        '1 onion, chopped',
        '3 cloves garlic, minced',
        'Fresh parsley and coriander, chopped',
        '1 tsp cumin',
        'Salt and pepper',
        'Pita bread or flatbread',
        'Tahini sauce',
        'Lettuce and tomato slices'
      ],
      steps: [
        'Blend the soaked chickpeas with onion, garlic, herbs, cumin, salt, and pepper until a coarse mixture forms.',
        'Form small patties with the mixture and fry in hot oil until golden brown.',
        'Stuff the pita bread with falafel, lettuce, tomato, and drizzle with tahini sauce. Serve warm.'
      ],
    },
    {
      id: 22,
      name: 'Lamb Chops',
      image: '/images/22.jpg',
      cookingTime: '30 min',
      level: 'Medium',
      calories: '600 kcal',
      ingredients: [
        '6 lamb chops',
        '2 tbsp olive oil',
        '2 cloves garlic, minced',
        'Fresh rosemary',
        'Salt and pepper',
        'Lemon wedges'
      ],
      steps: [
        'Rub the lamb chops with olive oil, garlic, rosemary, salt, and pepper.',
        'Grill over high heat for 3-4 minutes per side until desired doneness is reached.',
        'Serve with lemon wedges and a side of roasted vegetables.'
      ],
    },
    {
      id: 23,
      name: 'Pumpkin Soup',
      image: '/images/23.jpg',
      cookingTime: '40 min',
      level: 'Easy',
      calories: '300 kcal',
      ingredients: [
        '1 small pumpkin, peeled and cubed',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '500ml vegetable broth',
        '100ml cream',
        'Nutmeg, salt, and pepper'
      ],
      steps: [
        'Sauté the onion and garlic in a large pot until soft.',
        'Add the pumpkin cubes and vegetable broth, and simmer until the pumpkin is tender.',
        'Blend the soup until smooth, stir in the cream, and season with nutmeg, salt, and pepper. Heat through and serve.'
      ],
    },
    {
      id: 24,
      name: 'Quinoa Salad',
      image: '/images/24.jpg',
      cookingTime: '25 min',
      level: 'Easy',
      calories: '350 kcal',
      ingredients: [
        '1 cup quinoa',
        '2 cups water or vegetable broth',
        '1 cucumber, diced',
        '2 tomatoes, diced',
        '1 red onion, finely chopped',
        'Fresh parsley, chopped',
        'Lemon juice',
        'Olive oil',
        'Salt and pepper'
      ],
      steps: [
        'Rinse the quinoa and cook it in water or broth until fluffy, then let it cool.',
        'Combine the quinoa with cucumber, tomatoes, red onion, and parsley.',
        'Drizzle with lemon juice and olive oil, season with salt and pepper, and toss well before serving.'
      ],
    },
    {
      id: 25,
      name: 'Shrimp Scampi',
      image: '/images/25.jpg',
      cookingTime: '25 min',
      level: 'Medium',
      calories: '450 kcal',
      ingredients: [
        '500g shrimp, peeled and deveined',
        '3 cloves garlic, minced',
        '50g butter',
        '50ml white wine',
        'Juice of 1 lemon',
        'Fresh parsley, chopped',
        'Salt and pepper'
      ],
      steps: [
        'Melt the butter in a large pan over medium heat, and sauté the garlic until fragrant.',
        'Add the shrimp and cook until they turn pink on both sides.',
        'Pour in the white wine and lemon juice, simmer for 2-3 minutes until slightly reduced.',
        'Season with salt and pepper, stir in fresh parsley, and serve over pasta or rice.'
      ],
    },
    {
      id: 26,
      name: 'Pancakes',
      image: '/images/26.jpg',
      cookingTime: '20 min',
      level: 'Easy',
      calories: '350 kcal',
      ingredients: [
        '1 cup flour',
        '1 cup milk',
        '1 egg',
        '2 tbsp sugar',
        '1 tsp baking powder',
        'A pinch of salt',
        'Butter for cooking'
      ],
      steps: [
        'In a large bowl, whisk together the flour, sugar, baking powder, and salt.',
        'Add the milk and egg, stirring until smooth.',
        'Heat a non-stick pan and melt a small amount of butter.',
        'Pour ladlefuls of batter onto the pan, cook until bubbles form, then flip and cook the other side until golden. Serve with your favorite syrup.'
      ],
    },
    {
      id: 27,
      name: 'French Toast',
      image: '/images/27.jpg',
      cookingTime: '15 min',
      level: 'Easy',
      calories: '300 kcal',
      ingredients: [
        '4 slices of bread',
        '2 eggs',
        '1/2 cup milk',
        '1 tsp cinnamon',
        '1 tsp vanilla extract',
        'Butter for frying',
        'Maple syrup'
      ],
      steps: [
        'In a shallow dish, beat the eggs, milk, cinnamon, and vanilla extract together.',
        'Dip each bread slice in the mixture, ensuring both sides are well coated.',
        'Fry the bread slices in butter over medium heat until both sides are golden brown.',
        'Serve hot with maple syrup drizzled on top.'
      ],
    },
    {
      id: 28,
      name: 'Chocolate Cake',
      image: '/images/28.jpg',
      cookingTime: '1 hour',
      level: 'Hard',
      calories: '900 kcal',
      ingredients: [
        '200g flour',
        '200g sugar',
        '75g cocoa powder',
        '1 tsp baking powder',
        '1 tsp baking soda',
        '2 eggs',
        '240ml milk',
        '120ml vegetable oil',
        '1 tsp vanilla extract',
        '240ml boiling water'
      ],
      steps: [
        'Preheat your oven to 180°C (350°F) and grease a cake pan.',
        'Mix the flour, sugar, cocoa powder, baking powder, and baking soda in a large bowl.',
        'Add eggs, milk, vegetable oil, and vanilla extract; mix until the batter is smooth.',
        'Gradually stir in the boiling water until well combined.',
        'Pour the batter into the pan and bake for 35-40 minutes until a toothpick inserted into the center comes out clean. Allow the cake to cool before serving.'
      ],
    },
    {
      id: 29,
      name: 'Vanilla Ice Cream',
      image: '/images/29.jpg',
      cookingTime: '4 hours (plus freezing time)',
      level: 'Medium',
      calories: '300 kcal per serving',
      ingredients: [
        '2 cups heavy cream',
        '1 cup whole milk',
        '3/4 cup sugar',
        '1 vanilla bean (or 2 tsp vanilla extract)',
        'A pinch of salt'
      ],
      steps: [
        'In a saucepan, combine heavy cream, milk, and sugar. Heat until the sugar dissolves completely.',
        'If using a vanilla bean, split it open and scrape the seeds into the mixture; if using extract, add it later.',
        'Cool the mixture completely, then churn in an ice cream maker according to the manufacturer’s instructions.',
        'Transfer the ice cream to a container and freeze for at least 2 hours before serving.'
      ],
    },
    {
      id: 30,
      name: 'Apple Pie',
      image: '/images/30.jpg',
      cookingTime: '1 hour 15 min',
      level: 'Medium',
      calories: '450 kcal per slice',
      ingredients: [
        'Pie crust (homemade or store-bought)',
        '6 apples, peeled, cored, and sliced',
        '3/4 cup sugar',
        '2 tsp cinnamon',
        '1/4 tsp nutmeg',
        '2 tbsp flour',
        '1 tbsp lemon juice'
      ],
      steps: [
        'Preheat the oven to 190°C (375°F).',
        'In a large bowl, mix the sliced apples with sugar, cinnamon, nutmeg, flour, and lemon juice.',
        'Fill the pie crust with the apple mixture and cover with a top crust or a lattice design.',
        'Bake for 50-60 minutes until the crust is golden and the apples are soft. Let cool before serving.'
      ],
    },
    {
      id: 31,
      name: 'Banana Bread',
      image: '/images/31.jpg',
      cookingTime: '1 hour',
      level: 'Easy',
      calories: '350 kcal per slice',
      ingredients: [
        '3 ripe bananas, mashed',
        '1/3 cup melted butter',
        '1 cup sugar',
        '1 beaten egg',
        '1 tsp vanilla extract',
        '1 tsp baking soda',
        'A pinch of salt',
        '1 1/2 cups flour'
      ],
      steps: [
        'Preheat the oven to 175°C (350°F) and grease a loaf pan.',
        'Mix mashed bananas with melted butter in a large bowl.',
        'Stir in the sugar, beaten egg, and vanilla extract.',
        'Sprinkle in the baking soda and salt, then fold in the flour until just combined.',
        'Pour the batter into the loaf pan and bake for 60-65 minutes until a toothpick inserted in the center comes out clean. Cool before slicing.'
      ],
    },
    {
      id: 32,
      name: 'Veggie Burger',
      image: '/images/32.jpg',
      cookingTime: '30 min',
      level: 'Medium',
      calories: '500 kcal',
      ingredients: [
        '1 can black beans, drained and mashed',
        '1/2 cup breadcrumbs',
        '1/4 cup chopped onion',
        '1/4 cup grated carrot',
        '1 egg',
        '1 tsp cumin',
        'Salt and pepper',
        'Burger buns',
        'Lettuce, tomato, and condiments of choice'
      ],
      steps: [
        'Combine mashed black beans, breadcrumbs, chopped onion, grated carrot, egg, and cumin in a bowl. Season with salt and pepper.',
        'Form the mixture into patties and cook in a lightly oiled skillet for 4-5 minutes on each side until heated through.',
        'Assemble the patties in burger buns with lettuce, tomato, and your preferred condiments, then serve immediately.'
      ],
    },
    {
      id: 33,
      name: 'Grilled Cheese Sandwich',
      image: '/images/33.jpg',
      cookingTime: '10 min',
      level: 'Easy',
      calories: '400 kcal',
      ingredients: [
        '2 slices of bread',
        '2 slices of cheddar cheese',
        'Butter'
      ],
      steps: [
        'Butter one side of each slice of bread generously.',
        'Place the cheese between the unbuttered sides of the bread.',
        'Cook in a skillet over medium heat until the bread is golden brown and the cheese has melted.',
        'Slice and serve immediately.'
      ],
    },
    {
      id: 34,
      name: 'Tomato Basil Soup',
      image: '/images/34.jpg',
      cookingTime: '35 min',
      level: 'Easy',
      calories: '300 kcal',
      ingredients: [
        '1 kg tomatoes, chopped',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '2 cups vegetable broth',
        '1/2 cup fresh basil leaves',
        'Olive oil, salt, and pepper'
      ],
      steps: [
        'Sauté the chopped onion and garlic in olive oil until soft.',
        'Add the tomatoes and cook for 15 minutes until they break down.',
        'Pour in vegetable broth and simmer for 10 minutes.',
        'Blend the soup until smooth, stir in fresh basil, and season with salt and pepper before serving.'
      ],
    },
    {
      id: 35,
      name: 'Curry Lentils',
      image: '/images/35.jpg',
      cookingTime: '40 min',
      level: 'Easy',
      calories: '350 kcal',
      ingredients: [
        '1 cup red lentils, rinsed',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 tbsp grated ginger',
        '1 can diced tomatoes',
        '1 cup coconut milk',
        '2 tbsp curry powder',
        'A handful of fresh spinach (optional)',
        'Salt and pepper'
      ],
      steps: [
        'Sauté the onion, garlic, and ginger in a pot until soft.',
        'Add the lentils, diced tomatoes, coconut milk, and curry powder.',
        'Bring to a simmer and cook for 25-30 minutes until the lentils are tender.',
        'Stir in spinach if using, adjust salt and pepper, and serve hot.'
      ],
    },
    {
      id: 36,
      name: 'Spinach Lasagna',
      image: '/images/36.jpg',
      cookingTime: '1 hour',
      level: 'Hard',
      calories: '650 kcal',
      ingredients: [
        'Lasagna sheets',
        '500g spinach, sautéed',
        '250g ricotta cheese',
        '200g mozzarella cheese, shredded',
        '1 jar marinara sauce',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        'Salt, pepper, and Italian herbs'
      ],
      steps: [
        'Preheat the oven to 180°C (350°F).',
        'Layer lasagna sheets with marinara sauce, sautéed spinach, ricotta, and mozzarella in a baking dish.',
        'Repeat layers and finish with a cheese topping.',
        'Cover with foil and bake for 40 minutes, then uncover and bake for another 10 minutes until bubbly. Let rest before cutting.'
      ],
    },
    {
      id: 37,
      name: 'Pesto Pasta',
      image: '/images/37.jpg',
      cookingTime: '25 min',
      level: 'Easy',
      calories: '550 kcal',
      ingredients: [
        '300g pasta (any shape)',
        '1 cup basil pesto',
        '50g pine nuts',
        '50g Parmesan cheese, grated',
        'Salt and pepper'
      ],
      steps: [
        'Cook the pasta in salted water until al dente, then drain.',
        'Return the pasta to the pot and stir in the basil pesto until evenly coated.',
        'Top with pine nuts and Parmesan cheese, season with salt and pepper, and serve immediately.'
      ],
    },
    {
      id: 38,
      name: 'Roast Chicken',
      image: '/images/38.jpg',
      cookingTime: '1 hour 30 min',
      level: 'Medium',
      calories: '700 kcal',
      ingredients: [
        '1 whole chicken (about 1.5kg)',
        '2 tbsp olive oil',
        '4 cloves garlic, crushed',
        'Fresh rosemary and thyme',
        '1 lemon, halved',
        'Salt and pepper'
      ],
      steps: [
        'Preheat the oven to 200°C (400°F).',
        'Rub the chicken thoroughly with olive oil, garlic, rosemary, thyme, salt, and pepper.',
        'Place the chicken in a roasting pan with the lemon halves inside the cavity.',
        'Roast for 1 hour 15 minutes to 1 hour 30 minutes until the chicken is cooked through and the skin is crispy. Let it rest before carving.'
      ],
    },
    {
      id: 39,
      name: 'Stuffed Peppers',
      image: '/images/39.jpg',
      cookingTime: '45 min',
      level: 'Medium',
      calories: '550 kcal',
      ingredients: [
        '4 large bell peppers, tops cut off and seeded',
        '250g ground turkey',
        '1 cup cooked rice',
        '1 onion, chopped',
        '1 cup tomato sauce',
        '1 tsp cumin',
        'Salt and pepper',
        'Cheddar cheese, shredded (optional)'
      ],
      steps: [
        'Preheat the oven to 180°C (350°F).',
        'Sauté the chopped onion until soft, then add ground turkey and cook until browned.',
        'Mix in the cooked rice, tomato sauce, and cumin. Season with salt and pepper.',
        'Fill each bell pepper with the mixture, top with cheddar cheese if desired, and bake for 30-35 minutes until the peppers are tender.'
      ],
    },
    {
      id: 40,
      name: 'Zucchini Noodles',
      image: '/images/40.jpg',
      cookingTime: '20 min',
      level: 'Easy',
      calories: '300 kcal',
      ingredients: [
        '4 medium zucchinis, spiralized',
        '1 cup cherry tomatoes, halved',
        '2 cloves garlic, minced',
        '2 tbsp olive oil',
        '50g Parmesan cheese, grated',
        'Salt and pepper',
        'Fresh basil leaves'
      ],
      steps: [
        'Heat olive oil in a pan and sauté garlic until fragrant.',
        'Add the cherry tomatoes and cook until just soft.',
        'Toss in the zucchini noodles and cook for 2-3 minutes until slightly tender.',
        'Season with salt and pepper, then top with grated Parmesan and fresh basil before serving.'
      ],
    },
    {
      id: 41,
      name: 'Fajitas',
      image: '/images/41.jpg',
      cookingTime: '30 min',
      level: 'Medium',
      calories: '500 kcal',
      ingredients: [
        '500g chicken or beef strips',
        '2 bell peppers, sliced',
        '1 onion, sliced',
        'Tortillas',
        'Fajita seasoning',
        '2 tbsp olive oil',
        'Lime wedges',
        'Optional: sour cream and salsa'
      ],
      steps: [
        'Toss the meat and vegetables with olive oil and fajita seasoning.',
        'Sauté in a hot pan over high heat until the meat is cooked and the vegetables are tender.',
        'Warm the tortillas separately, then fill with the meat and vegetables.',
        'Serve with lime wedges, and top with sour cream and salsa if desired.'
      ],
    },
    {
      id: 42,
      name: 'Sushi Rolls',
      image: '/images/42.jpg',
      cookingTime: '50 min',
      level: 'Hard',
      calories: '400 kcal',
      ingredients: [
        '2 cups sushi rice, cooked and seasoned',
        'Nori sheets',
        'Fillings: cucumber, avocado, and cooked shrimp or imitation crab',
        'Soy sauce, wasabi, and pickled ginger for serving'
      ],
      steps: [
        'Place a nori sheet on a bamboo mat and spread a thin layer of sushi rice evenly over it.',
        'Arrange your chosen fillings along one edge of the rice-covered nori.',
        'Roll the nori tightly using the bamboo mat, and slice into bite-sized pieces.',
        'Serve with soy sauce, wasabi, and pickled ginger.'
      ],
    },
    {
      id: 43,
      name: 'Pad Thai',
      image: '/images/43.jpg',
      cookingTime: '30 min',
      level: 'Medium',
      calories: '550 kcal',
      ingredients: [
        '200g rice noodles',
        '200g shrimp or tofu, cubed',
        '2 eggs, lightly beaten',
        '1 cup bean sprouts',
        '2 cloves garlic, minced',
        '3 tbsp tamarind paste',
        '3 tbsp fish sauce',
        '2 tbsp sugar',
        'Peanuts, crushed',
        'Lime wedges'
      ],
      steps: [
        'Soak the rice noodles in warm water until softened; drain thoroughly.',
        'Heat a wok and stir-fry garlic until fragrant, then add shrimp or tofu and cook until done.',
        'Push the ingredients aside and scramble the eggs in the wok.',
        'Add the noodles along with tamarind paste, fish sauce, and sugar. Toss everything together.',
        'Mix in bean sprouts, top with crushed peanuts and lime wedges, and serve immediately.'
      ],
    },
    {
      id: 44,
      name: 'Clam Chowder',
      image: '/images/44.jpg',
      cookingTime: '45 min',
      level: 'Medium',
      calories: '400 kcal',
      ingredients: [
        '500g clams with juices',
        '2 potatoes, peeled and cubed',
        '1 onion, chopped',
        '2 celery stalks, chopped',
        '500ml clam juice or fish broth',
        '200ml cream',
        '2 tbsp butter',
        'Salt, pepper, and thyme'
      ],
      steps: [
        'Melt butter in a large pot and sauté the chopped onion and celery until softened.',
        'Add the cubed potatoes and pour in the clam juice. Bring to a simmer.',
        'Cook until the potatoes are tender, then add the clams and cream.',
        'Season with thyme, salt, and pepper, and simmer for a few minutes before serving.'
      ],
    },
    {
      id: 45,
      name: 'Chicken Pot Pie',
      image: '/images/45.jpg',
      cookingTime: '1 hour',
      level: 'Medium',
      calories: '600 kcal',
      ingredients: [
        '500g chicken, cooked and shredded',
        '1 cup mixed vegetables (peas, carrots, corn)',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 cup chicken broth',
        '1/2 cup cream',
        '2 tbsp flour',
        'Pie crust (top and bottom)',
        'Salt, pepper, and thyme'
      ],
      steps: [
        'Preheat the oven to 190°C (375°F).',
        'Sauté the chopped onion and garlic until soft, then stir in flour.',
        'Add chicken broth and cream gradually to form a thick sauce.',
        'Mix in shredded chicken and mixed vegetables, and season with thyme, salt, and pepper.',
        'Fill a pie dish with the mixture, cover with pie crust, seal the edges, and bake for 30-35 minutes until golden brown. Let it rest before serving.'
      ],
    },
    {
      id: 46,
      name: 'Minestrone Soup',
      image: '/images/46.jpg',
      cookingTime: '1 hour',
      level: 'Medium',
      calories: '300 kcal',
      ingredients: [
        '1 onion, chopped',
        '2 carrots, diced',
        '2 celery stalks, diced',
        '2 tomatoes, chopped',
        '1 cup green beans, trimmed',
        '1 cup kidney beans, drained',
        '1 cup small pasta shapes',
        '1 liter vegetable broth',
        'Olive oil, salt, pepper, and Italian herbs'
      ],
      steps: [
        'Heat olive oil in a large pot and sauté the chopped onion, carrots, and celery until soft.',
        'Add tomatoes, green beans, and kidney beans, then pour in the vegetable broth.',
        'Bring the mixture to a boil, add the pasta, and simmer until the pasta and vegetables are tender.',
        'Season with Italian herbs, salt, and pepper, and serve hot.'
      ],
    },
    {
      id: 47,
      name: 'Greek Salad',
      image: '/images/47.jpg',
      cookingTime: '15 min',
      level: 'Easy',
      calories: '250 kcal',
      ingredients: [
        '2 cucumbers, sliced',
        '3 tomatoes, chopped',
        '1 red onion, thinly sliced',
        '150g feta cheese, cubed',
        'A handful of olives',
        'Olive oil',
        'Lemon juice',
        'Oregano, salt, and pepper'
      ],
      steps: [
        'Combine cucumbers, tomatoes, red onion, and feta cheese in a bowl.',
        'Add olives, drizzle with olive oil and lemon juice, and sprinkle oregano, salt, and pepper.',
        'Toss gently and serve immediately.'
      ],
    },
    {
      id: 48,
      name: 'Carrot Cake',
      image: '/images/48.jpg',
      cookingTime: '1 hour 15 min',
      level: 'Medium',
      calories: '500 kcal per slice',
      ingredients: [
        '2 cups grated carrots',
        '1 1/2 cups flour',
        '1 cup sugar',
        '1/2 cup vegetable oil',
        '3 eggs',
        '1 tsp baking soda',
        '1 tsp cinnamon',
        '1/2 tsp nutmeg',
        '1/2 cup walnuts, chopped'
      ],
      steps: [
        'Preheat the oven to 175°C (350°F) and grease a cake pan.',
        'Mix the flour, sugar, baking soda, cinnamon, and nutmeg in a large bowl.',
        'Stir in the eggs and vegetable oil followed by grated carrots.',
        'Fold in the walnuts and pour the batter into the pan.',
        'Bake for 45-50 minutes until a toothpick inserted into the center comes out clean. Cool completely before frosting if desired.'
      ],
    },
    {
      id: 49,
      name: 'Prawn Risotto',
      image: '/images/49.jpg',
      cookingTime: '45 min',
      level: 'Hard',
      calories: '650 kcal',
      ingredients: [
        '200g Arborio rice',
        '300g prawns, peeled',
        '1 onion, finely chopped',
        '2 cloves garlic, minced',
        '750ml seafood broth, kept warm',
        '100ml white wine',
        '50g Parmesan cheese, grated',
        '2 tbsp butter',
        'Salt and pepper'
      ],
      steps: [
        'Melt the butter in a large pan and sauté the onion and garlic until translucent.',
        'Add the Arborio rice and toast it for 1-2 minutes.',
        'Pour in the white wine and stir until it is absorbed by the rice.',
        'Gradually add warm seafood broth while stirring continuously until the rice is cooked and creamy.',
        'Add the prawns and cook until they are pink and tender. Stir in the Parmesan cheese, adjust seasoning, and serve immediately.'
      ],
    },
    {
      id: 50,
      name: 'Omelette',
      image: '/images/50.jpg',
      cookingTime: '10 min',
      level: 'Easy',
      calories: '250 kcal',
      ingredients: [
        '3 eggs',
        '2 tbsp milk',
        'Salt and pepper',
        '1/4 cup shredded cheese',
        'Chopped vegetables (bell peppers, onions, spinach)',
        'Butter'
      ],
      steps: [
        'Whisk the eggs with milk, salt, and pepper until smooth.',
        'Heat butter in a non-stick skillet over medium heat.',
        'Pour in the egg mixture and let it cook undisturbed until the edges begin to set.',
        'Sprinkle the cheese and vegetables over one half of the omelette.',
        'Fold the omelette gently and cook for another minute until the cheese melts. Serve immediately.'
      ],
    }
  ];
  
  export default recipeData;
  