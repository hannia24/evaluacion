const inputElement = document.getElementById("input1");
const valorInput = inputElement.value;

document.write = valorInput;


function agregarTarea() {
    var tarealista =$("#input1").val();

    $("#resultado").val(tarealista);
}

const ListaTareas = {
    tareas: [],

    agregarTarea: function(tarea) {
    this.tareas(tarea);
    }

}