function addData(list){

    var data =document.getElementById("box").value;
    var rules = ['']
    document.getElementById("task1")
    for(var i=0; i<data.length; i++){
        rules += data[i].value;
    }
    var li = document.createElement("li");
    var rule = document.createTextNode(rules);
    li.appendChild(rule);
    document.getElementById("list").appendChild(li);
}
    
        //if(data=== ""){alert("Please enter something" )}
