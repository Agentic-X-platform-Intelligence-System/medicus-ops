import {
  buildMedicalBusinessJsonLd,
  buildPhysicianJsonLd,
} from "@/lib/public/json-ld";

export function PhysicianJsonLd() {
  const physician = buildPhysicianJsonLd();
  const business = buildMedicalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
    </>
  );
}
