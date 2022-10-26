import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";
// import React from 'react'
// import axios from 'axios';


const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function fetchData(){
      await fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json()
        })
        .then((data)=>{
          setBlogs(data);
        });
      } 
      fetchData();  
      
  }, []);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};
 
export default Home;