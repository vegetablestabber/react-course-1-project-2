import React, { useState } from "react"
import AddUser from "./components/AddUser/AddUser"
import UserList from "./components/UserList/UserList"
import ErrorModal from "./components/ErrorModal/ErrorModal"

function App() {
	const [users, setUsers] = useState([])
	const [error, setError] = useState(null)

	const additionHandler = (data) => {
		if (data.error) {
			setError(data.error)
		} else {
			setUsers((prevUsers) => [...prevUsers, data])
		}
	}

	return (
		<div>
			<AddUser onAdd={additionHandler} />
			<UserList items={users} />
			<ErrorModal error={error} onExit={() => setError(null)} />
		</div>
	)
}

export default App
