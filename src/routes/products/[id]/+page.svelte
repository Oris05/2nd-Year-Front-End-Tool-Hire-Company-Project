<script>
    const { data } = $props();
    const product = $derived(data.product);
</script>

<div class="product-page">
    <h1>{product.title}</h1>

    <div class="image-wrapper">
        <img src={product.image} alt={product.title} />
    </div>

    <p class="short-desc">{product.text}</p>

    <section class="specs">
        <h2>Technical Specifications</h2>
        <ul>
            <li><strong>Size:</strong> {product.detailed_description.size}</li>
            <li><strong>Engine:</strong> {product.detailed_description.engine}</li>
            <li><strong>Power:</strong> {product.detailed_description.power}</li>
            <li><strong>Usage:</strong> {product.detailed_description.usage}</li>
            <li><strong>Rental Notes:</strong> {product.detailed_description.rental_notes}</li>
        </ul>
    </section>

    <a href="/products" class="back">← Back to Products</a>
</div>

<style>
p {
    text-align: center;
}

.product-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    font-family: "Inter", sans-serif;
}

h1 {
    font-family: "Archivo Black", sans-serif;
    margin-bottom: 1rem;
    font-size: 3rem;
    text-align: center;
}

.image-wrapper {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
}

img {
    width: 100%;
    max-width: 650px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.short-desc {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #444;
}

.specs {
    background: #f4faff;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
}

.specs h2 {
    font-family: "Archivo Black", sans-serif;
    margin-bottom: 1rem;
}

.specs ul {
    list-style: none;
    padding: 0;
}

.specs li {
    margin: 0.4rem 0;
    font-size: 1.1rem;
}

.back {
    display: inline-block;
    margin-top: 1rem;
    text-decoration: none;
    color: #0077cc;
    font-weight: bold;
}
</style>
