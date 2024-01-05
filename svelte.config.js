import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		projects: 'src/routes/projects/__layout.svelte',
		_: 'src/routes/+layout.svelte'
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: ['.svelte', '.md'],

	kit: {
		alias: {
			'$components': 'src/components',
		},
		adapter: adapter()
	},
};

export default config;
