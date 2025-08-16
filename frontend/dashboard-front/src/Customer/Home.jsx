import React from "react";
import Navbar from "Customer/Navbar"
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function LandingPage() {
  return (
      <Box>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Box
  
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #000000ff 0%, #000000ff 100%)",
          color: "white",
          width: "100%",
          minHeight: "70vh", // responsive height: 80% of viewport
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Box
        component="img"
        src="src/assets/images/futuristic.jpg"
        alt="Futuristic Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.7, // transparency
          zIndex: 0,
         }}
        />
        <Box sx={{ position: "relative", zIndex: 0}}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            fontWeight: "bold",
            "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
          }}
        >
          Get Started
        </Button>
      </Box>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", py: 4, px: 2, minHeight: 250, borderRadius: 3 }}>
              <StarIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Amazing Performance
                </Typography>
                <Typography>
                  Our dashboard loads lightning-fast and adapts to your workflow.
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", py: 4, px: 2, minHeight: 250, borderRadius: 3 }}>
              <SecurityIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Secure & Reliable
                </Typography>
                <Typography>
                  Your data is safe with enterprise-grade security and privacy.
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", py: 4, px: 2, minHeight: 250, borderRadius: 3 }}>
              <TrendingUpIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Insights & Analytics
                </Typography>
                <Typography>
                  Get actionable insights from your data in real time.
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "grey.900", color: "white", py: 6, mt: 8, textAlign: "center" }}>
        <Typography>© 2025 My Dashboard. All rights reserved.</Typography>
      </Box>
    </Box>
      )
}