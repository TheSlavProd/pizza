import React from "react";
import { Outlet } from "react-router-dom";
import { MarketFooter } from "../components/featured/footer";
import { MarketHeader } from "../components/featured/header";
import { Header } from "../components/header";

export const MainLayout: React.FC = () => {
  return (
    <>
      <MarketHeader />
      <div className="wrapper">
        {/* <Header /> */}
        <div className="content">
          <Outlet />
        </div>
      </div>
      <MarketFooter />
    </>
  );
};
