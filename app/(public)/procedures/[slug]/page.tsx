import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPublicMetadata } from "@/lib/public/metadata";
import { getProcedure, siteContent } from "@/lib/public/site-content";
import { ScrollReveal } from "../../_components/ScrollReveal";
import styles from "../../public.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteContent.procedures.map((procedure) => ({
    slug: procedure.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) {
    return {};
  }
  return buildPublicMetadata({
    title: procedure.title,
    description: procedure.summary,
    path: `/procedures/${procedure.slug}`,
  });
}

export const revalidate = 86400;

export default async function ProcedurePage({ params }: PageProps) {
  const { slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) {
    notFound();
  }

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <ScrollReveal>
            <Link href="/procedures" className={styles.backLink}>
              All procedures
            </Link>
            <h1 className={styles.pageHeroTitle}>{procedure.title}</h1>
            <p className={styles.pageHeroLead}>{procedure.summary}</p>
          </ScrollReveal>
        </div>
      </div>

      <article className={styles.contentArticle}>
        {procedure.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <p className={styles.inlineCta}>
          <Link href="/#request-appointment">Request a consultation</Link>
        </p>
      </article>
    </>
  );
}
