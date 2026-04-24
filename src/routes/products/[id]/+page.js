/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { items } = await import('../items.js');

    const product = items.find((p) => p.id === params.id);

    if (!product) {
        return {
            status: 404,
            error: new Error("Product not found")
        };
    }

    return { product };
}
