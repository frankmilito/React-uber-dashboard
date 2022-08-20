import "./App.css"
import styled from "styled-components"
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

const Div = styled.div``
