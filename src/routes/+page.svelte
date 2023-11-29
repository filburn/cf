<script>
	import Experience from './Experience.svelte';
	import Projects from './Projects.svelte';
	import cmmi from '$lib/images/cmmi-design-thumb.png';
	import isaca from '$lib/images/isaca-design-thumb.png';
	import Separator from './Separator.svelte';
</script>

<svelte:head>
	<title>Caleb Filburn - Designer + Software Engineer</title>
	<meta name="description" content="Designer and software engineer with 10+ years of experience creating products and building teams." />
</svelte:head>

<section class="experience">
	<h1 class="sr-only">Experience</h1>
	<ul>
		<Experience 
			date="March 2020—August 2023"
			titles={["Software Engineer", "UX Engineer"]}
			company="ISACA"
			description="Designed, developed, and maintained codebase for design system and enterprise software applications. Led meetings and presentations, mentored new hires, and reported project status to stakeholders."
			bullets={[
				"Built, deployed, and managed design system resulting in 30% greater development efficiency", 
				"Set up software logging and reduced application errors by 80%",
				"Created an onboarding process resulting in estimated 50% reduction in training time",
				"Mentored new hires and provided team members with training on Kentico CMS and enterprise systems",
				"Directed technical integration of FormAssembly with Sitecore and Salesforce",
				"Designed SSO experience and led Scrum ceremonies for multiple teams"
			]}
			skills={["Design Systems", "React", "Angular", ".NET", "Azure", "Figma", "Kentico", "Sitecore", "Salesforce", "Scrum"]}
		/>

		<Experience 
			date="July 2018—March 2020"
			titles={["Frontend Developer"]}
			company="CMMI Institute"
			bullets={[
				"Created and maintained company design system used internally and by vendors (React)",
				"Established SLA between marketing and technology departments, reducing time to resolution by ~50%",
				"Performed A/B testing, card sorting, and user interviews",
				"Deployed Jira Service Desk and promoted its adoption, increasing collaboration and project delivery speed"
			]}
			skills={["Design Systems", "React", "Figma", "Kentico", "Scrum"]}
		/>

		<Experience 
			date="June 2016—July 2018"
			titles={["Web Team Director"]}
			company="Em-Media"
			bullets={[
				"Designed and developed WordPress and HubSpot websites for clients in agency environment",
				"Provided DevOps for 30+ websites, UX design, digital design, and ad placement",
				"Supervised team of up to 5 contractors and interns",
				"Managed resources and timelines of multiple simultaneous projects"
			]}
			skills={["software", "design", "etc"]}
		/>

		<Experience 
			date="March 2013—June 2016"
			titles={["Web Designer, Partner"]}
			company="Chiselbox"
			bullets={[
				"Co-founded boutique web and creative agency",
				"Guided new business development, business strategy, and financial decisions",
				"Supervised website development and provided creative direction in fast-paced startup environment",
				"Created web components, identity systems, and branding assets for 20+ clients"
			]}
			skills={["software", "design", "etc"]}
		/>
	</ul>
</section>

<Separator />

<section class="projects">
	<h1 class="sr-only">Projects</h1>
	<ul>
		<Projects
			img={cmmi}
			alt="a screenshot of the CMMI Institute design system"
			title="CMMI Institute Design System"
			description={["Design system.",
			"Every artifact has a sample HTML snippet that can be used to quickly add it to a page. When an update to a component or style is needed, changing it in the design system will update it everywhere else."]}
			tech={["React", "that", "something else"]}
		/>
		<Projects
		img={isaca}
		alt="a screenshot of the ISACA design operations framework"
		title="ISACA Design Operations Framework"
		description={["Design system.",
		"Every artifact has a sample HTML snippet that can be used to quickly add it to a page. When an update to a component or style is needed, changing it in the design system will update it everywhere else."]}
		tech={["React", "that", "something else"]}
	/>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
