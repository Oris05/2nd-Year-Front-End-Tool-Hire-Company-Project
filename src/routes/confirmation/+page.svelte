<script>
    import { page } from '$app/stores';

    // Get query params from URL
    let params = $derived($page.url.searchParams);

    const date = $derived(params.get("date"));
    const days = $derived(params.get("days"));
    const time = $derived(params.get("time"));
    const name = $derived(params.get("name"));
    const address = $derived(params.get("address"));

    // Generate random reservation number
    function generateReservationNumber() {
        return "RES-" + Math.floor(100000 + Math.random() * 900000);
    }

    const reservationNumber = generateReservationNumber();
</script>

<div class="confirmation-page">
    <div class="card">
        <h1> Reservation Confirmed</h1>

        <p class="subtitle">
            Thank you, {name || "Customer"}! Your booking has been successfully placed.
        </p>

        <div class="reservation-number">
            <span>Reservation Number</span>
            <strong>{reservationNumber}</strong>
        </div>

        <div class="details">
            <h2>Booking Details</h2>

            <div class="grid">
                <div>
                    <label>Date</label>
                    <p>{date}</p>
                </div>

                <div>
                    <label>Days</label>
                    <p>{days}</p>
                </div>

                <div>
                    <label>Pick-up Time</label>
                    <p>{time}</p>
                </div>

                <div>
                    <label>Name</label>
                    <p>{name}</p>
                </div>

                <div class="full">
                    <label>Address</label>
                    <p>{address}</p>
                </div>
            </div>
        </div>

        <a href="/products" class="back-btn">← Back to Products</a>
    </div>
</div>

<style>
.confirmation-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f0f6ff, #e6f0ff);
    font-family: "Inter", sans-serif;
    padding: 2rem;
}

.card {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    max-width: 600px;
    width: 100%;
    text-align: center;
}

h1 {
    font-family: "Archivo Black", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #0077cc;
}

.subtitle {
    color: #555;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.reservation-number {
    background: #f4faff;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.reservation-number span {
    display: block;
    font-size: 0.9rem;
    color: #777;
}

.reservation-number strong {
    font-size: 1.8rem;
    color: #0077cc;
    letter-spacing: 1px;
}

.details {
    text-align: left;
    margin-bottom: 2rem;
}

.details h2 {
    font-family: "Archivo Black", sans-serif;
    margin-bottom: 1rem;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.grid div {
    background: #fafafa;
    padding: 0.8rem;
    border-radius: 8px;
}

.grid .full {
    grid-column: span 2;
}

label {
    font-size: 0.8rem;
    color: #888;
}

p {
    margin: 0.2rem 0 0;
    font-weight: 500;
}

.back-btn {
    display: inline-block;
    margin-top: 1rem;
    text-decoration: none;
    background: #0077cc;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.2s;
}

.back-btn:hover {
    background: #005fa3;
}
</style>