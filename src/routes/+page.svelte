<script>
	let { data } = $props();
</script>


<section class="history-grid">

    <!-- Block 1 — Text -->
    <div class="box text">
        <h2>Our Company History</h2>
        <p>
            Founded in 1994, CS6 Tool & Machine Hire has grown from a small local supplier 
            into a trusted provider of high‑quality construction tools and machinery. 
            We focus on reliability, safety, and exceptional customer service.
        </p>
    </div>

    <!-- Block 2 — Image placeholder -->
    <div class="box image placeholder">
        <p>Image 1</p>
    </div>

    <!-- Block 3 — Image placeholder -->
    <div class="box image placeholder">
        <p>Image 2</p>
    </div>

    <!-- Block 4 — Text -->
    <div class="box text">
        <h2>Our Mission</h2>
        <p>
            We aim to support builders, engineers, and DIY specialists with dependable 
            equipment that gets the job done. Quality tools, fair pricing, and 
            professional support define our mission.
        </p>
    </div>

    <!-- Block 5 — Text -->
    <div class="box text">
        <h2>Why Choose Us</h2>
        <p>
            With decades of experience, a wide equipment range, and a commitment to 
            customer satisfaction, CS6 remains a leading choice for tool and machine hire.
        </p>
    </div>

    <!-- Block 6 — Image placeholder -->
    <div class="box image placeholder">
        <p>Image 3</p>
    </div>

</section>

<style>
.history-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* always 2 boxes */
    gap: 2rem;
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

@media (max-width: 700px) {
    .history-grid {
        grid-template-columns: 1fr; /* mobile: 1 per row */
    }
}

.box {
    padding: 2rem;
    border-radius: 10px;
    background: #f4faff;
    border: 1px solid #ddd;
    min-height: 260px; /* makes them visually larger */
}

.text h2 {
    font-family: "Rubik Dirt", system-ui;
    margin-bottom: 0.5rem;
    color: #111;
}

.text p {
    color: #333;
    line-height: 1.6;
}

.image.placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e8eef5;
    border: 2px dashed #bbb;
    height: 260px;
}

.image.placeholder p {
    font-family: "Rubik Dirt", system-ui;
    color: #666;
    margin: 0;
}

</style>


