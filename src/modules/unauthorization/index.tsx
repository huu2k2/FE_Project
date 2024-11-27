import React from 'react'
import { Link } from "react-router-dom"

interface NotFoundPageProps {}

export const UnauthorizationPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            401 - Không có quyền truy cập đường dẫn này
          </h1>
          <Link to="/">
            <button className="btn btn-primary">
              Quay lại trang chủ
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}