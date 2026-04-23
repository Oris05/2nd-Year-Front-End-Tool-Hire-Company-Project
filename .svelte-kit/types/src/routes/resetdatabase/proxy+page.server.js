// @ts-nocheck
import { resetDatabase } from '$lib/server/seed.js';
import { auth } from '$lib/server/auth.js';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export const load = async (event) => {
	if (event.locals.user) {
		await auth.api.signOut({ headers: event.request.headers });
	}

	const users = await resetDatabase();

	// Override the layout's user data so the header shows "not logged in"
	// on this same render, since the session cookie is now cleared.
	return { users, isLoggedIn: false, user: undefined };
};
