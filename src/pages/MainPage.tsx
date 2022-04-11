import styled from "styled-components";

import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Content } from "../styles/styled";
import { Resume } from "../store/reducers/resumeReducer";
import ResumesList from "../components/ResumeComponent/ResumesList";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { getJobs, getResumes } from "../API/quires";
import { useEffect } from "react";

function MainPage() {
  return (
    <>
      <Layout>Главная</Layout>
    </>
  );
}

export default MainPage;
