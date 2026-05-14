import { createFileRoute } from "@tanstack/react-router";
import type { ClassNameValue } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Quoted } from "@/components/ui/quoted";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Stat({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-6 flex flex-col gap-6 items-center justify-center bg-muted rounded-lg w-full h-full text-center">
      <span className="text-bold text-5xl">{title}</span>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </div>
  );
}

function Capability({
  imageSource,
  title,
  description,
  className,
}: {
  imageSource: string;
  title: string;
  description: string;
  className?: ClassNameValue;
}) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse even:flex-row-reverse md:flex-row items-center justify-center gap-8 w-full",
        className,
      )}
    >
      <div className="p-1 border rounded-xl w-[95%] max-md:w-[80%] md:w-[40%]">
        <img
          src={imageSource}
          className="rounded-md aspect-5/3 object-cover brightness-75"
          alt="pen-and-paper"
        />
      </div>
      <div className="flex flex-col gap-4 max-md:w-[80%] w-[60%]">
        <h3>{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section
        id="intro"
        className="p-4 h-[80dvh] max-sm:h-[70dvh] mt-30 max-w-6xl mx-auto"
      >
        <div className="relative flex items-end justify-end w-full h-full rounded-lg">
          <div className="absolute h-full w-full top-0 left-0 bg-linear-to-r from-0% from-background via-50% via-background to-80% to-transparent rounded-md flex flex-col gap-8 p-12 justify-center">
            <div className="flex flex-col gap-4">
              <span>Hello, I am</span>
              <h1 className="text-primary md:text-5xl">Sneha Salam</h1>
            </div>
            <span className="text-xl max-w-2xl max-md:max-w-[75%] max-sm:max-w-full">
              I am expert in Human Resource Management, Business operations, and
              Organizational Development.
            </span>
            <div className="flex gap-4 justify-start items-center max-sm:flex-col">
              <Button className="max-sm:w-full">Book A Meeting With Me</Button>
              <Button variant={"outline"} className="max-sm:w-full">
                Send Me an Email
              </Button>
            </div>
          </div>
          <img
            src="/dropped.png"
            className="rounded-lg object-cover h-full w-[60%]"
            alt="Sneha Salam"
          />
        </div>
      </section>

      <section
        id="stats"
        className="p-6 flex my-20 flex-col gap-8 items-center justify-center"
      >
        <h1 className="capitalize text-center">
          Numbers that reflect the journey
        </h1>
        <p className="max-w-lg text-center">
          Years of hands-on experience, completed projects, and the teams behind
          the work.
        </p>
        <div className="grid grid-cols-3 gap-4 justify-center items-center">
          <Stat
            title={`${new Date().getFullYear() - 2018}+`}
            subtitle="years of experience"
          />
          <Stat title="17+" subtitle="projects completed" />
          <Stat title="7+" subtitle="organizations" />
        </div>
      </section>

      <section
        id="capabilities"
        className="min-h-screen p-4 flex flex-col items-center pt-20 justify-center pb-24"
      >
        <div className="flex flex-col gap-6 mb-24">
          <h1 className="capitalize text-center">
            Capabilities that drive impact
          </h1>
          <p className="max-w-lg text-center">
            The skills and expertise that have been demonstrating the ability to
            deliver results and make a difference.
          </p>
        </div>
        <div
          id="capabilities-showcase"
          className="flex flex-col gap-18 lg:gap-30 justify-center max-w-2xl"
        >
          <Capability
            imageSource="/pen-and-paper.webp"
            title="Business Process Documentation"
            description="Turning messy workflows into clear, usable documentation that helps teams work faster, reduce confusion, and stay aligned."
          />
          <Capability
            imageSource="/pen-and-paper.webp"
            title="HR Management"
            description="Supporting people operations with structured HR processes, policy clarity, and practical systems that make teams run smoother."
          />
          <Capability
            imageSource="/pen-and-paper.webp"
            title="Organizational Structure Design"
            description="Designing team structures and reporting lines that improve accountability, communication, and decision-making."
          />
          <Capability
            imageSource="/pen-and-paper.webp"
            title="Process & Operations Strategy"
            description="Improving day-to-day operations through smarter workflows, better coordination, and systems built for consistency."
          />
          <Capability
            imageSource="/pen-and-paper.webp"
            title="Workflow & Compliance Management"
            description="Creating compliant, easy-to-follow workflows that support control, reduce risk, and keep operations on track."
          />
        </div>
      </section>

      <section id="quote" className="pt-30 max-w-[90%] mx-auto">
        <Quoted text="I believe a good foundation in operations, HR, and organizational development is the key to any successful business." />
      </section>

      <section
        id="bottom-cta"
        className="pb-30 pt-40 text-center p-6 flex items-center justify-center flex-col gap-4 max-w-3xl mx-auto"
      >
        <span className="text">
          Ready to discuss how I can help your organization?
        </span>
        <div className="flex gap-4 justify-center items-center w-fit mx-auto">
          <Button className="capitalize">Send Me an email</Button>
          <Button className="capitalize">Book A Meeting Now</Button>
        </div>
      </section>
    </>
  );
}
