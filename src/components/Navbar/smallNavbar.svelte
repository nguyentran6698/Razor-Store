<script>
  // cart button
  import CartButton from "../Cart/CartButton.svelte";
  //global store
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
</script>

<nav class="navbar">
  <div class="nav-center">
    <!-- sidebar toggle -->
    <button
      class="btn-sidebar-toggle"
      on:click={() => {
        globalStore.toggleItem("sidebar", true);
      }}
    >
      <i class="fas fa-bars" />
    </button>
    <!-- logo -->
    <a href="/" class="nav-logo" use:link>
      <img src="/assets/images/logo.svg" class="logo" alt="razor logo" />
    </a>
    <!-- cart button -->
    <CartButton />
  </div>
</nav>
