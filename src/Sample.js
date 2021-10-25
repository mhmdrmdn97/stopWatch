import React,{useState, useEffect, useRef} from 'react';

function Counter() {

    const [count,setCount] =useState(1);
    const id =useRef();
    const [disable1, setDisable1] = useState(true);
    const [disable2, setDisable2] = useState(false);
    //handling availability of buttons

   const handleAvailable = () =>{
    disable1===disable2? setDisable2(!disable1):setDisable2(!disable2); setDisable1(disable2);
    }


    const clearInterval = () =>{
            window.clearInterval(id.current);
    }
    
    useEffect(() =>{

     id.current =   window.setInterval(() =>{

            setCount(c =>c+1);

        },1000);
        console.log("Run ...");
        return clearInterval;
    },[]);
    return(
        <div>

        <h1>{count}</h1>
        <button disabled={disable1}  onClick={ ()=> { id.current =   window.setInterval(() =>{

setCount(c =>c+1);

},1000);handleAvailable();}}>START</button>
        <button disabled={disable2} onClick={() => {handleAvailable(); clearInterval();}}>STOP</button>
        <button onClick={() =>{

setCount(0);}}>RESET</button>
        </div>



    )


}
export default Counter;