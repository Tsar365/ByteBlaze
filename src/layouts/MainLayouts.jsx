// import React from 'react';

import { Outlet } from "react-router";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";
// import Blogs from "../pages/blogs/Blogs";
// import BookMarks from "../pages/bookmarks/BookMarks";
// import Home from "../pages/home/Home";

const MainLayouts = () => {
  return (
    <div>
      <Nav/>
     <Outlet/>
     <Footer/>
    </div>
  );
};

export default MainLayouts;