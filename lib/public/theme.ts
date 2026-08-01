"use client";

import { createTheme } from "@mui/material/styles";
import { palette } from "@/lib/public/site-content";

export const publicTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: palette.gold,
      contrastText: palette.ink,
    },
    secondary: {
      main: palette.graphite,
    },
    background: {
      default: palette.porcelain,
      paper: "#FFFFFF",
    },
    text: {
      primary: palette.ink,
      secondary: palette.steel,
    },
  },
  typography: {
    fontFamily: "var(--font-body), IBM Plex Sans, sans-serif",
    h1: {
      fontFamily: "var(--font-display), Fraunces, serif",
      fontWeight: 500,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-display), Fraunces, serif",
      fontWeight: 500,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontFamily: "var(--font-display), Fraunces, serif",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "0.75rem 1.5rem",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
  },
});
