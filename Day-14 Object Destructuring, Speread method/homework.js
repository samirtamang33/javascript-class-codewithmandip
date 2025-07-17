{
  const electronics = [
    {
      id: 1,
      name: "Smartphone",
      price: 45000,
      brand: "Samsung",
      isAvailable: true,
      color: "Black",
      storage: "128GB",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Laptop",
      price: 75000,
      brand: "Dell",
      isAvailable: true,
      color: "Silver",
      storage: "512GB",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Headphones",
      price: 5000,
      brand: "Sony",
      isAvailable: false,
      color: "Blue",
      wireless: true,
      rating: 4.3,
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 12000,
      brand: "Apple",
      isAvailable: true,
      color: "White",
      waterproof: true,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Tablet",
      price: 35000,
      brand: "iPad",
      isAvailable: true,
      color: "Space Gray",
      storage: "256GB",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Camera",
      price: 60000,
      brand: "Canon",
      isAvailable: false,
      color: "Black",
      resolution: "24MP",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Speaker",
      price: 8000,
      brand: "JBL",
      isAvailable: true,
      color: "Red",
      wireless: true,
      rating: 4.2,
    },
    {
      id: 8,
      name: "Monitor",
      price: 25000,
      brand: "LG",
      isAvailable: true,
      color: "Black",
      size: "27inch",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Router",
      price: 3000,
      brand: "TP-Link",
      isAvailable: false,
      color: "White",
      speed: "1Gbps",
      rating: 4.0,
    },
    {
      id: 10,
      name: "Printer",
      price: 15000,
      brand: "HP",
      isAvailable: true,
      color: "White",
      type: "Laser",
      rating: 4.1,
    },
  ];

  //Task
  // Extract only name of products using map().
  const nameOnly = electronics.map((electronic) => electronic.name);
  //   console.log(nameOnly);

  // Extract only price of products using map().
  const priceOnly = electronics.map((electronic) => electronic.price);
  //   console.table(priceOnly);

  // Extract an array of objects containing only name and price using map().
  const nameAndPrice = electronics.map((electronic) => ({
    name: electronic.name,
    price: electronic.price,
  }));
  console.table(nameAndPrice);

  // Convert all name values to uppercase using map().
  const nameToUpper = electronics.map((electronic) =>
    electronic.name.toUpperCase()
  );
  //   console.log(nameToUpper);

  // Add a new property priceAfterDiscount (10% off) using the spread operator.
  const addDiscountPrice = electronics.map((electronic) => ({
    ...electronic,
    priceAfterDiscount: electronic.price * 0.9,
  }));
  console.log(addDiscountPrice);
  // Add a new property category ("budget" if price ≤ 40000, else "premium") using the spread operator.
  const addCategory = electronics.map((electronic) => ({
    ...electronic,
    category: electronic.price <= 40000 ? "budget" : "premium",
  }));
  console.log(addCategory);

  // Add a new property inStock (same value as isAvailable) using the spread operator.

  // Add a new property priceWithTax (20% of price) using the spread operator.
}

{
  const clothing = [
    {
      id: 1,
      name: "T-Shirt",
      price: 800,
      brand: "Nike",
      isAvailable: true,
      color: "Blue",
      size: "M",
      material: "Cotton",
      rating: 4.2,
    },
    {
      id: 2,
      name: "Jeans",
      price: 2000,
      brand: "Levi's",
      isAvailable: true,
      color: "Black",
      size: "32",
      material: "Denim",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Jacket",
      price: 3500,
      brand: "Adidas",
      isAvailable: false,
      color: "Red",
      size: "L",
      material: "Polyester",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Sneakers",
      price: 5000,
      brand: "Puma",
      isAvailable: true,
      color: "White",
      size: "10",
      material: "Mesh",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Dress",
      price: 2500,
      brand: "Zara",
      isAvailable: true,
      color: "Pink",
      size: "S",
      material: "Silk",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Hoodie",
      price: 1800,
      brand: "H&M",
      isAvailable: true,
      color: "Gray",
      size: "XL",
      material: "Fleece",
      rating: 4.1,
    },
    {
      id: 7,
      name: "Shorts",
      price: 1200,
      brand: "Under Armour",
      isAvailable: false,
      color: "Black",
      size: "M",
      material: "Polyester",
      rating: 4.0,
    },
    {
      id: 8,
      name: "Socks",
      price: 300,
      brand: "Nike",
      isAvailable: true,
      color: "White",
      size: "One Size",
      material: "Cotton",
      rating: 3.9,
    },
    {
      id: 9,
      name: "Sweater",
      price: 2200,
      brand: "Uniqlo",
      isAvailable: true,
      color: "Navy",
      size: "L",
      material: "Wool",
      rating: 4.3,
    },
    {
      id: 10,
      name: "Cap",
      price: 700,
      brand: "New Era",
      isAvailable: false,
      color: "Black",
      size: "Adjustable",
      material: "Polyester",
      rating: 4.2,
    },
  ];
  //Task
  // Extract only name of products using map().

  // Extract only price of products using map().

  // Extract an array of objects containing only name and price using map().

  // Convert all name values to uppercase using map().

  // Add a new property priceAfterDiscount (10% off) using the spread operator.

  // Add a new property category ("budget" if price ≤ 40000, else "premium") using the spread operator.

  // Add a new property inStock (same value as isAvailable) using the spread operator.

  // Add a new property priceWithTax (20% of price) using the spread operator.
}

