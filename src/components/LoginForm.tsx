import { Button, Form, Input } from "antd";
import * as React from "react";
import { rules } from "../utils/rules";

const LoginForm: React.FC = () => {
  return (
    <Form>
      <Form.Item
        label="User name"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
    </Form>
  );
};

export default LoginForm;
