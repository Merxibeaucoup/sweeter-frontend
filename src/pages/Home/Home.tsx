import React from "react";

import "./home.css";
import "../../assets/styles/global.css";
import Modal from "../../components/modal/Modal";
import RegisterModal from "../../features/register/components/Registmodal/RegisterModal";

const Home: React.FC = () => {
  return (
    <div className="home-container bg-color">
      <RegisterModal />
    </div>
  );
};

export default Home;
