<script lang="ts">
import type { aceAbility } from "../../models/pilot";


  export let aceAbility: aceAbility;
  export let pic: string;
</script>

<card>
  <img src={pic || "/img/not-found.jpg"} alt="" />
  <br />
  <small><strong>{aceAbility.faction.toUpperCase()} PILOT</strong></small>
  <title><h3>ACE ABILITY</h3></title>
  <h3>{aceAbility.name}</h3>
  <p>{aceAbility.description}</p>
</card>

<style>
  card {
    display: block;
    aspect-ratio: 39/56;
    text-align: center;
    width: var(--small-width);
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
