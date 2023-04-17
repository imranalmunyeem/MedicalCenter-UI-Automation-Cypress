import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeBlogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
  }, []);

  return (
    <div style={{ margin: "80px 0px" }}>
      <div>
        <h3 style={{ fontFamily: "serif" }} className="mb-5 mt-2 text-primary text-center"> OUR BLOGS </h3>
        <div className="row mx-1 gap-5 justify-content-center">
          {blogs.slice(Math.max(blogs.length - 3, 0)).map((blog) => (
            <div className="col-lg-3 text-start">
              <img width="100%" src={blog?.img} alt="" />
              <h4 style={{ fontFamily: 'Merriweather' }} className="fw-bold mt-3">{blog?.title}</h4>
              <p>{blog?.details}</p>
            </div>
          ))}
        </div>
        <Link to="/blogs">
          <button style={{ backgroundColor: '#0094B7' }} className='btn mt-4 text-light'>VIEW ALL <i className="far fa-hand-point-right ms-1"></i></button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogs;