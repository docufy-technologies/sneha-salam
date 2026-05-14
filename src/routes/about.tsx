import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Quoted } from "@/components/ui/quoted";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function Expertise({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-12 justify-center items-center border h-full text-center">
      <p className="font-semibold text-lg">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}

function RouteComponent() {
  return (
    <>
      <section className="mt-40 mx-auto w-fit">
        <img
          src="/image-about.jpg"
          className="size-50 rounded-full shadow-primary shadow-sm"
          alt="Sneha Salam"
        />
      </section>
      <section className="min-h-[20dvh] max-w-lg flex flex-col justify-center gap-2 pb-20 items-center text-center mx-auto p-4">
        <h1>I am Sneha Salam</h1>
        <p>Your Human Resources expert and Business Process specialist</p>
      </section>

      <section className="max-w-3xl sm:pb-10 h-fit mx-auto flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span className="font-bold h-full sm:mt-1 text-center">Who I am</span>
          <span className="max-sm:text-center col-span-2 font-light max-sm:px-4">
            I am Sneha Salam, a business operations and communication
            professional with experience in corporate operations, documentation,
            client management, public relations, and team leadership. I bring a
            strong understanding of business functions, including HR, finance,
            operations, and stakeholder coordination, with a focus on organized
            execution and professional communication.
          </span>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span className="font-bold h-full sm:mt-1 text-center">
            What I Do
          </span>
          <span className="max-sm:text-center col-span-2 font-light max-sm:px-4">
            I work across operations, strategic planning, documentation, client
            communication, and team management. My professional experience
            includes leading corporate operations, managing documentation
            workflows, coordinating with teams and stakeholders, supporting
            digital and cross-functional projects, and building structured
            systems for smooth business execution.
          </span>
        </div>
      </section>

      <section className="py-30 flex flex-col gap-12 max-w-4xl mx-auto">
        <div className="flex flex-col gap-4 text-center">
          <h1>My Core Strengths</h1>
          <p>These are the areas I excel in</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
          <Expertise
            title="Operations"
            description="Managing tasks, workflow, coordination, and execution."
          />
          <Expertise
            title="Communication"
            description="Client handling, corporate dealing, public speaking, and interpersonal communication."
          />
          <Expertise
            title="HR & Team Coordination"
            description="Recruitment support, team management, and people-focused coordination."
          />
          <Expertise
            title="Documentation"
            description="Organizing information, preparing records, and maintaining structured work processes."
          />
          <Expertise
            title="Strategic Planning"
            description="Supporting planning, decision-making, and project execution."
          />
          <Expertise
            title="PR & Events"
            description="Public relations, event management, and organizational communication."
          />
        </div>
      </section>

      <section id="quote" className="pb-30 pt-10 max-w-[90%] mx-auto">
        <Quoted text="I believe meaningful work starts with clear communication, strong organization, and the ability to work well with people." />
      </section>

      <section className="pb-30 w-fit mx-auto">
        <div className="flex gap-4 justify-start items-center max-sm:flex-col">
          <Button className="max-sm:w-full">Book A Meeting With Me</Button>
          <Button variant={"outline"} className="max-sm:w-full">
            Send Me an Email
          </Button>
        </div>
      </section>
    </>
  );
}
