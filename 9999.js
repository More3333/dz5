let n1 = 'Ivan'
let n2 = 'Max'

const names = [1, 5, 87, 3, 78]

console.log(names.length)
console.log(names)
console.log(names[2])

$("#add").click(f1)
$("#search").click(f4)
$("#del").click(f3)


function f1(){
    let name = $('#in1').val()
    names.push(name)  // добавляет в конец списка    unshift -добавляет в начало списка
    $('#out').text(names)
}

function f2(){
    let name = $('#in1').val()
    let  index = names.indexOf(name)  // находит номер элемента Это число
    if (index===-1){
         $('#out').text('не найден  ')
    }
    else {
        $('#out').text('под номером  ' + index)
    }
}

function f3(){
    let name = $('#in1').val()
    names.pop() // удаляет последний элемент  shift -  удалят первый элеент
    $('#out').text(names)
}

function f4(){
    let name = $('#in1').val()
    names.shift() // удаляет последний элемент  shift -  удалят первый элеент
    $('#out').text(names)
}

/*function f3(){
    let name = $('#in1').val()
    let  index = names.indexOf(name)
    if (index===-1){
         $('#out').text('не найден  ')
    }
    else {
        names.splice(index, 1)
        $('#out').text(names)
    }
}
  */
$(document).ready(function () {
    $('#but1').prop('disabled', true)
})

$('#but2').click(fd)

function fd(){
    $('#but1').prop('disabled', false)
    $('#but2').prop('disabled', true)
}
