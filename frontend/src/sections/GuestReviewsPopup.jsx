import React from "react";
import {
  FaTimes,
  FaStar,
} from "react-icons/fa";

const reviewSummary = [
  { star: "5 Star", count: "14K reviews", percent: 58 },
  { star: "4 Star", count: "6K reviews", percent: 25 },
  { star: "3 Star", count: "4K reviews", percent: 18 },
  { star: "2 Star", count: "800 reviews", percent: 4 },
  { star: "1 Star", count: "9K reviews", percent: 36 },
];

const reviews = [
  {
    id: 1,
    date: "January 20, 2026",
    name: "James Carter",
    avatar: "JC",
    review:
      "A premium plugin purchase can be a gamble, but the support has been helpful from start to finish. Hoping they will maintain the same quality in future updates.",
    rating: "4.7",
  },
  {
    id: 2,
    date: "January 19, 2026",
    name: "Sarah Mitchell",
    avatar: "SM",
    review:
      "Outstanding room quality and seamless hospitality. Staff was extremely helpful and the check-in process was very smooth.",
    rating: "5.0",
  },
  {
    id: 3,
    date: "January 18, 2026",
    name: "Michael Chen",
    avatar: "MC",
    review:
      "Good overall experience. Rooms were clean though I encountered a minor issue with Wi-Fi. Support resolved it quickly.",
    rating: "4.2",
  },
  {
    id: 4,
    date: "January 17, 2026",
    name: "Emily Rodriguez",
    avatar: "ER",
    review:
      "Exceeded my expectations! The room was luxurious and the facilities were excellent. I'll definitely recommend this hotel.",
    rating: "4.9",
  },
  {
    id: 5,
    date: "January 16, 2026",
    name: "David Thomas",
    avatar: "DT",
    review:
      "Solid experience with friendly staff. Food quality was good and overall stay was comfortable.",
    rating: "4.0",
  },
];

function GuestReviewsPopup({ onClose }) {
  return (
    <div className="reviews-overlay">

      <div className="reviews-popup">

        {/* Header */}

        <div className="reviews-header">

          <div>
            <h2>Reviews</h2>
            <p>Guest Feedback & Ratings</p>
          </div>

          <button
            className="reviews-close"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        {/* Summary */}

        <div className="reviews-summary-card">

          <div className="summary-left">

            <h1>4.0</h1>

            <div className="stars">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="empty" />

            </div>

            <p>38,000 ratings</p>

          </div>

          <div className="summary-right">

            {reviewSummary.map((item) => (

              <div
                className="summary-row"
                key={item.star}
              >

                <span>{item.star}</span>

                <div className="summary-progress">

                  <div
                    className="summary-fill"
                    style={{
                      width: `${item.percent}%`,
                    }}
                  />

                </div>

                <span>{item.count}</span>

              </div>

            ))}

          </div>

        </div>

        {/* Table */}

        <div className="reviews-table-wrapper">

          <table className="reviews-table">

            <thead>

              <tr>

                <th>Date</th>
                <th>Customer</th>
                <th>Review</th>
                <th>Rating</th>

              </tr>

            </thead>

            <tbody>

              {reviews.map((item) => (

                <tr key={item.id}>

                  <td>{item.date}</td>

                  <td>

                    <div className="customer-info">

                      <div className="customer-avatar">
                        {item.avatar}
                      </div>

                      <span>{item.name}</span>

                    </div>

                  </td>

                  <td className="review-text">
                    {item.review}
                  </td>

                  <td>

                    <div className="rating-badge">

                      <FaStar />

                      <span>{item.rating}</span>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default GuestReviewsPopup;