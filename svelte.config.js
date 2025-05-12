import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		adapter: adapter(),
    
		// Enable hash-based routing
		paths: {
			base: ''
		},
		trailingSlash: 'never',
		prerender: {
			handleMissingId: 'ignore'
		},
		version: {
			name: Date.now().toString()
		},
		alias: {
			'$components': './src/components',
			'$stores': './src/stores',
			'$utils': './src/utils'
		},
		appDir: 'internal',
		// Use hash-based routing
		router: {
			mode: 'hash'
		}
	}
};

export default config;