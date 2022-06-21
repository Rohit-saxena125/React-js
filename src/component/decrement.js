import React ,{useState} from "react";
import '../css/homepage.css';
import labels from "../labels/labels";
import Number from '../configration/store';
import data from '../constants/constants';
import index from '../constants/index1.png';
export default function Decrement()
{
    const [val,setVal]=useState(Number);
    const [a,setNumber1]=useState(0);
    const [b,setNumber2]=useState(0);
    const [diff,setNumber3]=useState(a-b);
    function decrease()
    {
        setVal(val-1);
        localStorage.setItem("task_number",val-1);
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
        setNumber3(a - b);
    }
    return (
        <div className="task1" style={{background:"#C70A80",padding:50}} >
        <input className="" type="numerical"placeholder="Enter first value" value={a} onChange={(e)=>setNumber1(+e.target.value)}/>
        <input className=""type="numerical" placeholder="Enter second value" value={b} onChange={(e)=>setNumber2(+e.target.value)}/>
        <button className="btn btn-primary" onClick={calculate} type="button"> {labels.button_inc.btn3}</button>
        {/* <button className="btn btn-primary" type="button"> {labels.button_dec.btn3}</button> */}
        <h1>difference {diff}</h1>
        <h1 id="number">{val}</h1>
        <div class="d-grid gap-2 col-6 mx-auto">
        <input class="btn" type="reset" onClick={reset} value="Reset"></input>
        <button class="btn btn-primary" onClick={decrease} type="button">{labels.button_dec.btn2}</button>
        </div>
            <img src={index} alt="logo" />
            <div id = "decrement">
                <p>{data.decrement.text}{data.decrement.one}{data.decrement.two}{data.decrement.three}</p>
            </div>
        </div>
        );
}