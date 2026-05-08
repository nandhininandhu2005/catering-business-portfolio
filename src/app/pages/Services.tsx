import { Heart, Briefcase, Cake, Trees, Utensils, Users, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite South Indian & Arabic wedding catering services. From intimate ceremonies to grand receptions, we create memorable dining experiences with authentic biryani, mandhi, and traditional dishes.",
      image: "https://images.unsplash.com/photo-1733479189782-0d7d1283d019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2F0ZXJpbmclMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc3NTgyNzUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Customized wedding menus with biryani & mandhi",
        "Traditional South Indian & Arabic dishes",
        "Elegant presentation and plating",
        "Professional service staff",
        "Dietary accommodations",
      ],
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional catering for business meetings, conferences, and corporate celebrations. We deliver authentic South Indian and Arabic cuisine that impresses clients and energizes teams with flavors they'll remember.",
      image: "https://images.unsplash.com/photo-1560117531-2304cfbbe9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjYXRlcmluZyUyMGJ1ZmZldCUyMHNwcmVhZHxlbnwxfHx8fDE3NzU4Mjc1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Breakfast and lunch packages",
        "Traditional South Indian snacks",
        "Formal dinner events with biryani",
        "On-time delivery guaranteed",
        "Professional setup and cleanup",
      ],
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description: "Delightful food arrangements that make birthday celebrations extra special. Perfect for all ages, featuring our signature biryani, mandhi, curries, and authentic South Indian delicacies.",
      image: "https://images.unsplash.com/photo-1630237399805-9c950e5685b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBmb29kfGVufDF8fHx8MTc3NTYzMDE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Kid-friendly and adult menu options",
        "Themed party packages",
        "Birthday cake coordination",
        "Traditional & modern dishes",
        "Flexible serving styles",
      ],
    },
    {
      icon: Trees,
      title: "Outdoor Catering",
      description: "Perfect for picnics, garden parties, and outdoor celebrations. We handle all the logistics with our expertise in South Indian & Arabic outdoor catering, ensuring fresh and delicious food in any setting.",
      image: "https://images.unsplash.com/photo-1765614767282-40b4fe2bfeff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2F0ZXJpbmclMjBwaWNuaWN8ZW58MXx8fHwxNzc1NjMwMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Weather-ready food solutions",
        "Portable serving equipment",
        "Live cooking stations",
        "Outdoor setup expertise",
        "Complete event coordination",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Utensils,
      title: "Custom Menus",
      description: "Work with our chefs to create a personalized menu that reflects your taste and style.",
    },
    {
      icon: Users,
      title: "Professional Staff",
      description: "Experienced servers, bartenders, and event coordinators at your service.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive catering solutions for every type of event
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`rounded-xl overflow-hidden shadow-xl ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Extra touches to make your event even more special
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Plan Your Event</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us to discuss your catering needs and receive a personalized quote.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}