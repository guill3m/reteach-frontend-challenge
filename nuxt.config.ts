// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	// ssr: false,
	routeRules: {
		'/gallery': { swr: true }, // Generated on demand, revalidates in the background and it is cached until the API response changes
	},
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			title: 'Frontend Coding Challenge',
		},
	},
	nitro: {
		storage: {
			storage: {
				driver: 'fs',
				base: './storage',
			},
		},
	},
});
