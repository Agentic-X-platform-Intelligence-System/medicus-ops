import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { buildPublicMetadata } from "@/lib/public/metadata";
import { publicTheme } from "@/lib/public/theme";
import { siteContent } from "@/lib/public/site-content";
import {
  MobileContactBar,
  MobileContactBarSpacer,
} from "./_components/MobileContactBar";
import { PublicNav } from "./_components/PublicNav";
import styles from "./public.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata = buildPublicMetadata({ path: "/" });

export const revalidate = 86400;

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fraunces.variable} ${ibmPlexSans.variable}`}
      style={{ fontFamily: "var(--font-ibm-plex), IBM Plex Sans, sans-serif" }}
    >
      <AppRouterCacheProvider>
        <ThemeProvider theme={publicTheme}>
          <CssBaseline />
          <PublicNav />
          <main>{children}</main>
          <MobileContactBarSpacer />
          <MobileContactBar />
          <footer className={styles.siteFooter}>
            <div className={styles.footerInner}>
              <p className={styles.footerName}>{siteContent.doctor.name}</p>
              <p>{siteContent.doctor.specialtyLine}</p>
              <p>{siteContent.contact.hours}</p>
            </div>
          </footer>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </div>
  );
}
