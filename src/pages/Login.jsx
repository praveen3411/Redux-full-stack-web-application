import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthLogin } from "../redux/auth/auth.action";
export default function LoginPage() {
  const [email, seteamil] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  let takingdata = location.state?.data || "/";
  console.log(location);
  let handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      dispatch(AuthLogin({ email, password })).then((result) => {
        navigate(takingdata, { replace: true });
        console.log(result);
      });
    }
  };
  return (
    <div>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <input
            type={"email"}
            value={email}
            onChange={(e) => seteamil(e.target.value)}
            placeholder="Enter Your E-Mail here"
            required
          />
          <br />
          <br />
          <input
            type={"password"}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Your Password here"
            required
          />
          <br />
          <br />
          <input type={"submit"} value={"LOGIN"} />
        </form>
      </FormWrapper>
    </div>
  );
}

const FormWrapper = styled.div`
  form {
    padding: 20px;
    margin: auto;
    textalign: center;
  }
  form input {
    padding: 8px;
    border: 2px solid black;
    borderradius: 10px;
    textalign: center;
  }
`;
