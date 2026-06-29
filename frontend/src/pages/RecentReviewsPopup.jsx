import "./RecentReviewsPopup.css";
import { useState } from "react";

function RecentReviewsPopup({ onClose, reviews = [] }) {
  const [selectedTag, setSelectedTag] = useState("All Reviews");

  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  const filteredReviews =
    selectedTag === "All Reviews"
      ? reviews
      : reviews.filter((r) =>
          r.review?.toLowerCase().includes(selectedTag.toLowerCase())
        );

  return (
    <div className="reviews-overlay">
      <div className="reviews-modal">

        <div className="reviews-header">
          <h2>Reviews</h2>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Rating Summary */}

        <div className="rating-summary">

          <div className="overall-rating">
            <h1>{avgRating}</h1>
          

            <h3>Very Good</h3>
            <p>From {reviews.length} reviews</p>
          </div>

          <div className="rating-grid">

            <div className="rating-item">
              <label>Value for money</label>
              <div className="progress">
                <div style={{ width: "82%" }}></div>
              </div>
              <span>8.2</span>
            </div>

            <div className="rating-item">
              <label>Service</label>
              <div className="progress">
                <div style={{ width: "81%" }}></div>
              </div>
              <span>8.1</span>
            </div>

            <div className="rating-item">
              <label>Cleanliness</label>
              <div className="progress">
                <div style={{ width: "80%" }}></div>
              </div>
              <span>8.0</span>
            </div>

            <div className="rating-item">
              <label>Location</label>
              <div className="progress">
                <div style={{ width: "79%" }}></div>
              </div>
              <span>7.9</span>
            </div>

            <div className="rating-item">
              <label>Facilities</label>
              <div className="progress">
                <div style={{ width: "78%" }}></div>
              </div>
              <span>7.8</span>
            </div>

            <div className="rating-item">
              <label>Room Comfort</label>
              <div className="progress">
                <div style={{ width: "76%" }}></div>
              </div>
              <span>7.6</span>
            </div>

          </div>
        </div>

        {/* Review Tags */}

        <div className="review-tags">

          {[
            "All Reviews",
            "Service",
            "Cleanliness",
            "Location",
            "Food",
            "Comfort"
          ].map((tag) => (
            <button
              key={tag}
              className={`tag ${
                selectedTag === tag ? "active-tag" : ""
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}

        </div>

        {/* Reviews */}

        <div className="reviews-list">

          {filteredReviews.map((review, index) => (
            <div className="review-card" key={index}>

              <img
                src={`https://i.pravatar.cc/100?img=${index + 20}`}
                alt="user"
              />

              <div className="review-content">

                <div className="review-top">
                  <h4>{review.name}</h4>

                  <span className="review-rating">
                    ⭐ {review.rating}/5
                  </span>
                </div>

                <p>{review.review}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default RecentReviewsPopup;