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
    <div className="space-y-3 border bg-muted">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-extrabold">{title}</h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}

function Organization({ imgSrc, title }: { imgSrc: string; title: string }) {
  return (
    <div className="p-4 flex items-center justify-center">
      <img src={imgSrc} className="h-16 w-fit" alt={title} />
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
            I am Sneha Salam, a business operations and communications
            professional with experience in operations, documentation, client
            management, public relations, and team leadership. Skilled in HR,
            finance, operations, and stakeholder coordination, I focus on
            efficient execution and professional communication.
          </span>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span className="font-bold h-full sm:mt-1 text-center">
            What I Do
          </span>
          <span className="max-sm:text-center col-span-2 font-light max-sm:px-4">
            I manage operations, strategic planning, documentation, client
            communication, and team coordination. My experience includes leading
            corporate operations, streamlining documentation workflows,
            coordinating stakeholders, supporting cross-functional projects, and
            developing structured systems for efficient business execution.
          </span>
        </div>
      </section>

      <section className="py-30 flex flex-col gap-12 max-w-4xl mx-auto">
        <div className="flex flex-col gap-4 text-center">
          <h1>My Core Strengths</h1>
          <p>These are the areas I excel in</p>
        </div>
        <div className="relative gap-2 mx-auto grid max-w-2xl lg:max-w-4xl *:p-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="py-30 flex flex-col gap-12 max-w-4xl mx-auto">
        <h1 className="text-center">
          Some of The Organizations I Have worked With
        </h1>
        <div className="grid grid-cols-4 items-center justify-center">
          <Organization
            title="Docufy"
            imgSrc="https://docufybd.com/logo-dynamic.svg"
          />
          <Organization
            title="Docufy"
            imgSrc="https://docufybd.com/logo-dynamic.svg"
          />
          <Organization
            title="Docufy"
            imgSrc="https://docufybd.com/logo-dynamic.svg"
          />
          <Organization
            title="Docufy"
            imgSrc="https://docufybd.com/logo-dynamic.svg"
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
