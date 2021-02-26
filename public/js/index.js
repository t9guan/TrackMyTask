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