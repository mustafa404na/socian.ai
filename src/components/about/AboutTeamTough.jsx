import AboutSection from "../ui/AboutSection";
import Teams from "./Teams";
import { useState } from "react";

export default function AboutTeamTough() {
  const [activeTab, setActiveTab] = useState("tanvir");

  const teamsList = [
    {
      id: "tanvir",
      name: "Tanvir H. Sourov",
      designation: "CEO",
    },
    {
      id: "farhad",
      name: "Md Farhad",
      designation: "Junior Frontend Developer",
    },
    {
      id: "tamzid",
      name: "Shahidul Islam Tamzid",
      designation: "System Architect",
    },
    {
      id: "adib",
      name: "Adib Ahnaf",
      designation: "COO",
    },
    {
      id: "sadiq",
      name: "Md Sadik Ahmed",
      designation: "Project Manager",
    },
    {
      id: "niloy",
      name: "Niloy Kumar Roy",
      designation: "Product Desiner",
    },
    {
      id: "hasan",
      name: "Saifur Rahman Hasan",
      designation: "Senior Software Engineer",
    },
    {
      id: "partho",
      name: "Parvez Rahman Partho",
      designation: "Seinor fontend Developer",
    },
    {
      id: "azmain",
      name: "S.M Azmain Hossain",
      designation: "Content & UI/UX Designer",
    },
    {
      id: "turag",
      name: "Ariful Islam Turag",
      designation: "Deputy Manager Accounts & Finance",
    },
    {
      id: "riju",
      name: "Riju Mia",
      designation: "Data annotator",
    },
    {
      id: "mustafa",
      name: "Mustafa",
      designation: "Senior Backend Developer",
    },
    {
      id: "nafiz",
      name: "Nafiz Imtiaz",
      designation: "Junior software engineer",
    },
    {
      id: "josio",
      name: "Joshio Banarjee",
      designation: "Junior Software Engineer",
    },
    {
      id: "5",
      name: "Null",
      designation: "Null",
    },
  ];
  const findById = (id) => {
    return teamsList.find((team) => team.id === id);
  };
  return (
    <AboutSection title={"#TeamTough"} className={"items-start"}>
      <div className="tablet:mb-20 uppercase text-left grow">
        <h2 className="text-5xl font-bold">{findById(activeTab).name}</h2>
        <p className="text-2xl">{findById(activeTab).designation}</p>
      </div>
      <div className="">
        <Teams setActiveTab={setActiveTab} />
      </div>
    </AboutSection>
  );
}
