<script>
  import links from "../../constant/links.js";
  import { link } from "svelte-routing";
  import CartButton from "../Cart/CartButton.svelte";
  import LoginLink from "../LoginLink.svelte";
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <!-- nav links -->
      <ul class="nav-links">
        {#each links as navLink}
          <li>
            <a href={navLink.url} use:link>{navLink.text}</a>
          </li>
        {/each}
      </ul>
      <!-- nav logo -->
      <a href="/" use:link class="nav-logo">
        <img src="/assets/images/logo.svg" class="logo" alt="razor logo" />
      </a>
      <!-- cart toggle -->
      <div class="nav-aside">
        <LoginLink />
        <CartButton />
      </div>
    </div>
  </div>
</nav>
