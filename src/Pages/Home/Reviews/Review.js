import React from "react";

const Review = ({ review }) => {
    const { name, userReview, location, img } = review;
    return (
        <div style={{boxShadow: '2px 2px 10px lightgray'}} className="col-lg-3 row p-3 text-lg-start mx-3">
            <div>
                <p>{userReview}</p>
            </div>
            <div className="row">
                <div className="col-lg-5 col-5">
                    <img className="w-100" style={{borderRadius: '50%'}} src={img} alt="" />
                </div>
                <div className="col-lg-7 col-7">
                    <h5 style={{color: '#1F2937', fontWeight: '600'}}>{name}</h5>
                    <p>{location}</p>

                    <div style={{marginTop: '-10px'}} className="rating">
                        <i className="fas fa-star text-success"></i>
                        <i className="fas fa-star text-success"></i>
                        <i className="fas fa-star text-success"></i>
                        <i className="fas fa-star text-success"></i>
                        <i className="fas fa-star text-success"></i>
                    </div>
                </div>
            </div>




        </div>

    );
};

export default Review;
