<script lang="ts">
  import type { AircraftUpgrade } from "../../models/upgrade";

  export let upgrade: AircraftUpgrade;
  export let pic: string;
</script>

<card>
  <img src={pic || "/img/not-found.jpg"} alt="" />
  <br />
  <title><h3>{upgrade.name}</h3></title>
  <p>{upgrade.description}</p>
</card>

<style>
  card {
    display: block;
    aspect-ratio: 56/39;
    text-align: center;
    height: var(--small-width);
    padding: 1rem 0;
    background-color: var(--lighter);
    border-radius: 1rem;
  }

  img {
    max-height: 100px;
  }

  title {
    width: 100%;
    display: block;
    background-color: var(--accent);
  }

  h3 {
    background-color: var(--lighter);
    width: max-content;
    /* height: 100%; */
    margin: 0 auto;
    padding: 0 0.5em;
    font-weight: bold;
  }

  h3:nth-of-type(2) {
    margin-top: .5rem;
  }

  card * {
    color: black;
  }

  p {
    margin: 0 1rem;
  }
</style>