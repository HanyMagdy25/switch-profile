import "./Connect.css";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineMail, AiOutlineIdcard } from "react-icons/ai";
import { Link } from "react-router-dom";
function Connect() {
  return (
    <div className="connect">
      <div>
        <h1>Switch</h1>
        <h2>Exchange Your Contact With Switch</h2>
      </div>
      <form>
        <div className="input-div">
          <span className="flex-center">
            <FiUser />
          </span>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="input-div">
          <span className="flex-center">
            <AiOutlineMail />
          </span>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-div">
          <span className="flex-center">
            <AiOutlineIdcard />
          </span>
          <input type="text" placeholder="Title" />
        </div>
        <div className="input-div">
          <span className="flex-center">
            <BsTelephone />
          </span>
          <input type="tel" placeholder="Phone" />
        </div>
        <div className="input-div">
          <span className="flex-center">
            <MdOutlineMessage />
          </span>
          <input type="text" placeholder="Message" />
        </div>

        <button className="btn-exchange" type="submit">
          Exchange Contact
        </button>
        <Link to="/">
          <button className="btn-cancel">Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default Connect;
