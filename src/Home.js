import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";
import axios from 'axios';


const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIspending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8000/blogs").then((res) => {
        setBlogs(res.data);
        setIspending(false);
      });
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  return (
    <div className="home">
      {isPending && <div>loading...</div>}
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