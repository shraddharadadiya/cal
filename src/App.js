
import './App.css';
import { useState } from "react";


function App() {

	let [display, setdisplay] = useState("")
	let [firstval, setfirstval] = useState("")
	let [sign, setsign] = useState("")
	// let [lastval, setlastval] = useState("")

	const getdata = (x) => {
		setdisplay(display + x);
	}
	const caldata = (m) => {
		setfirstval(display)
		setdisplay("")
		setsign(m)
	}
	const handleEquals = () => {
		// setlastval(display)
		const lastval = display;
		switch (sign) {
			case 1:
				setdisplay((parseFloat(firstval) + parseFloat(lastval)));
				break;
			case 2:
				setdisplay((parseFloat(firstval) - parseFloat(lastval)));
				break;
			case 3:
				setdisplay((parseFloat(firstval) * parseFloat(lastval)));
				break;
			case 4:
				if(parseFloat(lastval)===0){
					setdisplay('cant not divied by 0')
				}else{
				setdisplay((parseFloat(firstval) / parseFloat(lastval)));

				}
				break;
			case 5:
				setdisplay((parseFloat(firstval) % parseFloat(lastval)));
				break;
			default:
				setdisplay("Error");
		}
	}
	const handleClear = () =>{
		setdisplay("")
	}
	const singledel = () =>{
		setdisplay((prevdisplay)=>prevdisplay.slice(0,-1));
	}

	return (
		<div className="App">

			<div class="main_div">
				<div class="text">
					<input type="text" name="" value={display} style={{color:"black"}}></input>
				</div>
				
				<div class="btn">
					<input type="button" name="" value={"CE"} onClick={() => handleClear()} style={{borderRadius:"10px",background:"#00FFFF",color:"black"}}></input>
					<input type="button" name="" value={"Del"} onClick={() => singledel()} style={{borderRadius:"10px",background:"#00FFFF",color:"black"}}></input>
					<input type="button" name="" value={"%"} onClick={() => caldata(5)} style={{borderRadius:"10px",background:"#00FFFF",color:"black"}}></input>
					<input type="button" name="" value={"/"} onClick={() => caldata(4)} style={{borderRadius:"10px",background:"#00FFFF",color:"black"}}></input>
				</div>

				<div class="btn">
					<input type="button" name="" value={"7"} onClick={() => getdata(7)} style={{borderRadius:"10px",backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"8"} onClick={() => getdata(8)}  style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"9"} onClick={() => getdata(9)}  style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"*"} onClick={() => caldata(3)} style={{borderRadius:"10px",background:"#00FFFF",color:"black"}}></input>
				</div>
				<div class="btn"> 
					<input type="button" name="" value={"4"} onClick={() => getdata(4)} style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"5"} onClick={() => getdata(5)} style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"6"} onClick={() => getdata(6)} style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"-"} onClick={() => caldata(2)} style={{borderRadius:"10px",background:"#00FFFF",color:"black"}}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"1"} onClick={() => getdata(1)} style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"2"} onClick={() => getdata(2)} style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"3"} onClick={() => getdata(3)} style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"+"} onClick={() => caldata(1)} style={{borderRadius:"10px",background:"#00FFFF",color:"black"}}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"0"}  onClick={()=>getdata(0)} style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"00"}  onClick={()=>getdata(0)} style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"."} onClick={() => getdata(".")}  style={{borderRadius:"10px" ,backgroundColor:"#F0F8FF",color:"black"}}></input>
					<input type="button" name="" value={"="} onClick={() => handleEquals()} style={{borderRadius:"10px",background:"#00FFFF",color:"black"}} ></input>
				</div>
			</div>

		</div>
	);
}

export default App;
