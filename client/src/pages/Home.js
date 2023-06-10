import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Col, Row } from "antd";
import Layout from "../components/Layout";
import Doctor from "../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [searchAddress, setSearchAddress] = useState("");
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        "/api/user/get-all-approved-doctors",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  const filterDoctorsByAddress = () => {
    const filteredDoctors = doctors.filter((doctor) =>
      doctor.address.toLowerCase().includes(searchAddress.toLowerCase())
    );
    return filteredDoctors;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Input
        placeholder="Search Location"
        value={searchAddress}
        onChange={(e) => setSearchAddress(e.target.value)}
        style={{ marginBottom: "16px" }}
      />
      <Row gutter={20}>
        {filterDoctorsByAddress().map((doctor) => (
          <Col span={8} xs={24} sm={24} lg={8}>
            <Doctor doctor={doctor} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default Home;
