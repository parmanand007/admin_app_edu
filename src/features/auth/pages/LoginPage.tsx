// auth/pages/LoginPage.tsx

import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useState, useMemo } from "react";
import { useRequestOtp } from "../api/auth.hooks";
import { useNavigate } from "react-router-dom";
import doctorImg from "../../../assets/login/doctor.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { mutate, isPending } = useRequestOtp();

  // simple email validation
  const isValidEmail = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  const handleSubmit = () => {
    if (!isValidEmail) return;

    mutate(
      {
        email,
        recaptcha: "recaptcha-test",
      },
      {
        onSuccess: () => {
          navigate("/verify-otp", { state: { email } });
        },
      }
    );
  };

  return (
    <Box display="flex" height="100vh">
      {/* LEFT SECTION */}
      <Box
        flex={1}
        sx={{
          backgroundColor: "#FFFFFF",
          px: 10,
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* TOP CONTENT */}
        <Box>
          {/* LOGO */}
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 700,
              color: "#2DAAE1",
              mb: 6,
            }}
          >
            DOCTUS<span style={{ color: "#000" }}>TECH</span>
          </Typography>

          {/* HEADING */}
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 600,
              color: "#1C1C1C",
              mb: 2,
            }}
          >
            We Make HCC Coding Education Easy.
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              fontSize: 16,
              color: "#6B7280",
              maxWidth: 420,
              lineHeight: 1.6,
            }}
          >
            DoctusTech App is the best way for clinicians to learn HCC Coding.
            9 doctors prefer DoctusTech to any other method of HCC Training.
          </Typography>
        </Box>

        {/* ILLUSTRATION */}
        <Box
          component="img"
          src={doctorImg}
          alt="doctors"
          sx={{
            width: "80%",
          }}
        />
      </Box>

      {/* RIGHT SECTION */}
      <Box
        flex={1}
        sx={{
          backgroundColor: "#E6F0F5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          elevation={3}
          sx={{
            width: 420,
            p: 4,
            borderRadius: 2,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          {/* TITLE */}
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 600,
              mb: 1,
            }}
          >
            Welcome To Doctustech
          </Typography>

          {/* SUBTEXT */}
          <Typography
            sx={{
              fontSize: 14,
              color: "#6B7280",
              mb: 3,
            }}
          >
            Please sign-in to your account
          </Typography>

          {/* EMAIL INPUT */}
          <TextField
            fullWidth
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={email.length > 0 && !isValidEmail}
            helperText={
              email.length > 0 && !isValidEmail
                ? "Enter a valid email"
                : " "
            }
            sx={{
              mb: 2,
            }}
          />

          {/* BUTTON */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={!isValidEmail || isPending}
            sx={{
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
              backgroundColor: !isValidEmail
                ? "#D1D5DB"
                : "#2DAAE1",
              "&:hover": {
                backgroundColor: "#1f8ec4",
              },
            }}
          >
            {isPending ? "Sending..." : "NEXT"}
          </Button>

          {/* FOOTER TEXT */}
          <Typography
            sx={{
              fontSize: 12,
              color: "#6B7280",
              mt: 3,
              lineHeight: 1.6,
            }}
          >
            I agree that I have read and accepted the Terms of Service and
            Privacy Policy apply.
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}