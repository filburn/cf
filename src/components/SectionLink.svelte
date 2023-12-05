<script lang="ts">
  export let text:string;
  export let link:string="#";
</script>

<span class="section-link">
  <a href="{link}">
    <span>{text}</span>
    <svg viewBox="0 0 20 20">
      <path fill-rule="evenodd" fill="rgba(var(--color-bg-1))" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
    </svg>
  </a>
</span>

<style lang="scss">
.section-link {
  // TODO: fix link hover area
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
	font-weight: 700;
  font-size: 1.25rem;

  svg {
    transition: cubic-bezier(0.3, 0, .3, 1) 0.15s transform;
    margin-left: 3px;
    width: 20px;
    line-height: 20px;
  }

  a {
    display: inline-flex;
    transition: cubic-bezier(0.3, 0, .3, 1) 0.15s text-decoration;
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 0.33rem;
    padding: 1rem 1.25rem;
    background: rgb(var(--color-theme-1));
    color: rgb(var(--color-bg-1));
    border-radius: 0.33rem;

    &:hover {
      text-decoration: underline;
      text-decoration-color: rgb(var(--color-theme-2));

    svg {
      transform: translate(5px);
      }
    }

    &:active {
      background: rgb(var(--color-theme-2));
    }
  }
}
</style>