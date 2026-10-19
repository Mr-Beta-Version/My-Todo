import { useState } from "react"

function ToDoList(){
    const [taskList, updateTask] = useState(["Write Code","Drink Water"]);
    const [task, setTask] = useState("");

    function handleInputChange(event){
        setTask(event.target.value);

    }

    function addTask(){
        if(task.trim() !== ""){
            updateTask(t => [...taskList,task]);
            setTask("");
            document.getElementById("task-input").value = "";
        }

    }

    function deleteTask(index){
        const updatedTask = taskList.filter((_,i) => i !== index );
        updateTask(updatedTask);

    }

    function upTask(index){
        const updatedTask = [...taskList];
        if(index>0){
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]]
            updateTask(updatedTask);
        }
    }

    function downTask(index){
        const updatedTask = [...taskList];
        if(index  < taskList.length - 1){
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]]
            updateTask(updatedTask);
        }

    }


    return (
        <>
            <h1>My To DO</h1>

            <div>
                <input id="task-input" type="text" value={task} onChange={handleInputChange} placeholder="Enter task name .."/>
                <button id="add-button" onClick={addTask}>Add</button>
            </div>


            <div>
                <ol>
                    {taskList.map((task,index) => 
                    <li key={index} className="list-items">
                        <span className="task-text">{task}</span>
                        <button className="updown" onClick={() => upTask(index)}>↑</button>
                        <button className="updown" onClick={() => downTask(index)}>↓</button>
                        <button className="delete-button" onClick={() => deleteTask(index)}>x</button>
                    </li>
                    
                )
                    
                    }
                </ol>
            </div>
        </>

    )
}

export default ToDoList