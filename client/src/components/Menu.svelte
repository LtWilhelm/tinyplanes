<script lang="ts">
  let shown: boolean = false;
</script>

<menu class:shown>

</menu>

<style>
  menu {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -25vw;
    transition: .3s;
  }
  
  menu.shown {
    left: 0;
  }
</style>