import {BrowserRouter , Routes , Route} from "react-router-dom";
import { Navbar , Home , About  } from "./components/index"
import {Box} from "@mui/material";
import "./App.css";

const App = () => {
  return(
    <BrowserRouter>
     <Box className="bg-[#DEEFE7] " >
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </Box>
    </BrowserRouter>
  )
}

export default App ;

