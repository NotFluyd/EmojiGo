import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
import { AuthProvider } from "util/auth";
import { ThemeProvider } from "util/theme";
import { QueryClientProvider } from "util/db";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <AuthProvider>
          <>
            <Navbar
              color="default"
              logo="https://cdn.fluyd.dev/emojigo/emojigo.svg"
              logoInverted="https://cdn.fluyd.dev/emojigo/emojigo.svg"
            />

            <Component {...pageProps} />

            <Footer
              bgColor="light"
              size="normal"
              bgImage=""
              bgImageOpacity={1}
              description="A short description of what you do here"
              copyright={`© ${new Date().getFullYear()} Fluyd.dev`}
              logo="https://cdn.fluyd.dev/emojigo/emojigo.svg"
              logoInverted="https://cdn.fluyd.dev/emojigo/emojigo.svg"
              sticky={true}
            />
          </>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