{
  const grocery = [
    {
      id: 1,
      name: "Milk",
      price: 60,
      brand: "Amul",
      isAvailable: true,
      quantity: "1L",
      category: "Dairy",
      expiry: "2023-12-30",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Bread",
      price: 40,
      brand: "Britannia",
      isAvailable: true,
      quantity: "400g",
      category: "Bakery",
      expiry: "2023-12-25",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Eggs",
      price: 120,
      brand: "Farm Fresh",
      isAvailable: false,
      quantity: "12pcs",
      category: "Poultry",
      expiry: "2023-12-20",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Rice",
      price: 80,
      brand: "Daawat",
      isAvailable: true,
      quantity: "1kg",
      category: "Grains",
      expiry: "2024-06-30",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Apples",
      price: 150,
      brand: "Local",
      isAvailable: true,
      quantity: "1kg",
      category: "Fruits",
      expiry: "2023-12-18",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Potatoes",
      price: 30,
      brand: "Local",
      isAvailable: true,
      quantity: "1kg",
      category: "Vegetables",
      expiry: "2023-12-22",
      rating: 4.1,
    },
    {
      id: 7,
      name: "Chicken",
      price: 250,
      brand: "Fresho",
      isAvailable: false,
      quantity: "500g",
      category: "Meat",
      expiry: "2023-12-17",
      rating: 4.5,
    },
    {
      id: 8,
      name: "Coffee",
      price: 300,
      brand: "Nescafe",
      isAvailable: true,
      quantity: "200g",
      category: "Beverages",
      expiry: "2024-05-30",
      rating: 4.7,
    },
    {
      id: 9,
      name: "Chocolate",
      price: 100,
      brand: "Cadbury",
      isAvailable: true,
      quantity: "100g",
      category: "Snacks",
      expiry: "2024-02-28",
      rating: 4.8,
    },
    {
      id: 10,
      name: "Pasta",
      price: 120,
      brand: "Sunfeast",
      isAvailable: false,
      quantity: "500g",
      category: "Instant Food",
      expiry: "2024-01-15",
      rating: 4.3,
    },
  ];
  //Task
  // Extract only name of products using map().

  // Extract only price of products using map().

  // Extract an array of objects containing only name and price using map().

  // Convert all name values to uppercase using map().

  // Add a new property priceAfterDiscount (10% off) using the spread operator.

  // Add a new property category ("budget" if price ≤ 40000, else "premium") using the spread operator.

  // Add a new property inStock (same value as isAvailable) using the spread operator.

  // Add a new property priceWithTax (20% of price) using the spread operator.
}
{
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 350,
      isAvailable: true,
      genre: "Fiction",
      pages: 208,
      language: "English",
      rating: 4.7,
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 500,
      isAvailable: true,
      genre: "Self-Help",
      pages: 320,
      language: "English",
      rating: 4.8,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 400,
      isAvailable: false,
      genre: "Dystopian",
      pages: 328,
      language: "English",
      rating: 4.6,
    },
    {
      id: 4,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 450,
      isAvailable: true,
      genre: "Finance",
      pages: 256,
      language: "English",
      rating: 4.5,
    },
    {
      id: 5,
      title: "Ikigai",
      author: "Héctor García",
      price: 300,
      isAvailable: true,
      genre: "Self-Help",
      pages: 208,
      language: "English",
      rating: 4.4,
    },
    {
      id: 6,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      price: 380,
      isAvailable: false,
      genre: "Self-Help",
      pages: 224,
      language: "English",
      rating: 4.3,
    },
    {
      id: 7,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      price: 550,
      isAvailable: true,
      genre: "History",
      pages: 512,
      language: "English",
      rating: 4.7,
    },
    {
      id: 8,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      price: 420,
      isAvailable: true,
      genre: "Spirituality",
      pages: 236,
      language: "English",
      rating: 4.6,
    },
    {
      id: 9,
      title: "Think Like a Monk",
      author: "Jay Shetty",
      price: 480,
      isAvailable: false,
      genre: "Self-Help",
      pages: 352,
      language: "English",
      rating: 4.5,
    },
    {
      id: 10,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 320,
      isAvailable: true,
      genre: "Finance",
      pages: 336,
      language: "English",
      rating: 4.4,
    },
  ];
  //Task
  // Extract only name of products using map().

  // Extract only price of products using map().

  // Extract an array of objects containing only name and price using map().

  // Convert all name values to uppercase using map().

  // Add a new property priceAfterDiscount (10% off) using the spread operator.

  // Add a new property category ("budget" if price ≤ 40000, else "premium") using the spread operator.

  // Add a new property inStock (same value as isAvailable) using the spread operator.

  // Add a new property priceWithTax (20% of price) using the spread operator.
}

