import React ,{useState} from "react";
import '../css/homepage.css';
import labels from "../labels/labels";
import Number from '../configration/store';
import data from '../constants/constants';
import index from '../constants/index.jpeg';
function Increment()
{
    const [val,setVal]=useState(Number);
    const [a,setNumber1]=useState(0);
    const [b,setNumber2]=useState(0);
    const [total,setNumber3]=useState(a+b); 
    function increase()
    {
        setVal(val+1);
        localStorage.setItem("task_number",val+1);
    }
    function reset()
    {
        setNumber1(0);
        setNumber2(0);
        setNumber3(0);
        setVal(0);
        localStorage.setItem("task_number",0);
    }
    function calculate()
    {
        setNumber3(a + b);
    }
    return (
        <div className="task">
        <input className="" type="number" placeholder="Enter first value" value={a} onChange={(e)=>setNumber1(+e.target.value)}/>
        <input className="" type="number"placeholder="Enter second value" value={b} onChange={(e)=>setNumber2(+e.target.value)}/>
        <button className="btn btn-primary" onClick={calculate} type="button"> {labels.button_inc.btn3}</button>
        {/* <button className="btn btn-primary" type="button"> {labels.button_inc.btn3}</button> */}
       <h1>Sum {total}</h1>
        <h1 id="number">{val}</h1>
        <div class="d-grid gap-2 col-6 mx-auto">
        <input class="btn" type="reset" onClick={reset} value="Reset"></input>
        <button class="btn btn-primary" onClick={increase} type="button">{labels.button_inc.btn2}</button>
        </div>
            <img src={index} alt="logo" />
            <div id = "increment">
                <p>{data.increment.text}{data.increment.one}{data.increment.two}{data.increment.three}</p>
            </div>
        </div>
        );

}
export default Increment;