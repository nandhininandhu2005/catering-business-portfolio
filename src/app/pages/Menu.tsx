import { useState } from "react";
import { Flame, ChefHat, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface MenuItem {
  name: string;
  category: string;
  description: string;
  image: string;
  spiceLevel: number;
  isBestSeller?: boolean;
  isChefSpecial?: boolean;
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "biryani", name: "Biryani Specials" },
    { id: "rice-mandhi", name: "Rice & Mandhi" },
    { id: "gravy", name: "Gravy & Curry" },
    { id: "chettinad", name: "Chettinad & Dry" },
    { id: "kerala", name: "Kerala Recipes" },
    { id: "arabic", name: "Arabic Recipes" },
  ];

  const menuItems: MenuItem[] = [
    // Biryani Specials
    {
      name: "Malabar Chicken Biryani",
      category: "biryani",
      description: "Aromatic Malabar-style biryani with tender chicken, fragrant spices, and basmati rice",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwcmljZXxlbnwxfHx8fDE3NzU4MDE0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 2,
      isBestSeller: true,
    },
    {
      name: "Kerala Mutton Biryani",
      category: "biryani",
      description: "Traditional Kerala-style mutton biryani with rich flavors and authentic spices",
      image: "https://images.unsplash.com/photo-1680359870819-22556317ce22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBiaXJ5YW5pJTIwYXJvbWF0aWN8ZW58MXx8fHwxNzc1ODI3NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 3,
      isBestSeller: true,
    },
    {
      name: "Dindigul Chicken Biryani",
      category: "biryani",
      description: "Spicy Dindigul-style biryani with unique blend of spices and succulent chicken",
      image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5kaWd1bCUyMGJpcnlhbmklMjB0YW1pbCUyMHNwaWN5fGVufDF8fHx8MTc3NTgyODE1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 3,
      isBestSeller: true,
    },
    {
      name: "Hyderabad Chicken Biryani",
      category: "biryani",
      description: "Classic Hyderabadi dum biryani with layers of fragrant rice and marinated chicken",
      image: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzc1NjI4NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 2,
      isBestSeller: true,
    },
    {
      name: "Beef Biryani",
      category: "biryani",
      description: "Rich and flavorful beef biryani with tender meat and aromatic spices",
      image: "https://images.unsplash.com/photo-1739909301016-0824e6d8fc68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NzYwNTgxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      spiceLevel: 2,
      isBestSeller: true,
    },
    {
      name: "Fish Biryani",
      category: "biryani",
      description: "Coastal special fish biryani with delicate flavors and fresh fish",
      image: "https://images.unsplash.com/photo-1775480868396-26060a8b3e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcmljZSUyMGRpc2glMjBhc2lhbnxlbnwxfHx8fDE3NzYwNTgxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      spiceLevel: 2,
    },
    // Rice & Mandhi
    {
      name: "Ghee Rice",
      category: "rice-mandhi",
      description: "Fragrant basmati rice cooked in pure ghee with aromatic spices",
      image: "https://images.unsplash.com/photo-1775039983749-aa6003c8ecf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHJpY2UlMjBpbmRpYW4lMjByZXN0YXVyYW50fGVufDF8fHx8MTc3NTgyODE1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 1,
    },
    {
      name: "Veg Pulao",
      category: "rice-mandhi",
      description: "Mixed vegetable pulao with fragrant spices and fresh vegetables",
      image: "https://images.unsplash.com/photo-1596560520688-e1ecc9da2099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBwdWxhbyUyMGJhc21hdGklMjByaWNlfGVufDF8fHx8MTc3NTgyODE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 1,
    },
    {
      name: "Jeera Rice",
      category: "rice-mandhi",
      description: "Basmati rice flavored with cumin seeds and fresh herbs",
      image: "https://images.unsplash.com/photo-1775181165873-07bd8a49a1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjByaWNlJTIwZGlzaCUyMG1pZGRsZSUyMGVhc3Rlcm58ZW58MXx8fHwxNzc1ODI4MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 1,
    },
    {
      name: "Arabic Mutton Mandhi",
      category: "arabic",
      description: "Aromatic Arabic rice with tender mutton, traditional spices, and grilled to perfection",
      image: "https://images.unsplash.com/photo-1771285119318-b342c3ecc51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwcmljZSUyMGNoaWNrZW58ZW58MXx8fHwxNzc1ODI4MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 2,
      isChefSpecial: true,
    },
    {
      name: "Arabic Chicken Mandhi",
      category: "arabic",
      description: "Traditional Arabic mandhi rice with perfectly spiced grilled chicken",
      image: "https://images.unsplash.com/photo-1604382440115-5f730e6ede1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBtYW5kaGklMjByaWNlfGVufDF8fHx8MTc3NTgyNzUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 2,
      isChefSpecial: true,
    },
    // Gravy & Curry
    {
      name: "Chicken Gravy",
      category: "gravy",
      description: "Rich and flavorful chicken curry with traditional spices and creamy gravy",
      image: "https://images.unsplash.com/photo-1742599361498-79824d24e355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbWFzYWxhJTIwY3VycnklMjBib3dsfGVufDF8fHx8MTc3NTgyODE1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 2,
    },
    {
      name: "Fry Chicken Gravy",
      category: "gravy",
      description: "Semi-dry chicken gravy with roasted spices and caramelized onions",
      image: "https://images.unsplash.com/photo-1736952332338-44dc07283462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjByb2FzdGVkJTIwc3BpY3l8ZW58MXx8fHwxNzc1ODI4MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 3,
    },
    {
      name: "Butter Masala",
      category: "gravy",
      description: "Creamy butter masala with rich tomato-based gravy and aromatic spices",
      image: "https://images.unsplash.com/photo-1707448829764-9474458021ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwbWFzYWxhfGVufDF8fHx8MTc3NTgyNzUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 1,
    },
    {
      name: "Chicken Kurma",
      category: "gravy",
      description: "Mild and creamy chicken kurma with coconut and cashew paste",
      image: "https://images.unsplash.com/photo-1696950171467-231213764c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwa29ybWElMjBjcmVhbXklMjBjdXJyeXxlbnwxfHx8fDE3NzU4MjgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 1,
    },
    {
      name: "Mutton Kurma",
      category: "gravy",
      description: "Slow-cooked mutton kurma with aromatic spices and rich gravy",
      image: "https://images.unsplash.com/photo-1659716306756-13cae19333b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeSUyMGluZGlhbiUyMHNwaWN5fGVufDF8fHx8MTc3NTgyODE1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 2,
    },
    {
      name: "Beef Kurma",
      category: "gravy",
      description: "Tender beef cooked in traditional kurma style with coconut and spices",
      image: "https://images.unsplash.com/photo-1710091691802-7dedb8af9a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwY3VycnklMjBncmF2eSUyMGluZGlhbnxlbnwxfHx8fDE3NzU4MjgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 2,
    },
    // Chettinad & Dry
    {
      name: "Chicken Chukka",
      category: "chettinad",
      description: "Spicy Chettinad-style dry chicken with roasted spices and curry leaves",
      image: "https://images.unsplash.com/photo-1633945488458-f8cc1f3a0144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBmcmllZCUyMGNoaWNrZW4lMjBwaWVjZXMlMjBzcGljeXxlbnwxfHx8fDE3NzYwNTgxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      spiceLevel: 3,
      isChefSpecial: true,
    },
    {
      name: "Beef Chukka",
      category: "chettinad",
      description: "Fiery beef chukka with roasted spices and caramelized onions",
      image: "https://images.unsplash.com/photo-1711633648895-f5df0336ff55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwZnJ5JTIwaW5kaWFuJTIwc3BpY3l8ZW58MXx8fHwxNzc1ODI4MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 3,
      isChefSpecial: true,
    },
    {
      name: "Beef Kondattam",
      category: "chettinad",
      description: "Traditional Kerala-style beef fry with bold spices and crispy edges",
      image: "https://images.unsplash.com/photo-1733860539792-f42d3835e004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkcnklMjBtZWF0JTIwcm9hc3RlZHxlbnwxfHx8fDE3NzU4MjgxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 3,
      isChefSpecial: true,
    },
    // Kerala Recipes
    {
      name: "Kerala Fish Curry",
      category: "kerala",
      description: "Authentic Kerala-style fish curry with coconut milk and traditional spices",
      image: "https://images.unsplash.com/photo-1620894580123-466ad3a0ca06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBmaXNoJTIwY3Vycnl8ZW58MXx8fHwxNzc1ODI3NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spiceLevel: 2,
    },
    {
      name: "Kerala Chicken Stew",
      category: "kerala",
      description: "Mild and creamy Kerala-style chicken stew with coconut milk and vegetables",
      image: "https://images.unsplash.com/photo-1620894592665-c68bdefed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBjaGlja2VuJTIwc3RldyUyMGNvY29udXR8ZW58MXx8fHwxNzc2MDU4MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      spiceLevel: 1,
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter((item) => item.category === activeCategory);

  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i < level ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Authentic South Indian & Arabic Cuisine - Crafted with passion and tradition
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all font-semibold ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.isBestSeller && (
                      <div className="flex items-center gap-1 bg-accent text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        <Flame className="w-4 h-4" />
                        Best Seller
                      </div>
                    )}
                    {item.isChefSpecial && (
                      <div className="flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        <ChefHat className="w-4 h-4" />
                        Chef Special
                      </div>
                    )}
                  </div>
                  {/* Spice Level */}
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-2 rounded-lg shadow">
                    {renderSpiceLevel(item.spiceLevel)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <button className="w-full bg-primary hover:bg-red-700 text-white px-4 py-2.5 rounded-lg transition-all shadow hover:shadow-lg">
                    View / Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Menu?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Customizable</h3>
              <p className="text-gray-600">All dishes can be customized to your taste and dietary needs</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Flame className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Only the freshest, locally-sourced ingredients</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Prepared by experienced South Indian & Arabic cuisine specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us to customize your menu and book your catering service today!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            Book Catering Now
          </a>
        </div>
      </section>
    </div>
  );
}