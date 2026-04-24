<style>
    nav {
        display: flex;
        justify-content: center;
        padding: 0.8rem 0;
        font-family: "Rubik Dirt", system-ui;
        font-size: 1.15rem; 
        position: relative;
        z-index: 10;
    }

    nav ul {
        display: flex;
        gap: 2rem;
        margin: 0;
        padding: 0;
    }

    nav li {
        list-style: none;
    }

    nav a {
        text-decoration: none;
        color: #111;
        font-weight: 500;
        transition: opacity 0.2s ease;
    }

    nav a:hover {
        opacity: 0.6;
    }
    
</style>
<script>
    const { isLoggedIn, user } = $props();
</script>

<nav>
    <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/products">PRODUCTS</a></li>
         {#if isLoggedIn && user?.name === 'admin'}
        <a href="/stats">STATS PANEL</a>
        {/if}

        {#if !isLoggedIn}
            <li><a href="/register">REGISTER</a></li>
        {/if}
    </ul>
</nav>
