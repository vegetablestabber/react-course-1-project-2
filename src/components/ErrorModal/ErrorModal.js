import Card from "../Card/Card"
import Button from "../Button/Button"
import classes from "./ErrorModal.module.css"

const ErrorModal = (props) => {
	if (props.error) {
		return (
			<div className={classes.backdrop} onClick={props.onExit}>
				<Card className={classes.modal}>
					<div className={classes.header}>
						<h2>Invalid input</h2>
					</div>

					<div className={classes.content}>
						<p>{props.error.message}</p>
					</div>

					<div className={classes.actions}>
						<Button onClick={props.onExit}>Okay</Button>
					</div>
				</Card>
			</div>
		)
	}
}

export default ErrorModal
