<script>
    import { onMount } from "svelte";
  
    let fadeAmount = 1; // Initial opacity for the gradient
    let scrollListener;
  
    // Add scroll listener on mount
    onMount(() => {
      scrollListener = () => {
        const scrollTop = window.scrollY;
        const fadePoint = 500; // Adjust how quickly the fade happens
        fadeAmount = Math.max(1 - scrollTop / fadePoint, 0);
      };
  
      window.addEventListener("scroll", scrollListener);
  
      // Cleanup scroll listener
      return () => {
        window.removeEventListener("scroll", scrollListener);
      };
    });
  </script>
  
  <style>
    .fade-content-wrapper {
      display: flex;
      flex: 1;
      position: relative;
      overflow: hidden; /* Prevent overflow issues */
      background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, var(--fade-opacity)) 0%,
          rgba(38, 38, 38, 0.5) 70%,
          #262626 100%
        ),
        url('/src/assets/old-god-mordekaiser-greyscale.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
    }
  </style>
  
  <div
    class="fade-content-wrapper"
    style="--fade-opacity: {fadeAmount}"
  >
    <slot></slot>
  </div>
  