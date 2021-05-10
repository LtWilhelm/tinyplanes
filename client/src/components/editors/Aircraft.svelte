<script lang="ts">
  import { Aircraft, aircraftClass } from "../../models/aircraft";
  import { fireArc, getArc } from "../../models/weapon";

  export let aircraft: Aircraft = new Aircraft();
  aircraft = {
    ...aircraft,
    name: "DAKKAJET",
    points: 16,
    weapons: [
      {
        name: "Quad Big Shootas",
        arc: [fireArc.front],
        firepower: {
          short: 8,
          medium: 4,
          long: 0,
        },
        damage: 5,
        ammo: "UL",
        special: [""],
      },
    ],
  };
</script>

<card>
  <header>
    <title>
      <h1>{aircraft.name}</h1>
      <span>Class: {aircraft.class}</span>
    </title>
    <points>
      <h1>{aircraft.points}</h1>
      <small>POINTS</small>
    </points>
  </header>
  <card-body>
    <img src={aircraft.img || "/img/not-found.jpg"} alt={aircraft.name} />

    <stats>
      <column>
        <ul class="labels">
          <li>STRUCTURE</li>
          <li>TRANSPORT</li>
          <li>FUEL</li>
        </ul>
        <ul class="values">
          <li>{aircraft.structure}</li>
          <li>{aircraft.transport ?? "-"}</li>
          <li>{aircraft.fuel ?? "-"}</li>
        </ul>
      </column>
      <column>
        <ul class="labels">
          <li>THROTTLE</li>
          <li>ACE MANOUVRES</li>
          <li>HANDLING</li>
        </ul>
        <ul class="values">
          <li>{aircraft.throttle}</li>
          <li>
            {aircraft.aceManouvres[0] || 1} - {aircraft.aceManouvres[1] || 8}
          </li>
          <li>{aircraft.handling}+</li>
        </ul>
      </column>
      <column>
        <ul class="labels">
          <li>MIN SPEED</li>
          <li>MAX SPEED</li>
          <li>MAX ALTITUDE</li>
        </ul>
        <ul class="values">
          <li>{aircraft.minSpeed}</li>
          <li>{aircraft.maxSpeed}</li>
          <li>{aircraft.maxAltitude}</li>
        </ul>
      </column>
    </stats>

    {#if aircraft.weapons.length}
      <table>
        <thead>
          <tr>
            <th>WEAPON</th>
            <th>FIRE ARC</th>
            <th>FPR</th>
            <th>DMG</th>
            <th>AMMO</th>
            <th>SPECIAL</th>
          </tr>
        </thead>
        <tbody>
          {#each aircraft.weapons as weapon}
            <tr>
              <td>{weapon.name}</td>
              <td>{weapon.arc.map((a) => getArc(a)).join(", ")}</td>
              <td
                >{weapon.firepower.short}-{weapon.firepower.medium}-{weapon
                  .firepower.long}</td
              >
              <td>{weapon.damage}</td>
              <td>{weapon.ammo}</td>
              <td>{weapon.special.join(", ") || "-"}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </card-body>
  <upgrades>
    <small class="extras">Aircraft Upgrades</small>
  </upgrades>
  <weapons>
    <small class="extras">Additional Weapons</small>
  </weapons>
  <pilot>
    <small class="extras">Pilot</small>
  </pilot>
  <crew>
    <small class="extras">Crew</small>
  </crew>
</card>

<style>
  card {
    background-color: var(--lighter);
    position: relative;
    display: block;
    padding: 1rem 0;
    border-radius: 1rem;
    aspect-ratio: 56/39;
    width: 700px;
    margin: 3rem auto;
    box-shadow: 5px 5px 10px #222;
  }

  upgrades {
    position: absolute;
    display: flex;
    align-items: center;
    top: 2rem;
    bottom: 2rem;
    left: 0;
    width: 1rem;
    border: 1px var(--light);
    border-style: solid solid solid none;
  }
  weapons {
    position: absolute;
    display: flex;
    align-items: center;
    top: 2rem;
    bottom: 2rem;
    right: 0;
    width: 1rem;
    border: 1px var(--light);
    border-style: solid none solid solid;
  }

  pilot {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 0;
    left: 2rem;
    right: calc(50% + 1rem);
    border: 1px var(--light);
    border-style: solid solid none solid;
  }
  crew {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 0;
    right: 2rem;
    left: calc(50% + 1rem);
    border: 1px var(--light);
    border-style: solid solid none solid;
  }

  pilot small, crew small {
    transform: translateY(-.5rem);
  }

  small.extras {
    padding: 0 1rem;
    color: var(--light);
    white-space: nowrap;
    font-style: italic;
    background-color: var(--lighter);
  }

  upgrades small {
    transform: rotate(90deg) translatey(4rem);
  }
  weapons small {
    transform: rotate(-90deg) translatey(-5.5rem);
  }

  card * {
    font-weight: normal;
  }

  header {
    display: flex;
    height: 75px;
    align-items: center;
  }

  title {
    display: block;
    background-color: var(--accent);
    padding-left: 1rem;
    flex: 1;
    z-index: 1;
  }

  h1 {
    margin: 0;
    padding: 5px 0 0;
    font-weight: bold;
  }
  points h1 {
    line-height: 0.9em;
  }
  points small {
    font-size: 10px;
    font-weight: bold;
  }

  points,
  points::after {
    border-radius: 50%;
    border: solid var(--accent);
  }

  points {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin: 0 1rem;
    aspect-ratio: 1/1;
    height: 100%;
    text-align: center;
    color: black;
    position: relative;
    border-width: 3px;
  }

  points::after {
    content: "";
    position: absolute;
    /* z-index: -1; */
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-width: 2px;
  }

  card-body {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  img {
    max-height: 150px;
  }

  stats {
    display: flex;
    flex-basis: 100%;
    justify-content: center;
  }

  column {
    display: flex;
    margin: 1rem;
    flex-basis: 25%;
  }

  ul {
    list-style: none;
    width: max-content;
    margin: 0;
    padding: 5px 0 0;
  }
  li {
    font-weight: bold;
  }

  ul.labels {
    text-align: right;
    background-color: var(--accent);
    flex: 1;
    padding: 5px 5px 0;
  }
  ul.values {
    padding-left: 10px;
    color: black;
  }

  table {
    width: 90%;
    border-collapse: collapse;
    margin-bottom: 1rem;
  }

  /* table, table * {
    border: none;
  } */

  thead {
    background-color: var(--accent);
  }
  th {
    font-weight: bold;
    padding: 5px 0 0;
  }
  td {
    padding: 5px 0 0;
    color: black;
    text-align: center;
    font-size: small;
  }
</style>
