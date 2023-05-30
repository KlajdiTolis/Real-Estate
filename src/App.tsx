import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase/Firebase";
import { Routes, Route, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  getDoc,
  query,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  orderBy,
  startAfter,
  limit,
  where,
} from "firebase/firestore";

import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./layout/Login";
import Posts from "./pages/posts/PostsCard";
import EditPost from "./pages/posts/EditPost";
import Buy from "./pages/buy/Buy";
import Sell from "./pages/sell/Sell";
import Rent from "./pages/rent/Rent";
import SignUp from "./layout/SignUp";
import Contact from "./pages/contact/Contact";
import CreateProperty from "./pages/posts/CreatePost";

const App = () => {
  const [user, error, isloading] = useAuthState(auth);
  const [userEmail, setUserEmail] = useState("");

  const fetchAdminUsers = async () => {
    const dataB = collection(db, "user");
    const q = query(dataB, where("tag", "==", "admin"));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc: any) => setUserEmail(doc.data().email));
  };

  useEffect(() => {
    fetchAdminUsers();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="registration" element={<SignUp />} />
        {user && (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="buy" element={<Buy />} />
            <Route path="sell" element={<Sell />} />
            <Route path="rent" element={<Rent />} />
            <Route path="loan" element={<Rent />} />
            <Route path="contact" element={<Contact />} />

            {user?.email == userEmail && (
              <>
                <Route path="property/create" element={<CreateProperty />} />
                <Route
                  path="buy/property/create"
                  element={<CreateProperty />}
                />
                <Route path=":idpost" element={<EditPost />} />
              </>
            )}
          </>
        )}
        {/* <Route path="buy/property/create" element={<CreateProperty />} /> */}
        {/* <Route path=":idpost" element={<EditPost />} /> */}
      </Routes>
    </>
  );
};

export default App;
