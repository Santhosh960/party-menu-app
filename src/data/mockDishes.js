
const dishes = [
  {
    "id": 1,
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Grilled paneer cubes marinated in spices and yogurt.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Paneer Tikka",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 2,
    "categoryId": 3,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Crispy rolls filled with fresh vegetables.",
    "image": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 3,
      "name": "Chinese",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Veg Spring Rolls",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 3,
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Spiced potato patties served with chutneys.",
    "image": "https://images.unsplash.com/photo-1596662951482-0c4ba902c0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Aloo Tikki",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 4,
    "categoryId": 4,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Mixed vegetable patties with crispy coating.",
    "image": "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 4,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Veg Cutlet",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 5,
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Deep fried pastry with spiced potato filling.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Samosa",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 6,
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "NON_VEG",
    "description": "Grilled chicken pieces marinated in yogurt and spices.",
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Chicken Tikka",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 7,
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "NON_VEG",
    "description": "Spiced and fried fish pieces.",
    "image": "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 2,
      "name": "South Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Fish Fry",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 8,
    "categoryId": 4,
    "mealType": "STARTER",
    "type": "NON_VEG",
    "description": "Spicy chicken wings with tangy sauce.",
    "image": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 4,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Chicken Wings",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 9,
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "NON_VEG",
    "description": "Spiced minced mutton grilled on skewers.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Mutton Seekh Kebab",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 10,
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "NON_VEG",
    "description": "Crispy fried prawns with spices.",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 2,
      "name": "South Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png"
    },
    "dishType": "STARTER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Prawn Koliwada",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 11,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 1",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 12,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 2",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 13,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 3",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 14,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 4",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 15,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 5",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 16,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 6",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 17,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 7",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 18,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 8",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 19,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 9",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 20,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kadhai Paneer 10",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "200g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 21,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Yellow lentils tempered with spices.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Dal Tadka",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 22,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Fragrant rice with mixed vegetables.",
    "image": "https://images.unsplash.com/photo-1563379091339-03246c4e96c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Veg Biryani",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 23,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Spiced chickpeas with fried bread.",
    "image": "https://images.unsplash.com/photo-1626132647523-66f7bf985a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Chole Bhature",
    "ingredients": [
      {
        "name": "All Purpose Flour",
        "quantity": "2 cups"
      },
      {
        "name": "Oil",
        "quantity": "2 tbsp"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Water",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 24,
    "categoryId": 3,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Wok-tossed rice with vegetables.",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 3,
      "name": "Chinese",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Veg Fried Rice",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 25,
    "categoryId": 2,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Crispy crepe with spiced potato filling.",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 2,
      "name": "South Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Masala Dosa",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 26,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON_VEG",
    "description": "Aromatic rice with tender chicken pieces.",
    "image": "https://images.unsplash.com/photo-1563379091339-03246c4e96c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Chicken Biryani",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 27,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON_VEG",
    "description": "Creamy tomato-based chicken curry.",
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Butter Chicken",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 28,
    "categoryId": 2,
    "mealType": "MAIN COURSE",
    "type": "NON_VEG",
    "description": "Spicy fish curry with coconut.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 2,
      "name": "South Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Fish Curry",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 29,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON_VEG",
    "description": "Slow-cooked mutton in aromatic gravy.",
    "image": "https://images.unsplash.com/photo-1574653331218-8a0b7f0dcad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Mutton Rogan Josh",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 30,
    "categoryId": 3,
    "mealType": "MAIN COURSE",
    "type": "NON_VEG",
    "description": "Wok-tossed rice with chicken and vegetables.",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 3,
      "name": "Chinese",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png"
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Chicken Fried Rice",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Onion",
        "quantity": "2 large"
      },
      {
        "name": "Tomato",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Spices",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 31,
    "categoryId": 1,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Sweet milk dumplings in sugar syrup.",
    "image": "https://unsplash.com/photos/a-pile-of-doughnuts-sitting-on-top-of-a-white-plate-bm1dJYcGJLw",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "DESSERT",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Gulab Jamun",
    "ingredients": [
      {
        "name": "Milk",
        "quantity": "1 liter"
      },
      {
        "name": "Sugar",
        "quantity": "100g"
      },
      {
        "name": "Cardamom",
        "quantity": "4-5 pods"
      },
      {
        "name": "Nuts",
        "quantity": "50g"
      }
    ]
  },
  {
    "id": 32,
    "categoryId": 1,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Soft paneer balls in sweetened milk.",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "DESSERT",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Rasmalai",
    "ingredients": [
      {
        "name": "Milk",
        "quantity": "1 liter"
      },
      {
        "name": "Sugar",
        "quantity": "100g"
      },
      {
        "name": "Cardamom",
        "quantity": "4-5 pods"
      },
      {
        "name": "Nuts",
        "quantity": "50g"
      }
    ]
  },
  {
    "id": 33,
    "categoryId": 4,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Creamy frozen dessert in various flavors.",
    "image": "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 4,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    "dishType": "DESSERT",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Ice Cream",
    "ingredients": [
      {
        "name": "Milk",
        "quantity": "1 liter"
      },
      {
        "name": "Sugar",
        "quantity": "100g"
      },
      {
        "name": "Cardamom",
        "quantity": "4-5 pods"
      },
      {
        "name": "Nuts",
        "quantity": "50g"
      }
    ]
  },
  {
    "id": 34,
    "categoryId": 1,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Rice pudding with milk and dry fruits.",
    "image": "https://images.unsplash.com/photo-1558230429-07c8a0c073d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "DESSERT",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kheer",
    "ingredients": [
      {
        "name": "Milk",
        "quantity": "1 liter"
      },
      {
        "name": "Sugar",
        "quantity": "100g"
      },
      {
        "name": "Cardamom",
        "quantity": "4-5 pods"
      },
      {
        "name": "Nuts",
        "quantity": "50g"
      }
    ]
  },
  {
    "id": 35,
    "categoryId": 4,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Rich chocolate sponge cake.",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 4,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    "dishType": "DESSERT",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Chocolate Cake",
    "ingredients": [
      {
        "name": "Milk",
        "quantity": "1 liter"
      },
      {
        "name": "Sugar",
        "quantity": "100g"
      },
      {
        "name": "Cardamom",
        "quantity": "4-5 pods"
      },
      {
        "name": "Nuts",
        "quantity": "50g"
      }
    ]
  },
  {
    "id": 36,
    "categoryId": 1,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Traditional Indian ice cream.",
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "DESSERT",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Kulfi",
    "ingredients": [
      {
        "name": "Milk",
        "quantity": "1 liter"
      },
      {
        "name": "Sugar",
        "quantity": "100g"
      },
      {
        "name": "Cardamom",
        "quantity": "4-5 pods"
      },
      {
        "name": "Nuts",
        "quantity": "50g"
      }
    ]
  },
  {
    "id": 37,
    "categoryId": 4,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Italian coffee-flavored dessert.",
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 4,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    "dishType": "DESSERT",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Tiramisu",
    "ingredients": [
      {
        "name": "Milk",
        "quantity": "1 liter"
      },
      {
        "name": "Sugar",
        "quantity": "100g"
      },
      {
        "name": "Cardamom",
        "quantity": "4-5 pods"
      },
      {
        "name": "Nuts",
        "quantity": "50g"
      }
    ]
  },
  {
    "id": 38,
    "categoryId": 1,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Sweet cheese balls in flavored milk.",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "DESSERT",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Ras Bhari",
    "ingredients": [
      {
        "name": "Milk",
        "quantity": "1 liter"
      },
      {
        "name": "Sugar",
        "quantity": "100g"
      },
      {
        "name": "Cardamom",
        "quantity": "4-5 pods"
      },
      {
        "name": "Nuts",
        "quantity": "50g"
      }
    ]
  },
  {
    "id": 39,
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Soft Indian bread baked in tandoor.",
    "image": "https://images.unsplash.com/photo-1574654834476-d2f9d4e0a012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "SIDES",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Naan",
    "ingredients": [
      {
        "name": "All Purpose Flour",
        "quantity": "2 cups"
      },
      {
        "name": "Oil",
        "quantity": "2 tbsp"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Water",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 40,
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Whole wheat flatbread.",
    "image": "https://images.unsplash.com/photo-1606491956391-491b2ce86fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "SIDES",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Roti",
    "ingredients": [
      {
        "name": "All Purpose Flour",
        "quantity": "2 cups"
      },
      {
        "name": "Oil",
        "quantity": "2 tbsp"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Water",
        "quantity": "As needed"
      }
    ]
  },
  {
    "id": 41,
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Basmati rice tempered with cumin.",
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "SIDES",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Jeera Rice",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 42,
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Yogurt-based side dish with vegetables.",
    "image": "https://images.unsplash.com/photo-1626132647523-66f7bf985a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "SIDES",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Raita",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 43,
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Spicy pickled vegetables or fruits.",
    "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "SIDES",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Pickle",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 44,
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Crispy lentil wafers.",
    "image": "https://images.unsplash.com/photo-1631709497146-02ad1cd1e473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png"
    },
    "dishType": "SIDES",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Papad",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 45,
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Crispy fried potato strips.",
    "image": "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 4,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    "dishType": "SIDES",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "French Fries",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "4 cups"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "1 tbsp"
      }
    ]
  },
  {
    "id": 46,
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Toasted bread with garlic butter.",
    "image": "https://images.unsplash.com/photo-1619985632461-f33748ef8bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "category": {
      "id": 4,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png"
    },
    "dishType": "SIDES",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "name": "Garlic Bread",
    "ingredients": [
      {
        "name": "All Purpose Flour",
        "quantity": "2 cups"
      },
      {
        "name": "Oil",
        "quantity": "2 tbsp"
      },
      {
        "name": "Salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Water",
        "quantity": "As needed"
      }
    ]
  }
];

// Meal types for navigation
const mealTypes = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

// Food types for filtering
const foodTypes = ["VEG", "NON_VEG"];

// Export for use in other files
module.exports = { dishes, mealTypes, foodTypes };