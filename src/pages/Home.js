import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Shield, Clock, Star, Zap, Wrench, Home as HomeIcon, Scissors, Car } from 'lucide-react';

const Home = () => {
  const services = [
    { icon: Zap, name: 'Electrician', description: 'Electrical repairs and installations' },
    { icon: Wrench, name: 'Plumber', description: 'Plumbing services and repairs' },
    { icon: HomeIcon, name: 'Cleaning', description: 'House cleaning and maid services' },
    { icon: Scissors, name: 'Gardening', description: 'Garden maintenance and landscaping' },
    { icon: Car, name: 'Carpentry', description: 'Furniture and woodwork services' },
    { icon: Wrench, name: 'Tool Rental', description: 'Rent tools for your projects' },
  ];

  const features = [
    {
      icon: Search,
      title: 'Easy Discovery',
      description: 'Find skilled workers in your area with just a few clicks'
    },
    {
      icon: Shield,
      title: 'Verified Workers',
      description: 'All workers are verified and rated by the community'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book services based on your and workers\' availability'
    },
    {
      icon: Users,
      title: 'Direct Connection',
      description: 'Connect directly with workers, no middleman fees'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      comment: 'Found an excellent electrician through DailyWageConnect. Very reliable and affordable!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Electrician',
      comment: 'This platform helped me get consistent work and connect with families in my area.',
      rating: 5
    },
    {
      name: 'Meera Patel',
      role: 'Homeowner',
      comment: 'The tool rental feature is amazing. Saved me money on a weekend DIY project.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Connecting Communities Through
              <span className="text-yellow-300"> Daily Wage Work</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Empowering local workers and households with a simple, reliable platform for job scheduling and service booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-service" 
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Find Workers
              </Link>
              <Link 
                to="/register" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Join as Worker
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with skilled workers across various categories for all your household needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <service.icon size={48} className="mx-auto mb-4 text-primary-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose DailyWageConnect?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're building a platform that empowers both workers and users with transparency, reliability, and fairness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Users */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 text-center">For Homeowners</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Search & Browse</h4>
                    <p className="text-gray-600">Find workers by service type and location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Check Availability</h4>
                    <p className="text-gray-600">View worker profiles, ratings, and schedules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Book & Pay</h4>
                    <p className="text-gray-600">Schedule work and make secure payments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Workers */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 text-center">For Workers</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Create Profile</h4>
                    <p className="text-gray-600">Set up your profile with skills and experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Set Availability</h4>
                    <p className="text-gray-600">Manage your schedule and availability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Get Jobs</h4>
                    <p className="text-gray-600">Receive job requests and earn steady income</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of satisfied users and workers in our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Sign Up Today
            </Link>
            <Link 
              to="/book-service" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Find a Worker
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;