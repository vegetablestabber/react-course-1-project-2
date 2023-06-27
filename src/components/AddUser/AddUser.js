import { useState } from "react"
import Card from "../Card/Card"
import Button from "../Button/Button"
import classes from "./AddUser.module.css"

const AddUser = (props) => {
	const [userInput, setUserInput] = useState({
		username: "",
		age: ""
	})

	const inputChangeHandler = (id, value) => {
		setUserInput((prevInput) => {
			return { ...prevInput, [id]: value }
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()

		if (userInput.username === "" || userInput.age === "") {
			props.onAdd({
				error: Error(
					"Please enter a valid name and age (non-empty values)."
				)
			})
			return
		} else if (+userInput.age <= 0) {
			props.onAdd({ error: Error("Please enter a valid age (> 0).") })
			return
		}

		props.onAdd({
			key: Math.random(),
			username: userInput.username,
			age: +userInput.age
		})
	}

	return (
		<Card>
			<form className={classes.input} onSubmit={submitHandler}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					value={userInput.username}
					onChange={(event) =>
						inputChangeHandler("username", event.target.value)
					}
				/>

				<label htmlFor="age">Age (in years)</label>
				<input
					type="number"
					id="age"
					value={userInput.age}
					onChange={(event) =>
						inputChangeHandler("age", event.target.value)
					}
				/>

				<Button>Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
