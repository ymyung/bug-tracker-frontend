import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Users from "./pages/Users"
import Messages from "./pages/Messages"
import MyTicket from "./pages/MyTickets"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Error from "./pages/Error";
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="body">
                <Routes>
                    <Route path="/" exact="true" element={<Dashboard />} />
                    <Route path="/projects" exact="true" element={<Projects />} />
                    <Route path="/users" exact="true" element={<Users />} />
                    <Route path="/messages" exact="true" element={<Messages />} />
                    <Route path="/my-ticket" exact="true" element={<MyTicket />} />
                    <Route path="/profile" exact="true" element={<Profile />} />
                    <Route path="/login" exact="true" element={<Login />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
