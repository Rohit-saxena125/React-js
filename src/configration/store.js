
let number=0;
if(localStorage.task_number)
{
        number=localStorage.getItem("task_number");
}
else{
    localStorage.setItem("task_number",0);
}
export default parseInt(number);