import "./Rooms.css";
import { useState } from "react";

import standardImg from "../assets/standardRoom.jpg";
import deluxeImg from "../assets/deluxe-room.jpg";
import superDeluxeImg from "../assets/super-deluxe-room.jpg";
import familyImg from "../assets/family-room.jpg";
import vipImg from "../assets/vip-room.jpg";
import suiteImg from "../assets/suite-room.jpg";
import executiveImg from "../assets/executive-room.jpg";
import singleImg from "../assets/single-room.jpg";
import doubleImg from "../assets/double-room.jpg";
import premiumImg from "../assets/premium-room.jpg";

import standardView from "../assets/Standard-Rooms.jpg";
import standardWashroom from "../assets/standard-room-washroom.jpg";

import deluxeView from "../assets/DeluxeView.jpg";

import superDeluxeView from "../assets/super-deluxe-view.jpg";

import familyView from "../assets/familywashroom.jpg";
import familyKitchen from "../assets/familykitchen.jpg";

import vipView from "../assets/VIPview.jpg";
import vipWashroom from "../assets/VIPWashroom.jpg";

import suiteView from "../assets/suiteroomview.jpg";

import executiveView from "../assets/executiveview.jpg";

import singleView from "../assets/single-room-view.jpg";
import premiumView from "../assets/premium-view.jpg";

import doubleView from "../assets/double-room-balcony.jpg";
import premiumWashroom from "../assets/premium-washroom.jpg";

const roomData = [
  {
    type: "Standard Room",
    image: standardImg,
    price: 3000
  },
  {
    type: "Deluxe Room",
    image: deluxeImg,
    price: 4000
  },
  {
    type: "Super Deluxe Room",
    image: superDeluxeImg,
    price: 5000
  },
  {
    type: "Family Room",
    image: familyImg,
    price: 7000
  },
  {
    type: "VIP Room",
    image: vipImg,
    price: 12000
  },
  {
    type: "Suite Room",
    image: suiteImg,
    price: 6000
  },
  {
    type: "Executive Room",
    image: executiveImg,
    price: 5500
  },
  {
    type: "Single Room",
    image: singleImg,
    price: 2500
  },
  {
    type: "Double Room",
    image: doubleImg,
    price: 3500
  },
  {
    type: "Premium Room",
    image: premiumImg,
    price: 9000
  }
];

const roomGallery = {


"Standard Room":[
 standardImg,
 standardView,
 standardWashroom
],


"Deluxe Room":[
 deluxeImg,
 deluxeView
],


"Super Deluxe Room":[
 superDeluxeImg,
 superDeluxeView
],


"Family Room":[
 familyImg,
 familyView,
 familyKitchen
],


"VIP Room":[
 vipImg,
 vipView,
 vipWashroom
],


"Suite Room":[
 suiteImg,
 suiteView
],


"Executive Room":[
 executiveImg,
 executiveView
],


"Single Room":[
 singleImg,
 singleView
],


"Double Room":[
 doubleImg,
 doubleView
],


"Premium Room":[
 premiumImg,
 premiumView,
 premiumWashroom
]

};
  const roomImages = [
  standardImg,
  deluxeImg,
  superDeluxeImg,
  familyImg,
  vipImg,
  suiteImg,
  executiveImg,
  singleImg,
  doubleImg,
  premiumImg,
];

const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Super Deluxe Room",
  "Family Room",
  "VIP Room",
  "Suite Room",
  "Executive Room",
  "Single Room",
  "Double Room",
  "Premium Room"
];



const generateRooms = () => {
  const rooms = [];

  for (let i = 1; i <= 100; i++) {

    const room = roomData[(i - 1) % roomData.length];

  rooms.push({
  id: i,
  roomNo: `Room ${100 + i}`,
  floor: Math.ceil(i / 25),
  type: room.type,
  price: room.price,
  image: room.image,
  status: i % 3 === 0 ? "Booked" : "Available",
  acType: i % 2 === 0 ? "AC" : "Non AC"
});
  }

  return rooms;
};


