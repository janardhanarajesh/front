import axios from "axios"
import { useEffect, useState } from "react"
import "./App.css"
import {Link, useParams} from "react-router-dom"

function Getdata()
{

    const[fetchdata,getdata]=useState([])
    useEffect(()=>
    {
        axios.get('https://backend-2-i7cd.onrender.com/getimage').then((res)=>
        {
            getdata(res.data.imagedata)
        })
    })
    // let {names}=useParams()
    var action ="granted";
    function grant(x)
    {
        axios.get('https://backend-2-i7cd.onrender.com/getr/'+x).then((reo)=>{
            if(reo.data.gtou=="rejected"|reo.data.gtou=="granted")
            {
                alert('already responded')
            }
            else{
                let val=prompt('enter passkey:')
                if(val==1234)
                {
                    let vl=localStorage.getItem('user')
                axios.get('https://backend-2-i7cd.onrender.com/sendmail/'+x+"/"+vl).then((res)=>
                {
                alert(res.data.msg)
                })
                
                axios.put('https://backend-2-i7cd.onrender.com/poststatus/'+x).then((rel)=>{
                    // getdata(rel.data.upddata)
                    alert('granted')
                
                })
                }
                else{
                    alert('invalid pass key')
                }
            }
        })

    }
    // function imgcli()
    // {
    //     document.getElementsByClassName('imgh').style.border="1px solid red"
    // }
    // const[actdata,putact]=useState({
    //     'pinno'
    // })

//    const heldat=(y)=>
//     {

//      axios.post('http://localhost:5000/activity',{y}).then((res)=>{
// // console('activiy inserted')
// if(res.data.msg=="stored")
// {
//     alert('activity stored ')   
// }
// else{
//     alert('activity not stored')
// }
//      })
//     }
const logo=()=>
{
    localStorage.removeItem('user')
    window.location.href="/fac"
}
const reject=(xy)=>
{
    axios.get('https://backend-2-i7cd.onrender.com/dat/'+xy).then((rep)=>{
        if(rep.data.respo=="granted"|rep.data.respo=="rejected")
        {
alert('already responded')
        }
        else{
            let vau=prompt('enter passkey');
            if(vau==4321)
            {
                let yu=localStorage.getItem('user')
        axios.get('https://backend-2-i7cd.onrender.com/reject/'+xy+"/"+yu).then((res)=>{
            alert(res.data.msg)
        })
        axios.put('https://backend-2-i7cd.onrender.com/poststatus1/'+xy).then((rel)=>
        {
            alert('rejected')
        })
            }
            else{
                alert("invalid passkey")
            }
        }
    })
  
}
let k=0;
const show=(c)=>
{
    k++;
 
    // preventDefault()
    if(k>1)
    {
        
   let sh= document.getElementById("imgh"+c).style.cssText="height:600px;width:600px"
k=0;


    }
    else{
        let sher= document.getElementById("imgh"+c).style.cssText="height:70px;width:65px"
    
    }
}
useEffect(()=>
{
    if(!localStorage.getItem('user'))
    {
        alert('you have to login to access the page');
        window.location.href="/fac"
    }
},[1])

    return(
        <div id="upt">
<div id="upeerl">
    <div id="uplrt">
    <button onClick={logo}>logout</button>
    {/* <Link to="/fac">logout</Link> */}
    &nbsp;
    {/* <Link to="/act">activity</Link> */}
    <Link to="/getstu"><button className="hor">student data</button></Link>

    &nbsp;
    <Link to="/getfac"><button className="hor">faculty data</button></Link>

    &nbsp;

    <Link to="/insertfac"><button className="hor">register</button></Link>
    &nbsp;

    <Link to="/note" ><button className="hor">upload notice</button></Link>


    
    </div>

<br/>
<b style={{float:'left',fontSize:'20px'}}>
hello  {localStorage.getItem('user')}
</b>
</div>
<div>
{/* <h>get data</h> */}
<br/>
<br/>

<table border={""} cellPadding="0" cellSpacing="0px" >
    <tr>
        <th>noame</th>
        <th>Pin no</th>
        <th>Branch</th>
        <th>Year</th>
        <th>Section</th>
        <th>Mail</th>
        <th>From</th>
        <th>To</th>
        <th>Requested<br/>date</th>
        <th>Subject</th>
        <th>Letter</th>
        <th>Permission</th>
        <th>Status</th>


    </tr>
    {
        fetchdata.map((le,i)=>
        {
            return(
                <tr key={i}>
                 
                    <td>
                        {le.names}
                    </td>
                    <td>
                        {le.pinno}
                    </td>
                    <td>
                        {le.branch}
                    </td>
                    <td>
                        {le.year}
                    </td>
                    <td>
                        {le.section}
                        
                    </td>
                    <td>
                        {le.mail}
                        </td>
                    <td className="fot">
                        {le.from}
                    </td>
                    <td className="fot">
                        {le.to}
                    </td>
                    <td id="daytd">
                        {le.day}
                    </td>
                    <td>
                        {le.subject}
                    </td>
                    <td>
                        <img src={`https://backend-2-i7cd.onrender.com/images/${le.profile}`} className="imgh"  id={"imgh"+i} onClick={(e)=>show(i)}/>
                    </td>
                    <td>
                        
                        <button onClick={()=>grant(le._id)}>grant</button> 
                        <br/>
                        <button onClick={()=>reject(le._id)}>reject</button>

                         </td>
                     <td style={{backgroundColor:'lightgreen'}}>
                 
                        <b style={{textShadow:"3px 3px 10px",color:'black'}}>{le.status}</b>
                     </td>
                </tr>
            )
        })
    }
</table>
</div>

</div>
    )
}
export default Getdata