<script>
	// MDSveX layouts do not work with TypeScript
  import PageHeader from '$components/PageHeader.svelte';

	export let title;
  export let subTitle;
</script>

	<PageHeader
		title="{title}"
		subTitle="{subTitle}"
	/>
  <slot />