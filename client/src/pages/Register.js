import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import Header from "../components/Header";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <>
    <Header/>
       <div className="authentication">
      <div className="authentication-form card p-3">
        <h4 className="text-primary">Create Account to Get Started</h4>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Full Name" name="name">
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="johndoe@example.com" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="••••••••••" type="password" />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            REGISTER
          </Button>

          <Link to="/login" className="mt-2">
            Already Have Account ? Login
          </Link>
        </Form>
      </div>
    </div>
    </>
   
  );
}

export default Register;
