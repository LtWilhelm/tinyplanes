<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let open: boolean;

  const dispatch = createEventDispatcher();
  const click = dispatch("click");

  let hover: boolean = false;

  const handleMouseEnter = () => (hover = true);
  const handleMouseLeave = () => (hover = false);
</script>

<div
  class:hover
  class:open
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:click
>
  <!-- <span class="line-1" />
<span class="line-2" />
<span class="line-3" /> -->
  <span class="wrapper-1"><span class="line-1" /></span>
  <span class="wrapper-2"><span class="line-2" /></span>
  <span class="wrapper-3"><span class="line-3" /></span>
</div>

<style>
  div {
    margin: 10px;
    display: flex;
    flex-direction: column;
    width: 3rem;
    height: 3rem;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }

  span span {
    display: block;
  }

  .line-1,
  .line-2,
  .line-3 {
    margin: auto;
    width: 70%;
    background-color: var(--lighter);
    height: 4px;
    box-shadow: 0 1px 3px var(--bg) inset;
  }

  div.hover .line-1 {
    animation: grow 0.3s ease-out 0ms forwards;
  }
  div.hover .line-2 {
    animation: grow 0.3s ease-out 100ms forwards;
  }
  div.hover .line-3 {
    animation: grow 0.3s ease-out 200ms forwards;
  }
  div:not(.hover) .line-1 {
    animation: shrink 0.3s ease-out 0ms forwards;
  }
  div:not(.hover) .line-2 {
    animation: shrink 0.3s ease-out 100ms forwards;
  }
  div:not(.hover) .line-3 {
    animation: shrink 0.3s ease-out 200ms forwards;
  }

  .wrapper-1,
  .wrapper-2,
  .wrapper-3 {
    width: 100%;
  }

  div.open .wrapper-1 {
    animation: leave 0.3s ease-out 0ms forwards;
  }
  div.open .wrapper-2 {
    animation: leave 0.3s ease-out 100ms forwards;
  }
  div.open .wrapper-3 {
    animation: leave 0.3s ease-out 200ms forwards;
  }
  div:not(.open) .wrapper-1 {
    animation: return 0.3s ease-out 0ms forwards;
  }
  div:not(.open) .wrapper-2 {
    animation: return 0.3s ease-out 100ms forwards;
  }
  div:not(.open) .wrapper-3 {
    animation: return 0.3s ease-out 200ms forwards;
  }

  @keyframes grow {
    0% {
      height: 4px;
      width: 70%;
    }
    60% {
      height: 6px;
      width: 80%;
    }
    100% {
      height: 5px;
      width: 75%;
    }
  }
  @keyframes shrink {
    0% {
      height: 5px;
      width: 75%;
    }
    40% {
      height: 3px;
      width: 65%;
    }
    100% {
      height: 4px;
      width: 70%;
    }
  }
  @keyframes leave {
    from {
      transform: translate(0);
      opacity: 1;
    }
    to {
      transform: translate(200px);
      opacity: 0;
      display: none;
    }
  }
  @keyframes return {
    from {
      transform: translate(200px);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
</style>
