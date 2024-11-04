import React from 'react'
import { Link } from "react-router-dom"

interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            404 - Không tìm thấy trang
          </h1>
          <p className="py-6">
            Xin lỗi, nhưng trang bạn đang tìm kiếm không tồn tại.
          </p>
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