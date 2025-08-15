<template>
	<AwesomeArticle>
		<h1>User profile</h1>
		<ul>
			<li><strong>Username:</strong> {{ user.username }}</li>
			<li><strong>Name:</strong> {{ user.name }}</li>
			<li><strong>Company:</strong> {{ user.company }}</li>
			<li>
				<strong>Address:</strong><br />
				<span v-for="(value, key) in user.address" :key="key">
					{{ value }} <br />
				</span>
			</li>
		</ul>
	</AwesomeArticle>
</template>

<script setup>
// Fetch user data
const route = useRoute();
const { data: user } = await useFetch(`/api/user/${route.params.id}`);
</script>

<style></style>
