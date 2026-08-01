import { Hero } from "./_components/Hero";
import { CredentialRail } from "./_components/CredentialRail";
import { ExpertiseSection } from "./_components/ExpertiseSection";
import { ResourcesSection } from "./_components/ResourcesSection";
import { LocationSection } from "./_components/LocationSection";
import { AppointmentRequestForm } from "./_components/AppointmentRequestForm";
import { PhysicianJsonLd } from "./_components/PhysicianJsonLd";

export const revalidate = 86400;

export default function PublicHomePage() {
  return (
    <>
      <PhysicianJsonLd />
      <Hero />
      <CredentialRail />
      <ExpertiseSection />
      <ResourcesSection />
      <LocationSection />
      <AppointmentRequestForm />
    </>
  );
}
