<script>
  export let label = "Click Me!";
</script>

<button on:click={() => alert('Button clicked!')}>
  {label}
</button>
