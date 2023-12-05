<script>
	import Listing from '$components/Listing.svelte';
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
		<Listing 
			startDate="March 2020"
			endDate="August 2023"
			jobTitles={["Software Engineer", "UX Engineer"]}
			company="ISACA"
			description={["Designed and developed design system components. Delivered high-quality production code for enterprise software applications. Performed user interviews and qualitative data analysis. Led meetings and presentations, mentored new hires, and reported project status to stakeholders."]}
			tags={["React", "Angular", ".NET", "Azure", "SQL", "Figma", "Kentico", "Sitecore", "Salesforce", "Scrum"]}
		/>

		<Listing 
			startDate="July 2018"
			endDate="March 2020"
			jobTitles={["Frontend Developer"]}
			company="CMMI Institute"
			description={["Developed new components for company design system. Performed A/B testing, card sorting, and user interviews. Maintained codebase for a suite of B2B applications."]}
			tags={["JavaScript", "React", ".NET", "SQL", "Figma", "Kentico", "Scrum"]}
		/>

		<Listing 
			startDate="June 2016"
			endDate="July 2018"
			jobTitles={["Web Team Director"]}
			company="Em-Media"
			description={[""]}
			tags={["software", "design", "etc"]}
		/>

		<Listing 
			startDate="March 2013"
			endDate="June 2016"
			jobTitles={["Web Designer, Partner"]}
			company="Chiselbox"
			bullets={[
				"Co-founded boutique web and creative agency",
				"Guided new business development, business strategy, and financial decisions",
				"Supervised website development and provided creative direction in fast-paced startup environment",
				"Created web components, identity systems, and branding assets for 20+ clients"
			]}
			tags={["software", "design", "etc"]}
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
		<Listing
			img={cmmi}
			alt="a screenshot of the CMMI Institute design system"
			projectTitle="CMMI Institute Design System"
			description={["Design system.",
			"Every artifact has a sample HTML snippet that can be used to quickly add it to a page. When an update to a component or style is needed, changing it in the design system will update it everywhere else."]}
			tags={["React", "that", "something else"]}
		/>
		<Listing
			img={isaca}
			alt="a screenshot of the ISACA design operations framework"
			projectTitle="ISACA Design Operations Framework"
			description={["Design system.",
			"Every artifact has a sample HTML snippet that can be used to quickly add it to a page. When an update to a component or style is needed, changing it in the design system will update it everywhere else."]}
			tags={["React", "that", "something else"]}
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

	ul {
		@media (max-width: 38rem) {
      flex-direction: row;
    }
	}
</style>
