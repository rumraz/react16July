import react from 'react'
import axios from 'axios'

const Login = (props) => {
    var user = {}
    var emailinput = function (event) {
        user.email = event.target.value;
    }
    var passwordinput = function (event) {
        user.password = event.target.value;
    }
    var login = (event) => {
        event.preventDefault();
        let apiurl = "https://apifromashu.herokuapp.com/api/login";

        axios({
            method: "post",
            url: apiurl,
            data: user,
        })
            .then((res) => {
                if (res.data) {
                    console.log("?????????????", res)
                    props.loggedin();
                    localStorage.token = res.data.token;

                }
                else {
                    alert("invalid credentials")
                }
            })
            .catch((err) => {
                console.log("error!!" + err);
            });
    };
    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onChange={emailinput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" onChange={passwordinput} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={login} class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login