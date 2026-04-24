<script>
    const { data } = $props();
    const product = $derived(data.product);

    // Simulated login state — replace with your real auth
    const user = data.user; // null if not logged in

    let reservation = {
        date: "",
        days: 1,
        time: "",
        name: "",
        address: ""
    };

    function submitReservation() {
        if (!user) {
            alert("Please log in to hire this item.");
            return;
        }

        const confirmed = confirm(
            `Confirm reservation for ${product.title}?\n\n` +
            `Date: ${reservation.date}\n` +
            `Days: ${reservation.days}\n` +
            `Time: ${reservation.time}\n` +
            `Name: ${reservation.name}\n` +
            `Address: ${reservation.address}`
        );

        if (confirmed) {
            // Redirect to confirmation page
            window.location.href = `/confirmation?item=${product.id}`;
        }
    }
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

    <!-- RESERVATION FORM -->
    <section class="reservation-box">
        <h2>Reserve This Item</h2>

        {#if !user}
            <p class="login-warning">You must be logged in to reserve this item.</p>
        {:else}
            <form on:submit|preventDefault={submitReservation}>
                <label>
                    Pick-up Date
                    <input type="date" bind:value={reservation.date} required />
                </label>

                <label>
                    Number of Days
                    <input type="number" min="1" bind:value={reservation.days} required />
                </label>

                <label>
                    Pick-up Time
                    <input type="time" bind:value={reservation.time} required />
                </label>

                <label>
                    Full Name
                    <input type="text" bind:value={reservation.name} required />
                </label>

                <label>
                    Address
                    <textarea bind:value={reservation.address} required></textarea>
                </label>

                <button type="submit" class="reserve-btn">Reserve Now</button>
            </form>
        {/if}
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

/* RESERVATION FORM STYLING */
.reservation-box {
    background: #ffffff;
    padding: 1.8rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    margin-bottom: 2rem;
}

.reservation-box h2 {
    font-family: "Archivo Black", sans-serif;
    margin-bottom: 1rem;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
}

input, textarea {
    padding: 0.7rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
}

textarea {
    min-height: 80px;
}

.reserve-btn {
    background: #0077cc;
    color: white;
    padding: 0.9rem;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.2s;
}

.reserve-btn:hover {
    background: #005fa3;
}

.login-warning {
    color: red;
    font-weight: bold;
    text-align: center;
}

.back {
    display: inline-block;
    margin-top: 1rem;
    text-decoration: none;
    color: #0077cc;
    font-weight: bold;
}
</style>
