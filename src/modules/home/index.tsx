import React from "react";
import { Link } from "react-router-dom";

interface HomePageProps {}

export const HomePages: React.FC<HomePageProps> = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Home</h1>

          <Link to="/">
            <button className="btn btn-primary">Quay lại trang chủ</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
