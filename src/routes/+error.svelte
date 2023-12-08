<script>
  import { page } from "$app/stores";
</script>

<div class="error">
  <h1>{$page.status}</h1>
  <h2>{$page.error?.message}</h2>
</div>

<style lang="scss">
  .error {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
  }
</style>
