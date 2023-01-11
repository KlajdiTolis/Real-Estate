import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard';
import Login from "./layout/Login"
import Posts from './pages/posts/PostsCard';
import EditPost from './pages/posts/EditPost';
import Blogs from './pages/blogs/Blogs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="dashboard/edit" element={<EditPost />} />
    </Routes>
  )
}

export default App