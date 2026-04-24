// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ fetch }) {
    const res = await fetch('http://localhost:3000/products');
    const products = await res.json();
    return { products };
}
