function addTask() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var h5 = document.createElement("h5");
    
    var inputValue = document.getElementById("inpt").value;
    if (inputValue!="" ) {
        h5.innerHTML=`${inputValue}`;
        inputValue = document.getElementById("inpt").value="";
        var a = document.createElement("a");
        a.setAttribute("href","#");
        a.className="link";
        a.innerHTML='<i class="far fa-times-circle"></i>';
        li.appendChild(a);
        li.appendChild(h5);
        ul.appendChild(li);
        li = li.className = "alt-title-card-2 clearfix";
    }
    else{
        alert("lütfen boş bir görev girmeyin");
    }
}
const liste = document.querySelector("ul");
liste.addEventListener("click",function(e){
    console.log(e.target.className);
    if (e.target.className=="far fa-times-circle") {
        e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
});


function deleteall() {
    document.querySelectorAll(".alt-title-card-2").forEach(e => e.parentNode.removeChild(e));
}


