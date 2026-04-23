<style>
footer {
    width: 100%;
    background: #f4faff;
    padding: 2rem 1rem;
    margin-top: 2rem;
    border-top: 1px solid #ddd;
}

.footer-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    text-align: left;
}

footer h3 {
    font-family: "Rubik Dirt", system-ui;
    color: #111;
    margin-bottom: 0.5rem;
}

footer p, footer a {
    color: #333;
    font-size: 0.85rem;
    margin: 0.3rem 0;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

.map-container {
    width: 100%;
    height: 180px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ccc;
}

footer .bottom {
    text-align: center;
    margin-top: 2rem;
    font-family: "Rubik Dirt", system-ui;
    color: #111;
    font-size: 0.8rem;
}
</style>

<footer>
    <div class="footer-grid">

        <!-- Contact Info -->
        <div>
            <h3>Contact Us</h3>
            <p>CS6 Tool & Machine Hire</p>
            <p>123 Industrial Lane</p>
            <p>Dublin 8, Ireland</p>
            <p>Phone: +353 01 555 9823</p>
            <p>Email: support@cs6hire.ie</p>
        </div>

        <!-- Opening Hours -->
        <div>
            <h3>Opening Hours</h3>
            <p>Mon–Fri: 08:00 – 18:00</p>
            <p>Saturday: 09:00 – 16:00</p>
            <p>Sunday: Closed</p>
        </div>

        <!-- Google Maps -->
             <div>
            <h3>Find Us</h3>
            <div class="map-container">
                <iframe
                    width="100%"
                    height="100%"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.690648299705!2d-6.286651!3d53.341923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c2f1f0b0c0f%3A0x9c2b95d823a58f38!2sGuinness%20Storehouse!5e0!3m2!1sen!2sie!4v0000000000">
                </iframe>
            </div>
        </div>

    </div>

    <p class="bottom">CS6 &copy; 2024</p>
</footer>
