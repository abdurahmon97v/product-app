import React from "react";
import { useNavigate } from "react-router-dom";
import { saveState, loadState } from "../../../../utils/storage";
import { useLogin } from "../../../../service/mutation/use-login";
import { Button, Form, Input, message } from "antd";
import { Navigate } from "react-router-dom";

export const RegisterForm = () => {
  const { isLoading, mutate } = useLogin();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/main");
  }, []);

  const submit = (data) => {
    const formData = new URLSearchParams();
    formData.append("_username", data?._username);
    formData.append("_password", data?._password);
    formData.append("_subdomain", import.meta.env.VITE_SUBDOMAIN);
    console.log(formData.toString());
    mutate(formData.toString(), {
      onError: (res) => {
        messageApi.open({
          type: "error",
          content: res.message && "error",
        });
      },
      onSuccess: (res) => {
        messageApi.open({
          type: "success",
          content: "ok",
        });
        saveState("token", res.token);
        navigate("/main");
      },
    });
  };
  return (
    <>
      {contextHolder}
      <Form onFinish={submit}>
        <Form.Item
          rules={[{ required: true, message: "this fild is required" }]}
          name="_username"
        >
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "50px" }}
          rules={[{ required: true, message: "this fild is required" }]}
          name="_password"
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Button loading={isLoading} htmlType="submit" type="primary">
          Send
        </Button>
      </Form>
    </>
  );
};
