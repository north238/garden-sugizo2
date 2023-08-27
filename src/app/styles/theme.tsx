'use client';

import { createTheme, Theme } from "@mui/material/styles";
import { notojp } from "../utils/font";

export const theme: Theme = createTheme({
  typography: {
    fontFamily: notojp.style.fontFamily,
  },
})