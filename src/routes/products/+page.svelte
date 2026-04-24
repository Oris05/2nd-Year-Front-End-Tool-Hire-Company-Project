<script>
    import Card from "$lib/components/Card.svelte";

    // Runes mode: receive data from +page.js
    const { data } = $props();
    const products = $derived(data.products);
</script>

<h2>SELECT YOUR TOOL or MACHINE!</h2>

<div class="card-grid">
    {#each products as item}
        <a href={`/products/${item.id}`} class="card-link">
            <Card {...item} />
        </a>
    {/each}
</div>

<style>
.card-link {
    text-decoration: none;
    color: inherit;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

h2 {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 5rem;
    text-align: center;
    margin: 0;
}
</style>
