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
	<div id="cover"></div>
	<div itemscope itemtype="http://schema.org/Person">
		<h1 itemprop="name">{name}</h1>
		<h2 itemprop="jobTitle">{title}</h2>
		<p>{description}</p>
	</div>
</header>

<style lang="scss">
  header {
		position: relative;
    width: 100%;
    min-height: 100vh;
		text-align: center;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;

		//.grid { width: 100%; position: absolute; bottom: 0; left: 0; }

		.grid:after { 
			mask-image: gradient(linear, left 90%, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
			-webkit-mask-image: -webkit-gradient(linear, left 90%, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
			transform: perspective(400px) rotateX(40deg) scale(2,1) translateZ(0);
			content: "";
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100vh;
			padding: 1px; 
			background-clip: content-box;
			-webkit-background-clip: content-box; 
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;
			outline: 1px solid transparent;
			transform-origin: bottom center;
			will-change: transform; 

			background-position: center bottom;
			background-size: 40px 40px;
			background-image: 
			linear-gradient(to right, var(--color-theme-2) 2px, transparent 2px), 
			linear-gradient(to bottom, var(--color-theme-2) 1px, transparent 2px);
		}

		h1, h2 {
			margin: 0;
		}

		h1 {
			font-size: calc(3rem + 4vw);
			text-shadow: -1px -1px 0 var(--color-theme-2), 1px 1px 0 var(--color-theme-1);
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
		animation-range-end: exit 30%;
	}

</style>