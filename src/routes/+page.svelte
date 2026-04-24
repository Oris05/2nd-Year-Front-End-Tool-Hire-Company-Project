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
        <img src="/images/1.jpg" alt="Company history image" />
    </div>

    <!-- Block 3 — Image placeholder -->
    <div class="box image placeholder">
        <img src="/images/2.jpg" alt="Company history image" />
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
       <img src="/images/3.jpg" alt="Company history image" />
    </div>

</section>

<style>
.history-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

@media (max-width: 700px) {
    .history-grid {
        grid-template-columns: 1fr;
    }
}

/* FORCE ALL BOXES TO EXACT SAME SIZE */
.box {
    height: 420px;                 /* <<< FIXED HEIGHT FOR ALL BOXES */
    border-radius: 10px;
    background: #f4faff;
    border: 1px solid #ddd;
    overflow: hidden;              /* prevents text from expanding box */
    display: flex;
    flex-direction: column;
}

/* TEXT BOXES */
.box.text {
    padding-left: 1.5rem;
	padding-right: 1.5rem;
    justify-content: flex-start;
}

.box.text h2 {
    font-family: "Rubik Dirt", system-ui;
    margin-bottom: 0.5rem;
    color: #111;
}

.box.text p {
    color: #333;
    line-height: 1.6;
    overflow-y: auto;  
	font-size: 1.15rem;             /* scroll if text is too long */
}

/* IMAGE BOXES */
.box.image {
    padding: 0;
    background: #e8eef5;
    border: 1px solid #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;             /* keeps image inside box */
    display: block;
    border-radius: 10px;
}

h2{
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>


