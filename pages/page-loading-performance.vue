<template>
	<section>
		<h1>Page loading performance</h1>
		<h2>Image Optimization</h2>
		<p>
			To improve the performance on this page, images is the first place to look
			into. The majority of the images are not visible until the user scrolls
			down, yet they are all loaded eagerly on page load, an easy solution would
			be to add a `loading=lazy` attribute to each image, this will tell the
			browser to only load the image shortly before it is visible in the window.
			This simple change would remove tens of requests on first load.
			Implemented.
		</p>
		<p>
			The next improvement that I would look into regarding images would be to
			look at the size of the images are being served. There is potential to
			improve the load of the images by serving smaller files. Since images are
			not shown at the same size in all screen sizes, the ideal approach would
			require to provide different sizes to the browser with a combination of
			`srcset` and `sizes` attributes to let the browser pick the appropriate
			size based on the rendering size of the image.
		</p>
		<h3>Example for image optimization:</h3>
		<pre>
&lt;img
  alt=""
  // Default size
  src="/image-600.png"
  // Files available and their widths
  srcset="/image-300.png 300w, /image-600.png 600w, /image-900.png 900w, /image-1200.png 1200w, /image-1800.png 1800w"
  // Indicating at what size the image will be rendered at each viewport size
  sizes="(min-width: 900px) 900px, (min-width: 600px) 600px, 300px"
  // Load the image only when it is in the window or close to appearing in the window
  loading="lazy"
  // Add height and width so the browser can render a space for the image and prevent layout shift once the image loads
  height="300"
  width="600"
/&gt;</pre
		>

		<h2>Reduce images on the page</h2>
		<p>
			A more complex approach that the ones define above, but potential for
			significant gains, would be to not render all images on first load.
			Considering that the gallery consists of a list of users that each have a
			list of images, two potential approaches for this could be:
		</p>
		<ol>
			<li>
				Only show a few images for each user (1 or 2 rows), and add a link to
				open that user's galery profile to see all the images from that user
			</li>
			<li>
				Only show a few images for each user (2 or 3 rows), and add
				pagination controls to see more images of that user directly in the
				gallery
			</li>
		</ol>
		<p>
			This would not only have the advantage of loading significantly less
			images on the page, it would also make the images from users down the list
			easier to discover.
		</p>
	</section>
</template>
