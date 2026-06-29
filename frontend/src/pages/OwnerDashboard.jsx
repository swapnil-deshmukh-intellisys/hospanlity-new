import { useState } from "react";
import ActivityPopup from "./ActivityPopup";
import Customers from "./Customers";
import CheckInOut from "./CheckInOut";
import Housekeeping from "./Housekeeping";
import Maintenance from "./Maintenance";
import RoomStatusPopup from "./RoomStatusPopup";
import RecentReviewsPopup from "./RecentReviewsPopup";
import "./OwnerDashboard.css";
import Rooms from "./Rooms";
import DashboardStats from "../sections/DashboardStats";
import RevenueOverview from "../sections/RevenueOverview";
import RoomAvailability from "../sections/RoomAvailability";
import OverallRating from "../sections/OverallRating";
import BookingOverview from "../sections/BookingOverview";
import BookingStatus from "../sections/BookingStatus";
import QuickActions from "../sections/QuickActions";
import RecentBookings from "../sections/RecentBookings";
import RecentActivities from "../sections/RecentActivities";
import HeaderDashboard from "./HotelownerDashboard/HeaderDashboard";
import RoomAvailabilityPopup from "../sections/RoomAvailabilityPopup";
import GuestReviewsPopup from "../sections/GuestReviewsPopup";
import RecentBookingsPopup from "../sections/RecentBookingsPopup";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

import {
  FaBars,
  FaBell,
  FaCalendarAlt,
  FaHome,
  FaBed,
  FaUsers,
  FaClipboardCheck,
  FaBroom,
  FaTools,
  FaUserTie,
  FaBuilding,
  FaClock,
  FaMoneyBill,
  FaChartBar,
  FaPlus,
  FaEye,
  FaStar,
  FaCog,
  FaHotel,
  FaCalendarCheck,
  FaRupeeSign,
  FaUserFriends
} from "react-icons/fa";



