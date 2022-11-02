import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";
// import axios from 'axios';


const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   setTimeout(() => {
  //     axios.get("http://localhost:8000/blogss")
  //       .then(res => {
  //         console.log(res)
  //         if(!res.data){
  //           throw Error('could not fetch data for this resource')
  //         }
  //         setBlogs(res.data);
  //         setIspending(false);
  //       })
  //       .catch(err => {
  //         console.log(err.message);
  //       });
  //   }, 1000);
  // }, []);

   useEffect(() => {
     setTimeout(() => {
       fetch("http://localhost:8000/blogs")
         .then((res) => {
           if (!res.ok) {
             throw Error("could not fetch data for that resource");
           }
          return res.json();
         })
         .then((data)=>{
            setBlogs(data);
            setIspending(false);
         })
         .catch((err) => {
           setError(err.message);
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
      {error && <div>{error}</div>}
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