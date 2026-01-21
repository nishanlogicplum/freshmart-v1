import React from 'react';

const Products = () => {
  const categories = [
    {
      name: 'Fresh Fruits',
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Seasonal, fresh fruits picked at peak ripeness'
    },
    {
      name: 'Vegetables',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Crisp, fresh vegetables sourced from local farms'
    },
    {
      name: 'Dairy Products',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Fresh milk, cheese, yogurt, and dairy essentials'
    },
    {
      name: 'Bakery Items',
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Freshly baked bread, pastries, and sweet treats'
    },
    {
      name: 'Meat & Seafood',
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Premium quality meat and fresh seafood selection'
    },
    {
      name: 'Pantry Essentials',
      image: 'https://images.pexels.com/photos/6191/baking-ingredients-cooking-kitchen.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Grains, spices, oils, and cooking essentials'
    }
  ];

  const featuredProducts = [
    {
      name: 'Organic Bananas',
      price: '$3.99/lb',
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Organic'
    },
    {
      name: 'Fresh Avocados',
      price: '$1.50/each',
      image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Popular'
    },
    {
      name: 'Artisan Bread',
      price: '$4.99',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Fresh Today'
    },
    {
      name: 'Premium Salmon',
      price: '$12.99/lb',
      image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Wild Caught'
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our wide selection of fresh, quality products carefully chosen for your family's needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Products
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                    {product.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-green-600 font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;