function OwnerDashboard() {

  

  const handleAddCustomer = () => {
  setActivePage("addCustomer");
};

 const [showAllActivities, setShowAllActivities] = useState(false);

const [showActivityPopup, setShowActivityPopup] = useState(false);
const [showGuestPopup, setShowGuestPopup] = useState(false);
const [range, setRange] = useState("week");
const [plan, setPlan] = useState("Basic");
const [showRoomPopup, setShowRoomPopup] = useState(false);
const [showReviewsPopup, setShowReviewsPopup] = useState(false);
const [showRecentBookings, setShowRecentBookings] = useState(false);





    const [activePage,setActivePage] = useState("dashboard");
    const stats = [
  {
    title: "Today's Bookings",
    value: "18",
    growth: "+12%",
    icon: "📅",
  },
  {
    title: "Check-ins Today",
    value: "12",
    growth: "+8%",
    icon: "✅",
  },
  {
    title: "Check-outs Today",
    value: "10",
    growth: "+5%",
    icon: "🚪",
  },
  {
    title: "Occupancy Rate",
    value: "72%",
    growth: "+6%",
    icon: "📈",
  },
  {
    title: "Today's Revenue",
    value: "₹1,25,000",
    growth: "+15%",
    icon: "💰",
  },

];
 const occupancyData = [
  { name: "Occupied", value: 72 },
  { name: "Available", value: 20 },
  { name: "Maintenance", value: 8 },
];

const COLORS = ["#6C4CFF", "#2ECC71", "#FF7A45"];

const revenueData = [
  { day: "1 May", revenue: 18 },
  { day: "6 May", revenue: 15 },
  { day: "11 May", revenue: 12 },
  { day: "16 May", revenue: 10 },
  { day: "21 May", revenue: 8 },
  { day: "26 May", revenue: 6 },
  { day: "31 May", revenue: 5 },
];

const reviews = [
{
  name:"Amit Verma",
  review:"Excellent service and clean rooms.",
  rating:5
},
{
  name:"Neha Singh",
  review:"Great experience and hospitality.",
  rating:5
},
{
  name:"Rahul Patil",
  review:"Nice staff and quick service.",
  rating:4
},
{
  name:"Priya Sharma",
  review:"Very comfortable stay.",
  rating:5
},
{
  name:"Karan Mehta",
  review:"Food quality was excellent.",
  rating:4
},
{
  name:"Sneha Joshi",
  review:"Rooms were neat and spacious.",
  rating:5
},
{
  name:"Vikas Gupta",
  review:"Check-in process was smooth.",
  rating:4
},
{
  name:"Pooja Kulkarni",
  review:"Amazing hotel experience.",
  rating:5
}
];

const roomPerformance = [
  { type: "Deluxe", value: 75 },
  { type: "Executive", value: 68 },
  { type: "Suite", value: 85 },
  { type: "Standard", value: 60 },
];
 const [bookings, setBookings] = useState([
  {
    guest: "Rajesh Sharma",
    room: "101 (Deluxe)",
    checkin: "24 May 2024",
    checkout: "26 May 2024",
    amount: "₹ 8,000",
    status: "Confirmed",
  },
  {
    guest: "Amit Verma",
    room: "205 (Executive)",
    checkin: "24 May 2024",
    checkout: "25 May 2024",
    amount: "₹ 7,500",
    status: "Checked In",
  },
  {
    guest: "Neha Singh",
    room: "302 (Suite)",
    checkin: "24 May 2024",
    checkout: "27 May 2024",
    amount: "₹ 12,000",
    status: "Checked Out",
  },
  {
    guest: "Priya Patel",
    room: "105 (Deluxe)",
    checkin: "24 May 2024",
    checkout: "26 May 2024",
    amount: "₹ 6,000",
    status: "Pending",
  },
]);

const todayActivities = [
  {
    title: "New Booking",
    details: "Room 101 booked by Rajesh Sharma",
    time: "09:30 AM",
  },
  {
    title: "Check-In Completed",
    details: "Amit Verma checked into Room 205",
    time: "11:15 AM",
  },
  {
    title: "Payment Received",
    details: "₹7,500 received from Priya Patel",
    time: "01:20 PM",
  },
  {
    title: "Maintenance Request",
    details: "Room 403 AC service requested",
    time: "03:45 PM",
  },
];
const revenueWeek = [
  { day: "Mon", revenue: 18 },
  { day: "Tue", revenue: 15 },
  { day: "Wed", revenue: 12 },
  { day: "Thu", revenue: 10 },
  { day: "Fri", revenue: 8 },
  { day: "Sat", revenue: 6 },
  { day: "Sun", revenue: 5 },
];

const revenueMonth = [
  { day: "Week 1", revenue: 65 },
  { day: "Week 2", revenue: 78 },
  { day: "Week 3", revenue: 90 },
  { day: "Week 4", revenue: 110 },
];

const revenueYear = [
  { day: "Jan", revenue: 120 },
  { day: "Feb", revenue: 140 },
  { day: "Mar", revenue: 160 },
  { day: "Apr", revenue: 150 },
  { day: "May", revenue: 180 },
  { day: "Jun", revenue: 200 },
];
const getRevenueData = () => {
  if (range === "week") return revenueWeek;
  if (range === "month") return revenueMonth;
  return revenueYear;
};
  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">
          <h2>StayHub</h2>
          <p>Hospitality Management System</p>
        </div>

        <ul>

       <li
  className={activePage === "dashboard" ? "active" : ""}
  onClick={() => setActivePage("dashboard")}
>
  <FaHome /> Dashboard
</li>

          <h4>HOTEL OPERATIONS</h4>

<li
  className={activePage === "rooms" ? "active" : ""}
  onClick={() => setActivePage("rooms")}
>
  <FaBed /> Rooms
</li>

<li
  className={activePage === "bookings" ? "active" : ""}
  onClick={() => setActivePage("bookings")}
>
  <FaCalendarAlt /> Bookings
</li>


<li
  className={activePage === "customers" ? "active" : ""}
  onClick={() => setActivePage("customers")}
>
  <FaUsers /> Customers
</li>

<li
  className={activePage === "checkinout" ? "active" : ""}
  onClick={() => setActivePage("checkinout")}
>
  <FaClipboardCheck /> Check-in / Check-out
</li>

<li
  className={activePage === "housekeeping" ? "active" : ""}
  onClick={() => setActivePage("housekeeping")}
>
  <FaBroom /> Housekeeping
</li>

<li
  className={activePage === "maintenance" ? "active" : ""}
  onClick={() => setActivePage("maintenance")}
>
  <FaTools /> Maintenance
</li>

          <h4>STAFF MANAGEMENT</h4>

          <li><FaUserTie /> Staff</li>
          <li><FaBuilding /> Departments</li>
          <li><FaClock /> Attendance</li>

          <h4>FINANCE & REPORTS</h4>

          <li><FaMoneyBill /> Billing</li>
          <li><FaChartBar /> Reports</li>
          <li><FaChartBar /> Revenue</li>

        </ul>

        <div className="upgrade-card">
          <h3>Upgrade Your Plan</h3>
          <p>Unlock more features</p>
          <button>Upgrade Now</button>
        </div>

      </aside>
<main className="main">

 

{activePage === "dashboard" && (
  <>



    {/* WELCOME */}

    <div className="welcome">

          <div className="h2">
          
          </div>

    {/* Header */}

    <HeaderDashboard />


        </div>
  {/* Dashboard Stats */}
    <div className="dashboard-stats-section">
      <DashboardStats />
    </div>

 <div className="dashboard-chart-row">

  <div className="revenue-overview-section">
    <RevenueOverview />
  </div>

  <div className="room-availability-section">
   <RoomAvailability
    onViewDetails={() => setShowRoomPopup(true)}
/>
  </div>

 <div className="overall-rating-section">
    <OverallRating
        onOpenReviews={() => setShowReviewsPopup(true)}
    />
</div>

</div>

<div className="booking-row">

    <div className="booking-overview-section">
        <BookingOverview />
    </div>

    <div className="booking-status-section">
        <BookingStatus />
    </div>
  
     <div className="quick-actions-section">
        <QuickActions />
    </div>
</div>
<div className="recent-section-row">

   <div className="recent-bookings-section">
  <RecentBookings
      onOpen={() => setShowRecentBookings(true)}
  />
</div>

    <div className="recent-activities-section">
        <RecentActivities />
    </div>

</div>
  </>
)}


{activePage === "rooms" && <Rooms />}

{activePage === "customers" && <Customers />}

{activePage === "checkinout" && <CheckInOut />}

{activePage === "housekeeping" && <Housekeeping />}

{activePage === "maintenance" && <Maintenance />}


</main>

{showRoomPopup && (
  <RoomAvailabilityPopup
    onClose={() => setShowRoomPopup(false)}
  />

  
)}
{showReviewsPopup && (
    <GuestReviewsPopup
        onClose={() => setShowReviewsPopup(false)}
    />
)}

{showRecentBookings && (
  <RecentBookingsPopup
    onClose={() => setShowRecentBookings(false)}
  />
)}
</div>
);
}

export default OwnerDashboard;