{
  const furniture = [
    {
      id: 1,
      name: "Sofa",
      price: 25000,
      brand: "Urban Ladder",
      isAvailable: true,
      color: "Brown",
      material: "Leather",
      dimensions: "84x36x32",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Bed",
      price: 35000,
      brand: "Wakefit",
      isAvailable: true,
      color: "White",
      material: "Wood",
      dimensions: "78x72x36",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Dining Table",
      price: 18000,
      brand: "Pepperfry",
      isAvailable: false,
      color: "Black",
      material: "Glass",
      dimensions: "60x36x30",
      rating: 4.4,
    },
    {
      id: 4,
      name: "Wardrobe",
      price: 28000,
      brand: "Godrej",
      isAvailable: true,
      color: "Walnut",
      material: "Engineered Wood",
      dimensions: "72x24x48",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Study Table",
      price: 8000,
      brand: "Home Centre",
      isAvailable: true,
      color: "White",
      material: "Metal",
      dimensions: "48x24x30",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Bookshelf",
      price: 12000,
      brand: "Ikea",
      isAvailable: false,
      color: "Black",
      material: "Particle Board",
      dimensions: "72x30x12",
      rating: 4.2,
    },
    {
      id: 7,
      name: "TV Stand",
      price: 15000,
      brand: "Nilkamal",
      isAvailable: true,
      color: "Brown",
      material: "Wood",
      dimensions: "60x20x24",
      rating: 4.4,
    },
    {
      id: 8,
      name: "Coffee Table",
      price: 10000,
      brand: "Durian",
      isAvailable: true,
      color: "Gray",
      material: "Metal",
      dimensions: "48x24x18",
      rating: 4.1,
    },
    {
      id: 9,
      name: "Office Chair",
      price: 9000,
      brand: "Green Soul",
      isAvailable: false,
      color: "Black",
      material: "Mesh",
      dimensions: "24x24x42",
      rating: 4.5,
    },
    {
      id: 10,
      name: "Shoe Rack",
      price: 5000,
      brand: "Spacewood",
      isAvailable: true,
      color: "White",
      material: "Plastic",
      dimensions: "36x12x48",
      rating: 4.0,
    },
  ];
  //Task
  // Extract only name of products using map().

  // Extract only price of products using map().

  // Extract an array of objects containing only name and price using map().

  // Convert all name values to uppercase using map().

  // Add a new property priceAfterDiscount (10% off) using the spread operator.

  // Add a new property category ("budget" if price ≤ 40000, else "premium") using the spread operator.

  // Add a new property inStock (same value as isAvailable) using the spread operator.

  // Add a new property priceWithTax (20% of price) using the spread operator.
}
