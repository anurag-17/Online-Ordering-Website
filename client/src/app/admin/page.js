"use client"
import AdminDashboard from "@/components/admin/AdminDashboard";
import protectedRoute from "@/config/protectedRoute";
import React from "react";

const page = () => {
  return (
    <AdminDashboard />
  )
};

export default protectedRoute(page);
