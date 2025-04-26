import FeedbackList from "../components/FeedbackList";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" align="center" color="#764ba2" gutterBottom>
          Feedback Dashboard
        </Typography>
      </motion.div>
      <FeedbackList />
    </Container>
  );
}

export default Dashboard;
