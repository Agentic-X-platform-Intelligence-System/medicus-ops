import { siteContent } from "@/lib/public/site-content";
import { getSiteUrl } from "@/lib/public/site-url";

export function buildPhysicianJsonLd(): Record<string, unknown> {
  const { doctor, contact, seo } = siteContent;
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: "Urology",
    description: seo.defaultDescription,
    image: `${siteUrl}${doctor.imagePath}`,
    telephone: contact.phone,
    ...(contact.email ? { email: contact.email } : {}),
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    availableService: siteContent.procedures.map((p) => ({
      "@type": "MedicalProcedure",
      name: p.title,
      description: p.summary,
    })),
  };
}

export function buildMedicalBusinessJsonLd(): Record<string, unknown> {
  const { contact, doctor } = siteContent;
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${doctor.name} — Urology Practice`,
    url: siteUrl,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
  };
}
