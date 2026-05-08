import { Link } from "react-router";
import { ArrowRight, Users, Award, Calendar, Star, ChefHat, Utensils, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const featuredServices = [
    {
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite South Indian & Arabic wedding menus.",
      image: "https://images.unsplash.com/photo-1733479189782-0d7d1283d019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2F0ZXJpbmclMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc3NTgyNzUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Corporate Events",
      description: "Professional catering with authentic flavors that impress clients and energize teams.",
      image: "https://images.unsplash.com/photo-1560117531-2304cfbbe9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjYXRlcmluZyUyMGJ1ZmZldCUyMHNwcmVhZHxlbnwxfHx8fDE3NzU4Mjc1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Birthday Parties",
      description: "Delightful food arrangements featuring biryani, mandhi, and more for memorable celebrations.",
      image: "https://images.unsplash.com/photo-1630237399805-9c950e5685b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBmb29kfGVufDF8fHx8MTc3NTYzMDE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const highlights = [
    { icon: Users, value: "500+", label: "Events Catered", color: "primary" },
    { icon: Award, value: "5+", label: "Years Experience", color: "primary" },
    { icon: ChefHat, value: "Multi", label: "Cuisine Experts", color: "accent" },
    { icon: Star, value: "4.9", label: "Average Rating", color: "accent" },
  ];

  const specialties = [
    {
      icon: Utensils,
      title: "South Indian Mastery",
      description: "Authentic biryanis, dosas, and traditional Kerala recipes prepared by expert chefs",
    },
    {
      icon: Globe,
      title: "Arabic Cuisine",
      description: "Exquisite mandhi, kabsa, and traditional Arabic dishes with authentic flavors",
    },
    {
      icon: ChefHat,
      title: "Premium Quality",
      description: "Fresh ingredients, traditional cooking methods, and attention to every detail",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Menon",
      rating: 5,
      text: "The Malabar Biryani at our wedding was absolutely phenomenal! Every guest was raving about it. Best catering service!",
    },
    {
      name: "Fatima Al-Rashid",
      rating: 5,
      text: "Their Arabic Mandhi is the most authentic I've had outside of the Middle East. Perfect for our corporate event!",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Farsana Catering made my daughter's birthday unforgettable. The food was delicious and presentation was beautiful!",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1560117531-2304cfbbe9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjYXRlcmluZyUyMGJ1ZmZldCUyMHNwcmVhZHxlbnwxfHx8fDE3NzU4Mjc1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Catering buffet spread"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Farsana Catering</h1>
          <p className="text-2xl md:text-3xl mb-3">Delicious Food for Every Occasion</p>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Authentic South Indian & Arabic Cuisine
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((stat, index) => {
              const Icon = stat.icon;
              const bgColor = stat.color === "accent" ? "bg-accent" : "bg-primary";
              const textColor = stat.color === "accent" ? "text-accent" : "text-primary";
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColor} rounded-full mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold ${textColor} mb-1`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert in South Indian & Arabic cuisine with over 5 years of experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium catering for all types of events with customized menus
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Signature Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From aromatic biryanis to authentic mandhi - taste the tradition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwcmljZXxlbnwxfHx8fDE3NzU4MDE0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Biryani"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Biryani Specials</h3>
                <p className="text-gray-600 mb-4">
                  Malabar, Dindigul, Hyderabad - authentic flavors from across India
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1604382440115-5f730e6ede1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBtYW5kaGklMjByaWNlfGVufDF8fHx8MTc3NTgyNzUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mandhi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Chef Special
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arabic Mandhi</h3>
                <p className="text-gray-600 mb-4">
                  Traditional Arabic rice with perfectly spiced grilled chicken
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwY3VycnklMjBncmF2eXxlbnwxfHx8fDE3NzU4Mjc1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Curry"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kerala Specialties</h3>
                <p className="text-gray-600 mb-4">
                  Fish curry, stews, and traditional recipes with coconut
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg font-semibold"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Make Your Event Special?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your catering needs and experience authentic flavors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
