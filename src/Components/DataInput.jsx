import React from 'react'
import { useRef } from 'react';

function DataInput() {

    let fv = useRef("");
    let sv = useRef("");
    let tv = useRef("");
    let ffv = useRef("");

    const focus = () =>{

        if(fv.current.value.length === 0 && sv.current.value.length === 0 && tv.current.value.length === 0 && ffv.current.value.length === 0)
        {
            fv.current.focus();
        }
    }

    const fvChange = ()=>{
        if(fv.current.value.length === 1)
        {
            sv.current.focus();
        }
        if(sv.current.value.length === 1)
        {
            tv.current.focus();
        }
        if(tv.current.value.length === 1)
        {
            ffv.current.focus();
        }
    }


  return (
    <section class="container-fluid">
	<div class="row">
		<div class="col-md-8 offset-md-2">
			
				<div class="form-group" style={{height:"100vh",display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
					<label for="password" class="text-white">Auto-focusing Input Field</label>
					<div class="passcode-wrapper" style={{width:"100%"}} id='inputTag'>
						<input id="codeBox1" type="number" ref={fv} onChange={fvChange}/>
						<input id="codeBox2" type="number" ref={sv} onChange={fvChange}/>
						<input id="codeBox3" type="number" ref={tv} onChange={fvChange}/>
						<input id="codeBox4" type="number" ref={ffv} onChange={fvChange}/>
					</div>
                    <button onClick={focus} style={{width:"400px",height:"60px",background:"white",color:"black",border:"none",borderRadius:"10px",fontWeight:'bold',fontSize:"25px"}}>FOCUS ON FIRST VALUE</button>
				</div>
			
		</div>
	</div>
</section>
  )
}

export default DataInput