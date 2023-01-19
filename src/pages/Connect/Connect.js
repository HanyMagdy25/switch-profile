import "./Connect.css";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineMail, AiOutlineIdcard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

function Connect({ userId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  // console.log(userId)

  // let token = document.head.querySelector('meta[name="csrf-token"]');

  // let token = document
  //   .querySelector('meta[name="csrf-token"]')
  //   .getAttribute("content");

  const handleContact = (e) => {
    // console.log("666",`${csrf_token()}`)
    e.preventDefault();
    // const blog = { name, phone, content: text, email, title };

    // console.log("blog",blog)
    fetch(
      "https://switch.technomasrsystems.com/api/sendmessage?" +
        new URLSearchParams({
          name: name,
          phone: phone,
          content: text,
          email: email,
          title: title,
        }),
      {
        headers: {
          "Content-Type": "application/json",
          lang: "en",
          user: userId,
        },
      }
    )
      .then((data) => data.json())
      .then((res) => {
        // setDone(res.status);
        alert(res.message);
        console.log("res", res);
        if (res.status === true) {
          setName("");
          setText("");
          setPhone("");
          setEmail("");
          setTitle("");
        }
      });
  };

  // let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  return (
    <div className="connect">
      <div>
        <h1>Switch</h1>
        <h2>Exchange Your Contact With Switch</h2>
      </div>
      <form method="POST" onSubmit={handleContact}>
        <div className="input-div">
          <span className="flex-center">
            <FiUser />
          </span>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
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
            value={email}
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
            value={title}
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
            value={phone}
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
            value={text}
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
