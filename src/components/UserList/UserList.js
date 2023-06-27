import Card from "../Card/Card"
import classes from "./UserList.module.css"

const UserList = (props) => {
	return (
		props.items.length > 0 && (
			<Card className={classes.users}>
				<ul>
					{props.items.map((user) => (
						<li>{`${user.username} (${user.age} years old)`}</li>
					))}
				</ul>
			</Card>
		)
	)
}

export default UserList
