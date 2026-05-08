import { CheckCircle, Users, Heart, Trophy } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Authentic Cuisine",
      description: "We specialize in South Indian & Arabic dishes, prepared with love and traditional methods.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our top priority in every event we cater.",
    },
    {
      icon: Trophy,
      title: "Quality Excellence",
      description: "We use only the finest ingredients and maintain highest standards in every dish.",
    },
  ];

  const highlights = [
    "Over 5 years of South Indian & Arabic catering excellence",
    "500+ successful events across the region",
    "Expert chefs trained in traditional cooking methods",
    "Customizable menus featuring biryani, mandhi, and curries",
    "Fresh, authentic spices and locally-sourced ingredients",
    "Professional and courteous staff dedicated to your event",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Farsana Catering</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bringing authentic South Indian & Arabic flavors to your celebrations
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Farsana Catering was founded with a passion for authentic South Indian and Arabic cuisine.
                What started as a family operation rooted in traditional recipes has grown into one of the
                most trusted catering services specializing in biryani, mandhi, and regional delicacies.
              </p>
              <p className="text-gray-600 mb-4">
                With over 5 years of experience and 500+ events under our belt, we've perfected the art
                of preparing Malabar Biryani, Kerala Mutton Biryani, Arabic Chicken Mandhi, and authentic
                Chettinad dishes. Our chefs are experts in South Indian and Arabic cooking techniques,
                ensuring every dish captures the essence of its origin.
              </p>
              <p className="text-gray-600">
                From traditional Kerala fish curry with coconut to spicy Dindigul biryani, from creamy
                butter masala to fiery beef chukka - we bring the authentic taste of South India and the
                Middle East to your table. Every event is an opportunity to showcase our culinary heritage
                and create lasting memories through exceptional food.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769805589566-47a4e0b10c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3NTgyNzUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional chef cooking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774025967891-b4ed833e57ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGJ1ZmZldCUyMGZvb2R8ZW58MXx8fHwxNzc1NTcxNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Catering buffet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of culinary experts dedicated to making your event perfect
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg">
              Our team consists of experienced chefs, event coordinators, and service staff who work
              together seamlessly to ensure your event runs perfectly. With combined decades of
              experience in the culinary and hospitality industry, we bring professionalism,
              creativity, and attention to detail to every event we cater.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}