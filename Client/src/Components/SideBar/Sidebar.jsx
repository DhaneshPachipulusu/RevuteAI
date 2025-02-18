import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SideBar.css';
import { MdOutlineDashboard } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineTaskAlt } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = ({ setSection }) => {
  const navigate = useNavigate();

  const handleIntroNavigation = () => {
    setSection('task1');
    navigate('/task1');
  };

  const handleReportListNavigation = () => {
    const userId = localStorage.getItem('userId'); // Ensure userId exists in localStorage
    if (userId) {
      setSection('reportlist');
      navigate(`/reportlist/${userId}`); // Navigate to reportlist with userId
    } else {
      alert("User ID not found in localStorage");
    }
  };
  

  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => setSection('dashboard')}><MdOutlineDashboard size={20}/> Home Page</li>
        <li onClick={() => setSection('announcements')}><GrAnnounce size={20}/> Announcements</li>
        <li onClick={handleIntroNavigation}><MdOutlineTaskAlt size={20}/> Self Intro Pitch</li>
        <li onClick={() => setSection('task2')}><MdOutlineTaskAlt size={20}/> Bot Mock Pitch</li>
        <li onClick={handleReportListNavigation}><TbReportSearch size={20}/> Report</li>
      </ul>
    </nav>
  );
};

export default Sidebar;