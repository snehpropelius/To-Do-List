let task = [];

document.getElementById("btnadd").addEventListener("click",addTask);
document.getElementById("btnclear").addEventListener("click",clearAll);
document.getElementById("btnsave").addEventListener("click",save);
document.getElementById("btnload").addEventListener("click",loadData);

function displayTask(){
    let values = "";
    task.forEach(function(val,index){
        values+="<li>" + val + " <button onclick='removeData("+index+")'> X</button>"+"</li>";
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

function clearAll(){
    if(task.length==0){
        alert("No task to clear!!");
    }else{
        save();
        task = [];
        displayTask();
        alert("DATA CLEARED!!  YOU CAN LOAD DATA BACK WITH LOAD BUTTON");
    }
    
}

function save(){
    if(task.length==0){
        alert("No data to save!!");
    }else{
        localStorage.setItem("tasks",JSON.stringify(task));
        alert("DATA SAVED SUCCESSFULLY")
    }
    
}

function loadData(){
    let taskk = localStorage.getItem("tasks");
    task = JSON.parse(taskk);
    displayTask();
}

function removeData(i){
    task.splice(i,1);
    displayTask();
}