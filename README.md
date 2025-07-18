# DailyWageConnect - Local Job Scheduler for Daily-Wage Workers

A comprehensive React-based frontend application that connects households with nearby daily-wage workers like electricians, plumbers, maids, and gardeners. The platform enables two-way scheduling based on mutual availability, helping workers get consistent income and users find reliable help easily.

## 🎯 Project Overview

DailyWageConnect is a lightweight, user-friendly platform designed to:
- Digitally connect informal workers with local households
- Enable two-way scheduling (workers & users set availability)
- Empower unskilled/low-income workers via simple tech
- Reduce dependency on middlemen
- Build trust between users and local workers

## 🌟 Features

### For Homeowners (Users)
- **Search & Browse Workers**: Find workers by service type, location, and availability
- **Worker Profiles**: View detailed profiles with ratings, reviews, and experience
- **Service Booking**: Schedule work with date/time preferences
- **Real-time Availability**: Check worker availability in real-time
- **Review System**: Rate and review completed services
- **Tool Rental**: Browse and rent tools for DIY projects
- **Dashboard**: Manage bookings, saved workers, and profile

### For Workers
- **Profile Management**: Create detailed profiles with skills and experience
- **Availability Control**: Set daily/weekly availability schedules
- **Job Management**: Accept/reject job requests with detailed information
- **Earnings Tracking**: Monitor income and job completion history
- **Tool Listing**: List tools for rental to earn additional income
- **Notification System**: Get alerts for new job opportunities

### Additional Features
- **Tool Rental Marketplace**: Rent/list tools with flexible pricing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Search & Filters**: Advanced filtering by service, location, and availability
- **Secure Communication**: In-app messaging and calling features
- **Verification System**: Verified worker badges for trust building

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Lucide React** - Beautiful icon library

### Development Tools
- **Create React App** - Development environment
- **PostCSS & Autoprefixer** - CSS processing
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dailywageconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Site footer
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Login.js        # Login page
│   ├── Register.js     # Registration page
│   ├── BookService.js  # Service booking page
│   ├── ToolRental.js   # Tool rental marketplace
│   ├── UserDashboard.js     # User dashboard
│   ├── WorkerDashboard.js   # Worker dashboard
│   └── WorkerProfile.js     # Detailed worker profile
├── utils/              # Utility functions
├── data/               # Mock data and constants
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles with Tailwind
```

## 🎨 UI/UX Design Highlights

- **Modern & Clean Interface**: Intuitive design focused on user experience
- **Responsive Layout**: Optimized for all screen sizes
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Color Scheme**: Professional blue and green palette
- **Interactive Elements**: Smooth animations and hover effects
- **Mobile-First Approach**: Designed for mobile users first

## 📱 Key Pages & Components

### 1. Home Page
- Hero section with call-to-action
- Service categories showcase
- How it works explanations
- User testimonials
- Feature highlights

### 2. Service Booking
- Advanced search and filtering
- Worker cards with essential information
- Real-time availability checking
- Booking modal with date/time selection

### 3. Tool Rental
- Tool categorization and search
- Rental pricing (hourly/daily/weekly)
- Availability status
- Owner ratings and reviews

### 4. User Dashboard
- Booking management
- Saved workers
- Profile settings
- Statistics overview

### 5. Worker Dashboard
- Job request management
- Availability calendar
- Earnings tracking
- Profile management

## 🔐 Authentication Flow

The application supports dual user types:
- **Homeowners**: Need services from workers
- **Workers**: Provide services to homeowners

Registration and login forms are dynamically adjusted based on user type selection.

## 📊 Mock Data

The application currently uses mock data for demonstration purposes. In a production environment, this would be replaced with API calls to a backend service.

## 🎯 Future Enhancements

### Phase 1 - MVP Extensions
- Real backend API integration
- Payment gateway integration
- SMS/WhatsApp notifications
- Geolocation-based matching

### Phase 2 - Advanced Features
- Multilingual interface (Hindi, regional languages)
- AI-powered worker recommendations
- Advanced analytics dashboard
- Worker verification system

### Phase 3 - Scale Features
- Digital wallet integration
- Micro-loan partnerships
- Insurance coverage options
- Community forums

## 🌍 Social Impact

DailyWageConnect addresses several social challenges:
- **Digital Inclusion**: Brings informal workers into the digital economy
- **Gender Empowerment**: Supports women workers and elderly caregivers
- **Economic Equality**: Eliminates middleman exploitation
- **Community Building**: Strengthens local economic networks
- **Skill Development**: Encourages workers to improve and showcase skills

## 💰 Economic Benefits

- **For Workers**: Steady income, direct payments, no middleman fees
- **For Users**: Time savings, reliable services, competitive pricing
- **For Community**: Local economic circulation, job creation

## 🤝 Contributing

We welcome contributions to improve DailyWageConnect! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, questions, or feature requests, please contact:
- Email: support@dailywageconnect.com
- Phone: +91 12345 67890

## 🙏 Acknowledgments

- Thanks to all the daily-wage workers who inspired this project
- React.js team for the amazing framework
- Tailwind CSS for the utility-first CSS approach
- Lucide for the beautiful icons

---

**DailyWageConnect** - Empowering communities through digital inclusion and fair employment opportunities.