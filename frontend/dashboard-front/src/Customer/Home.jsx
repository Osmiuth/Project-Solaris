import React from "react";
import Navbar from "Customer/Navbar";
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
    <>
    <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%", // full viewport width
          minHeight: "80vh", // full screen height
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflowX: "hidden",
          color: "white",
        }}
      >
        {/* Background image */}
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              zIndex: -1,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="public/page.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <Box
          sx={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
            zIndex: 1,
          }}
        />
        <Typography variant="h2" fontWeight="bold">
            Welcome to the Future
          </Typography>
          <Typography variant="h6">
            Experience performance, security, and insights like never before.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 1 }}>
            Get Started
          </Button>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                py: 4,
                px: 2,
                minHeight: 250,
                borderRadius: 3,
              }}
            >
              <StarIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Amazing Performance
                </Typography>
                <Typography>
                  Our dashboard loads lightning-fast and adapts to your
                  workflow.
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                py: 4,
                px: 2,
                minHeight: 250,
                borderRadius: 3,
              }}
            >
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
            <Card
              sx={{
                textAlign: "center",
                py: 4,
                px: 2,
                minHeight: 250,
                borderRadius: 3,
              }}
            >
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
      <Box
        sx={{
          bgcolor: "grey.900",
          color: "white",
          py: 6,
          mt: 8,
          textAlign: "center",
        }}
      >
        <Typography>© 2025 My Dashboard. All rights reserved.</Typography>
      </Box>
    </>
  );
}