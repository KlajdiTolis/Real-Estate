import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard';
import Login from "./layout/Login"
import Posts from './pages/posts/PostsCard';
import EditPost from './pages/posts/EditPost';
import Buy from './pages/buy/Buy';
import Sell from "./pages/sell/Sell";
import Rent from "./pages/rent/Rent"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="buy" element={<Buy />} />
      <Route path="sell" element={<Sell />} />
      <Route path="rent" element={<Rent />} />
      <Route path="dashboard/edit" element={<EditPost />} />
    </Routes>
  )
}

export default App