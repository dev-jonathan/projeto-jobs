import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
import { toast } from "react-toastify";

const HomePage = () => {
  useEffect(() => {
    toast.warning(
      "Aviso: Este site é estático. Para acessar a versão dinâmica com CRUD funcional, visite: github.com/seu-repositorio"
    );
  }, []);

  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome="true" />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
