<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import './styles.scss';
</script>

<div class="app">

	<main>
		<slot />
	</main>

	<!--<Footer />-->
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		flex: 1;
		flex-direction: column;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 0 1rem;
		width: 100%;
		max-width: 64rem;
	}
</style>
