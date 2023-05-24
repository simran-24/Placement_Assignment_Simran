import React, { useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

const matrixValues = new Array(9).fill("empty");

function App() {
	const [isWinner, setIsWinner] = useState("");
	const [crossTurn, setCrossTurn] = useState(false);

	function checkWinner() {
		// winners logic
		if (
			matrixValues[0] !== "empty" &&
			matrixValues[0] === matrixValues[1] &&
			matrixValues[0] === matrixValues[2]
		) {
			setIsWinner(matrixValues[0].toUpperCase() + " WON!");
		}
		if (
			matrixValues[3] !== "empty" &&
			matrixValues[3] === matrixValues[4] &&
			matrixValues[4] === matrixValues[5]
		) {
			setIsWinner(matrixValues[3].toUpperCase() + " WON!");
		}
		if (
			matrixValues[6] !== "empty" &&
			matrixValues[6] === matrixValues[7] &&
			matrixValues[7] === matrixValues[8]
		) {
			setIsWinner(matrixValues[6].toUpperCase() + " WON!");
		}
		if (
			matrixValues[0] !== "empty" &&
			matrixValues[0] === matrixValues[3] &&
			matrixValues[3] === matrixValues[6]
		) {
			setIsWinner(matrixValues[0].toUpperCase() + " WON!");
		}
		if (
			matrixValues[1] !== "empty" &&
			matrixValues[1] === matrixValues[4] &&
			matrixValues[4] === matrixValues[7]
		) {
			setIsWinner(matrixValues[1].toUpperCase() + " WON!");
		}
		if (
			matrixValues[2] !== "empty" &&
			matrixValues[2] === matrixValues[5] &&
			matrixValues[5] === matrixValues[8]
		) {
			setIsWinner(matrixValues[2].toUpperCase() + " WON!");
		}
		if (
			matrixValues[0] !== "empty" &&
			matrixValues[0] === matrixValues[4] &&
			matrixValues[4] === matrixValues[8]
		) {
			setIsWinner(matrixValues[0].toUpperCase() + " WON!");
		}
		if (
			matrixValues[2] !== "empty" &&
			matrixValues[2] === matrixValues[4] &&
			matrixValues[4] === matrixValues[6]
		) {
			setIsWinner(matrixValues[2].toUpperCase() + " WON!");
		}

		// checks if the array is full and we don't have a winner
		for (let i = 0; i < matrixValues.length; i++) {
			if (matrixValues[i] === "empty") break;
			if (i === matrixValues.length - 1) setIsWinner("IT'S A DRAW");
		}
	}

	function resetGame() {
		// console.log("game reset");
		matrixValues.fill("empty", 0, 9);
		setCrossTurn(false);
		setIsWinner("");
	}

	function changeIcon(index) {
		if (isWinner) {
			return toast("Press 'PLAY AGAIN'", { type: "warning" });
		}
		if (matrixValues[index] === "empty") {
			matrixValues[index] = crossTurn ? "cross" : "circle";
			setCrossTurn(!crossTurn);
			checkWinner();
		} else {
			return toast("Place already filled!", { type: "error" });
		}
	}

	return (
		<div className="App">
			<ToastContainer position="bottom-center" />
			<h1 className="title">🎳 Tic Tak Toe Game</h1>
			{isWinner ? (
				<h2 className="won">{isWinner} 🎊</h2>
			) : (
				<h2 className="turn">{crossTurn ? "Cross" : "Cricle"}'s Turn ⚒️</h2>
			)}
			<Row>
				<Col md={6} className="offset-md-3">
					<div className="grid">
						{matrixValues.map((value, index) => (
							<Card>
								<CardBody className="box" onClick={() => changeIcon(index)}>
									<Icon name={value} />
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
			{isWinner ? (
				<button className="btn" onClick={resetGame}>
					PLAY AGAIN
				</button>
			) : (
				<button className="btn" onClick={resetGame}>
					RESET GAME
				</button>
			)}
		</div>
	);
}

export default App;
