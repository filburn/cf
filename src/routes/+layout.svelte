<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import '$lib/styles/styles.scss';
</script>

<div class="app">

	<main>
		<slot />
	</main>

	<!--<Footer />-->
	<Footer />
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
