<script lang="ts">
  export let img:string;
  export let alt:string;
  export let title:string;
  export let description:string[];
  export let tech:string[];
</script>

<li>
  <img src="{img}" alt="{alt}" />
  <div>
    <h3>{title}</h3>
    {#if description}
      {#each description as d}
        <p>{d}</p>
      {/each}
    {/if}
    <ul class="tech">
      {#each tech as t}
        <li>{t}</li>
      {/each}
    </ul>
  </div>
</li>

<style lang="scss">
  li {
    display: flex;
    transition: cubic-bezier(0.3, 0, .3, 1) 0.15s all;
    border-radius: 1rem;
    padding: 1rem;
    font-size: 0.875rem;

    &:hover {
      background: rgba(5, 70, 116, 0.5);
    }

    img {
      flex: 1;
      padding-right: 1em;
      min-width: calc(25% - 1em);
      max-width: 100%;
      height: 100%;
      overflow: auto;
    }

    div {
      flex: 3;
      white-space: pre-line;
    }

    h3 {
      margin-top: 0;
    }
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    li {
      margin: 0 0.25rem 0.25rem 0;
      border-radius: 10px;
      background-color: rgb(var(--color-bg-2));
      padding: 0.25rem 0.5rem;
      color: rgb(var(--color-theme-1));
      font-size: 0.75rem;
    }
  }
</style>