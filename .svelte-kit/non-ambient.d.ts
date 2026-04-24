
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/login" | "/logout" | "/products" | "/products/[id]" | "/register" | "/resetdatabase";
		RouteParams(): {
			"/products/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/login": Record<string, never>;
			"/logout": Record<string, never>;
			"/products": { id?: string };
			"/products/[id]": { id: string };
			"/register": Record<string, never>;
			"/resetdatabase": Record<string, never>
		};
		Pathname(): "/" | "/login" | "/logout" | "/products" | `/products/${string}` & {} | "/register" | "/resetdatabase";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/1.jpg" | "/images/2.jpg" | "/images/3.jpg" | "/images/b1.jpg" | "/images/cut.jpg" | "/images/ex2.jpg" | "/images/grind.jpg" | "/images/h1.jpg" | "/images/l1.jpg" | "/images/l2.jpg" | "/images/mix-s.jpg" | "/images/mix-xl.jpg" | "/images/mix_l.jpg" | "/images/saw.jpg" | "/images/skibka-excavator-4754266.jpg" | "/images/x1.jpg" | "/images/x2.jpg" | "/robots.txt" | string & {};
	}
}