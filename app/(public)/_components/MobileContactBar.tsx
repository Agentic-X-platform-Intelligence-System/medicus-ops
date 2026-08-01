import Link from "next/link";
import { telUrl, whatsappUrl } from "@/lib/public/site-content";
import styles from "../public.module.css";

export function MobileContactBar() {
  return (
    <nav className={styles.mobileBar} aria-label="Quick contact">
      <a href={telUrl()} className={styles.mobileBarLink}>
        Call
      </a>
      <a
        href={whatsappUrl("Hello, I would like to enquire about an appointment.")}
        className={`${styles.mobileBarLink} ${styles.mobileBarWhatsApp}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <Link href="/#request-appointment" className={styles.mobileBarPrimary}>
        Book
      </Link>
    </nav>
  );
}

export function MobileContactBarSpacer() {
  return <div className={styles.mobileBarSpacer} aria-hidden="true" />;
}
