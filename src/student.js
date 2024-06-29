import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css"

function Student()
{
    const[studenti,getdata]=useState({
        'name':'',
        'password':'',
        'pin':'',
        'branch':'',
        'mail':''

    })
    var _names=studenti.name
    function check(h)
    {
        

h.preventDefault();

        

axios.get('https://backend-2-i7cd.onrender.com/checkstud/'+_names).then((ret)=>{

    if(ret.data.message==="notfound")
    {
        
        axios.post('https://backend-2-i7cd.onrender.com/student',{studenti}).then((res)=>{
    alert(res.data.msg)
    window.location.reload()
    window.location.href="/studentlogin"
})
        
    }
    else{
        alert("already registered")
    window.location.href="/studentlogin"


    }
})
    
    }
    return(
        <div id="fro">
                    <center id="fr">
        <div >
            {/* <button id="menubut">menu</button> */}

          
                
                <div id="regsdiv">               <h1 id="regshed">registration</h1>
                <form onSubmit={check} action="#" autoComplete="off">
                    <label className="laab">Name:</label>
                    <input type="name" placeholder="name"id="rebranch" onChange={(e)=>getdata({...studenti,pin:e.target.value})} required/>
                    <br/>
                    <label className="laab">Branch:</label>
                    <input type="text"  placeholder="branch" id="regnam" onChange={(e)=>getdata({...studenti,branch:e.target.value})} required/>
                    <br/>
            <label className="laab">Pinno:</label>
            <input type="text" placeholder="pin number" pattern="^[2-9]{3}-[A-Z]{2,3}-[0-9]{3}-[0-9]{2}$" title="in correct pattren" onChange={(e)=>getdata({...studenti,name:e.target.value})} required id="upperip"/>
            <br/> 
            <label className="laab">Password:</label>
            <input  id="passreg" type="password" placeholder="password" onChange={(e)=>getdata({...studenti,password:e.target.value})} required/>
            <br/>
            <label className="laab">    mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>

            <input   type="email" placeholder="recoverymail" onChange={(e)=>getdata({...studenti,mail:e.target.value})} required/>
            <br/>
            <br/>

            <input type="submit" value="register"/>
            </form>
            <p>already registered?<Link to="/studentlogin">click here</Link></p>
           </div>
            <p id="note1">note:the pin number should be in the format of campus-branch[A-Z]-pin[3]-starting year</p>

        </div>
        <br/>
      <span style={{color:"black",backgroundColor:"white"}}> developed by </span> 
<b>
<Link to="https://instagram.com/scripting_coder/" style={{color:"black",backgroundColor:"white"}}>Janardhana rajesh</Link>
</b>
        </center>
        </div>

    )
}
export default Student