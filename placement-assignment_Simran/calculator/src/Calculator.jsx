import React, { useState } from "react";

const buttonStyle = {
	width: "50px",
	height: "50px",
	margin: "5px",
	fontSize: "18px",
};

const inputStyle = {
	width: "210px",
	height: "40px",
	fontSize: "20px",
	marginBottom: "10px",
};

function Calculator() {
	const [result, setResult] = useState("");

	const handleClick = (value) => {
		if (value === "=") {
			try {
				setResult(eval(result).toString());
			} catch (error) {
				setResult("Error");
			}
		} else if (value === "C") {
			setResult("");
		} else {
			setResult(result + value);
		}
	};

	return (
		<div>
			<h1>Calculator</h1>
			<input type="text" value={result} style={inputStyle} readOnly />
			<div>
				<button style={buttonStyle} onClick={() => handleClick("7")}>
					7
				</button>
				<button style={buttonStyle} onClick={() => handleClick("8")}>
					8
				</button>
				<button style={buttonStyle} onClick={() => handleClick("9")}>
					9
				</button>
				<button style={buttonStyle} onClick={() => handleClick("+")}>
					+
				</button>
			</div>
			<div>
				<button style={buttonStyle} onClick={() => handleClick("4")}>
					4
				</button>
				<button style={buttonStyle} onClick={() => handleClick("5")}>
					5
				</button>
				<button style={buttonStyle} onClick={() => handleClick("6")}>
					6
				</button>
				<button style={buttonStyle} onClick={() => handleClick("-")}>
					-
				</button>
			</div>
			<div>
				<button style={buttonStyle} onClick={() => handleClick("1")}>
					1
				</button>
				<button style={buttonStyle} onClick={() => handleClick("2")}>
					2
				</button>
				<button style={buttonStyle} onClick={() => handleClick("3")}>
					3
				</button>
				<button style={buttonStyle} onClick={() => handleClick("*")}>
					*
				</button>
			</div>
			<div>
				<button style={buttonStyle} onClick={() => handleClick("0")}>
					0
				</button>
				<button style={buttonStyle} onClick={() => handleClick(".")}>
					.
				</button>
				<button style={buttonStyle} onClick={() => handleClick("=")}>
					=
				</button>
				<button style={buttonStyle} onClick={() => handleClick("/")}>
					/
				</button>
			</div>
			<div>
				<button style={buttonStyle} onClick={() => handleClick("C")}>
					Clear
				</button>
			</div>
		</div>
	);
}

export default Calculator;