function Rooms() {
  const [rooms, setRooms] = useState(generateRooms());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [editRoom, setEditRoom] = useState(null);

  const [galleryRoom, setGalleryRoom] = useState(null);
  const [showAmenities, setShowAmenities] = useState(false);
const [currentImage, setCurrentImage] = useState(0);
const [showAddRoom, setShowAddRoom] = useState(false);
const [roomTypeFilter, setRoomTypeFilter] = useState("All");
const [statusFilter, setStatusFilter] = useState("All");
const [acFilter, setAcFilter] = useState("All");
const [floorFilter, setFloorFilter] = useState("All");


const [newRoom, setNewRoom] = useState({
  roomNo: "",
  floor: "",
  type: "Standard Room",
  price: "",
  status: "Available",
  image: standardImg,
});

const addRoom = () => {
  const room = {
    id: rooms.length + 1,
    roomNo: newRoom.roomNo,
    floor: newRoom.floor,
    type: newRoom.type,
    price: Number(newRoom.price),
    status: newRoom.status,
    image: newRoom.image,
  };

  setRooms([...rooms, room]);

  setShowAddRoom(false);

  setNewRoom({
    roomNo: "",
    floor: "",
    type: "Standard Room",
    price: "",
    status: "Available",
    image: standardImg,
  });
};
  const roomsPerPage = 25;
  const filteredRooms = rooms.filter((room) => {

  const typeMatch =
    roomTypeFilter === "All" ||
    room.type === roomTypeFilter;

const statusMatch =
  statusFilter === "All" ||

  (statusFilter === "Available" &&
    room.status === "Available") ||

  (statusFilter === "Not Available" &&
    room.status !== "Available");
  const acMatch =
    acFilter === "All" ||
    room.acType === acFilter;

  const floorMatch =
    floorFilter === "All" ||
    room.floor === Number(floorFilter);

  return (
    typeMatch &&
    statusMatch &&
    acMatch &&
    floorMatch
  );
});

const indexOfLastRoom = currentPage * roomsPerPage;
const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;

const currentRooms = filteredRooms.slice(
  indexOfFirstRoom,
  indexOfLastRoom
);

  const deleteRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const saveRoom = () => {
    setRooms(
      rooms.map((room) =>
        room.id === editRoom.id ? editRoom : room
      )
    );

    setEditRoom(null);
  };

  return (


<>
  <div className="rooms-header">

    <div className="header-title">
      <h1>Rooms Management</h1>
      <p>Total Rooms: {rooms.length}</p>
    </div>

    <button
      className="add-room-btn"
      onClick={() => setShowAddRoom(true)}
    >
      + Add New Room
    </button>

  </div>



    
  <div className="rooms-page">

    

      <div className="room-filters">

  <select
    value={roomTypeFilter}
    onChange={(e) =>
      setRoomTypeFilter(e.target.value)
    }
  >
    <option value="All">All Room Types</option>

    {roomTypes.map((room) => (
      <option key={room}>
        {room}
      </option>
    ))}
  </select>

 <select
  value={statusFilter}
  onChange={(e) =>
    setStatusFilter(e.target.value)
  }
>
  <option value="All">
    All Rooms
  </option>

  <option value="Available">
    Available
  </option>

  <option value="Not Available">
    Not Available
  </option>


  <option value="Booked">
    Booked
  </option>

  <option value="Maintenance">
    Maintenance
  </option>

  <option value="Occupied">
    Occupied
  </option>
</select>
  <select
    value={acFilter}
    onChange={(e) =>
      setAcFilter(e.target.value)
    }
  >
    <option value="All">AC & Non AC</option>
    <option value="AC">AC</option>
    <option value="Non AC">Non AC</option>
  </select>

 
</div>
      

      <div className="room-grid">

        {currentRooms.map((room) => (
        <div className="room-card" key={room.id}>

  <div className="img-box">
    <img src={room.image} alt={room.type} />

    <span
      className={
        room.status === "Available"
          ? "available"
          : "booked"
      }
    >
      {room.status}
    </span>
  </div>

  <div className="room-content">

    <h2>Room {room.id}</h2>

    <div className="room-meta">
      <span>Floor {room.floor}</span>
      <span>•</span>
      <span>{room.acType}</span>
    </div>

    <h3>{room.type}</h3>

    <div className="price">
      ₹{room.price}
      <span> Day/Night</span>
    </div>

    <div className="actions">

  <button
  className="view-btn"
  onClick={() => {
    console.log(room);
    setSelectedRoom(room);
  }}
>
  View Details
</button>


  <button
    className="gallery-btn"
    onClick={() => {
      setGalleryRoom(room);
      setCurrentImage(0);
    }}
  >
    Gallery
  </button>


  <button
    className="delete"
    onClick={() => deleteRoom(room.id)}
  >
    Delete
  </button>



    </div>



  

            </div>

          </div>
        ))}

     </div>
     

     

<div className="pagination">

  <button
    onClick={() =>
      currentPage > 1 &&
      setCurrentPage(currentPage - 1)
    }
  >
    ❮
  </button>

  {[1,2,3,4].map((page)=>(
    <button
      key={page}
      className={
        currentPage===page
        ? "active-page"
        : ""
      }
      onClick={() =>
        setCurrentPage(page)
      }
    >
      {page}
    </button>
  ))}

  <button
    onClick={() =>
      currentPage < 4 &&
      setCurrentPage(currentPage + 1)
    }
  >
    ❯
  </button>

</div>

   {selectedRoom && (
<div className="modal-overlay">

  <div className="modal">

    <button
      className="close"
      onClick={() => setSelectedRoom(null)}
    >
      ✕
    </button>


    <img
      src={selectedRoom.image}
      className="modal-img"
      alt=""
    />


    <h2>
      {selectedRoom.type}
    </h2>


    <p>
      Room No : {selectedRoom.roomNo}
    </p>


    <p>
      Floor : {selectedRoom.floor}
    </p>


    <p>
      AC Type : {selectedRoom.acType}
    </p>


    <p>
      Price : ₹{selectedRoom.price} / Night
    </p>


    <p>
      Status : {selectedRoom.status}
    </p>


    <button
      className="edit-btn"
      onClick={()=>{
        setEditRoom(selectedRoom);
        setSelectedRoom(null);
      }}
    >
      Edit Room
    </button>


  </div>

</div>
)}
  
     {editRoom && (
  <div className="modal-overlay">

    <div className="modal">

      <h2>Edit Room</h2>

      <label>Room Number</label>
      <input
        value={editRoom.id}
        disabled
      />

      <label>Room Type</label>
      <select
        value={editRoom.type}
        onChange={(e) =>
          setEditRoom({
            ...editRoom,
            type: e.target.value,
          })
        }
      >
      {
roomTypes.map((room,index)=>(
<option key={index}>
  {room}
</option>
))
}
      </select>

      <label>Floor</label>
      <input
        value={editRoom.floor}
        onChange={(e) =>
          setEditRoom({
            ...editRoom,
            floor: e.target.value,
          })
        }
      />

      <label>Price Per Night</label>
      <input
        value={editRoom.price}
        onChange={(e) =>
          setEditRoom({
            ...editRoom,
            price: e.target.value,
          })
        }
      />

      <label>Status</label>
      <select
        value={editRoom.status}
        onChange={(e) =>
          setEditRoom({
            ...editRoom,
            status: e.target.value,
          })
        }
      >

        
        <option>Available</option>
        <option>Occupied</option>
        <option>Maintenance</option>
      </select>

      <label>Capacity</label>


      <input
        value={editRoom.capacity || "2 Guests"}
        onChange={(e) =>
          setEditRoom({
            ...editRoom,
            capacity: e.target.value,
          })
        }
      />

      <div className="amenities-box">

         <label>Services & Amenities</label>

  <span>☕ Electric Kettle</span>
  <span>📺 Flat Screen TV</span>
  <span>❄ Air-conditioning</span>
  <span>🥤 Mini Bar</span>
  <span>☕ Tea/Coffee Maker</span>
  <span>🚪 Electronic Door Lock</span>
  <span>📶 Complimentary WiFi</span>
  <span>💨 Hair Dryer</span>
  <span>🧺 Towels</span>
  <span>🧴 Toiletries</span>

</div>



    

      <div className="amenities-box">


      </div>

      <div className="edit-buttons">


  
  <button
    className="save-btn"
    onClick={saveRoom}
  >
    Save
  </button>

  <button
    className="cancel-btn"
    onClick={() => setEditRoom(null)}
  >
    Cancel
  </button>

</div>


          </div>

        </div>
      )}

 

{/* ADD ROOM MODAL */}

    {showAddRoom && (
  <div className="modal-overlay">
    <div className="modal">

      <h2>Add New Room</h2>

      <label>Room Number</label>
      <input
        type="text"
        value={newRoom.roomNo}
        onChange={(e) =>
          setNewRoom({
            ...newRoom,
            roomNo: e.target.value,
          })
        }
      />

      <label>Floor</label>
      <input
        type="number"
        value={newRoom.floor}
        onChange={(e) =>
          setNewRoom({
            ...newRoom,
            floor: e.target.value,
          })
        }
      />

<label>Room Type</label>
<select
  value={newRoom.type}
  onChange={(e) =>
    setNewRoom({
      ...newRoom,
      type: e.target.value,
    })
  }
>
  {roomTypes.map((room, index) => (
    <option key={index} value={room}>
      {room}
    </option>
  ))}
</select>

<label>Floor</label>
<select
  value={newRoom.floor}
  onChange={(e) =>
    setNewRoom({
      ...newRoom,
      floor: e.target.value,
    })
  }
>
  <option value="">Select Floor</option>
  <option value="1">Floor 1</option>
  <option value="2">Floor 2</option>
  <option value="3">Floor 3</option>
  <option value="4">Floor 4</option>
</select>

      <label>Price</label>
      <input
        type="number"
        value={newRoom.price}
        onChange={(e)=>
          setNewRoom({
            ...newRoom,
            price:e.target.value
          })
        }
      />

      <label>Status</label>
      <select
        value={newRoom.status}
        onChange={(e)=>
          setNewRoom({
            ...newRoom,
            status:e.target.value
          })
        }
      >
        <option>Available</option>
        <option>Booked</option>
      </select>

      <div className="edit-buttons">

        <button
          className="save-btn"
          onClick={addRoom}
        >
          Add Room
        </button>

        <button
          className="cancel-btn"
          onClick={() => setShowAddRoom(false)}
        >
          Cancel
        </button>

      </div>

    </div>
  </div>
)}

{/* GALLERY MODAL */}

{/* GALLERY MODAL */}

{galleryRoom && (
  <div className="modal-overlay">

    <div className="gallery-modal">

      <button
        className="close"
        onClick={() => setGalleryRoom(null)}
      >
        ✕
      </button>

      <h2>{galleryRoom.type} Gallery</h2>

      <div className="gallery-slider">

        <button
          className="nav-btn"
          onClick={() =>
            setCurrentImage(
              currentImage === 0
                ? roomGallery[galleryRoom.type].length - 1
                : currentImage - 1
            )
          }
        >
          ❮
        </button>

        <img
          className="main-gallery-image"
          src={roomGallery[galleryRoom.type][currentImage]}
          alt=""
        />

        <button
          className="nav-btn"
          onClick={() =>
            setCurrentImage(
              currentImage ===
              roomGallery[galleryRoom.type].length - 1
                ? 0
                : currentImage + 1
            )
          }
        >
          ❯
        </button>

      </div>

      <div className="thumbnail-row">

        {roomGallery[galleryRoom.type].map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={
              currentImage === index
                ? "thumb active-thumb"
                : "thumb"
            }
            onClick={() => setCurrentImage(index)}
          />
        ))}

      </div>

   <div className="room-info-box">

  <h3>Room Amenities</h3>

  <div className="room-features">
    <span>📶 Free WiFi</span>
    <span>❄ Air Conditioning</span>
    <span>📺 Smart TV</span>
    <span>☕ Tea/Coffee Maker</span>
    <span>🍷 Mini Bar</span>
    <span>🛁 Bathtub</span>
    <span>🍽 Restaurant</span>
    <span>🛎 Room Service</span>
  </div>

  

  <button
    className="view-all-amenities-btn"
    onClick={() => setShowAmenities(true)}
  >
    View All Amenities
  </button>

</div>

    </div>

  </div>
)}
 

 {/* ALL AMENITIES MODAL */}

