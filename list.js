function addData(listmain) {

    var data = document.getElementById("box").value;
    var rules = ['']
    for (var i = 0; i < data.length; i++) {
        rules += data[i].value;
    }
    if (data == "") {
        alert("Please fill it")
    }
    else {
        var check = document.createElement("input")
        check.type = "checkbox";
        var li = document.createElement("li");
        var rule = document.createTextNode(data);
        li.appendChild(check);
        li.appendChild(rule);
        document.getElementById("listmain").appendChild(li);

        var removeBtn = document.createElement("input");
        removeBtn.type = "button";
        removeBtn.value = "Remove";
        removeBtn.onclick = remove;
        li.appendChild(removeBtn);
        document.getElementById("listmain").appendChild(li);
    }

    function remove(e) {
        var el = e.target;
        el.parentNode.remove();
    
    }
}
