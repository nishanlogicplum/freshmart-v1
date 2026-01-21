import React from 'react';
import { Heart, Users, Truck, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Family Owned',
      description: 'A family business serving the community with love and dedication for over 15 years'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Supporting local farmers and suppliers while serving our neighbors with care'
    },
    {
      icon: Truck,
      title: 'Fresh Daily',
      description: 'Daily deliveries ensure the freshest produce and products reach our shelves'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous quality standards and careful selection of every item we sell'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About FreshMart
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Since 2008, FreshMart has been your trusted neighborhood grocery store, 
                committed to providing the freshest produce, highest quality products, 
                and exceptional customer service to our community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that good food brings people together, and we're proud to be 
                part of your family's daily life, from weekly grocery runs to special 
                occasion preparations.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7129717/pexels-photo-7129717.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Grocery store interior"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years of Service</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose FreshMart?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:bg-green-50 p-6 rounded-xl transition-colors duration-300"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;