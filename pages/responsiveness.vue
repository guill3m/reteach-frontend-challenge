<template>
	<section>
		<h1>Responsiveness</h1>
		<p>
			Implemented a responsive layout with a sidebar next to main on screens
			wider than 800px using CSS Grid with a simple 3-column layout.
		</p>
		<p>
			Using grid in this case because this way all the layout logic is defined
			in the parent (besides the naming of the template areas). I find this
			makes it easier to get an understanding of the overal layout from a single
			place.
		</p>
		<p>
			Also removed the margins between sections in favor of the `gap` property.
			It will stay consistent if it is changed in the future as it is declared
			in a single place, reducing the margin for errors and inconsistency.
		</p>
		<p>
			Made a small adjustment to the base CSS to make images responsive by
			setting a `max-width`. The with `height:auto;` prevents the image from
			being deformed and keeps it at the same aspect ratio as the original file
		</p>

		<h2>Other potential solution</h2>
		<p>
			Another way of possibly implementing this could have been with `display:
			flex` instead of grid. In this case, the different components would be
			defining their own sizes. I find this approach more appropriate for
			component-level layouts, where styles for the layout will not be scatered
			in multiple files.
		</p>
		<p>
			An advantage of flex vs grid for this layout specifically is that we could
			have a fixed width sidebar instead of having its size grow proportionally
			with the rest, which might be more desirable in some scenarios.
		</p>
	</section>
</template>
