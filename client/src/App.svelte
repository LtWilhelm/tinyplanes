<script lang="ts">
import Menu from "./components/menu/Menu.svelte";
import Router from 'svelte-spa-router';
import routes from './routes';

</script>

<div>
  <Menu />
  <main>
    <Router {routes} />
  </main>
</div>


<style>
  div {
    display: flex;
    height: 100vh;
  }
  main {
    width: 100vw;
    height: 100vh;
    /* padding: 3rem 2rem 0; */
    margin: 3rem 0;
  }
</style>