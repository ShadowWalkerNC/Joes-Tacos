import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // --- STREET TACOS ---
  {
    id: 'carne-asada-taco',
    name: 'Carne Asada Taco',
    category: 'tacos',
    price: 7.00,
    description: 'Tender grilled steak, fresh pico de gallo, house guacamole & signature avocado ranch on warm double corn tortillas.',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    tags: ['Beef', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 1,
    options: {
      proteinChoices: [
        { id: 'single', name: 'Single Taco', price: 0 },
        { id: 'double', name: 'Two Tacos ($13)', price: 6.00 },
        { id: 'trio', name: 'Three Tacos ($18)', price: 11.00 }
      ],
      salsas: ['Avocado Ranch', 'Fresh Pico de Gallo', 'Sweet Corn Salsa', 'Sour Cream'],
      addOns: [
        { id: 'extra-guac', name: 'Side Guacamole', price: 3.00 },
        { id: 'extra-sour', name: 'Side Sour Cream', price: 1.00 },
        { id: 'extra-cheese', name: 'Extra Melted Cheese', price: 1.00 }
      ]
    }
  },
  {
    id: 'pork-carnitas-taco',
    name: 'Pork Carnitas Taco',
    category: 'tacos',
    price: 7.00,
    description: 'Slow-cooked juicy pulled pork, cilantro-lime rice, and sweet fire-roasted corn salsa on warm double corn tortillas.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    tags: ['Pork', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 1,
    options: {
      proteinChoices: [
        { id: 'single', name: 'Single Taco', price: 0 },
        { id: 'double', name: 'Two Tacos ($13)', price: 6.00 },
        { id: 'trio', name: 'Three Tacos ($18)', price: 11.00 }
      ],
      salsas: ['Sweet Corn Salsa', 'Fresh Pico de Gallo', 'Avocado Ranch', 'Sour Cream'],
      addOns: [
        { id: 'extra-guac', name: 'Side Guacamole', price: 3.00 },
        { id: 'extra-sour', name: 'Side Sour Cream', price: 1.00 }
      ]
    }
  },
  {
    id: 'pork-chorizo-taco',
    name: 'Pork Chorizo Taco',
    category: 'tacos',
    price: 7.00,
    description: 'Fire-sizzled spiced Mexican pork chorizo, cilantro-lime rice, and sweet fire-roasted corn salsa on warm double corn tortillas.',
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=800&q=80',
    tags: ['Pork', 'Spicy'],
    spicyLevel: 2,
    options: {
      proteinChoices: [
        { id: 'single', name: 'Single Taco', price: 0 },
        { id: 'double', name: 'Two Tacos ($13)', price: 6.00 },
        { id: 'trio', name: 'Three Tacos ($18)', price: 11.00 }
      ],
      salsas: ['Sweet Corn Salsa', 'Fresh Pico de Gallo', 'Avocado Ranch'],
      addOns: [
        { id: 'extra-guac', name: 'Side Guacamole', price: 3.00 },
        { id: 'extra-sour', name: 'Side Sour Cream', price: 1.00 }
      ]
    }
  },
  {
    id: 'seasoned-chicken-taco',
    name: 'Seasoned Chicken Taco',
    category: 'tacos',
    price: 7.00,
    description: 'Grilled seasoned chicken breast, fresh pico de gallo, shredded mixed cheese, and signature avocado ranch drizzle.',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80',
    tags: ['Chicken'],
    spicyLevel: 1,
    options: {
      proteinChoices: [
        { id: 'single', name: 'Single Taco', price: 0 },
        { id: 'double', name: 'Two Tacos ($13)', price: 6.00 },
        { id: 'trio', name: 'Three Tacos ($18)', price: 11.00 }
      ],
      salsas: ['Avocado Ranch', 'Fresh Pico de Gallo', 'Sour Cream'],
      addOns: [
        { id: 'extra-guac', name: 'Side Guacamole', price: 3.00 },
        { id: 'extra-sour', name: 'Side Sour Cream', price: 1.00 }
      ]
    }
  },
  {
    id: 'street-taco-trio',
    name: 'Three Street Tacos Combo',
    category: 'tacos',
    price: 18.00,
    description: 'Mix and match any 3 street tacos (Carne Asada, Pork Carnitas, Pork Chorizo, or Seasoned Chicken) on double corn tortillas with limes and salsas.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    tags: ['Best Value', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 1,
    options: {
      proteinChoices: [
        { id: 'all-asada', name: '3x Carne Asada Steak', price: 0 },
        { id: 'all-carnitas', name: '3x Pork Carnitas', price: 0 },
        { id: 'all-chicken', name: '3x Seasoned Chicken', price: 0 },
        { id: 'mixed-trio', name: 'Mixed (1 Asada, 1 Carnitas, 1 Chicken)', price: 0 },
        { id: 'chorizo-mix', name: 'Mixed with Pork Chorizo', price: 0 }
      ],
      salsas: ['Avocado Ranch & Pico', 'Corn Salsa & Pico', 'All Sauces on Side'],
      addOns: [
        { id: 'extra-guac', name: 'Add Side Guacamole', price: 3.00 },
        { id: 'extra-sour', name: 'Add Side Sour Cream', price: 1.00 }
      ]
    }
  },

  // --- 12" BURRITOS ---
  {
    id: 'carnivore-burrito',
    name: 'Carnivore Burrito (12")',
    category: 'burritos',
    price: 15.00,
    description: '12-inch warm flour tortilla packed with your choice of protein (Carne Asada Steak, Seasoned Chicken, Pork Chorizo, or Carnitas), cilantro-lime rice, black beans, sweet corn salsa, fresh pico de gallo, and mixed cheese.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    tags: ['Beef', 'Pork', 'Chicken', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 1,
    options: {
      proteinChoices: [
        { id: 'carne-asada', name: 'Carne Asada (Grilled Steak)', price: 0 },
        { id: 'seasoned-chicken', name: 'Seasoned Chicken', price: 0 },
        { id: 'pork-chorizo', name: 'Pork Chorizo', price: 0 },
        { id: 'pork-carnitas', name: 'Pork Carnitas', price: 0 }
      ],
      salsas: ['Pico de Gallo & Corn Salsa', 'Extra Pico de Gallo', 'Avocado Ranch Inside'],
      addOns: [
        { id: 'add-guac', name: 'Add Fresh Guacamole (+ $3)', price: 3.00 },
        { id: 'add-sour', name: 'Add Sour Cream (+ $1)', price: 1.00 },
        { id: 'add-avo-ranch', name: 'Add Avocado Ranch (+ $1)', price: 1.00 }
      ]
    }
  },
  {
    id: 'vegan-burrito',
    name: 'Vegan Burrito (12")',
    category: 'burritos',
    price: 12.00,
    description: '12-inch warm flour tortilla loaded with seasoned cilantro-lime rice, seasoned black beans, sweet corn salsa, fresh pico de gallo, and shredded crisp lettuce. 100% plant-based.',
    image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Vegetarian'],
    spicyLevel: 0,
    options: {
      salsas: ['Corn Salsa & Pico de Gallo', 'Extra Pico de Gallo'],
      addOns: [
        { id: 'add-guac', name: 'Add Fresh Guacamole (+ $3)', price: 3.00 },
        { id: 'add-sour-nonvegan', name: 'Add Sour Cream (Non-Vegan) (+ $1)', price: 1.00 }
      ]
    }
  },

  // --- 12" QUESADILLAS ---
  {
    id: 'cheese-quesadilla',
    name: 'Cheese Quesadilla (12")',
    category: 'quesadillas',
    price: 10.00,
    description: '12-inch flour tortilla grilled to golden crisp with melted mixed cheese and fresh pico de gallo. Served with side sour cream and house avocado ranch.',
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spicyLevel: 0,
    options: {
      salsas: ['Side Sour Cream & Avocado Ranch (Included)'],
      addOns: [
        { id: 'add-guac', name: 'Side Guacamole', price: 3.00 },
        { id: 'extra-sour', name: 'Extra Sour Cream', price: 1.00 },
        { id: 'extra-cheese', name: 'Extra Melted Cheese', price: 1.50 }
      ]
    }
  },
  {
    id: 'carnivore-quesadilla',
    name: 'Carnivore Quesadilla (12")',
    category: 'quesadillas',
    price: 13.00,
    description: '12-inch flour tortilla filled with your choice of protein (Carne Asada Steak, Seasoned Chicken, or Chorizo), melted mixed cheese, and fresh pico de gallo. Served with side sour cream and avocado ranch.',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80',
    tags: ['Beef', 'Chicken', 'Pork', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 1,
    options: {
      proteinChoices: [
        { id: 'carne-asada', name: 'Carne Asada Steak', price: 0 },
        { id: 'seasoned-chicken', name: 'Seasoned Chicken', price: 0 },
        { id: 'pork-chorizo', name: 'Pork Chorizo', price: 0 }
      ],
      salsas: ['Side Sour Cream & Avocado Ranch (Included)'],
      addOns: [
        { id: 'add-guac', name: 'Side Guacamole', price: 3.00 },
        { id: 'extra-sour', name: 'Extra Sour Cream', price: 1.00 }
      ]
    }
  },

  // --- SANDWICHES & GRILL ---
  {
    id: 'smash-burger',
    name: 'Smash Burger & Fries',
    category: 'sandwiches',
    price: 13.00,
    description: 'Two smashed beef patties with crispy seared edges, melted American cheese, sweet grilled onions, and side BBQ sauce. Served with hot french fries and a pickle spear.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Beef', 'Grill Classic', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 0,
    options: {
      salsas: ['Side BBQ Sauce (Included)', 'Side Avocado Ranch', 'Extra BBQ Sauce'],
      addOns: [
        { id: 'extra-patty', name: 'Extra Smash Patty', price: 3.00 },
        { id: 'side-guac', name: 'Side Guacamole', price: 3.00 }
      ]
    }
  },
  {
    id: 'grilled-chicken-wrap',
    name: 'Grilled Chicken Wrap & Fries',
    category: 'sandwiches',
    price: 13.00,
    description: 'Grilled sliced seasoned chicken breast, crisp lettuce, fresh pico de gallo, mixed cheese, and signature avocado ranch in a warm tortilla wrap. Served with hot french fries and a pickle spear.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    tags: ['Chicken', 'Grill Classic'],
    spicyLevel: 0,
    options: {
      salsas: ['Avocado Ranch (Inside & Side)', 'Side BBQ Sauce'],
      addOns: [
        { id: 'side-guac', name: 'Side Guacamole', price: 3.00 },
        { id: 'extra-sour', name: 'Side Sour Cream', price: 1.00 }
      ]
    }
  },

  // --- CHIPS & SCRATCH SALSAS ---
  {
    id: 'chips-and-guac',
    name: 'Chips & Guacamole',
    category: 'sides',
    price: 8.00,
    description: 'Crispy warm fried corn tortilla chips with a generous bowl of freshly mashed house guacamole (Vegan).',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free', 'Best Seller'],
    isBestSeller: true
  },
  {
    id: 'side-guacamole',
    name: 'Side Guacamole',
    category: 'sides',
    price: 3.00,
    description: 'Fresh hand-mashed ripe avocado with fresh lime juice, cilantro, and sea salt.',
    image: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'side-pico',
    name: 'Side Pico de Gallo',
    category: 'sides',
    price: 2.00,
    description: 'Diced Roma tomatoes, crisp white onion, diced jalapeño, fresh cilantro, and lime juice.',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'side-corn-salsa',
    name: 'Side Sweet Corn Salsa',
    category: 'sides',
    price: 2.00,
    description: 'Fire-roasted sweet Maine corn tossed with diced peppers, red onion, cilantro, and citrus.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'side-sour-cream',
    name: 'Side Sour Cream',
    category: 'sides',
    price: 1.00,
    description: 'Cool, creamy sour cream dipping cup to balance the heat.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian']
  },
  {
    id: 'side-french-fries',
    name: 'Side Crispy French Fries',
    category: 'sides',
    price: 4.00,
    description: 'Hot golden seasoned french fries fried fresh to order.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian']
  },

  // --- KIDS MEALS ($8 with Fries) ---
  {
    id: 'kids-burger',
    name: 'Kids Burger & Fries',
    category: 'kids',
    price: 8.00,
    description: 'Single juicy grilled beef patty on a soft toasted bun, served with hot crispy french fries.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Kids', 'Beef']
  },
  {
    id: 'kids-cheeseburger',
    name: 'Kids Cheeseburger & Fries',
    category: 'kids',
    price: 8.00,
    description: 'Single grilled beef patty with melted American cheese on a soft toasted bun, served with crispy french fries.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    tags: ['Kids', 'Beef']
  },
  {
    id: 'kids-chicken-fingers',
    name: 'Kids Chicken Fingers & Fries',
    category: 'kids',
    price: 8.00,
    description: 'Crispy golden fried chicken tenders served with hot french fries and dipping sauce.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    tags: ['Kids', 'Chicken']
  },
  {
    id: 'kids-hotdog',
    name: 'Kids Hotdog & Fries',
    category: 'kids',
    price: 8.00,
    description: 'Grilled all-beef hot dog on a warm bun, served with crispy golden french fries.',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80',
    tags: ['Kids']
  },

  // --- COLD DRINKS & COFFEE ---
  {
    id: 'drink-water',
    name: 'Bottled Ice Cold Water',
    category: 'drinks',
    price: 2.00,
    description: 'Chilled 16.9oz pure spring water bottle.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
    tags: ['Drink']
  },
  {
    id: 'drink-soda',
    name: 'Canned Soda',
    category: 'drinks',
    price: 2.00,
    description: 'Ice cold 12oz can. Choice of Coca-Cola, Diet Coke, Sprite, or Ginger Ale.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    tags: ['Drink'],
    options: {
      salsas: ['Coca-Cola', 'Diet Coke', 'Sprite', 'Ginger Ale']
    }
  },
  {
    id: 'drink-gatorade',
    name: 'Gatorade Sports Drink (20oz)',
    category: 'drinks',
    price: 3.00,
    description: 'Thirst-quenching 20oz ice cold Gatorade Thirst Quencher bottle. Available in Cool Blue, Lemon-Lime, Fruit Punch, or Orange.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gatorade_%2814293776364%29.jpg/800px-Gatorade_%2814293776364%29.jpg',
    tags: ['Drink'],
    options: {
      salsas: ['Cool Blue', 'Lemon-Lime', 'Fruit Punch', 'Orange']
    }
  },
  {
    id: 'drink-coffee',
    name: 'Fresh Hot Coffee',
    category: 'drinks',
    price: 2.00,
    description: 'Freshly brewed hot Maine roasted coffee.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    tags: ['Drink', 'Hot']
  }
];

