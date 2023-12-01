<script>
	import Experience from '$components/Experience.svelte';
	import Projects from '$components/Projects.svelte';
	import cmmi from '$lib/images/cmmi-design-thumb.png';
	import isaca from '$lib/images/isaca-design-thumb.png';
	import SectionLink from '$components/SectionLink.svelte';
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
			description="Designed and developed design system components. Delivered high-quality production code for enterprise software applications. Performed user interviews and qualitative data analysis. Led meetings and presentations, mentored new hires, and reported project status to stakeholders."
			skills={["Design Systems", "React", "Angular", ".NET", "Azure", "Figma", "Kentico", "Sitecore", "Salesforce", "Scrum"]}
		/>

		<Experience 
			date="July 2018—March 2020"
			titles={["Frontend Developer"]}
			company="CMMI Institute"
			description="Developed new components for company design system. Performed A/B testing, card sorting, and user interviews. Maintained codebase for a suite of B2B applications."
			skills={["Design Systems", "JavaScript", "React", "Figma", "Kentico", "Scrum"]}
		/>

		<Experience 
			date="June 2016—July 2018"
			titles={["Web Team Director"]}
			company="Em-Media"
			description=""
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
	<SectionLink
		text="See full resume"
		link="#"
	/>
</section>

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

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
