import "./App.css";

import { SendOutlined } from "@ant-design/icons";
import { Button, Divider, Layout, notification } from "antd";
import { ReactElement } from "react";

import logo from "./logo.svg";

const { Header, Footer, Content } = Layout;
const sendMessage = () =>
  notification.info({
    message: "Hello, world!",
    description: "This is a greeting message sent from the moon",
  });

export default function App(): ReactElement {
  return (
    <Layout>
      <Header className="appHeader">
        <h1>Website Title</h1>
      </Header>
      <Content className="appContent">
        <img src={logo} className="appLogo" alt="logo" />
        <Divider>Main Content</Divider>
        <Button onClick={sendMessage} icon={<SendOutlined />}>
          Send me a message
        </Button>
      </Content>
      <Footer className="appFooter">Footer</Footer>
    </Layout>
  );
}
