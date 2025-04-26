import { useState } from "react";
import { submitFeedback } from "../api";
import { TextField, Button, MenuItem, Stack, Paper } from "@mui/material";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const categories = ["Suggestion", "Bug Report", "Feature Request"];

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback(formData);
      setFormData({ name: "", email: "", feedback: "", category: "" });
      toast.success("Feedback submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit feedback");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 5,
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              name="feedback"
              label="Feedback"
              multiline
              rows={4}
              value={formData.feedback}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              select
              name="category"
              label="Category"
              value={formData.category}
              onChange={handleChange}
              required
              fullWidth
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                borderRadius: "12px",
                transition: "0.4s",
                "&:hover": {
                  boxShadow: "0px 0px 15px 3px rgba(102,126,234,0.7)",
                  transform: "scale(1.05)",
                },
              }}
            >
              Submit Feedback
            </Button>
          </Stack>
        </form>
      </Paper>
    </motion.div>
  );
}

export default FeedbackForm;
