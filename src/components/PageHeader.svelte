 <script lang="ts">
  export let title:string;
	export let subTitle:string;
</script>

 <header>
	 <hgroup>
		 <h1>{title}</h1>
		 <h2>{subTitle}</h2>
	 </hgroup>
 </header>

 <style lang="scss">
	 header {
		 width: 100%;
		 height: 25vh;
		 min-height: 10em;
		 align-items: center;
		 display: flex;

		 h1, h2 {
			 color: rgba(var(--color-text), 0.95);
			 margin: 0;
		 }

		 h1 {
			 text-shadow: -0.5px -0.5px 0 rgb(var(--color-theme-1)), 0.5px 0.5px 0 rgb(var(--color-theme-2));
		 }
	 }
 </style>
