import "./RoomStatusPopup.css";
import { useState } from "react";


function RoomStatusPopup({onClose}){


const [filter,setFilter] = useState("Today");


const data = {

Today:{
date:"24 May 2024",
total:100,
occupied:72,
available:20,
maintenance:8
},

Yesterday:{
date:"23 May 2024",
total:100,
occupied:68,
available:24,
maintenance:8
},

"Last 7 Days":{
date:"18-24 May 2024",
total:100,
occupied:70,
available:22,
maintenance:8
},

"Last 30 Days":{
date:"April 2024",
total:100,
occupied:65,
available:27,
maintenance:8
}

};


return(

<div className="popup-overlay">


<div className="room-popup">


<div className="popup-header">

<h2>Room Status</h2>

<button onClick={onClose}>
✕
</button>

</div>



<div className="filter-row">

<select
value={filter}
onChange={(e)=>setFilter(e.target.value)}
>

<option>Today</option>
<option>Yesterday</option>
<option>Last 7 Days</option>
<option>Last 30 Days</option>

</select>

</div>



<table>


<thead>

<tr>

<th>Date</th>
<th>Total Rooms</th>
<th>Occupied</th>
<th>Available</th>
<th>Maintenance</th>

</tr>

</thead>



<tbody>

<tr>

<td>{data[filter].date}</td>
<td>{data[filter].total}</td>
<td>{data[filter].occupied}</td>
<td>{data[filter].available}</td>
<td>{data[filter].maintenance}</td>


</tr>

</tbody>


</table>


</div>


</div>


)


}


export default RoomStatusPopup;