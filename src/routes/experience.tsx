import { createFileRoute } from "@tanstack/react-router";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

type ExperienceItem = {
  organization: string;
  title: string;
  description: string;
  start: string;
  end: string;
};

const professionalExperience: ExperienceItem[] = [
  {
    organization: "Docufy",
    title: "Founder & Chief Executive Officer",
    description:
      "Lead operations, strategic planning, and team coordination while keeping delivery aligned across stakeholders. I also manage brand presence, website development, client onboarding, and end-to-end service quality.",
    start: "15 May 2024",
    end: "Present",
  },
  {
    organization: "United Commercial Bank PLC",
    title:
      "Intern, Project Management, Digital Technology & Innovation Division",
    description:
      "Supported the Bank Digitalization Project by coordinating with developers, testers, and business analysts. I also maintained project documentation, tracked delivery progress, and helped with BRD, SRS, testing, and deployment tasks.",
    start: "25 September 2025",
    end: "24 December 2025",
  },
  {
    organization: "Sysonex Development Limited",
    title: "Corporate Operations Lead",
    description:
      "Oversaw team activity and supported HR, finance, admin, and parts of marketing and sales. The role also strengthened my communication, public relations, and documentation skills.",
    start: "1 January, 2024",
    end: "30 September, 2025",
  },
  {
    organization: "Sysonex Inc.",
    title: "Human Resources Officer",
    description:
      "Handled HR operations, payroll-related documents, and cross-functional support across finance and admin. I also contributed to communication, public relations, and event coordination.",
    start: "21 January 2023",
    end: "31 December 2023",
  },
  {
    organization: "Media Probe",
    title: "Co-Founder",
    description:
      "Managed client communication and supported internal coordination. The role also covered technical and operational responsibilities across the organization.",
    start: "April 2021",
    end: "March 2024",
  },
];

const volunteeringExperience: ExperienceItem[] = [
  {
    organization: "National Newspaper Olympiad",
    title: "Executive Vice President",
    description:
      "Led the executive board, kept teams on track, and supported major events. The role also involved supervising communication, events, HR, and public relations department.",
    start: "November 2023",
    end: "March 2024",
  },
  {
    organization: "National Newspaper Olympiad",
    title: "Director",
    description:
      "Monitored the executive board, coordinated with stakeholders, and supported planning across the organization. I also helped keep communication clear between teams.",
    start: "December 2021",
    end: "October 2023",
  },
  {
    organization: "National Newspaper Olympiad",
    title: "Assistant Secretary General",
    description:
      "Supported seasonal planning and kept operations active across departments. I also helped teams complete tasks efficiently and on time.",
    start: "April 2021",
    end: "December 2021",
  },
  {
    organization: "National Newspaper Olympiad",
    title: "Head of Public Relations",
    description:
      "Handled PR coordination and maintained communication with stakeholders. I also supported event campaigns and kept external relationships active.",
    start: "December 2020",
    end: "April 2021",
  },
  {
    organization: "Peora",
    title: "Operations Lead",
    description:
      "Led operations and coordinated with stakeholders to keep daily work organized. I also supported smooth execution of ongoing activities.",
    start: "August 2023",
    end: "March 2024",
  },
  {
    organization: "BRAC University Business Club (BIZZ BEE)",
    title: "Senior Executive, Research & Publication",
    description:
      "Worked on research and publication tasks while collaborating on club activities. I also supported content planning and delivery.",
    start: "November 2022",
    end: "March 2024",
  },
  {
    organization: "BRAC University Business Club (BIZZ BEE)",
    title: "Sub Executive, Research & Publication",
    description:
      "Supported research and publication work by helping to improve the club's visibility through club activities.",
    start: "May 2022",
    end: "November 2022",
  },
];

const educationalBackground: ExperienceItem[] = [
  {
    organization: "BRAC University",
    title: "Bachelor of Business Administration (BBA)",
    description:
      "Built a foundation in business, communication, and organizational work. The program focused on practical execution and structured thinking.",
    start: "2021",
    end: "2026",
  },
  {
    organization: "Dhaka City College",
    title: "HSC (Business Studies)",
    description:
      "Focused on business fundamentals, analytical thinking, and structured problem solving. It provided the base for later academic and career growth.",
    start: "2018",
    end: "2020",
  },
  {
    organization: "Mohammadpur Preparatory School & College",
    title: "SSC (Business Studies)",
    description:
      "Covered business basics and analytical skills while preparing for higher education. The program also emphasized structured thinking and problem solving.",
    start: "2016",
    end: "2018",
  },
];

function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  let previousOrg = "";
  return (
    <Timeline className="w-full gap-0" defaultValue={items.length}>
      {items.map((item, index) => {
        const isPreviousOrgSame = previousOrg === item.organization;
        previousOrg = item.organization;

        return (
          <TimelineItem
            key={`${item.organization}-${item.title}`}
            step={index + 1}
            data-completed={true}
          >
            <TimelineIndicator
              className={cn(isPreviousOrgSame && "border-muted!")}
            />
            <TimelineSeparator
              className={cn(isPreviousOrgSame && "bg-muted!")}
            />
            <TimelineHeader className="space-y-1">
              <TimelineDate>{`${item.start} - ${item.end}`}</TimelineDate>
              <TimelineTitle className="text-xl tracking-wide font-bold">
                {item.organization}
              </TimelineTitle>
              <p className="font-medium text-accent">{item.title}</p>
            </TimelineHeader>
            <TimelineContent>{item.description}</TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

function RouteComponent() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-4 pt-40 pb-15 sm:px-6 lg:px-8">
      <div className="max-w-2xl space-y-4">
        <h1>The Snapshot of My Journey</h1>
        <p className="text-muted-foreground">
          Timelines of the work, community involvement, and academic background
          that shaped the journey.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Professional Experience</h2>
          <p className="text-muted-foreground">
            Roles focused on operations, communication, and structured
            execution.
          </p>
        </div>
        <ExperienceTimeline items={professionalExperience} />
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Volunteering Experience</h2>
          <p className="text-muted-foreground">
            Community work and event support across different initiatives.
          </p>
        </div>
        <ExperienceTimeline items={volunteeringExperience} />
      </div>

      <section className="space-y-8 pb-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Educational Background</h2>
          <p className="text-muted-foreground">
            Academic milestones and the foundation behind the professional path.
          </p>
        </div>
        <ExperienceTimeline items={educationalBackground} />
      </section>
    </section>
  );
}
