import "./body.module.css";

import { SendOutlined } from "@ant-design/icons";
import { Button, Divider, Layout, notification } from "antd";
import React, { Component, PropsWithChildren, ReactNode } from "react";

import logo from "../../logo.svg";

interface ContainerProps {
  showLogo: boolean;
  btnText?: string;
}

const { Content } = Layout;
const sendMessage = () =>
  notification.info({
    message: "Hello, world!",
    description: "This is a greeting message sent from the moon",
  });

/**
 * Class of Body Container, including all children components in the body
 * Using PropsWithChildren to include the prop "children" inside the props
 */
export default class BodyContainer extends Component<PropsWithChildren<ContainerProps>> {
  render(): ReactNode {
    const { children, btnText, showLogo } = this.props;
    return (
      <Content className="appContent">
        {showLogo && <img src={logo} className="appLogo" alt="logo" />}
        <Divider>Main Content</Divider>
        <Button onClick={sendMessage} icon={<SendOutlined />}>
          {btnText ?? "Send me a message"}
        </Button>
        {/* Show other children components included */}
        {children}
      </Content>
    );
  }
}
