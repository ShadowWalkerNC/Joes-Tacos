import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Street Tacos
  {
    id: 'al-pastor',
    name: 'Al Pastor',
    category: 'tacos',
    price: 4.50,
    description: 'Slow-roasted pork shoulder, adobo marinade, sweet pineapple chunks, white onion, cilantro, salsa verde on double corn tortillas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1cdL3sUSgK8yQijNmrDInvvGa88Exumz-DvWsWhy458w1_6ds8KR16_8UiPBHjSNgmbhqmv3VPvR2Wt3LW9-Tk_FEoY9fF-OxO4iN9AGchWUnNqPQ20U7TACdyBsLudjlvtSCF6Ej5OXfVDQ-34BzCLEuG5FHEBtZJ7gVXeTW-NzdTUHcRZaj7YQkJBzBTN_ckrW14NiDiyM69OavTBlJ2WPktN6War6oSQ8nKXWYat2LwqogTMsO',
    tags: ['Pork', 'Spicy'],
    spicyLevel: 2,
    options: {
      salsas: ['Salsa Verde (Mild)', 'Salsa Roja (Medium)', 'Habanero Fire (Hot)', 'Salsa Macha (Smoky Hot)'],
      addOns: [
        { id: 'guac', name: 'Fresh Guacamole', price: 1.00 },
        { id: 'queso', name: 'Cotija & Oaxaca Cheese', price: 0.75 },
        { id: 'double-meat', name: 'Extra Al Pastor', price: 1.75 }
      ]
    }
  },
  {
    id: 'carne-asada',
    name: 'Carne Asada',
    category: 'tacos',
    price: 5.00,
    description: 'Citrus-marinated skirt steak, fire-grilled, topped with guacamole, raw white onion, fresh cilantro, and authentic salsa roja on double corn tortillas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs9qzC95Dm4SHGIOI6UC_qJHFSZ_rxe8rPRGJ4Ewwu2mJ4VyXBcGTZmTPG8JmkMeOp5tLNz13VxREuc1eOR0rV4jezH6YGjRxlHgvnQPKmPiFGHOHBicX7HnfbOEEoDi9L23uAPWvUDH1minkwepxivWQDV_-wr796HDjZOFFU0S2tJswwkxKXIVBi4U3bzIUhN_34cEdaGCRtot5aCRmYCqBCK0LA53_eBcl2-itRrccZO-jEdWYe',
    tags: ['Beef', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 1,
    options: {
      salsas: ['Salsa Roja (Medium)', 'Salsa Verde (Mild)', 'Habanero Fire (Hot)', 'Salsa Macha (Smoky Hot)'],
      addOns: [
        { id: 'guac', name: 'Extra Guacamole', price: 1.00 },
        { id: 'queso', name: 'Melted Oaxaca Cheese', price: 0.75 },
        { id: 'double-meat', name: 'Extra Steak', price: 2.00 }
      ]
    }
  },
  {
    id: 'baja-fish',
    name: 'Baja Fish',
    category: 'tacos',
    price: 5.00,
    description: 'Crispy beer-battered Gulf of Maine cod, crunchy purple cabbage slaw, pico de gallo, lime wedge, signature smoky white crema.',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    tags: ['Seafood', 'Crispy'],
    spicyLevel: 1,
    options: {
      salsas: ['Signature White Crema', 'Salsa Verde', 'Habanero Mango'],
      addOns: [
        { id: 'guac', name: 'Fresh Guacamole', price: 1.00 },
        { id: 'jalapeno', name: 'Pickled Jalapeños', price: 0.50 }
      ]
    }
  },
  {
    id: 'birria-quesatacos',
    name: 'Birria Quesa-Taco',
    category: 'tacos',
    price: 5.50,
    description: 'Slow-braised beef chuck shredded in rich chile consome, griddled crispy with molten Oaxaca cheese, served with hot dipping broth.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    tags: ['Beef', 'Spicy', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 2,
    options: {
      salsas: ['Rich Chile Consomé Dipping Cup (Included)', 'Extra Consomé Cup (+$1.50)'],
      addOns: [
        { id: 'extra-cheese', name: 'Double Oaxaca Cheese', price: 1.00 },
        { id: 'consome', name: 'Extra Consomé Cup', price: 1.50 }
      ]
    }
  },
  {
    id: 'maine-lobster-taco',
    name: 'Maine Lobster Street Taco',
    category: 'tacos',
    price: 8.50,
    description: 'Fresh local Midcoast Maine lobster tail meat poached in spiced chili-lime butter, charred corn relish, chipotle crema, micro cilantro.',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80',
    tags: ['Seafood', 'Special', 'Local Maine'],
    spicyLevel: 1,
    options: {
      salsas: ['Chipotle Crema', 'Mango Habanero Salsa', 'Lemon Lime Butter'],
      addOns: [
        { id: 'avocado', name: 'Sliced Avocado', price: 1.25 },
        { id: 'bacon', name: 'Crispy Crumbled Bacon', price: 1.25 }
      ]
    }
  },
  {
    id: 'crispy-avocado',
    name: 'Crispy Avocado & Black Bean',
    category: 'tacos',
    price: 4.25,
    description: 'Panko-crusted fresh avocado slices, seasoned black beans, pickled red onion, roasted corn, cilantro vegan lime crema.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan Option'],
    spicyLevel: 1,
    options: {
      salsas: ['Vegan Lime Crema', 'Salsa Verde', 'Pico de Gallo'],
      addOns: [
        { id: 'cotija', name: 'Cotija Cheese (Non-Vegan)', price: 0.75 },
        { id: 'mushrooms', name: 'Charred Portobello', price: 1.25 }
      ]
    }
  },

  // Mission Burritos
  {
    id: 'el-gigante-burrito',
    name: 'El Gigante Mission Burrito',
    category: 'burritos',
    price: 12.50,
    description: 'Choice of grilled Carne Asada or Al Pastor, cilantro-lime rice, slow-simmered pinto beans, melted jack cheese, pico de gallo, salsa, rolled in a grilled 12-inch flour tortilla.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    tags: ['Beef', 'Pork', 'Best Seller'],
    isBestSeller: true,
    spicyLevel: 1,
    options: {
      proteinChoices: [
        { id: 'carne', name: 'Carne Asada Steak', price: 0 },
        { id: 'pastor', name: 'Al Pastor Spiced Pork', price: 0 },
        { id: 'birria', name: 'Birria Braised Beef (+$1.50)', price: 1.50 },
        { id: 'veggie', name: 'Avocado & Charred Veggies', price: 0 }
      ],
      salsas: ['Salsa Roja (Medium)', 'Salsa Verde (Mild)', 'Habanero Fire (Hot)'],
      addOns: [
        { id: 'guac-inside', name: 'Guacamole Inside', price: 1.75 },
        { id: 'sour-cream', name: 'Mexican Crema', price: 0.75 },
        { id: 'wet-style', name: 'Make it Wet (Smothered with Salsa & Cheese)', price: 2.50 }
      ]
    }
  },
  {
    id: 'cali-fries-burrito',
    name: 'Cali Style Rig Burrito',
    category: 'burritos',
    price: 13.00,
    description: 'Carne asada, crispy golden french fries inside, guacamole, crema, melted four-cheese blend, and spicy chipotle mayo.',
    image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?auto=format&fit=crop&w=800&q=80',
    tags: ['Beef', 'Spicy'],
    spicyLevel: 2,
    options: {
      salsas: ['Chipotle Mayo', 'Salsa Roja', 'Habanero Hot'],
      addOns: [
        { id: 'bacon', name: 'Crispy Bacon Bits', price: 1.50 },
        { id: 'jalapenos', name: 'Grilled Jalapeños', price: 0.75 }
      ]
    }
  },

  // Sides & Extras
  {
    id: 'street-corn-elote',
    name: 'Street Corn (Elote en Vaso)',
    category: 'sides',
    price: 4.50,
    description: 'Charred sweet corn cut off the cob, garlic chipotle butter, cotija cheese, chili powder blend, lime juice, cilantro.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Spicy', 'Best Seller'],
    spicyLevel: 1
  },
  {
    id: 'chips-guac-salsa',
    name: 'Fresh Guac & Warm Tortilla Chips',
    category: 'sides',
    price: 5.50,
    description: 'Hand-mashed Haas avocados with lime, serrano pepper, cilantro, sea salt, served with fresh fried house corn tortilla chips and salsa.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'queso-blanco',
    name: 'Melted Queso Blanco Dip & Chips',
    category: 'sides',
    price: 4.50,
    description: 'Creamy melted Oaxaca and Monterey Jack cheese spiked with roasted green chiles and tomatoes. Comes with warm chips.',
    image: 'https://images.unsplash.com/photo-1570461226513-e08b58a52c53?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian']
  },
  {
    id: 'churro-bites',
    name: 'Cinnamon Sugar Churro Bites',
    category: 'sides',
    price: 5.00,
    description: 'Golden crispy churro dough bites rolled in Mexican cinnamon and turbinado sugar, served with warm spiced chocolate dipping sauce.',
    image: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=800&q=80',
    tags: ['Sweet', 'Dessert']
  },

  // Drinks
  {
    id: 'mexican-jarritos',
    name: 'Mexican Jarritos Soda',
    category: 'drinks',
    price: 3.25,
    description: 'Authentic Mexican sodas sweetened with pure cane sugar. Flavors: Mandarin, Tamarind, Lime, Pineapple, or Grapefruit.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Drink'],
    options: {
      salsas: ['Mandarin (Orange)', 'Tamarind', 'Lime', 'Pineapple', 'Mango']
    }
  },
  {
    id: 'house-horchata',
    name: 'Housemade Horchata',
    category: 'drinks',
    price: 4.00,
    description: 'Traditional sweet rice and almond milk beverage infused with canela (cinnamon) and vanilla, served over crushed ice.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    tags: ['Drink', 'Sweet', 'House Specialty']
  },
  {
    id: 'hibiscus-jamaica',
    name: 'Agua de Jamaica (Hibiscus)',
    category: 'drinks',
    price: 3.75,
    description: 'Tart, refreshing iced hibiscus flower tea brewed fresh with a touch of agave nectar and fresh lime.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    tags: ['Drink', 'Refreshing']
  },
  {
    id: 'mexican-coke',
    name: 'Mexican Coca-Cola (Glass Bottle)',
    category: 'drinks',
    price: 3.50,
    description: 'Classic 12oz glass bottle Mexican Coke made with real cane sugar.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    tags: ['Drink']
  },

  // Combos & Specials
  {
    id: 'taco-trio-combo',
    name: 'The Rig 3-Taco Combo Box',
    category: 'specials',
    price: 13.50,
    description: 'Pick any three street tacos, served with a side of warm tortilla chips, homemade salsa roja & verde, and a cold canned beverage.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1cdL3sUSgK8yQijNmrDInvvGa88Exumz-DvWsWhy458w1_6ds8KR16_8UiPBHjSNgmbhqmv3VPvR2Wt3LW9-Tk_FEoY9fF-OxO4iN9AGchWUnNqPQ20U7TACdyBsLudjlvtSCF6Ej5OXfVDQ-34BzCLEuG5FHEBtZJ7gVXeTW-NzdTUHcRZaj7YQkJBzBTN_ckrW14NiDiyM69OavTBlJ2WPktN6War6oSQ8nKXWYat2LwqogTMsO',
    tags: ['Combo', 'Best Value'],
    isBestSeller: true
  },
  {
    id: 'taco-party-pack',
    name: 'Tailgate Taco Box (10 Tacos)',
    category: 'specials',
    price: 42.00,
    description: 'Ten assorted street tacos of your choice (Al Pastor, Carne Asada, Baja Fish, or Carnitas) with large chips, guac, salsa flight, and pickled escabeche.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    tags: ['Family Pack', 'Party']
  }
];

