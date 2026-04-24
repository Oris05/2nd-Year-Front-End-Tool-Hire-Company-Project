<script>
	let { data } = $props();
</script>

<section class="history-grid">

    <!-- Block 1 — Text -->
    <div class="box text">
        <h2>Company Growth</h2>
        <p>
            Since its establishment in 1994, CS6 Tool & Machine Hire has demonstrated 
            consistent and sustainable growth across all key performance areas. Annual 
            demand for equipment hire has steadily increased, supported by a strong base 
            of returning customers and long-term commercial clients. Internal metrics 
            indicate rising utilisation rates and improved operational output year after year, 
            positioning the company as a stable and expanding force within the industry.
        </p>
    </div>

    <!-- Block 2 — Image -->
    <div class="box image">
        <img src="/images/pr1.jpg" alt="Growth chart or machinery" />
    </div>

    <!-- Block 3 — Image -->
    <div class="box image">
        <img src="/images/pr2.jpg" alt="Equipment fleet" />
    </div>

    <!-- Block 4 — Text -->
    <div class="box text">
        <h2>Customer Success</h2>
        <p>
            Customer satisfaction remains at the core of CS6 operations. Feedback and 
            performance indicators consistently highlight high approval ratings across 
            reliability, equipment quality, and service responsiveness. A significant 
            portion of new business is driven by referrals, reflecting strong trust 
            and reputation within the market. Continued focus on service excellence 
            ensures long-term relationships and repeat engagement.
        </p>
    </div>

    <!-- Block 5 — Text -->
    <div class="box text">
        <h2>Future Development</h2>
        <p>
            Looking forward, CS6 Tool & Machine Hire is committed to innovation and 
            strategic expansion. Planned investments include modernising the equipment 
            fleet, integrating digital booking systems, and improving operational 
            efficiency through new technologies. With a clear growth strategy and a 
            focus on sustainability, the company is well positioned to meet increasing 
            industry demand and maintain its competitive advantage.
        </p>
    </div>

    <!-- Block 6 — Image -->
    <div class="box image">
       <img src="/images/pr3.jpg" alt="Future machinery or site work" />
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

.box {
    height: 420px;
    border-radius: 10px;
    background: #f4faff;
    border: 1px solid #ddd;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

/* TEXT */
.box.text {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.box.text h2 {
    font-family: "Bebas Neue", sans-serif;
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1.8rem;
}

.box.text p {
    color: #333;
    line-height: 1.6;
    overflow-y: auto;
    font-size: 1.1rem;
}

/* IMAGES */
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
    object-fit: cover;
    display: block;
    border-radius: 10px;
}
h2{
     font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>