import React, { useEffect, useState } from "react";
import { getFeedbacks } from "../api";

function FeedbackDashboard({ refresh }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, [refresh]);

  const fetchFeedbacks = async () => {
    const { data } = await getFeedbacks();
    setFeedbacks(data);
  };

  const filteredFeedbacks = feedbacks.filter((fb) =>
    filter ? fb.category.toLowerCase().includes(filter.toLowerCase()) : true
  );

  return (
    <div>
      <input
        placeholder="Filter by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredFeedbacks.map((fb) => (
        <div
          key={fb._id}
          style={{
            border: "1px solid gray",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <h4>
            {fb.name} ({fb.email})
          </h4>
          <p>{fb.feedback}</p>
          <small>
            Category: {fb.category} | Submitted at:{" "}
            {new Date(fb.createdAt).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}

export default FeedbackDashboard;
