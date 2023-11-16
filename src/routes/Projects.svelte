<script lang="ts">
  export let img:string;
  export let alt:string;
  export let title:string;
  export let description:string;
  export let tech:string[];
</script>

<li>
  <img src="{img}" alt="{alt}" />
  <div>
    <h3>{title}</h3>
    {#if description}
      <p>{description}</p>
    {/if}
    <ul class="tech">
      {#each tech as t}
        <li>{t}</li>
      {/each}
    </ul>
  </div>
</li>