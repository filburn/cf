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
	<div id="cover"></div>
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

		h1, h2 {
			margin: 0;
		}

		h1 {
			font-size: calc(3rem + 4vw);
		}

		h2 {
			font-size: calc(1.5rem + 1vw);
		}

		p {
			max-width: calc(100% - 10rem);
			margin: 1em auto;
		}
  }

	@keyframes coverElement {
  from { opacity: (0); }
  to { opacity: (1); }
	}

	#cover {
		position: absolute;
		left: 0; top: 0;
		width: 100%; height: 100vh;
		background: var(--color-bg-1);
		transform-origin: 0 50%;
		animation: coverElement auto linear;
		animation-timeline: scroll();
		animation-range-end: exit 70%;
	}

</style>