<script>
  export let headings = [];
</script>

<nav>
  <ul>
    {#each headings as { level, text, id }}
      <li class="heading-{level}">
        <a href={"#" + id}>{text}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    font-family: 'Fira Code', monospace;
  }
  .heading-H1 { font-weight: bold; }
  .heading-H2 { padding-left: 10px; }
  .heading-H3 { padding-left: 20px; font-size: 0.9em; }
</style>
