import "./login.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user/apiCalls";

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();

        login(dispatch,{username,password});
    }

    return (
        <div className="login">
            <form className="loginForm">
                <span className="loginTitle">Welcome</span>
                <span className="loginTitleIcon">MT</span>
                <input type="text"
                       placeholder="E-Mail"
                       className="loginInput"
                       onChange={(e)=>setUsername(e.target.value)}
                />
                <input type="password"
                       placeholder="Password"
                       className="loginInput"
                       onChange={(e)=>setPassword(e.target.value)}
                />
                <div className="wrapLoginButton">
                    <button
                        className="loginButton"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
