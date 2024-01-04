<script lang="ts">
  export let title:string;
  export let subTitle:string;
</script>

<article>
  <h1>{title}</h1>
  <h2>{subTitle}</h2>
  <slot />
</article>