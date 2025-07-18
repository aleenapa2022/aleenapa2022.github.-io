import React, { useState } from 'react';
import { Calendar, Clock, Star, DollarSign, CheckCircle, XCircle, User, Settings, Bell } from 'lucide-react';

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  // Mock data
  const worker = {
    name: 'Ramesh Kumar',
    service: 'Electrician',
    rating: 4.8,
    reviews: 152,
    location: 'Koramangala, Bangalore',
    memberSince: 'January 2024',
    totalEarnings: 45600,
    completedJobs: 68
  };

  const jobRequests = [
    {
      id: 1,
      client: 'Anita Sharma',
      service: 'Electrical repair',
      date: '2024-01-25',
      time: 'Morning (9 AM - 12 PM)',
      rate: 800,
      status: 'pending',
      description: 'Fix ceiling fan and replace electrical outlet',
      location: 'Koramangala'
    },
    {
      id: 2,
      client: 'Rahul Verma',
      service: 'Wiring installation',
      date: '2024-01-26',
      time: 'Afternoon (2 PM - 5 PM)',
      rate: 1200,
      status: 'pending',
      description: 'Install new electrical wiring for kitchen renovation',
      location: 'BTM Layout'
    },
    {
      id: 3,
      client: 'Priya Nair',
      service: 'Appliance repair',
      date: '2024-01-23',
      time: 'Morning (10 AM - 1 PM)',
      rate: 600,
      status: 'completed',
      description: 'Repair washing machine and check electrical connections',
      location: 'HSR Layout'
    }
  ];

  const availability = [
    { day: 'Monday', morning: true, afternoon: true, evening: false },
    { day: 'Tuesday', morning: true, afternoon: false, evening: true },
    { day: 'Wednesday', morning: false, afternoon: true, evening: true },
    { day: 'Thursday', morning: true, afternoon: true, evening: false },
    { day: 'Friday', morning: true, afternoon: true, evening: true },
    { day: 'Saturday', morning: true, afternoon: false, evening: false },
    { day: 'Sunday', morning: false, afternoon: false, evening: false }
  ];

  const earnings = [
    { month: 'Jan 2024', amount: 8500, jobs: 12 },
    { month: 'Dec 2023', amount: 7200, jobs: 10 },
    { month: 'Nov 2023', amount: 9100, jobs: 14 },
    { month: 'Oct 2023', amount: 6800, jobs: 9 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleJobAction = (jobId, action) => {
    console.log(`${action} job ${jobId}`);
    // In real app, this would make an API call
    alert(`Job ${action}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                <User size={32} className="text-secondary-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Welcome, {worker.name}!</h1>
                <div className="flex items-center space-x-4">
                  <p className="text-secondary-600 font-medium">{worker.service}</p>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{worker.rating}</span>
                    <span className="text-sm text-gray-500">({worker.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Bell size={16} />
                <span>Notifications</span>
              </button>
              <button className="flex items-center space-x-2 bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors">
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
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-800">₹{worker.totalEarnings.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed Jobs</p>
                <p className="text-2xl font-bold text-gray-800">{worker.completedJobs}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock size={24} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-gray-800">2</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Star size={24} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Rating</p>
                <p className="text-2xl font-bold text-gray-800">{worker.rating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'jobs'
                    ? 'border-secondary-500 text-secondary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Job Requests
              </button>
              <button
                onClick={() => setActiveTab('availability')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'availability'
                    ? 'border-secondary-500 text-secondary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Availability
              </button>
              <button
                onClick={() => setActiveTab('earnings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'earnings'
                    ? 'border-secondary-500 text-secondary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Earnings
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-secondary-500 text-secondary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Profile
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Job Requests Tab */}
            {activeTab === 'jobs' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Job Requests</h2>
                <div className="space-y-4">
                  {jobRequests.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-800">{job.client}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                              {job.status}
                            </span>
                          </div>
                          <p className="text-secondary-600 font-medium mb-1">{job.service}</p>
                          <p className="text-gray-600 text-sm mb-2">{job.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                            <span className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{job.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{job.time}</span>
                            </span>
                            <span>📍 {job.location}</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800">₹{job.rate}</div>
                        </div>
                        {job.status === 'pending' && (
                          <div className="mt-4 lg:mt-0 lg:ml-4 flex space-x-2">
                            <button
                              onClick={() => handleJobAction(job.id, 'rejected')}
                              className="flex items-center space-x-1 px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              <XCircle size={16} />
                              <span>Reject</span>
                            </button>
                            <button
                              onClick={() => handleJobAction(job.id, 'accepted')}
                              className="flex items-center space-x-1 px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
                            >
                              <CheckCircle size={16} />
                              <span>Accept</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Availability Tab */}
            {activeTab === 'availability' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Manage Availability</h2>
                <div className="space-y-4">
                  {availability.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <span className="font-medium text-gray-800 w-24">{day.day}</span>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={day.morning}
                            className="rounded border-gray-300 text-secondary-600 focus:ring-secondary-500"
                          />
                          <span className="text-sm">Morning</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={day.afternoon}
                            className="rounded border-gray-300 text-secondary-600 focus:ring-secondary-500"
                          />
                          <span className="text-sm">Afternoon</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={day.evening}
                            className="rounded border-gray-300 text-secondary-600 focus:ring-secondary-500"
                          />
                          <span className="text-sm">Evening</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="bg-secondary-600 text-white px-6 py-2 rounded-lg hover:bg-secondary-700 transition-colors">
                  Save Availability
                </button>
              </div>
            )}

            {/* Earnings Tab */}
            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Earnings History</h2>
                <div className="space-y-4">
                  {earnings.map((earning, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">{earning.month}</p>
                        <p className="text-sm text-gray-600">{earning.jobs} jobs completed</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800">₹{earning.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Worker Profile</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={worker.name}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                      <input
                        type="text"
                        value={worker.service}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={worker.location}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                      <div className="flex items-center space-x-2">
                        <Star size={20} className="text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold">{worker.rating}</span>
                        <span className="text-gray-500">({worker.reviews} reviews)</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                      <input
                        type="text"
                        value={worker.memberSince}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        readOnly
                      />
                    </div>
                    <button className="w-full bg-secondary-600 text-white py-2 px-4 rounded-lg hover:bg-secondary-700 transition-colors font-medium">
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

export default WorkerDashboard;