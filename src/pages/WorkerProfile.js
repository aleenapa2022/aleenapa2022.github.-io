import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Clock, Calendar, Phone, MessageCircle, CheckCircle, Award } from 'lucide-react';

const WorkerProfile = () => {
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Mock worker data - in real app this would be fetched based on ID
  const worker = {
    id: 1,
    name: 'Ramesh Kumar',
    service: 'Electrician',
    rating: 4.8,
    reviews: 152,
    experience: 8,
    location: 'Koramangala, Bangalore',
    rate: 800,
    availability: 'Available Today',
    image: '/api/placeholder/200/200',
    description: 'Experienced electrician with 8+ years in residential and commercial electrical work. Specialized in home wiring, appliance repairs, and electrical installations. Certified and insured professional.',
    verified: true,
    skills: ['Home Wiring', 'Appliance Repair', 'Ceiling Fan Installation', 'Electrical Troubleshooting', 'Switch & Socket Installation'],
    completedJobs: 245,
    responseTime: '15 minutes',
    languages: ['English', 'Hindi', 'Kannada']
  };

  const reviews = [
    {
      id: 1,
      reviewer: 'Anita Sharma',
      rating: 5,
      date: '2024-01-20',
      comment: 'Excellent work! Ramesh fixed our ceiling fan and electrical outlets quickly and professionally. Very reliable and reasonably priced.',
      service: 'Electrical repair'
    },
    {
      id: 2,
      reviewer: 'Rajesh Verma',
      rating: 5,
      date: '2024-01-15',
      comment: 'Outstanding service. He completed the wiring work for our kitchen renovation on time and within budget. Highly recommended!',
      service: 'Wiring installation'
    },
    {
      id: 3,
      reviewer: 'Priya Nair',
      rating: 4,
      date: '2024-01-10',
      comment: 'Good work on appliance repair. Came on time and fixed the issue quickly. Professional approach.',
      service: 'Appliance repair'
    },
    {
      id: 4,
      reviewer: 'Suresh Kumar',
      rating: 5,
      date: '2024-01-05',
      comment: 'Great electrician! Fixed multiple electrical issues in our home. Clean work and fair pricing.',
      service: 'Electrical troubleshooting'
    }
  ];

  const BookingModal = ({ onClose }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [requirements, setRequirements] = useState('');

    const handleBooking = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Worker Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              {/* Worker Image */}
              <div className="flex-shrink-0 mb-6 lg:mb-0">
                <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                  <span className="text-4xl font-bold text-primary-600">
                    {worker.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Worker Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-800">{worker.name}</h1>
                      {worker.verified && (
                        <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          <CheckCircle size={14} />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xl text-primary-600 font-semibold mb-2">{worker.service}</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{worker.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{worker.experience} years experience</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center lg:items-end space-y-2">
                    <div className="flex items-center space-x-1">
                      <Star size={20} className="text-yellow-400 fill-current" />
                      <span className="text-xl font-bold">{worker.rating}</span>
                      <span className="text-gray-500">({worker.reviews} reviews)</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">₹{worker.rate}/day</span>
                    <span className="text-green-600 font-medium">{worker.availability}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{worker.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="flex-1 sm:flex-none bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Book Now
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle size={20} />
                    <span>Message</span>
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone size={20} />
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills & Specializations</h2>
              <div className="flex flex-wrap gap-2">
                {worker.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Reviews ({reviews.length})
              </h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-800">{review.reviewer}</h4>
                        <p className="text-sm text-gray-500">{review.service}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Completed Jobs</span>
                  <span className="font-semibold">{worker.completedJobs}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold">{worker.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold">Jan 2024</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Languages</h3>
              <div className="space-y-2">
                {worker.languages.map((language, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-green-600" />
                  <span className="text-green-600 font-medium">Available Today</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>• Morning slots available</p>
                  <p>• Evening slots available</p>
                  <p>• Responds within 15 minutes</p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award size={20} className="text-yellow-500" />
                  <span className="text-sm">Top Rated Worker</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-500" />
                  <span className="text-sm">Verified Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-blue-500" />
                  <span className="text-sm">Fast Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingModal && (
          <BookingModal onClose={() => setShowBookingModal(false)} />
        )}
      </div>
    </div>
  );
};

export default WorkerProfile;