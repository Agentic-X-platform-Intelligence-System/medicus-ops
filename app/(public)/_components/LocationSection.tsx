import { siteContent, telUrl, whatsappUrl } from "@/lib/public/site-content";
import { ScrollReveal } from "./ScrollReveal";
import styles from "../public.module.css";

export function LocationSection() {
  const { contact, affiliations } = siteContent;

  return (
    <section className={styles.section} aria-labelledby="location-heading">
      <ScrollReveal>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Location & contact</p>
          <h2 id="location-heading" className={styles.sectionTitle}>
            Clinic & hospital
          </h2>
        </div>
      </ScrollReveal>

      <div className={styles.locationGrid}>
        <ScrollReveal>
          <div className={styles.locationDetails}>
            <h3 className={styles.subsectionTitle}>Affiliations</h3>
            <ul className={styles.affiliationList}>
              {affiliations.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </li>
              ))}
            </ul>

            <h3 className={styles.subsectionTitle}>Contact</h3>
            <p className={styles.contactLine}>
              <a href={telUrl()}>{contact.phone}</a>
            </p>
            <p className={styles.contactLine}>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                WhatsApp the clinic
              </a>
            </p>
            <p className={styles.contactLine}>{contact.hours}</p>
            <p className={styles.contactAddress}>
              {contact.address.street}
              <br />
              {contact.address.city}, {contact.address.region}{" "}
              {contact.address.postalCode}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className={styles.mapWrap}>
            <iframe
              title="Clinic location map"
              src={contact.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
