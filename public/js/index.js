function loadDate() {
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth();
    d = n.getDate();
    day = n.getDay();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("date").innerHTML = days[day] + ", " + months[m] + " " + d + ", " + y;
    console.log(n);
}

function changeIcon() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function editTask() {
    $.get("/edit", toggleBtn);
}

function toggleBtn(data){
    console.log(data.size);
    let datasize = data.size;
    var i;
    for(i = 0; i < datasize; i++){
        var x = document.getElementById(i+"button");
        if(x != null){
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
       
    }
}

function deleteTask(e, index){
    e.preventDefault();
    if(confirm("Are you sure you would like to delete this task?")){
        $.get("/edit/" + index);
        document.getElementById(index).remove();
    }else{
        console.log("not delete task");
    }
}