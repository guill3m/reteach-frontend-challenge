<template>
	<section>
		<h1>SSR vs SPA</h1>
		<p>
			Implemented the call to get user data using `useFetch`, which will fetch
			data only once in SSR, the response is added as JSON to the HTML payload,
			the data will not fetched again in the client side. With this in mind, the
			call should be done in a way that reduces that payload to only the
			necessary data for the page/component, reducing the amount of data that
			the user needs to download and avoiding leaking data that should not be
			exposed to the client side. A Backend-For-Frontend can be a good approach
			(implemented in this case) for this: the client calls the BFF, which calls
			the original API and modifies the response to only include the necessary
			data for the client.
		</p>
		<p>
			In SPA mode, the call to fetch the data will happen on the client side,
			the concern around sending only the minimal data needed is still valid.
			Additionally, we would need to add into consideration implementing loading
			states as the data will not be ready immediately after loading the page.
		</p>
		<p>
			When the data does not depend on session/browser details, it is the same
			for all users, a SSR approach is likely a preferred approach due to better
			experience for the user. Additionally, if the data is public and rarely
			changes, static generation at build time could be used for even better
			performance (no need to wait for the server to fetch the data and render
			the page on each request). Static generation can be coupled with a
			Stale-While-Revalidate approach for caching, where the page will be
			revalidated in the background at certain intervals and the user is served
			the latest build while the revalidation is happening.
		</p>
	</section>
</template>
