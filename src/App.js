import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import WorkerDashboard from './pages/WorkerDashboard';
import BookService from './pages/BookService';
import WorkerProfile from './pages/WorkerProfile';
import ToolRental from './pages/ToolRental';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/worker-dashboard" element={<WorkerDashboard />} />
            <Route path="/book-service" element={<BookService />} />
            <Route path="/worker-profile/:id" element={<WorkerProfile />} />
            <Route path="/tool-rental" element={<ToolRental />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;