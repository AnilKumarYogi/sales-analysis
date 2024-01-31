import { Link } from "react-router-dom";

const SignIn = ({ globalData }) => {
  return (
    <div>
      <h1>Sign In</h1>
      <ul>
        <li>
          <Link to="/signIn/investor">Investor</Link>
        </li>
        <li>
          <Link to="/signIn/startup">Startup</Link>
        </li>
      </ul>
    </div>
  );
};
export default SignIn;
