import React, { useState } from 'react';
import { Calendar, Clock, Star, MapPin, Phone, MessageCircle, Settings, Bell, User } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  // Mock data
  const user = {
    name: 'Anita Sharma',
    email: 'anita.sharma@email.com',
    phone: '+91 9876543210',
    location: 'Koramangala, Bangalore',
    memberSince: 'March 2024'
  };

  const bookings = [
    {
      id: 1,
      worker: 'Ramesh Kumar',
      service: 'Electrician',
      date: '2024-01-25',
      time: 'Morning (9 AM - 12 PM)',
      status: 'confirmed',
      rate: 800,
      description: 'Fix ceiling fan and replace electrical outlet'
    },
    {
      id: 2,
      worker: 'Sunita Devi',
      service: 'Cleaning/Maid',
      date: '2024-01-28',
      time: 'Afternoon (2 PM - 5 PM)',
      status: 'pending',
      rate: 600,
      description: 'Deep cleaning of 2BHK apartment'
    },
    {
      id: 3,
      worker: 'Vijay Singh',
      service: 'Plumber',
      date: '2024-01-20',
      time: 'Morning (10 AM - 1 PM)',
      status: 'completed',
      rate: 750,
      description: 'Fix kitchen sink and bathroom tap'
    }
  ];

  const savedWorkers = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      service: 'Electrician',
      rating: 4.8,
      reviews: 152,
      location: 'Koramangala',
      rate: 800
    },
    {
      id: 2,
      name: 'Sunita Devi',
      service: 'Cleaning/Maid',
      rating: 4.9,
      reviews: 98,
      location: 'Whitefield',
      rate: 600
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <User size={32} className="text-primary-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user.name}!</h1>
                <p className="text-gray-600">{user.location}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Bell size={16} />
                <span>Notifications</span>
              </button>
              <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                <Settings size={16} />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-gray-800">2</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star size={24} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Saved Workers</p>
                <p className="text-2xl font-bold text-gray-800">5</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">₹</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-800">8,400</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'bookings'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'saved'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Saved Workers
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Profile
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Your Bookings</h2>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-800">{booking.worker}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                          </div>
                          <p className="text-primary-600 font-medium mb-1">{booking.service}</p>
                          <p className="text-gray-600 text-sm mb-2">{booking.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{booking.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{booking.time}</span>
                            </span>
                            <span className="font-medium">₹{booking.rate}</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-4 flex space-x-2">
                          <button className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            <MessageCircle size={14} />
                            <span>Message</span>
                          </button>
                          <button className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            <Phone size={14} />
                            <span>Call</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Saved Workers Tab */}
            {activeTab === 'saved' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Saved Workers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedWorkers.map((worker) => (
                    <div key={worker.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-800">{worker.name}</h3>
                          <p className="text-primary-600 font-medium">{worker.service}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{worker.rating}</span>
                          <span className="text-sm text-gray-500">({worker.reviews})</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span>{worker.location}</span>
                        </div>
                        <div className="text-lg font-bold text-gray-800">₹{worker.rate}/day</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                          Book Now
                        </button>
                        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <MessageCircle size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={user.name}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={user.phone}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={user.location}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                      <input
                        type="text"
                        value={user.memberSince}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        readOnly
                      />
                    </div>
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;