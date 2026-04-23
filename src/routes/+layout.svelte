<script>
	import favicon from '$lib/assets/favicon.svg';
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	
	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>



<header>
    <div class="top">
        <h2>CS6 - Tool and Machine Hire Company -</h2>

        <div class="status">
            {#if data.isLoggedIn}
                <span>You are logged in as: <strong>{data.user.name}</strong></span>
                <form method="post" action="/logout">
                    <button type="submit">Logout</button>
                </form>
            {:else}
                <p>You are not logged in - please <a href="/login">login</a></p>
            {/if}
        </div>
    </div>

    <div class="nav-row">
        <Nav isLoggedIn={data.isLoggedIn} />

    </div>
</header>


<main>
	{@render children()}
</main>

<Footer />


<style>

@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&display=swap');

header {
    background: #f4faff;
    padding: 0.8rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 10;
    position: relative;
	font-size: 1.15rem; 
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.status {
    display: flex;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;
}

.nav-row {
    display: flex;
    justify-content: center;
}

h2 {
 font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}


</style>