{showAmenities && (
  <div className="modal-overlay">

    <div className="amenities-modal">

      <button
        className="close"
        onClick={() => setShowAmenities(false)}
      >
        ✕
      </button>

      <h2>All Room Amenities</h2>

      <div className="amenities-section">

        <h3>🛏 Room Amenities</h3>

        <div className="amenities-grid">
          <span>📶 Free WiFi</span>
          <span>❄ Air Conditioning</span>
          <span>📺 Smart TV</span>
          <span>☕ Tea/Coffee Maker</span>
          <span>🍷 Mini Bar</span>
          <span>🛋 Sofa Seating</span>
          <span>🧺 Laundry Service</span>
          <span>🔐 Digital Locker</span>
          <span>☎ Telephone</span>
          <span>💡 Reading Lamp</span>
        </div>

      </div>

      <div className="amenities-section">

        <h3>🚿 Washroom Amenities</h3>

        <div className="amenities-grid">
          <span>🚿 Hot Shower</span>
          <span>🛁 Bathtub</span>
          <span>🧴 Shampoo</span>
          <span>🪥 Dental Kit</span>
          <span>🧼 Soap</span>
          <span>🧻 Tissue Paper</span>
          <span>💨 Hair Dryer</span>
          <span>🪞 Vanity Mirror</span>
          <span>🚽 Western Toilet</span>
          <span>🧺 Fresh Towels</span>
        </div>

      </div>

      <div className="amenities-section">

        <h3>🍳 Kitchen Amenities</h3>


        <div className="amenities-grid">
          <span>🍽 Dining Table</span>
          <span>☕ Coffee Machine</span>
          <span>🍴 Cutlery Set</span>
          <span>🥛 Refrigerator</span>
          <span>🔥 Microwave</span>
          <span>🍳 Induction Cooktop</span>
          <span>🫖 Electric Kettle</span>
          <span>🥤 Water Bottles</span>
          <span>🍵 Tea Kit</span>
          <span>🥄 Kitchen Utensils</span>
        </div>

        <div className="amenities-actions">
 <button
  className="close"
  onClick={() => setShowAmenities(false)}
>
  ✕
</button>
</div>

      </div>

    </div>

  </div>
)}
   
    </div> {/* rooms-page end */}
    
    
  </>
);
}

export default Rooms;