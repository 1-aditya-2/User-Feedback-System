import { useEffect, useState } from "react";
import { getFeedbacks } from "../api";
import {
  TextField,
  Stack,
  Card,
  CardContent,
  Typography,
  Chip,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filters, setFilters] = useState("");
  const [filterField, setFilterField] = useState("name");
  const [sortOrder, setSortOrder] = useState("newest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const { data } = await getFeedbacks();
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters(e.target.value);
  };

  const handleFieldChange = (field) => {
    setFilterField(field);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredFeedbacks = feedbacks
    .filter((fb) => {
      const value = fb[filterField]?.toLowerCase() || "";
      return value.includes(filters.toLowerCase());
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });

  if (loading) {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "50vh" }}
      >
        <CircularProgress color="#764ba2" size={60} />
      </Stack>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <p style={{ marginRight: "8px" }}>Filter By:</p>
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            sx={{ mb: 0.7, display: "flex", alignItems: "center" }}
          >
            {["name", "email", "category"].map((field) => (
              <Chip
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant={filterField === field ? "filled" : "outlined"}
                color={filterField === field ? "#764ba2" : "default"}
                onClick={() => handleFieldChange(field)}
                sx={{
                  mb: 1,
                  padding: "8px 16px",
                  fontSize: "14px",
                  borderRadius: "12px",
                }}
              />
            ))}
          </Stack>
        </div>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <TextField
            fullWidth
            label={`Search by ${
              filterField.charAt(0).toUpperCase() + filterField.slice(1)
            }`}
            value={filters}
            onChange={handleFilterChange}
          />
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOrder}
              label="Sort By"
              onChange={handleSortOrderChange}
            >
              <MenuItem value="newest">Newest First</MenuItem>
              <MenuItem value="oldest">Oldest First</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </motion.div>

      <Stack spacing={3}>
        <AnimatePresence>
          {filteredFeedbacks.map((fb) => (
            <motion.div
              key={fb._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 4,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  p: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 36px rgba(0, 0, 0, 0.25)",
                  },
                  minWidth: 300,
                  maxWidth: 700,
                  mx: "auto",
                }}
              >
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        color="#764ba2"
                        fontWeight="bold"
                      >
                        {fb.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {fb.email}
                      </Typography>
                    </Box>
                    <Chip
                      label={fb.category}
                      size="small"
                      sx={{
                        backgroundColor:
                          fb.category.toLowerCase() === "bug report"
                            ? "#941b02"
                            : fb.category.toLowerCase() === "suggestion"
                            ? "#1368bc"
                            : fb.category.toLowerCase() === "feature request"
                            ? "#05841c"
                            : "#667eea",
                        color: "#fff",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{
                      mt: 1,
                      lineHeight: 1.7,
                      fontSize: "15px",
                    }}
                  >
                    {fb.feedback.length > 200
                      ? `${fb.feedback.substring(0, 200)}...`
                      : fb.feedback}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mt: 3, fontStyle: "italic" }}
                  >
                    Submitted on {new Date(fb.createdAt).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </Stack>
    </>
  );
}

export default FeedbackList;
