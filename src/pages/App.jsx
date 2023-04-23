import React from "react";
import "../styles/global.css";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";


export default function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <MainContent />
      <Footer />
    </div>
  );
}
