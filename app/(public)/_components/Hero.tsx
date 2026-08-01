"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { siteContent } from "@/lib/public/site-content";
import styles from "../public.module.css";

export function Hero() {
  const { doctor } = siteContent;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Image
        src={doctor.imagePath}
        alt={doctor.imageAlt}
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />
      <div className={styles.heroGradient} aria-hidden="true" />
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>{doctor.credentials}</p>
        <h1 id="hero-heading" className={styles.heroTitle}>
          {doctor.name}
        </h1>
        <p className={styles.heroSpecialty}>{doctor.specialtyLine}</p>
        <p className={styles.heroTrust}>{doctor.trustLine}</p>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <Button
            component={Link}
            href="#request-appointment"
            variant="contained"
            color="primary"
            size="large"
          >
            Request appointment
          </Button>
          <Button
            component={Link}
            href="/credentials"
            variant="outlined"
            color="primary"
            size="large"
            className={styles.heroSecondaryBtn}
          >
            View credentials
          </Button>
        </Stack>
      </div>
    </section>
  );
}
