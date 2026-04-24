<script>
    import { enhance } from '$app/forms';
    let { form } = $props();
</script>

<div class="login-container">
    <h1>Login</h1>

    <form method="post" use:enhance class="login-form">
        <label>
            Email
            <input type="email" name="email" required />
        </label>

        <label>
            Password
            <input type="password" name="password" required />
        </label>

        <button class="login-btn">Login</button>
    </form>

    {#if form?.message}
        <p class="error">{form.message}</p>
    {/if}

    <p class="register-text">
        Don't have an account? <a href="/register">Register</a>
    </p>
</div>

<style>
/* Page layout */
.login-container {
    max-width: 420px;
    margin: 4rem auto;
    padding: 2.5rem;
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
    font-family: "Inter", sans-serif;
    text-align: center;
}

/* Title */
h1 {
    font-family: "Archivo Black", sans-serif;
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
}

/* Form layout */
.login-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    text-align: left;
}

/* Labels */
label {
    font-weight: 600;
    font-size: 1.05rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

/* Inputs */
input {
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    transition: border 0.2s;
}

input:focus {
    border-color: #0077cc;
    outline: none;
}

/* Button */
.login-btn {
    margin-top: 0.5rem;
    padding: 0.9rem;
    background: #0077cc;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.2s;
}

.login-btn:hover {
    background: #005fa3;
}

/* Error message */
.error {
    color: red;
    font-weight: bold;
    margin-top: 1rem;
}

/* Register link */
.register-text {
    margin-top: 1.5rem;
    font-size: 1rem;
}

.register-text a {
    color: #0077cc;
    font-weight: bold;
    text-decoration: none;
}

.register-text a:hover {
    text-decoration: underline;
}
</style>
