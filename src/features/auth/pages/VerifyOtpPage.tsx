// auth/pages/VerifyOtpPage.tsx

import {
  Box,
  Card,
  Typography,
  Button,
} from "@mui/material";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useVerifyOtp } from "../api/auth.hooks";
import doctorImg from "@/assets/login/doctor.svg";
import { useAuthStore } from "../store/auth.store";

export default function VerifyOtpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const { mutate, isPending } = useVerifyOtp();

  // use zustand properly (react-aware)
  const setAuth = useAuthStore((s) => s.setAuth);

  // redirect if no email
  if (!email) return <Navigate to="/login" />;

  // OTP state (6 digits)
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // timer (mock 45 sec)
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // mask email
  const maskedEmail = email.replace(
    /^(.{4}).+(@.+)$/,
    (_, start, end) => `${start}${"*".repeat(16)}${end}`
  );

  // handle input change
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // handle backspace
  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // paste support
  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(paste)) return;

    const newOtp = paste.split("");
    setOtp(newOtp);

    newOtp.forEach((_, i) => {
      inputsRef.current[i]?.focus();
    });
  };

  const finalOtp = otp.join("");

  // verify handler (fixed)
  const handleVerify = () => {
    if (finalOtp.length !== 6) return;

    mutate(
      { email, otp: finalOtp },
      {
        onSuccess: (data) => {
          // correct zustand usage
          setAuth({
            token: data.token,
            type: data.type,
            isActive: data.is_active,
          });

          // prevent race condition (critical)
          setTimeout(() => {
            navigate("/dashboard", { replace: true });
          }, 0);
        },
      }
    );
  };

  return (
    <Box display="flex" height="100vh">
      {/* LEFT SIDE */}
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
        <Box>
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

          <Typography sx={{ fontSize: 28, fontWeight: 600, mb: 2 }}>
            We Make HCC Coding Education Easy.
          </Typography>

          <Typography sx={{ fontSize: 16, color: "#6B7280", maxWidth: 420 }}>
            DoctusTech App is the best way for clinicians to learn HCC Coding.
            9 doctors prefer DoctusTech to any other method of HCC Training.
          </Typography>
        </Box>

        <Box
          component="img"
          src={doctorImg}
          alt="doctor"
          sx={{ width: "80%" }}
        />
      </Box>

      {/* RIGHT SIDE */}
      <Box
        flex={1}
        sx={{
          backgroundColor: "#E6F0F5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          {/* BACK */}
          <Typography
            sx={{
              mb: 2,
              cursor: "pointer",
              fontSize: 14,
              color: "#6B7280",
            }}
            onClick={() => navigate(-1)}
          >
            ← BACK
          </Typography>

          <Card
            sx={{
              width: 420,
              p: 4,
              borderRadius: 2,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 1 }}>
              Verify Code
            </Typography>

            <Typography sx={{ fontSize: 14, color: "#6B7280", mb: 2 }}>
              The code has been sent to the email you provided
            </Typography>

            <Typography sx={{ fontWeight: 500, mb: 3 }}>
              {maskedEmail}
            </Typography>

            {/* OTP BOXES */}
            <Box display="flex" gap={1} mb={3} onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  style={{
                    width: 48,
                    height: 48,
                    textAlign: "center",
                    fontSize: 18,
                    borderRadius: 8,
                    border: "1px solid #D1D5DB",
                  }}
                />
              ))}
            </Box>

            <Button
              fullWidth
              variant="contained"
              onClick={handleVerify}
              disabled={finalOtp.length !== 6 || isPending}
              sx={{
                py: 1.2,
                fontWeight: 600,
                textTransform: "none",
                backgroundColor:
                  finalOtp.length !== 6 ? "#D1D5DB" : "#2DAAE1",
              }}
            >
              SIGN IN
            </Button>

            <Typography
              sx={{
                fontSize: 13,
                color: "#6B7280",
                textAlign: "center",
                mt: 3,
              }}
            >
              Didn’t receive the verification code? <br />
              Resend Code in: {timer}s
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}