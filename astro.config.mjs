// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '雹',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/aistra0528/Hail' }],
			sidebar: [
				{
					label: '使用指南',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'README', slug: 'guides/readme' },
					],
				},
			],
		}),
	],
});
