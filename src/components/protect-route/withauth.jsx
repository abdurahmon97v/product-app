import { useNavigate, Navigate } from "react-router-dom";
import React from "react";
import { loadState } from "../../utils/storage";
const WithAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const navigate = useNavigate();

      const user = loadState("token");

      if (!user) {
        return <Navigate to="/" replace={true} />;
      }

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default WithAuth;
