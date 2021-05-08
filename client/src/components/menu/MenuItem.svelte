<script lang="ts">
  export let to: string;
  export let title: string;
</script>

<li>
  <a href={`/#${to}`}>{title}</a>
</li>

<style>
  a {
    color: var(--text);
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }

  li {
    padding: 5px 0;
    transition: .3s ease-out;
  }
  
  li:not(:last-child) {
    border-bottom: 1px solid var(--bg);
  }
  
  li:hover {
    background-color: var(--accent);
    padding: 5px;
  }
</style>