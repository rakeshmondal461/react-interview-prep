import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import CounterComponent from "./components/CounterComponent.tsx";
import TestParent from "./components/TestParent.tsx";
import HocExample from "./components/HOCExample/HocExample.tsx";
import TimeStampHOCExample from "./components/TimeStampHOC/TimeStampHOCExample.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="counter" element={<CounterComponent />} />
        <Route path="test" element={<TestParent />} />
        <Route path="hoc" element={<HocExample />} />
        <Route path="hoctime" element={<TimeStampHOCExample />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
