import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import UsersManage from "./pages/UsersManage"
import UsersAll from "./pages/UsersAll";
import MyTicket from "./pages/MyTickets"
import Ticket from "./pages/Ticket"
import TicketEdit from "./pages/TicketEdit";
import TicketHistory from "./pages/TicketHistory";
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
                    <Route path="/users-manage" exact="true" element={<UsersManage />} />
                    <Route path="/users-all" exact="true" element={<UsersAll />} />
                    <Route path="/my-tickets" exact="true" element={<MyTicket />} />
                    <Route path="/ticket" exact="true" element={<Ticket />} />
                    <Route path="/ticket-edit" exact="true" element={<TicketEdit />} />
                    <Route path="/ticket-history" exact="true" element={<TicketHistory />} />
                    <Route path="/profile" exact="true" element={<Profile />} />
                    <Route path="/login" exact="true" element={<Login />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
