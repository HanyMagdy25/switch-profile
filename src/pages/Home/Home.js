import "./Home.css";
import profileImg from "../../assets/profile.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Home({userId,setUserId}) {
  const param = useParams();
  const [userData, setuserData] = useState({});
  const [userAccounts, setuserAccounts] = useState({});
  const [loading, setLoading] = useState(true);
  console.log("66 userId",userId)

  useEffect(() => {
    fetch(
      `https://switch.technomasrsystems.com/api/user/${parseInt(param.id)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          lang: "en",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setuserData(data?.data);
        setuserAccounts(data?.accounts);
        setUserId(data?.data?.id);
      });
  }, [param.id, setUserId]);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="home">
          <div className="cover-image">
            <img src={profileImg} alt="CoverImage" />
          </div>

          <div className="home__content">
            <div className="profile-image">
              <img src={userData.image} alt="profileImage" />
            </div>
            <h3>
              {userData.name} {userData.familyName}
            </h3>
            <span className="home__name">{userData.job_title}</span>
            <div>Icons</div>
            <div>
              <Link to="/connect">
                <button className="btn-connect">Connect With Me</button>
              </Link>
            </div>
          </div>

          <div className="social-div">
            <h4>My Links</h4>
            <div className="social-div-links">
              {userAccounts.map((item, index) => (
                <a key={index} href={item.url}>
                    <div>
                    <img
                      src={`https://switch.technomasrsystems.com/uploads/apps/${item.category_name}/${item.account.icon}`}
                      alt={item.account.name}
                    />
                  <span>{item.account.name}</span>
                </div>
                  </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
