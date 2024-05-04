import {StudentModel} from "../model/studentModel.js"
import {students} from "../db/db.js";

let clickedIndex;

$("#nav-student").on('click',()=>{
    $("#student-mgmt").css('display','block')
});
$("#nav-course").on('click',()=>{
    $("#course-mgmt").css('display','block')
    $("#student-mgmt").css('display','none')
});
$("#home").on('click',()=>{
    $("#course-mgmt").css('display','none')
    $("#student-mgmt").css('display','none')
})
function loadTable(){
    $('#st-table tbody tr').append().empty()
    students.map((item,index) =>{
        var record = `<tr>
            <td class="st-id">${item.ID}</td>
            <td class="st-first-name">${item.firstName}</td>
            <td class="st-last-name">${item.lastName}</td>
            <td class="st-address">${item.address}</td>
            <td class="st-program">${item.course}</td>
        </tr>`
        $('#st-table').append(record);
    })
}
$("#btn-submit").on('click',()=>{
    let stid = $("#ID").val()
    var stfname = $("#first-name").val();
    var stlname = $("#last-name").val();
    var staddress = $("#address").val();
    let program = $('input[name="course"]:checked').val();

    let student = new StudentModel(stid,stfname,stlname,staddress,program)
    /*const st = {
        id: stid,
        fname: stfname,
        lname: stlname,
        address: staddress,
        program: program
    }*/
    students.push(student);
    loadTable()
    console.log(students)


    $("#ID").val("");
    $("#first-name").val("");
    $("#last-name").val("");
    $("#address").val("");
    $("input[name='course']").prop('checked',false);



})
$('#st-table tbody').on('click','tr',function (){

    console.log("clicked")

    let index = $(this).index();
    clickedIndex = index;
    let stId = $(this).find(".st-id").text();
    let stf = $(this).find(".st-first-name").text();
    let stl = $(this).find(".st-last-name").text();
    let sta = $(this).find(".st-address").text();
    let stp = $(this).find(".st-program").text();

    console.log(stId)
    console.log(stf)
    console.log(stl)
    console.log(sta)

    $("#ID").val(stId);
    $("#first-name").val(stf);
    $("#last-name").val(stl);
    $("#address").val(sta);
    $(`input[name='course'][value=${stp}]`).prop('checked',true);
})

$("#btn-reset").on('click',()=>{
    $("#ID").val("");
    $("#first-name").val("");
    $("#last-name").val("");
    $("#address").val("");
    $("input[name='course']").prop('checked',false);
})
$("#btn-update").on('click',()=>{

    let stid = $("#ID").val()
    var stfname = $("#first-name").val();
    var stlname = $("#last-name").val();
    var staddress = $("#address").val();
    let program = $('input[name="course"]:checked').val();

    let stObject = students[clickedIndex];
    console.log(stObject)
    stObject.ID(stid)
    stObject.firstName(stfname)
    stObject.lastName(stlname)
    stObject.address(staddress)
    stObject.course(program)

    loadTable()
    $("#btn-reset").click()
})
$("#btn-delete").on('click',()=>{
    student.splice(clickedIndex,1)
    loadTable()
    $("#btn-reset").click()
})