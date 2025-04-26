import FeedbackForm from "../components/FeedbackForm";
import { Container, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SubmitFeedback() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Stack spacing={4} alignItems="center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" align="center" color="#764ba2">
            Share your thoughts. <br /> We Listen.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ width: "100%" }}
        >
          <FeedbackForm />
          <p></p>
          <Button
            size="large"
            variant="outlined"
            component={Link}
            to="/dashboard"
            fullWidth
            sx={{
              // background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
              color: "#764ba2",
              borderRadius: "12px",
              borderWidth: "4px",
              transition: "0.4s",
              "&:hover": {
                boxShadow: "0px 0px 15px 3px rgba(102,126,234,0.7)",
                transform: "scale(1.05)",
              },
            }}
          >
            Dashboard
          </Button>
        </motion.div>
      </Stack>
    </Container>
  );
}

export default SubmitFeedback;
