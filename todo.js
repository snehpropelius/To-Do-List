let task = [];

document.getElementById("btnadd").addEventListener("click",addTask);

function displayTask(){
    let values = "";
    task.forEach(function(val){
        values+="<li>" + val + "</li>";
    });
    document.getElementById("list").innerHTML = values;
};

function addTask(){
    let taskInput = document.getElementById("initem");
    let text = taskInput.value;
    if(text === ""){
        alert("please fill the task first!!")
    }else{
        task.push(text);
        taskInput.value="";
        displayTask();
    }
};
