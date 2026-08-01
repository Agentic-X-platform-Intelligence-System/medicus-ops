import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPublicMetadata } from "@/lib/public/metadata";
import { getCondition, siteContent } from "@/lib/public/site-content";
import { ScrollReveal } from "../../_components/ScrollReveal";
import styles from "../../public.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteContent.conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) {
    return {};
  }
  return buildPublicMetadata({
    title: condition.title,
    description: condition.summary,
    path: `/conditions/${condition.slug}`,
  });
}

export const revalidate = 86400;

export default async function ConditionPage({ params }: PageProps) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) {
    notFound();
  }

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <ScrollReveal>
            <Link href="/" className={styles.backLink}>
              Home
            </Link>
            <h1 className={styles.pageHeroTitle}>{condition.title}</h1>
            <p className={styles.pageHeroLead}>{condition.summary}</p>
          </ScrollReveal>
        </div>
      </div>

      <article className={styles.contentArticle}>
        {condition.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <p className={styles.inlineCta}>
          <Link href="/#request-appointment">Discuss with the clinic</Link>
        </p>
      </article>
    </>
  );
}
