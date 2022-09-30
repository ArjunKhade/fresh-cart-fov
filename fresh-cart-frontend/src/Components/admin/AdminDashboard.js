import React from "react";
import AdminMenuBar from "./AdminMenuBar";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
const AdminDashboard = () => {
  useEffect(() => {
    toast.success(`Welcome back `);
  }, []);

  return (
    <div className="row" style={{ height: "90vh" }}>
      <Toaster position="" reverseOrder={true} />

      <AdminMenuBar />

      <div className="col-7">
        <h1>
          Welcome{" "}
          <h1 className="">
            {JSON.parse(localStorage.getItem("data"))?.user?.name}
          </h1>
        </h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
