<script>
  import { fly } from "svelte/transition";
  import DropDown from "./nav/DropDown.svelte";
  import TopNav from "./nav/TopNav.svelte";

  const features = [
    {
      name: "Safe",
      url: "/Safe",
      icon: "🏠",
      headline: "Secure Storage for the paraniod",
    },
    {
      name: "Vault",
      url: "/Vault",
      icon: "🏦",
      headline: "Secure, manage and share secret",
    },
    {
      name: "Replicate",
      url: "/Replicate",
      icon: "🧬 ",
      headline: "Keep copies of your data",
    },
    {
      name: "Note",
      url: "/Note",
      icon: "📜",
      headline: "Collaborative Note-Taking App",
    },
    {
      name: "Global",
      url: "/Global",
      icon: "🌍",
      headline: "Scale asset accross the globe",
    },
    {
      name: "Serve",
      url: "/Serve",
      icon: "📡",
      headline: "Host your billion dollar project",
    },
  ];
  const show = false;
</script>

<TopNav>
  <h1>lv[zero]</h1>
  <a href="/Docs">Docs</a>
  <DropDown {show}>
    <span slot="header">Features</span>
    <div slot="body" class="body" transition:fly={{ duration: 300 }}>
      {#each features as feature}
        <a href={feature.url} class="feature">
          <div><i>{feature.icon}</i> {feature.name}</div>
          <p>{feature.headline}</p>
        </a>
      {/each}
    </div>
  </DropDown>
  <a href="/Docs">Lorem ipsum dolor sit amet.</a>
  <a href="/Docs">Lorem ipsum dolor sit amet.</a>
  <a href="/Docs">Lorem ipsum dolor sit amet.</a>
</TopNav>

<style>
  .body {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid hsla(0, 0%, 18%, 1);
    padding: 6px;
    border-radius: 8px;
  }
  .feature {
    padding: 12px;
    border-radius: 8px;
    min-width: max-content;
    transition: 0.2s;
    text-decoration: none;
    color: inherit;
  }
  .feature:hover {
    background-color: rgba(126, 126, 126, 0.15);
  }
  .feature i {
    font-size: 18px;
  }
  .feature p {
    color: rgb(161, 161, 161);
    font-size: 14px;
    margin: 8px 0 0 0;
  }
</style>
