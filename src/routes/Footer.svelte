<script lang="ts">
</script>

<footer>
  <div class="sun"></div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    background: linear-gradient(to top, var(--color-theme-2) 2.5%, var(--color-theme-3) 25%, transparent 75%), fixed;
    padding: 1rem;

    a {
      font-weight: bold;
    }
	}

  .sun {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color:yellow;
  background-image: linear-gradient(red,yellow),linear-gradient(black,white);
  clip-path:polygon(-50% 0px,150% -50%,150% 55%,-50% 55%,
    -50% 62%,150% 62%,150% 70%,0 70%,
    -50% 75%,150% 75%,150% 80%,0 80%,
    -50% 82%,150% 82%,150% 85%,0 85%,
    -50% 87%,150% 87%,150% 90%,0 90%,
    -50% 92%,150% 92%,150% 95%,0 95%,
    -50% 96%,150% 96%,150% 150%,0 150%);
  box-shadow: rgba(255,128,0,0.7) 0px 0 5px;
  opacity: 0.9;
}
</style>