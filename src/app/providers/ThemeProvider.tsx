// app/providers/ThemeProvider.tsx

import { ThemeProvider, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0284C7",
    },
    secondary: {
      main: "#6366F1",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },
    divider: "#E5E7EB",
  },

  shape: {
    borderRadius: 8,
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    h6: {
      fontSize: 18,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 13,
      color: "#64748B",
    },
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
        },
        contained: {
          backgroundColor: "#1E3A5F",
          "&:hover": {
            backgroundColor: "#16324F",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E5E7EB",
          borderRadius: 12,
          boxShadow: "none",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 13,
          borderBottom: "1px solid #E5E7EB",
        },
        head: {
          fontWeight: 600,
          color: "#64748B",
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export default function AppThemeProvider({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}