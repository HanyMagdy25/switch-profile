import "./Connect.css";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineMail, AiOutlineIdcard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Connect({ userId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState("");
  // console.log(userId)

  const handleContact = (e) => {
    e.preventDefault();
    const blog = { name, phone, content: text, email, title };

    // console.log("blog",blog)
    fetch(
      `https://switch.technomasrsystems.com/api/sendmessage?name=${name},phone=${phone},content=${text},email=${email},`,
      {
        method: "GET",
        // body: JSON.stringify(blog),
        headers: {
          "Accept-Language": "application/json",
          lang: "en",
          user: userId,
          // blog: JSON.stringify(blog),
        },
      }
    )
      .then((data) => data.json())
      .then((res) => {
        setDone(res.status);
        console.log("res", res);
        if (res.status === "success") {
          setName("");
          setText("");
          setPhone("");
          setEmail("");
        }
      });
  };
  return (
    <div className="connect">
      <div>
        <h1>Switch</h1>
        <h2>Exchange Your Contact With Switch</h2>
      </div>
      <form onSubmit={handleContact}>
        <div className="input-div">
          <span className="flex-center">
            <FiUser />
          </span>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-div">
          <span className="flex-center">
            <AiOutlineMail />
          </span>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-div">
          <span className="flex-center">
            <AiOutlineIdcard />
          </span>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-div">
          <span className="flex-center">
            <BsTelephone />
          </span>
          <input
            type="tel"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-div">
          <span className="flex-center">
            <MdOutlineMessage />
          </span>
          <input
            type="text"
            placeholder="Message"
            onChange={(e) => setText(e.target.value)}
          />
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
