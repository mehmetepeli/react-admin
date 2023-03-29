import "./widgetSmall.css";
import {Visibility} from "@material-ui/icons";

const WidgetSmall = () => {

    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Mehmet Tepeli</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">John Wick</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">The Rock</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Susan Carol</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                        className="widgetSmallImage"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Will Smith</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/> Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSmall;
