import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Calendar, Clock, Wrench, Drill, Hammer, Car } from 'lucide-react';

const ToolRental = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for tools
  const tools = [
    {
      id: 1,
      name: 'Electric Drill Machine',
      category: 'Power Tools',
      owner: 'Suresh Tools',
      rating: 4.7,
      reviews: 23,
      location: 'Koramangala',
      hourlyRate: 50,
      dailyRate: 300,
      weeklyRate: 1800,
      available: true,
      image: '/api/placeholder/200/150',
      description: 'Heavy-duty electric drill with multiple bits included',
      icon: Drill
    },
    {
      id: 2,
      name: 'Angle Grinder',
      category: 'Power Tools',
      owner: 'Power Tools Hub',
      rating: 4.5,
      reviews: 18,
      location: 'Whitefield',
      hourlyRate: 40,
      dailyRate: 250,
      weeklyRate: 1500,
      available: true,
      image: '/api/placeholder/200/150',
      description: 'Professional angle grinder for cutting and grinding',
      icon: Wrench
    },
    {
      id: 3,
      name: 'Ladder (8 feet)',
      category: 'General Tools',
      owner: 'Home Fix Rentals',
      rating: 4.8,
      reviews: 45,
      location: 'Jayanagar',
      hourlyRate: 25,
      dailyRate: 150,
      weeklyRate: 900,
      available: true,
      image: '/api/placeholder/200/150',
      description: 'Sturdy aluminum ladder, perfect for home maintenance',
      icon: Hammer
    },
    {
      id: 4,
      name: 'Pressure Washer',
      category: 'Cleaning Tools',
      owner: 'Clean Pro Equipment',
      rating: 4.6,
      reviews: 31,
      location: 'HSR Layout',
      hourlyRate: 80,
      dailyRate: 500,
      weeklyRate: 3000,
      available: false,
      image: '/api/placeholder/200/150',
      description: 'High-pressure washer for cars, patios, and exteriors',
      icon: Car
    },
    {
      id: 5,
      name: 'Circular Saw',
      category: 'Power Tools',
      owner: 'Carpenter Tools',
      rating: 4.4,
      reviews: 12,
      location: 'Banashankari',
      hourlyRate: 60,
      dailyRate: 400,
      weeklyRate: 2400,
      available: true,
      image: '/api/placeholder/200/150',
      description: 'Professional circular saw for precise wood cutting',
      icon: Wrench
    },
    {
      id: 6,
      name: 'Tile Cutter',
      category: 'Specialized Tools',
      owner: 'Tile Master Tools',
      rating: 4.3,
      reviews: 8,
      location: 'Indiranagar',
      hourlyRate: 45,
      dailyRate: 280,
      weeklyRate: 1680,
      available: true,
      image: '/api/placeholder/200/150',
      description: 'Electric tile cutter for ceramic and stone tiles',
      icon: Wrench
    }
  ];

  const categories = ['All', 'Power Tools', 'General Tools', 'Cleaning Tools', 'Specialized Tools', 'Garden Tools'];
  const locations = ['All', 'Koramangala', 'Whitefield', 'Jayanagar', 'HSR Layout', 'Banashankari', 'Indiranagar'];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All' || tool.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const RentalModal = ({ tool, onClose }) => {
    const [rentalDuration, setRentalDuration] = useState('daily');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [requirements, setRequirements] = useState('');

    const getRentalRate = () => {
      switch (rentalDuration) {
        case 'hourly': return tool.hourlyRate;
        case 'daily': return tool.dailyRate;
        case 'weekly': return tool.weeklyRate;
        default: return tool.dailyRate;
      }
    };

    const handleRental = () => {
      console.log('Tool rental:', { tool, rentalDuration, startDate, endDate, requirements });
      alert(`Rental request sent for ${tool.name}!`);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <h3 className="text-lg font-semibold mb-4">Rent {tool.name}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rental Duration
              </label>
              <select
                value={rentalDuration}
                onChange={(e) => setRentalDuration(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requirements
              </label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows="3"
                placeholder="Any special requirements or instructions..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Rate ({rentalDuration}):</span>
                <span className="font-semibold">₹{getRentalRate()}</span>
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
              onClick={handleRental}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Tool Rental</h1>
          <p className="text-gray-600">Rent professional tools for your projects</p>
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
              placeholder="Search for tools..."
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
              {filteredTools.length} tools available
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
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

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Tool Image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <tool.icon size={48} className="text-primary-600" />
              </div>

              {/* Tool Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    tool.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tool.available ? 'Available' : 'Rented'}
                  </span>
                </div>

                <p className="text-primary-600 font-medium mb-2">{tool.category}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.description}</p>

                {/* Owner and Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">{tool.owner}</span>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{tool.rating}</span>
                    <span className="text-sm text-gray-500">({tool.reviews})</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <MapPin size={14} />
                  <span>{tool.location}</span>
                </div>

                {/* Pricing */}
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Hourly:</span>
                    <span className="font-medium">₹{tool.hourlyRate}/hr</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Daily:</span>
                    <span className="font-medium">₹{tool.dailyRate}/day</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Weekly:</span>
                    <span className="font-medium">₹{tool.weeklyRate}/week</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedTool(tool)}
                    disabled={!tool.available}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      tool.available
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {tool.available ? 'Rent Now' : 'Currently Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No tools found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Add Tool Banner */}
        <div className="mt-12 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Have Tools to Rent?</h2>
          <p className="mb-6">List your tools and earn extra income by renting them to others in your community</p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            List Your Tools
          </button>
        </div>

        {/* Rental Modal */}
        {selectedTool && (
          <RentalModal
            tool={selectedTool}
            onClose={() => setSelectedTool(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ToolRental;