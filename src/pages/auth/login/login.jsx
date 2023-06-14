import React from "react";
import { Card } from "antd";
import { RegisterForm } from "../components/register-form";
import "./style.css";

export const Login = () => {
  return (
    <div className="login-block">
      <Card title={"Login"} style={{ width: 400 }}>
        <RegisterForm />
      </Card>
    </div>
  );
};
