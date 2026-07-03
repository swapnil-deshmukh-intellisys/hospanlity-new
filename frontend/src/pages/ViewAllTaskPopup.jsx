import React, { useEffect, useState } from "react";
import "./ViewAllTaskPopup.css";
import { FiMoreVertical, FiEye, FiEdit2, FiTrash2, FiUserPlus, FiCheckCircle } from "react-icons/fi";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import {
  FiX,
  FiSearch,
  FiFilter,
  FiRefreshCcw,
  FiDownload,
} from "react-icons/fi";

const statusTabs = [
  {
    id: 1,
    title: "All",
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "Pending",
    color: "#F59E0B",
  },
  {
    id: 3,
    title: "In Progress",
    color: "#2563EB",
  },
  {
    id: 4,
    title: "Completed",
    color: "#16A34A",
  },
  {
    id: 5,
    title: "Delayed",
    color: "#EF4444",
  },
  {
    id: 6,
    title: "Emergency",
    color: "#7C3AED",
  },
];

export default function ViewAllTaskPopup({
  open,
  onClose,
}) {
    const [openMenu, setOpenMenu] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const rowsPerPage = 10;

const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");

  const [floor, setFloor] = useState("All Floors");

 const [tasks, setTasks] = useState([
{
id:1,
room:"205",
task:"Linen Change",
floor:"2nd Floor",
priority:"Medium",
status:"Pending",
staff:"Sunita Devi",
time:"10:30 AM",
updated:"10:15 AM"
},
{
id:2,
room:"503",
task:"Regular Cleaning",
floor:"5th Floor",
priority:"Medium",
status:"In Progress",
staff:"Pooja Sharma",
time:"11:30 AM",
updated:"11:10 AM"
},
{
id:3,
room:"606",
task:"Mini Bar Refill",
floor:"6th Floor",
priority:"Low",
status:"Completed",
staff:"Ramesh Kumar",
time:"09:15 AM",
updated:"09:30 AM"
},
{
id:4,
room:"707",
task:"Regular Cleaning",
floor:"7th Floor",
priority:"Medium",
status:"Pending",
staff:"Rajesh Kumar",
time:"12:30 PM",
updated:"12:05 PM"
},
{
id:5,
room:"802",
task:"Deep Cleaning",
floor:"8th Floor",
priority:"High",
status:"Delayed",
staff:"Sunita Devi",
time:"03:00 PM",
updated:"02:45 PM"
},
{
id:6,
room:"1003",
task:"Regular Cleaning",
floor:"10th Floor",
priority:"Medium",
status:"Pending",
staff:"Anita Sharma",
time:"02:00 PM",
updated:"01:50 PM"
},
{
id:7,
room:"204",
task:"Bathroom Cleaning",
floor:"2nd Floor",
priority:"Medium",
status:"Pending",
staff:"Pooja Sharma",
time:"11:00 AM",
updated:"10:40 AM"
},
{
id:8,
room:"301",
task:"Bed Making",
floor:"3rd Floor",
priority:"Low",
status:"Completed",
staff:"Sunita Devi",
time:"09:45 AM",
updated:"09:50 AM"
},
{
id:9,
room:"402",
task:"Regular Cleaning",
floor:"4th Floor",
priority:"Medium",
status:"In Progress",
staff:"Rajesh Kumar",
time:"12:15 PM",
updated:"12:05 PM"
},
{
id:10,
room:"901",
task:"Room Inspection",
floor:"9th Floor",
priority:"High",
status:"Emergency",
staff:"Manager",
time:"05:00 PM",
updated:"04:50 PM"
}
]);

 const [filteredTasks,setFilteredTasks]=useState(tasks);
 const totalPages = Math.ceil(filteredTasks.length / rowsPerPage);

const indexOfLastRow = currentPage * rowsPerPage;

const indexOfFirstRow = indexOfLastRow - rowsPerPage;

const currentRows = filteredTasks.slice(
  indexOfFirstRow,
  indexOfLastRow
);
 useEffect(()=>{

let data=[...tasks];

if(activeTab!=="All"){
data=data.filter(x=>x.status===activeTab);
}

if(floor!=="All Floors"){
data=data.filter(x=>x.floor===floor);
}

if(search){

data=data.filter(x=>

x.room.toLowerCase().includes(search.toLowerCase()) ||

x.task.toLowerCase().includes(search.toLowerCase()) ||

x.staff.toLowerCase().includes(search.toLowerCase())

);

}

setFilteredTasks(data);
setCurrentPage(1);

},[tasks,activeTab,floor,search]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

 const exportToExcel = () => {

  const excelData = filteredTasks.map((item) => ({
    Room: item.room,
    Task: item.task,
    Floor: item.floor,
    Priority: item.priority,
    Status: item.status,
    "Assigned To": item.staff,
    Time: item.time,
    "Last Updated": item.updated,
  }));

  const worksheet = XLSX.utils.json_to_sheet(excelData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Housekeeping Tasks"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([excelBuffer], {
    type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(blob, "HousekeepingTasks.xlsx");
};

if (!open) return null;
const handleView = (task) => {
  alert(`
Room : ${task.room}
Task : ${task.task}
Floor : ${task.floor}
Priority : ${task.priority}
Status : ${task.status}
Staff : ${task.staff}
Time : ${task.time}
`);
};

const handleEdit = (id) => {
  const taskName = prompt("Edit Task");

  if (!taskName) return;

  setTasks(
    tasks.map((item) =>
      item.id === id
        ? { ...item, task: taskName }
        : item
    )
  );

  setOpenMenu(null);
};

const handleAssign = (id) => {
  const staff = prompt("Enter Staff Name");

  if (!staff) return;

  setTasks(
    tasks.map((item) =>
      item.id === id
        ? { ...item, staff }
        : item
    )
  );

  setOpenMenu(null);
};

const handleComplete = (id) => {
  setTasks(
    tasks.map((item) =>
      item.id === id
        ? { ...item, status: "Completed" }
        : item
    )
  );

  setOpenMenu(null);
};

const handleDelete = (id) => {

  if (window.confirm("Delete this task ?")) {

    setTasks(tasks.filter((item) => item.id !== id));

  }

  setOpenMenu(null);

};

  return (
    <div className="viewTaskOverlay">

      <div className="viewTaskPopup">

        {/* HEADER */}

        <div className="viewTaskHeader">

          <div>

            <h2>All Housekeeping Tasks</h2>

            <p>
              Monitor and manage all housekeeping
              activities.
            </p>

          </div>

          <button
            className="closePopupBtn"
            onClick={onClose}
          >
            <FiX />
          </button>

        </div>

        {/* STATUS TABS */}

        <div className="statusTabs">

          {statusTabs.map((item) => (

            <button

              key={item.id}

              className={
                activeTab === item.title
                  ? "statusBtn activeStatus"
                  : "statusBtn"
              }

              style={
                activeTab === item.title
                  ? {
                      borderColor: item.color,
                      color: item.color,
                    }
                  : {}
              }

              onClick={() =>
                setActiveTab(item.title)
              }

            >

              {item.title}

              <span
                style={{
                  background: item.color,
                }}
              >
                0
              </span>

            </button>

          ))}

        </div>

        {/* ===== Toolbar Part 1B ===== */}
        {/* ================= TOOLBAR ================= */}

<div className="taskToolbar">

  <div className="searchBox">

    <FiSearch className="searchIcon" />

    <input
      type="text"
      placeholder="Search room, task or staff..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

  </div>

  <div className="toolbarRight">

    <select
      className="floorSelect"
      value={floor}
      onChange={(e) => setFloor(e.target.value)}
    >

      <option>All Floors</option>
      <option>1st Floor</option>
      <option>2nd Floor</option>
      <option>3rd Floor</option>
      <option>4th Floor</option>
      <option>5th Floor</option>
      <option>6th Floor</option>
      <option>7th Floor</option>
      <option>8th Floor</option>
      <option>9th Floor</option>
      <option>10th Floor</option>

    </select>

    <button className="toolbarBtn">

      <FiFilter />

      Filter

    </button>

  <button
  className="toolbarBtn"
  onClick={exportToExcel}
>
  <FiDownload />
  Export
</button>

    <button className="refreshBtn">

      <FiRefreshCcw />

    </button>

  </div>

</div>

{/* ================= TABLE ================= */}

<div className="tableContainer">

<table className="taskTable">

<thead>

<tr>

<th>Room</th>

<th>Task</th>

<th>Floor</th>

<th>Priority</th>

<th>Status</th>

<th>Assigned To</th>

<th>Time</th>

<th>Last Updated</th>

<th align="center">Action</th>

</tr>

</thead>

<tbody>

{filteredTasks.length === 0 ? (

<tr>

<td colSpan="9" className="emptyRow">

No Tasks Found

</td>

</tr>

) : (

currentRows.map((task) => (

<tr key={task.id}>

<td>

<strong>#{task.room}</strong>

</td>

<td>{task.task}</td>

<td>{task.floor}</td>

<td>

<span
className={`priorityBadge ${task.priority
.replace(/\s/g, "")
.toLowerCase()}`}
>

{task.priority}

</span>

</td>

<td>

<span
className={`statusBadge ${task.status
.replace(/\s/g, "")
.toLowerCase()}`}
>

{task.status}

</span>

</td>

<td>

<div className="staffInfo">

<div className="staffAvatar">

{task.staff.charAt(0)}

</div>

<span>{task.staff}</span>

</div>

</td>

<td>{task.time}</td>

<td>{task.updated}</td>

<td style={{ position: "relative" }}>

<button
className="actionBtn"
onClick={() =>
setOpenMenu(
openMenu === task.id ? null : task.id
)
}
>

<FiMoreVertical />

</button>

{openMenu === task.id && (

<div className="actionMenu">

<button onClick={() => handleView(task)}>

<FiEye />

View

</button>

<button onClick={() => handleEdit(task.id)}>

<FiEdit2 />

Edit

</button>
<button onClick={() => handleAssign(task.id)}>

<FiUserPlus />

Assign Staff

</button>

<button onClick={() => handleComplete(task.id)}>

<FiCheckCircle />

Mark Complete

</button>
<button
className="deleteBtn"
onClick={() => handleDelete(task.id)}
>

<FiTrash2 />

Delete

</button>
</div>

)}

</td>

</tr>

))

)}

</tbody>

</table>

</div>

{/* ================= FOOTER ================= */}
<div className="tableFooter">

<div>

Showing

<strong>{indexOfFirstRow+1}</strong>

to

<strong>

{Math.min(indexOfLastRow,filteredTasks.length)}

</strong>

of

<strong>{filteredTasks.length}</strong>

Tasks

</div>

<div className="pagination">

<button

disabled={currentPage===1}

onClick={()=>setCurrentPage(currentPage-1)}

>

Previous

</button>

{

Array.from({length:totalPages},(_,i)=>(

<button

key={i}

className={currentPage===i+1?"activePage":""}

onClick={()=>setCurrentPage(i+1)}

>

{i+1}

</button>

))

}

<button

disabled={currentPage===totalPages}

onClick={()=>setCurrentPage(currentPage+1)}

>

Next

</button>

</div>



</div>

</div>

</div>
);
}