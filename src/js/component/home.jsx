import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [todos, setTodos] = useState([]);

	


	return (
		<div className="container">
			<h1>My Todos</h1>
		<ul>
		
			<li>
			<input 
				type="text" 
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyPress={(e) => {
					if (e.key === "Enter" ) {
						console.log("this code is running")
					 setTodos(todos.concat(inputValue));
					 setInputValue("");
				}}}
				placeholder="what do you need to do "/> 
			</li>

			{todos.map((item, index) => (
				<li>
					{item} <i 
					class="fa-solid fa-trash-can"
					onClick={() =>
						setTodos(
							todos.filter(
								(item, currentIndex) =>
								index != currentIndex
							)
						)
					
					}></i>
				</li>
			))}
			</ul>
			 <div>{todos.length}</div>
		</div>
	);
};

export default Home;
