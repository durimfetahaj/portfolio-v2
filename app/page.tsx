import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./components/project-card";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
                  Durim Fetahaj
                </h1>

                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Frontend developer building clean, maintainable code and
                  user-friendly interfaces.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/durimfetahaj" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/durimfetahaj/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:durim.dev@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            <ProjectCard
              title="Full stack E-commerce & Dashboard"
              description="Modern e-commerce & dashboard using NextJS, Prisma, Neon DB, Tailwind CSS"
              image="/images/project-2.png"
              link="https://metrix-commerce.vercel.app/"
              github="https://github.com/durimfetahaj/metrix"
              tags={["React", "Typescript", "Nextjs", "Prisma", "NeonDB"]}
            />
            <ProjectCard
              title="Foodery: QR Code Dining Revolution"
              description="Modern food ordering platform developed using Next.js as PWA, TypeScript and Tailwind CSS."
              image="/images/project-3.png"
              link="https://foodery-one-photos.vercel.app/"
              tags={["React", "Typescript", "Nextjs", "Prisma", "PWA"]}
            />
            <ProjectCard
              title="CRM Landing page"
              description="Simple static landing page using Next.js, Material UI and styled-components"
              image="/images/project-1.png"
              link="https://cloud-crm-web.vercel.app/"
              github="https://github.com/durimfetahaj/cloud_crm_web"
              tags={["React, Next.js", "Material UI ", "styled-components"]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
