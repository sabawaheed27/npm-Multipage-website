function Travel(name, country, bestTimeToVisit, averageCost, description, image, category, highlights, attractions, currency, language, climate, food, visa, safetyTips) {
    this.name = name;
    this.country = country;
    this.bestTimeToVisit = bestTimeToVisit;
    this.averageCost = averageCost;
    this.description = description;
    this.image = image;
    this.category = category;
    this.highlights = highlights;
    this.attractions = attractions;
    this.currency = currency;
    this.language = language;
    this.climate = climate;
    this.food = food;
    this.visa = visa;
    this.safetyTips = safetyTips;
}

// Europe Destinations
let paris = new Travel(
    "Paris",
    "France",
    "April to June, September to November",
    "$1500 - $3000",
    "The romantic city of lights, known for the Eiffel Tower, art, and exquisite cuisine.",
    "../images/Paris.jpg",
    "Europe",
    "Eiffel Tower, Louvre Museum, Seine River",
    "Eiffel Tower, Notre-Dame, Champs-Élysées",
    "Euro (€)",
    "French",
    "Temperate, mild summers and cold winters",
    "Croissants, Baguette, Coq au vin",
    "Schengen Visa required for many non-EU travelers",
    "Beware of pickpockets around tourist hotspots."
);

let rome = new Travel(
    "Rome",
    "Italy",
    "March to May, September to November",
    "$1200 - $2500",
    "The eternal city filled with ancient ruins, vibrant piazzas, and delicious Italian food.",
    "../images/Rome.jpg",
    "Europe",
    "Colosseum, Roman Forum, Vatican City",
    "Colosseum, Trevi Fountain, Pantheon",
    "Euro (€)",
    "Italian",
    "Mediterranean climate, hot dry summers",
    "Pizza, Pasta, Gelato",
    "Schengen Visa required for many non-EU travelers",
    "Carry small cash; be cautious in crowded areas."
);

let barcelona = new Travel(
    "Barcelona",
    "Spain",
    "May to June, September",
    "$1300 - $2600",
    "A vibrant seaside city famous for its architecture, culture, and beaches.",
    "../images/Barcelona.jpg",
    "Europe",
    "Sagrada Familia, Park Güell, Beaches",
    "La Rambla, Gothic Quarter, Magic Fountain",
    "Euro (€)",
    "Spanish, Catalan",
    "Warm Mediterranean",
    "Tapas, Paella, Churros",
    "Schengen Visa required for many non-EU travelers",
    "Pickpockets common on Las Ramblas — stay alert."
);

// Asia Destinations
let tokyo = new Travel(
    "Tokyo",
    "Japan",
    "March to May, October to November",
    "$2000 - $4000",
    "A dazzling blend of tradition and future, with temples, tech, and world-class food.",
    "../images/Tokyo.jpg",
    "Asia",
    "Shibuya Crossing, Tokyo Tower, Temples",
    "Senso-ji Temple, Meiji Shrine, Shinjuku",
    "Japanese Yen (¥)",
    "Japanese",
    "Humid subtropical, mild winters",
    "Sushi, Ramen, Tempura",
    "Visa-free for many countries for 90 days",
    "Follow etiquette in public; be respectful."
);

let bangkok = new Travel(
    "Bangkok",
    "Thailand",
    "November to February",
    "$800 - $1500",
    "Bustling markets, ornate temples, and vibrant street life await you in Bangkok.",
    "../images/Bangkok.jpg",
    "Asia",
    "Grand Palace, Floating Markets, Nightlife",
    "Wat Arun, Chatuchak Market, Khao San Road",
    "Thai Baht (฿)",
    "Thai",
    "Tropical wet and dry",
    "Pad Thai, Tom Yum Goong, Green Curry",
    "Visa on arrival for many nationalities",
    "Avoid scams, especially with taxis and tuk-tuks."
);

let bali = new Travel(
    "Bali",
    "Indonesia",
    "April to October",
    "$1000 - $2000",
    "A tropical paradise with lush landscapes, beaches, and a rich cultural heritage.",
    "../images/bali.jpg",
    "Asia",
    "Rice Terraces, Temples, Beaches",
    "Ubud, Tanah Lot Temple, Kuta Beach",
    "Indonesian Rupiah (Rp)",
    "Indonesian",
    "Tropical rainforest",
    "Nasi Goreng, Satay, Babi Guling",
    "Visa-free for up to 30 days for many countries",
    "Respect local customs, especially near temples."
);

// America Destinations
let newYork = new Travel(
    "New York",
    "USA",
    "April to June, September to November",
    "$2000 - $5000",
    "The city that never sleeps, famous for its skyline, Broadway, and endless attractions.",
    "../images/nyc.jpg",
    "America",
    "Statue of Liberty, Central Park, Times Square",
    "Empire State Building, Brooklyn Bridge, Museums",
    "US Dollar ($)",
    "English",
    "Humid subtropical",
    "Pizza, Bagels, New York Cheesecake",
    "Visa Waiver Program (ESTA) or Tourist Visa",
    "Stay aware in crowded areas, especially subways."
);

let rio = new Travel(
    "Rio de Janeiro",
    "Brazil",
    "December to March",
    "$1500 - $3000",
    "Home to Carnival, Christ the Redeemer, and stunning beaches like Copacabana.",
    "../images/rio.jpg",
    "America",
    "Sugarloaf Mountain, Beaches, Christ the Redeemer",
    "Copacabana, Ipanema, Maracanã Stadium",
    "Brazilian Real (R$)",
    "Portuguese",
    "Tropical",
    "Feijoada, Churrasco, Pão de queijo",
    "Visa-free entry for many countries",
    "Stay cautious in favelas; use official taxis."
);

let toronto = new Travel(
    "Toronto",
    "Canada",
    "May to October",
    "$1200 - $2500",
    "A multicultural city with a stunning skyline, arts scene, and nearby natural wonders.",
    "../images/Toronto.jpg",
    "America",
    "CN Tower, Niagara Falls, Royal Ontario Museum",
    "Distillery District, High Park, Kensington Market",
    "Canadian Dollar (CAD)",
    "English, French",
    "Humid continental",
    "Poutine, Maple Syrup, Butter Tarts",
    "ETA (Electronic Travel Authorization) or Tourist Visa",
    "Winter weather can be harsh — dress appropriately."
);

// Grouping arrays
let europeArray = [paris, rome, barcelona];
let asiaArray = [tokyo, bangkok, bali];
let americaArray = [newYork, rio, toronto];

let travelArray = [...europeArray, ...asiaArray, ...americaArray];

// Exporting
export { travelArray, europeArray, asiaArray, americaArray };
