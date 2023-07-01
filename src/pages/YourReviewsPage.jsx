
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/userContext/context";
import Appbar from "../components/Appbar";
import {Link} from 'react-router-dom';
import "./yourreviewspage.css";

function YourReviewsPage() {
  const { user } = useContext(Context);
  const [reviews, setReviews] = useState([]);
  const [updatedReviewContent, setUpdatedReviewContent] = useState("");

  const fetchReviews = async () => {
    try {
      const response = await fetch(`https://moviereccomendationapi.azurewebsites.net/user/reviews/${user.userid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleUpdate = (reviewId) => {
    const updatedContent = prompt("Enter the updated review content:");
    if (updatedContent) {
      // Perform the update request
      updateReviewContent(reviewId, updatedContent);
    }
  };

  const updateReviewContent = async (reviewId, reviewContent) => {
    try {
      const response = await fetch(`https://moviereccomendationapi.azurewebsites.net/user/reviews/update/${reviewId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewContent }),
      });
      const data = await response.json();
      console.log(data.message);
      // Refresh the reviews after successful update
      fetchReviews();
    } catch (error) {
      console.log("Error updating review:", error);
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      const response = await fetch(`https://moviereccomendationapi.azurewebsites.net/user/reviews/delete/${reviewId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.message);
      // Refresh the reviews after successful deletion
      fetchReviews();
    } catch (error) {
      console.log("Error deleting review:", error);
    }
  };

  return (<>
  <Appbar />
    <div className="your-reviews-container">
      <h1 className="your-reviews-heading">Your Reviews</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Review Content</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.review_id}>
                <td>{review.movie_id}</td>
                <td>{review.review_content}</td>
                <td>{review.rating}</td>
                <td>
                  <button className="update-button" onClick={() => handleUpdate(review.review_id)}>
                    Update
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(review.review_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div style={{margin:'20px 200px 200px 20px ', fontSize:'25px', fontFamily:'sans-serif'}}> 
      Create a new <Link className='lInk' to="/rate-movie" >Review</Link>
    </div>
    </>
  );
}

export default YourReviewsPage;
