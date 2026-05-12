import { createFileRoute } from "@tanstack/react-router";
import type { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Stat({ title, subtitle }: { title: string; subtitle: string }) {
	return (
		<div className="p-8 flex flex-col gap-6 items-center justify-center capitalize bg-muted rounded-lg">
			<h1 className="text-bold text-5xl">{title}</h1>
			<p className="text-muted-foreground">{subtitle}</p>
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
			className={cn("flex items-center justify-center gap-8 w-full", className)}
		>
			<div className="p-1 border rounded-xl w-[40%]">
				<img
					src={imageSource}
					className="rounded-md grayscale aspect-5/3 object-cover brightness-75"
					alt="pen-and-paper"
				/>
			</div>
			<div className="flex flex-col gap-4 w-[60%]">
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
				id="stats"
				className="h-screen p-4 flex flex-col gap-8 items-center justify-center"
			>
				<h1 className="capitalize">Numbers that reflect the journey</h1>
				<p className="max-w-sm md:max-w-lg text-center">
					Years of hands-on experience, completed projects, and the people and
					teams behind the work.
				</p>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
					<Stat title="8+" subtitle="years of experience" />
					<Stat title="10+" subtitle="projects completed" />
					<Stat title="5+" subtitle="organizations" />
					<Stat title="500+" subtitle="people worked with" />
				</div>
			</section>

			<section
				id="capabilities"
				className="min-h-screen p-4 flex flex-col items-center justify-center pb-24"
			>
				<div className="flex flex-col gap-6 mb-24">
					<h1 className="capitalize">Capabilities that drive impact</h1>
					<p className="max-w-sm md:max-w-lg text-center">
						Skills and expertise that have been demonstrating the ability to
						deliver results and make a difference.
					</p>
				</div>
				<div
					id="capabilities-showcase"
					className="flex flex-col gap-24 justify-center max-w-2xl"
				>
					<Capability
						imageSource="/pen-and-paper.webp"
						title="Business Process Documentation"
						description="Creating clear and comprehensive documentation of business processes to enhance understanding, communication, and efficiency within an organization."
					/>
					<Capability
						imageSource="/pen-and-paper.webp"
						title="HR Management"
						description="Creating clear and comprehensive documentation of business processes to enhance understanding, communication, and efficiency within an organization."
						className="flex-row-reverse"
					/>
					<Capability
						imageSource="/pen-and-paper.webp"
						title="Organizational Structure Design"
						description="Creating clear and comprehensive documentation of business processes to enhance understanding, communication, and efficiency within an organization."
					/>
					<Capability
						imageSource="/pen-and-paper.webp"
						title="Process & Operations Strategy"
						description="Creating clear and comprehensive documentation of business processes to enhance understanding, communication, and efficiency within an organization."
						className="flex-row-reverse"
					/>
					<Capability
						imageSource="/pen-and-paper.webp"
						title="Workflow & Compliance Management"
						description="Creating clear and comprehensive documentation of business processes to enhance understanding, communication, and efficiency within an organization."
					/>
				</div>
			</section>
		</>
	);
}
