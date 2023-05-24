import { useState } from "react";

function TaskDashboard() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleAddTask = () => {
		setTasks([...tasks, newTask]);
		setNewTask("");
	};

	return (
		<div>
			<h1>Task Dashboard</h1>
			<div>
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					placeholder="Enter a new task"
				/>
				<button onClick={handleAddTask}>Add Task</button>
			</div>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}</li>
				))}
			</ul>
		</div>
	);
}

export default TaskDashboard;
