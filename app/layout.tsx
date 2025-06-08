"use client";

import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";
import { store } from "../store/store";
import AuthListener from "@/components/organisms/AuthListener";

// export const metadata = {
//   title: "Frontend Repo",
//   description: "Next.js + MUI + Redux + Firebase Auth Example",
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthListener />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
