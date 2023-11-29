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
    font-size: 0.875rem;

    img {
      flex: 1;
      padding-right: 1em;
      min-width: calc(25% - 1em);
      max-width: 100%;
      overflow: auto;
      height: 100%;
    }

    div {
      flex: 3;
      white-space: pre-line;
    }

    h3 {
      margin-top: 0;
    }

    span {
    display: block;
    opacity: 0.6;
    font-size: 1.17rem;
    font-weight: 700;
    margin: 1rem 0;
    }
  }

  .tech {
      display: flex;
      flex-wrap: wrap;

      li {
        font-size: 0.75rem;
        color: var(--color-theme-1);
        background-color: var(--color-theme-2);
        padding: 0.25rem 0.5rem;
        border-radius: 10px;
        margin: 0 0.25rem 0.25rem 0;
      }
    }
</style>