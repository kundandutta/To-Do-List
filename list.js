function addData(list) {

    var data = document.getElementById("box").value;
    var rules = ['']
    for (var i = 0; i < data.length; i++) {
        rules += data[i].value;
    }
    if (data == "") {
        alert("Please fill it")
    }
    else {
        var check = document.createElement("input");
        check.setAttribute('type', 'checkbox');
        check.setAttribute('id', data);
        check.setAttribute('value', 'val' +data);
        check.BoxClickFn = addfn()
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

    document.getElementById("box").value = ""
}
function remove(e) {
    var el = e.target;
    console.log(el.parentNode)
    el.parentNode.remove();

}

function checkBoxClickFn(check) {

}