export const BRAND_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1UHY3m6QiVjDS5CgWpXPKLsUNBydfcfClLEreMc9GLt7KOzEIrYMh3FtbCS6178GQjkUgNaF5iYOZ801dgC2p3BEMQPaaa-oBy1zO5p1CCcrRaUOZpd2onEpltY63WiqtVIj89hX0qOjPcrU2uzYJlXpPG3_EK4IvLpHHKPFUUw3MZ8ryhqCebOaKM4lESNCdm7JPjX4QeoZKnyNxgOBz5usvjK-wJ0WPPMsBhYyZewaamNcFGVFLONC5MzZCowKcOm0CAy06sPJw',
  heroBg: 'https://lh3.googleusercontent.com/aida/AEtjO1UMvOcRWoTguxJySnZaaW93o3hRF_YfZV0jrxsOEE_HUS1yHHiQY0y540kSxw3yBtREx81ujkdgA-ZF2jD2mcVgs4I9qyNl2y6OvUxdvX-06qMPX-SfwO4GCTR2aF-wCAxk17ONP_57OowiA3qwGRm40tG6icj0Z0Gj3t0Ncn7KaS8dVZ0E_sTQxjcmbtwU5Hpc5bv89SWsE4YrD4oyaj0qrOxeahwDaFSriRYzHkJFEA2XuxW0hWFiCJg',
  chefCooking: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ytGke3zQcFMdxADAQTGnmHV1HMMYu1XEAxs8FF1jZG7b9biBQL2LnVRdcFZP2P9WO-ee7rRT8orzvmdCasR8oq392m73jQ8QNpmlKkCiTKvtwQA2fVddzRrQCiDnzf3xwWZt9v68TF9DiAXSy2ttvfEGAOMycOlrMQ1fVMU5x2cQpC2ou8YNLueRDWq46WMKMQ-4F6bZhvvXR2R0eJCr5PWEZZMGdAePdgX3EuWuK_SUUJ9vS2z9',
  truckBrandingArt: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf1ePLzmych-LWoQKg6ftR9NX56IylMpYcOdXiqGL02Sz81lq6-QG_RRtCE0qHM-3XLaZiniMrmS2vCyGt2fgDHBoOvjDgHrx39lciMtABH2RFZcczKNxKGwgcHnMwGMmf8tGOop0KIm3NrkfyBFflCfrw4Ck4RpZsDAPY1ZHmWW0JwVFvGeI82UihBmwf5VjbmAgNxH5AHXYQ9m3BywGGukhE0oDCl1cnSmewURzCOrZtY0EHWpLHEpwA5JY_wsK-fQ',
  mapView: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoNa53hUgANLfGyZM6ysKxeDBg3BjRqcQHBbdgdCOxd9PWJ5szIqpE1zKQ2jvQ5HynjNmBKZNSHQGdzTs3X62FsdmKsrk7i2cwURkhhG-F1-iaNtV9bUzBLAm_fjo0M3kvZGAQDnPvTG6WDAwn_I0wQgRhqt1wkWBfdkZURZZ-VN0Ej4yzNX614vZvoWmHOxDSvVOB2ghST7H3nmPq5tVO3SMykckqD6DZtA0uk2FVOJ_H2lgnfzKa',
  eventsHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW3Lqw-fkYzTptrxfBRh_eWr_JyyDeg2LxijC2aoOZ7e2RKV5M7aBptH6tSDpQPO9B_H3vAHNVAA21G_Fp0qFF8-sfF7St8lSBa1g5dRPOmByMaca6M55JbgzLJWRKChsZzCNZxpe-7N_2-7xGLcM8YYfGR9VhS8ACf7gL2tCi9I7V7rkKrdOrk7DBlFkOqB4QXZlGGfcsYErUwNA89hx3ZuwSrZCNTnPsKXYMn7dueOGy6iDUVUFM'
};
