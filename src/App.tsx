import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import CreatePerson from "./pages/CreatePerson/CreatePerson"
import { globalStyles } from "./ui/stitches.config";

function App() {
    globalStyles()

    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<CreatePerson/>}/>
          </Routes>
      </BrowserRouter>
    )
}

export default App
