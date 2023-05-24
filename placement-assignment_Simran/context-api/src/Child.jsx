import { useContext } from "react";
import { MyContext } from "./context";

function Child() {
	const data = useContext(MyContext);
	return <div>{data}</div>;
}

export default Child;
