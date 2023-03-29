import "./topbar.css";
import {Language, NotificationsNone, Settings} from "@material-ui/icons";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../features/user/userSlice";

const Topbar = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigation("/login");
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">React Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer settingIcon">
                        <Settings/>

                        <div className="settingBox">
                            <span>Profile</span>
                            <span onClick={() => handleLogout()}>Logout</span>
                        </div>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Avatar" className="topAvatar"/>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
