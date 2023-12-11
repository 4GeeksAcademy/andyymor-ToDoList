import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [todos, setTodos] = useState([]);

	useEffect(()=> {
		const getToDos = async () => {
			// get the data from the api
			const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/andyymor`);
			// convert the data to json
			const data = await response.json();
			setTodos(data)
		}
		getToDos();
	}, [])

	useEffect(()=> {
		const postToDos = async () => {
			// get the data from the api
			const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/andyymor`, 
			{
				method: "PUT",
				body:JSON.stringify(todos),
				headers:{'Content-type': 'application/json'}
			});
			// convert the data to json
			const data = await response.json();
			console.log(data)
		}
		postToDos();
	}, [todos])


	function addToDo(event) {
		if(event.key === "Enter"){
			const newTask = {label:inputValue, done:false}
			setTodos([...todos, newTask])
			setInputValue("");} 
	}
	return (
		<div className="container">
			<h1>My Todos</h1>
		<ul>
		
			<li>
			<input 
				type="text" 
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyDown={(event) =>addToDo(event)}
				placeholder="what do you need to do "/> 
			</li>

			{todos.map((item, index) => (
				<li>
					{item.label} <i 
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
