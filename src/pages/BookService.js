import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, MapPin, Clock, Calendar, Phone, MessageCircle } from 'lucide-react';

const BookService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - in real app this would come from API
  const workers = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      service: 'Electrician',
      rating: 4.8,
      reviews: 152,
      experience: 8,
      location: 'Koramangala',
      rate: 800,
      availability: 'Available Today',
      image: '/api/placeholder/150/150',
      description: 'Expert in home electrical work, wiring, and appliance repairs',
      verified: true
    },
    {
      id: 2,
      name: 'Sunita Devi',
      service: 'Cleaning/Maid',
      rating: 4.9,
      reviews: 98,
      experience: 5,
      location: 'Whitefield',
      rate: 600,
      availability: 'Available Tomorrow',
      image: '/api/placeholder/150/150',
      description: 'Professional house cleaning with attention to detail',
      verified: true
    },
    {
      id: 3,
      name: 'Vijay Singh',
      service: 'Plumber',
      rating: 4.7,
      reviews: 73,
      experience: 12,
      location: 'Jayanagar',
      rate: 750,
      availability: 'Available Today',
      image: '/api/placeholder/150/150',
      description: 'Specialized in bathroom and kitchen plumbing solutions',
      verified: true
    },
    {
      id: 4,
      name: 'Lakshmi Nair',
      service: 'Gardening',
      rating: 4.6,
      reviews: 45,
      experience: 6,
      location: 'HSR Layout',
      rate: 500,
      availability: 'Available in 2 days',
      image: '/api/placeholder/150/150',
      description: 'Garden maintenance, plant care, and landscape design',
      verified: false
    },
    {
      id: 5,
      name: 'Suresh Carpenter',
      service: 'Carpentry',
      rating: 4.5,
      reviews: 89,
      experience: 15,
      location: 'Banashankari',
      rate: 900,
      availability: 'Available Today',
      image: '/api/placeholder/150/150',
      description: 'Custom furniture, repairs, and wooden installations',
      verified: true
    },
    {
      id: 6,
      name: 'Priya Sharma',
      service: 'Cleaning/Maid',
      rating: 4.8,
      reviews: 67,
      experience: 4,
      location: 'Indiranagar',
      rate: 650,
      availability: 'Available Tomorrow',
      image: '/api/placeholder/150/150',
      description: 'Deep cleaning specialist for homes and offices',
      verified: true
    }
  ];

  const services = ['All', 'Electrician', 'Plumber', 'Cleaning/Maid', 'Gardening', 'Carpentry', 'Painting'];
  const locations = ['All', 'Koramangala', 'Whitefield', 'Jayanagar', 'HSR Layout', 'Banashankari', 'Indiranagar'];

  const filteredWorkers = workers.filter(worker => {
    const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = selectedService === '' || selectedService === 'All' || worker.service === selectedService;
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All' || worker.location === selectedLocation;
    
    return matchesSearch && matchesService && matchesLocation;
  });

  const BookingModal = ({ worker, onClose }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [requirements, setRequirements] = useState('');

    const handleBooking = () => {
      // In real app, this would make an API call
      console.log('Booking:', { worker, selectedDate, selectedTime, requirements });
      alert(`Booking request sent to ${worker.name}!`);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <h3 className="text-lg font-semibold mb-4">Book {worker.name}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 7 PM)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Work Requirements
              </label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows="3"
                placeholder="Describe what work you need done..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Daily Rate:</span>
                <span className="font-semibold">₹{worker.rate}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleBooking}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [selectedWorker, setSelectedWorker] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Workers</h1>
          <p className="text-gray-600">Connect with skilled workers in your area</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, service, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-4 sm:mb-0"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
            <div className="text-sm text-gray-500">
              {filteredWorkers.length} workers found
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Category
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Workers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkers.map((worker) => (
            <div key={worker.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Worker Image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {worker.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Worker Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{worker.name}</h3>
                  {worker.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-primary-600 font-medium mb-2">{worker.service}</p>
                <p className="text-gray-600 text-sm mb-3">{worker.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{worker.rating}</span>
                  <span className="text-sm text-gray-500">({worker.reviews} reviews)</span>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>{worker.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={14} />
                    <span>{worker.experience} years experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar size={14} />
                    <span>{worker.availability}</span>
                  </div>
                </div>

                {/* Rate */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-800">₹{worker.rate}/day</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedWorker(worker)}
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                  >
                    Book Now
                  </button>
                  <Link
                    to={`/worker-profile/${worker.id}`}
                    className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle size={16} />
                  </Link>
                  <a
                    href={`tel:+91${worker.id}234567890`}
                    className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Phone size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorkers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No workers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Booking Modal */}
        {selectedWorker && (
          <BookingModal
            worker={selectedWorker}
            onClose={() => setSelectedWorker(null)}
          />
        )}
      </div>
    </div>
  );
};

export default BookService;