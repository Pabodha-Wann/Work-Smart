const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===""){
        alert("You must write something");
    }
    else{
        let newTask = document.createElement("li");
        newTask.innerHTML=inputBox.value;
        listContainer.appendChild(newTask);

        let removeIcon = document.createElement("span");
        removeIcon.innerText="\u00d7";
        newTask.appendChild(removeIcon);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",(event)=>{

    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
        
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
    

});


inputBox.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        addTask();
    }
    saveData();
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    
}

function getTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

getTask();