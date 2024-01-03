<script>
	import Header from '$components/Header.svelte';
	import Listing from '$components/Listing.svelte';
	import cmmi from '$lib/images/cmmi-design-thumb.png';
	import isaca from '$lib/images/isaca-design-thumb.png';
	import cf from '$lib/images/cf-thumb.png';
	import meta from '$lib/images/cf-meta-img.png';
	import resume from '$lib/docs/filburn-resume-2023.pdf';
	import SectionLink from '$components/SectionLink.svelte';
</script>

<svelte:head>
	<title>Caleb Filburn - UX/UI Engineer</title>
	<meta name="title" content="Caleb Filburn - UX/UI Engineer" />
	<meta name="description" content="Designer and software engineer with 10+ years of experience creating products and building teams." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://calebfilburn.com" />
	<meta property="og:title" content="Caleb Filburn - UX/UI Engineer" />
	<meta property="og:description" content="Designer and software engineer with 10+ years of experience creating products and building teams." />
	<meta property="og:image" content="{meta}" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://calebfilburn.com" />
	<meta property="twitter:title" content="Caleb Filburn - UX/UI Engineer" />
	<meta property="twitter:description" content="Designer and software engineer with 10+ years of experience creating products and building teams." />
	<meta property="twitter:image" content="{meta}" />
</svelte:head>

<Header
name="Caleb Filburn"
title="UX/UI Engineer"
description="I’m a digital product expert who loves design, development, and empowering collaborative teams to craft exceptional products."
/>

<section class="experience">
	<h1 class="sr-only">Experience</h1>
	<ul>
		<Listing 
			startDate="March 2020"
			endDate="August 2023"
			jobTitles={["UX/UI Engineer", "UX Engineer", "Frontend Engineer"]}
			company="ISACA"
			description={["Wrote code to create design system components. Delivered high-quality production code for B2C enterprise software applications. Led qualitative and quantitative usability testing. Facilitated meetings, mentored new hires, and presented projects and findings to stakeholders."]}
			tags={["React", "Angular", "SCSS", ".NET", "Azure", "SQL", "UX Design", "Figma", "Sitecore", "Kentico", "Salesforce", "Scrum"]}
		/>

		<Listing 
			startDate="July 2018"
			endDate="March 2020"
			jobTitles={["Frontend Developer"]}
			company="CMMI Institute"
			description={["Worked closely with UX team to realize new frontend components. Wrote and maintained design system and implementation guidelines. Performed A/B testing, card sorting, and user interviews. Developed new products and features while maintaining codebase for a suite of B2B applications."]}
			tags={["JavaScript", "React", "SCSS", ".NET", "SQL", "UX Design", "Figma", "Kentico", "Scrum"]}
		/>

		<Listing 
			startDate="June 2016"
			endDate="July 2018"
			jobTitles={["Web Team Director"]}
			company="Em-Media"
			description={["Oversaw development and DevOps for a portfolio of web applications at an agency. Coordinated work with a team of developers and content specialists."]}
			tags={["JavaScript", "HTML5", "CSS3", "Project Management", "HubSpot", "WordPress"]}
		/>

		<Listing 
			startDate="March 2013"
			endDate="June 2016"
			jobTitles={["Web Designer, Partner"]}
			company="Chiselbox"
			description={["Co-founded boutique web and creative agency. Managed clients, budgets, and timelines while developing and delivering quality websites.",
			"Met with clients, wrote project proposals, and managed finances for the agency."]}
			tags={["JavaScript", "HTML5", "CSS3", "Ruby", "PHP", "WordPress", "Drupal"]}
		/>
	</ul>

	<SectionLink
		text="See full resume"
		link="{resume}"
	/>

</section>

<section class="projects">
	<h1 class="sr-only">Projects</h1>
	<ul>
		<Listing
			img={isaca}
			alt="a screenshot of the ISACA design operations framework"
			projectTitle="ISACA Design Operations Framework"
			description={["Design system created to enhance consistency across web properties and increase development efficiency.",
			"Accompanying documentation includes component previews, instructions for use, and sample code snippets."]}
			tags={["React", "TypeScript", "Webpack", "Node.js", "SCSS", "Jest"]}
		/>
		<Listing
		img={cmmi}
		alt="a screenshot of the CMMI Institute design system"
		projectTitle="CMMI Institute Design System"
		description={["A design system created to maintain consistent visuals and functionality within internal and external web applications.",
		"Contains over 100 components, each with example code that can be used to quickly add it to a page."]}
		tags={["React", "TypeScript", "Webpack", "Node.js", "SCSS", "Jest"]}
		/>
		<Listing
			img={cf}
			alt="a screenshot of this website; Caleb Filburn's personal website"
			projectTitle="Personal Website"
			description={["A website showcasing my skills and professional experience along with some projects I've worked on. A summary of my varied experience as a designer, developer, and engineer."]}
			tags={["Svelte", "TypeScript", "Vite", "Node.js", "SCSS", "Playwright"]}
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
