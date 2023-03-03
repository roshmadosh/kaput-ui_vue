export class UserService {

	users = []

	async get() {
		const response = await fetch(`http://localhost:8080/api/users`, {
			headers: { 'Content-Type': 'application/json' }
		})
	}

}
