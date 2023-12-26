 import { FormEvent, useState } from "react";
import { AccountForm } from "./Components/MultistepForm/AccountForm";
import { AddressForm } from "./Components/MultistepForm/AddressForm";
import { UserForm } from "./Components/MultistepForm/UserForm";
import { useMultiStepForm } from "./Components/MultistepForm/useMultiStepForm";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import Store from "./Components/Store";
// import {About} from "./Components/About";
// import NavBar from "./Components/NavBar";

// const Home = lazy(() => import("./Components/Home")); --------// loads along it's data required (like components it contains) only when the link is clicked
//when link is clicked the page is empty
//default:Home

// const Store=lazy(()=>import('./Components/Store')) //default:Store
// const About=lazy(()=>import('./Components/About').then(module=>{return {default:module.About}})) -------//changes name to default:About
//This is needed as About is name export so initially it is About:Component which is not expected

export default function App() {

  type FormData={
    firstName:string
  lastName:string
  age:string
  street:string
  city:string
  state:string
  zip:string
  email:string
  password:string
  }

const INITIAL_DATA:FormData={
  firstName:"",
  lastName:"",
  age:"",
  street:"",
  city:"",
  state:"",
  zip:"",
  email:"",
  password:""
}


  const [data,setData]=useState(INITIAL_DATA)

function updateFields(fields:Partial<FormData>){
  setData(prev=>{
    return {...prev,...fields}
  })
}

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<UserForm {...data} updateFields={updateFields}/>,<AddressForm {...data} updateFields={updateFields}/>,<AccountForm {...data} updateFields={updateFields}/>]);


    function onSubmit(e:FormEvent){
e.preventDefault()
 if(!isLastStep) return next()
 alert("Account created successfully")
    }
  return (
       // <>
    //   <Routes>
    //     {/* <Route path="/" element={<Navbar />}/> */}
    //     <Route path="/" element={<NavBar />}>
    //       {" "}
    //       <Route path="/" element={<Home />} />
    //       <Route path="/store" element={<Store />} />
    //       <Route path="/about" element={<About />} />
    //     </Route>
    //   </Routes>
    // </>

    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth:"max-content "
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!(isFirstStep )&& (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {
            <button type="submit">
              {isLastStep ? "Finish" : "Next"}
            </button>
          }
        </div>
      </form>
    </div>
  );
}
