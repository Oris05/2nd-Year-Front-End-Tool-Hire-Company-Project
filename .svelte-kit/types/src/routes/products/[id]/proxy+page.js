// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params, fetch }) {
    const res = await fetch(`http://localhost:3000/products/${params.id}`);

    if (!res.ok) {
        return {
            status: 404,
            error: new Error("Product not found")
        };
    }

    const product = await res.json();
    return { product };
}
