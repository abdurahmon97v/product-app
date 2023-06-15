import React from "react";
import { Layout, Menu, theme } from "antd";
import { items } from "./menu-data";
import WithAuth from "../components/protect-route/withauth";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Menu
          style={{ marginTop: 10 }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items.map((item) => ({
            key: item.key,
            icon: React.createElement(item.icon),
            label: (
              <Link style={{ marginLeft: "10px" }} to={item.link}>
                {item.label}
              </Link>
            ),
          }))}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default WithAuth(MainLayout);
