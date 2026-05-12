import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function HomeStats({ title, subtitle }: { title: string; subtitle: string }) {
	return (
		<div className="p-8 flex flex-col gap-6 items-center justify-center capitalize bg-accent rounded-lg">
			<h1 className="text-bold text-5xl">{title}</h1>
			{subtitle}
		</div>
	);
}

function Home() {
	return (
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
				<HomeStats title="8+" subtitle="years of experience" />
				<HomeStats title="10+" subtitle="projects completed" />
				<HomeStats title="5+" subtitle="organizations" />
				<HomeStats title="500+" subtitle="people worked with" />
			</div>
		</section>
	);
}
