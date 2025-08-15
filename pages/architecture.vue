<template>
	<h1>Architecture</h1>
	<p>
		Considering this page is meant to be publicly accessed, it could be a good
		candidate for SSG, but this page shows a gallery of images from users, which
		leads me to believe it needs to update when users upload new images. I would
		keep the BFF approach, in combination with Stale-While-Revalidate (SWR).
	</p>
	<p>
		With a SWR approach we could improve the performance of this page by
		generating the page on the first request, and serving the generated page for
		all requests after until the API response from `/api/gallery` changes. Once
		the API response changes, the page is regenerated in the background, and
		subsequent requests get served the newly generated version. This has been
		implemented in `nuxt.config.ts` via `{ swr: true }` on the gallery route.
		Alternatively, if there is significant traffic to this page, or if the API
		response might change too frequently, and we don't need to serve the
		absolute latest results, a good middle ground would be to set the `swr`
		value with a number (seconds), so the revalidation happens on time intervals
		instead of each request, reducing strain on the service and serving the
		cached response more often.
	</p>
</template>