export const BRAND_ASSETS = {
  // Taco Joe Facebook brand asset URLs
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1UHY3m6QiVjDS5CgWpXPKLsUNBydfcfClLEreMc9GLt7KOzEIrYMh3FtbCS6178GQjkUgNaF5iYOZ801dgC2p3BEMQPaaa-oBy1zO5p1CCcrRaUOZpd2onEpltY63WiqtVIj89hX0qOjPcrU2uzYJlXpPG3_EK4IvLpHHKPFUUw3MZ8ryhqCebOaKM4lESNCdm7JPjX4QeoZKnyNxgOBz5usvjK-wJ0WPPMsBhYyZewaamNcFGVFLONC5MzZCowKcOm0CAy06sPJw',
  heroBg: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1600&q=80',
  truckFoodPrep: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
  tacoSpread: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
  menuBoardPhoto: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  mapView: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoNa53hUgANLfGyZM6ysKxeDBg3BjRqcQHBbdgdCOxd9PWJ5szIqpE1zKQ2jvQ5HynjNmBKZNSHQGdzTs3X62FsdmKsrk7i2cwURkhhG-F1-iaNtV9bUzBLAm_fjo0M3kvZGAQDnPvTG6WDAwn_I0wQgRhqt1wkWBfdkZURZZ-VN0Ej4yzNX614vZvoWmHOxDSvVOB2ghST7H3nmPq5tVO3SMykckqD6DZtA0uk2FVOJ_H2lgnfzKa',
  eventsHero: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
};
