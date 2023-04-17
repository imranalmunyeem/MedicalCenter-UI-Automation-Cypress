import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const {admin} = useAuth()

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    }, []);

    return (
        <div>
            <div className="text-start mt-4">
                <h3 style={{ fontFamily: "serif" }} className="mb-5 mt-2 text-primary text-center"> OUR BLOGS { admin &&
                    <Link to="/addBlogs"><button className='btn btn-primary px-2 mb-2 ms-2 py-1'>ADD +</button></Link>
                } </h3>

                <div className="row mb-5 mx-1 gap-5 justify-content-center">
                    {blogs.map((blog) => (
                        <div className="col-lg-10 row justify-content-center gap-5 mb-3">
                            <div className="col-lg-4">
                            <img width="100%" src={blog?.img} alt="" />
                                
                            </div>
                            <div className="col-lg-6">

                            <h4 style={{ fontFamily: 'Merriweather' }} className="fw-bold mt-3">{blog?.title}</h4>
                            <p className="mt-3">{blog?.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;