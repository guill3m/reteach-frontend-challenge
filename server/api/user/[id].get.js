export default defineEventHandler(async (event) => {
	try {
		const userId = getRouterParam(event, 'id');
		const responseObject = await fetch(
			`https://jsonplaceholder.typicode.com/users/${userId}`
		).then((res) => res.json());

		// Create a new user object with only the data that we need to render on the page
		const user = {
			username: responseObject.username,
			name: responseObject.name,
			company: responseObject.company.name,
			address: responseObject.address,
		};
		delete user.address.geo;

		return user;
	} catch (error) {
		return { error };
	}
});
