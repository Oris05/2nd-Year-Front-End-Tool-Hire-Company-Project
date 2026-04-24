<script>
    const { title, text, image } = $props();
</script>

<div class="card">
    {#if image}
        <img class="card-img" src={image} alt={title} />
    {/if}

    <div class="card-body">
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
</div>

<style>
.card {
    background: #f4faff;
    border: 1px solid #ddd;
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Hover effect (professional, subtle) */
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}

.card-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card-body {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.card-body h3 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2rem;
    margin: 0;
     color: #333;
     font-weight: normal;
}

.card-body p {
    font-size: 1.05rem;
    color: #333;
    line-height: 1.5;
    margin: 0;
}
</style>
