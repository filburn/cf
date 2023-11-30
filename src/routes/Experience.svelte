<script lang="ts">
  export let date:string;
  export let titles:string[];
  export let company:string;
  export let description:string = "";
  export let bullets:string[];
  export let skills:string[];
</script>

  <li>
    <time>{date}</time>
    <div>
      <h3>{titles[0] + " at " + company}</h3>
      {#if titles.length > 1}
        {#each titles.slice(1) as _, i}
          <span>{titles[i+1]}</span>
        {/each}
      {/if}
      {#if description}
        <p>{description}</p>
      {/if}
      {#if bullets}
        <ul class="bullets">
          {#each bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
      {/if}
      <ul class="skills">
        {#each skills as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
  </li>

<style lang="scss">
    li {
      display: flex;
      font-size: 0.875rem;

      time {
        flex: 1;
        padding-right: 1em;
      }

      div {
        flex: 3;
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

    .bullets {
      li {
        display: list-item;
        list-style-type: disc;
      }
    }

    .skills {
      display: flex;
      flex-wrap: wrap;

      li {
        font-size: 0.75rem;
        color: var(--color-theme-1);
        background-color: var(--color-bg-2);
        padding: 0.25rem 0.5rem;
        border-radius: 10px;
        margin: 0 0.25rem 0.25rem 0;
      }
    }
</style>