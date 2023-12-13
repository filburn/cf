<script lang="ts">
	import { onMount } from "svelte";

  export let name:string;
  export let title:string;
	export let description:string;
	
	onMount(() => {
		document.addEventListener('scroll', function() {
			let header = document.querySelector('header');
			let scrollPos = window.scrollY;
			if (scrollPos > 5) {
				header?.classList.add('sidebar')
			} else if (scrollPos <= 5 && header?.classList.contains('sidebar')) {
				header?.classList.remove('sidebar')
			}
		})
	});
</script>

<header>
	<div class="grid"></div>
	<div itemscope itemtype="http://schema.org/Person">
		<h1 itemprop="name">{name}</h1>
		<h2 itemprop="jobTitle">{title}</h2>
		<p>{description}</p>
	</div>
</header>

<style lang="scss">
  header {
    width: 100%;
    min-height: 100vh;
		text-align: center;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		overflow-x: clip;

		h1, h2 {
			color: rgba(var(--color-text), 0.95);
			margin: 0;
		}

		h1 {
			font-size: calc(3rem + 4vw);
			text-shadow: -1px -1px 0 rgb(var(--color-theme-1)), 1px 1px 0 rgb(var(--color-theme-2));

			@media (min-width: 160rem) {
				font-size: 9.5rem;
			}
		}

		h2 {
			font-size: calc(1.5rem + 1vw);
		}

		p {
			max-width: calc(100% - 10rem);
			margin: 1em auto;
		}
  }

	.grid {

		background-clip: content-box;
		max-width: fit-content;

		&:after {
			-webkit-mask-image: -webkit-gradient(linear, left 90%, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
			-webkit-background-clip: content-box;
			-webkit-backface-visibility: hidden;
			display: block;
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			transform: perspective(400px) rotateX(40deg) scale(2,1) translateZ(0);
			transform-origin: bottom center; 
			z-index: -1;
			backface-visibility: hidden;
			mask-image: gradient(linear, left 90%, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))); 
			will-change: transform;
			outline: 1px solid transparent;
			background-image: 
			linear-gradient(to right, rgb(var(--color-theme-2)) 2px, transparent 2px), 
			linear-gradient(to bottom, rgb(var(--color-theme-2)) 1px, transparent 2px); 
			background-position: center bottom;
			background-size: 40px 40px; 
			background-clip: content-box;
			width: 100%;
			height: 100vh;
			content: "";
		}
	}
</style>
