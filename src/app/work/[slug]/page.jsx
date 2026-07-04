import CaseStudyPage from "@/container/case-study";
import { WORK } from "@/lib/work-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = WORK.find((w) => w.slug === slug);
  if (!project) return {};
  return {
    title: `${project.t} — Case Study | Instech Sol`,
    description: project.d,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = WORK.find((w) => w.slug === slug);
  if (!project) return notFound();
  return <CaseStudyPage project={project} />;
}
