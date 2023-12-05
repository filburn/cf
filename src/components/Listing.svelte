<script lang="ts">
  export let startDate:string = "";
  export let endDate:string = "";
  export let jobTitles:string[] = [];
  export let projectTitle:string = "";
  export let company:string = "";
  export let description:string[] = [];
  export let bullets:string[] = [];
  export let tags:string[];
  export let img:string = "";
  export let alt:string = "";
</script>

  <li>
    {#if startDate != '' && endDate != '' && img == ''}
      <time>{startDate}—{endDate}</time>
      {:else if img != '' && alt != '' && startDate == '' && endDate == ''}
      <img src="{img}" alt="{alt}"/>
    {/if}
    <div>
      {#if startDate != '' && endDate != '' && jobTitles.length > 0 && img == ''}
        <h3>{jobTitles[0] + " at " + company}</h3>
        {#if jobTitles.length > 1}
          {#each jobTitles.slice(1) as _, i}
            <span>{jobTitles[i+1]}</span>
          {/each}
        {/if}
      {:else if jobTitles.length == 0 && projectTitle != ''}
        <h3>{projectTitle}</h3>
      {/if}
      {#if description}
        {#each description as d}
          <p>{d}</p>
        {/each}
      {/if}
      {#if bullets}
        <ul class="bullets">
          {#each bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
      {/if}
      <ul class="tags">
        {#each tags as tag}
          <li>{tag}</li>
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

    @media (max-width: 38rem) {
      flex-direction: column;
    }
    
    &:hover {
      background: rgba(5, 70, 116, 0.5);
    }

    time,
    img {
      flex: 1;
      flex-shrink: 0;
      padding-right: 1em;
      min-width: calc(25% - 1em);
      max-width: 100%;
      height: 100%;
      overflow: auto;

      @media (max-width: 38rem) {
        padding-bottom: 1em;
      }
    }

    div {
      flex: 3;
      flex-shrink: 3;
    }

    h3 {
      margin-top: 0;
    }

    span {
    display: block;
    opacity: 0.6;
    margin: -0.5rem 0 1rem 0;
    font-weight: 700;
    font-size: 1.25rem;
    }
  }

  .bullets {
    li {
      display: list-item;
      margin: 0.5rem 0;
      background: none;
      padding: 0;
      list-style-type: disc;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    li {
      margin: 0 0.25rem 0.25rem 0;
      border-radius: 10px;
      background-color: rgb(var(--color-bg-2));
      padding: 0.25rem 0.5rem;
      color: rgb(var(--color-theme-1));
      font-size: 0.875rem;
    }
  }
</style>