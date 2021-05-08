<script lang="ts">
  import { clickOutside } from "../../util/clickOutside";
  import Icon from "./Icon.svelte";
  import MenuItem from "./MenuItem.svelte";

  let shown: boolean = false;
  const routes = [
    {
      title: "Squadrons",
      to: "/",
    },
    {
      title: "Factions",
      to: "/faction",
    },
    {
      title: "Aircraft",
      to: "/aircraft",
    },
    // {
    //   title: "Squadrons",
    //   to: "/",
    // },
  ];

  const close = () => {
    shown = false;
  };
  // document.addEventListener('click', () => {
  //   shown = false;
  // })
</script>

<div use:clickOutside on:click_outside={close}>
  <!-- <button on:click={() => (shown = !shown)}>menu</button> -->
  <Icon on:click={() => (shown = !shown)} open={shown} />
  <menu class:shown>
    <h1>TINYPLANES</h1>
    <ul on:click={close}>
      {#each routes as { title, to }}
        <MenuItem {to} {title} />
      {/each}
    </ul>
  </menu>
</div>

<style>
  h1 {
    padding: 0 1rem;
    font-weight: lighter;
  }

  div {
    position: relative;
    width: 0;
    height: 100%;
  }
  menu {
    padding: 0;
    margin: 0;
    background-color: var(--light);
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100vw;
    transition: .6s ease-out;
  }

  menu.shown {
    left: 0;
  }

  ul {
    padding: 10px;
    list-style: none;
  }
</style>
