document.querySelector('#press').onclick = function(){
    if(document.querySelector('#NewList input').value.length == 0){
        alert("Please Specify Task")
    }

    else{
        document.querySelector('#task').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#NewList input').value}
                </span> 
                <button-1  class="Remove">Remove
                    <i class="far fa-trash-alt"></i>
                </button-1>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".Remove");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}