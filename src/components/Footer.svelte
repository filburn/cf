<script lang="ts">
	import behance from '$lib/images/behance.svg?raw';
	import github from '$lib/images/github.svg?raw';
	import linkedin from '$lib/images/linkedin.svg?raw';
	import manual from '$lib/images/manual.svg?raw';
</script>

<footer>
	<div class="social-icons">
		<a href="https://www.behance.net/calebfilburn">{@html behance}</a>
		<a href="https://github.com/filburn">{@html github}</a>
		<a href="https://www.linkedin.com/in/filburn/">{@html linkedin}</a>
		<a href="https://app.manual.me/@sirsloth">{@html manual}</a>
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		font-size: 0.75rem;
		justify-content: center;
		align-items: center;
    padding: 0 1rem;

		.social-icons {
			display: flex;
			margin: 4rem 0;

			a {
				margin: 0 1rem;
				font-size: 1.5rem;
				width: 24px;
				fill: rgba(var(--color-text), 0.95);

				&:hover {
					fill: rgba(var(--color-theme-2), 0.95);
				}
			}
		}
	}
</style>
