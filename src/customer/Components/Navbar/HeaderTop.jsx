import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCutomerOrdersNew } from "../../../action/cart";
import { API_BASE_URL } from "../../../config/api";
import axios from "axios";

const HeaderTop = () => {
  const [selectedItem, setSelectedItem] = useState("my account summary");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { newOrder } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // for navigation
  const wt = localStorage.getItem("wt");
  const wtt = localStorage.getItem("wtt");

  useEffect(() => {
    dispatch(getCutomerOrdersNew());
  }, [loading, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}info`, {
          headers: {
            wt: wt || user?.WCToken,
            wtt: wtt || user?.WCTrustedToken,
          },
        });
        const data = response.data;
        setProfile(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [user, wt, wtt]);

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login"); // navigate to the login page
    window.location.reload();
  };

  return (
    <div className="flex justify-end w-full text-xs z-9999">
      <div className="flex justify-between w-full bg-gray-100 p-2">
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <a href="#" className="text-black">
              Ship to
            </a>
            <img
              className="w-5 h-3 object-cover"
              alt="Ship to"
              src="/image@2x.png"
            />
          </div>
          <div className="flex items-center gap-2 border-r border-gray-300 pr-3">
            <a href="#" className="text-black">
              Find a store
            </a>
            <img className="w-5 h-5" alt="Find a store" src="/image-1.svg" />
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="text-black">
              Help
            </a>
            <img className="w-8 h-8 pt-2" alt="Help" src="/image-2.svg" />
          </div>
        </div>
        <div className="flex items-center gap-5 relative">
          <div
            className="flex items-center gap-2 relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => { setTimeout(() => {
              setIsDropdownOpen(false)
            }, 5000); }}
          >
            {profile.firstName ? (
              <><Link to="/profile">
                <div>Hi {profile.firstName}</div>
                </Link>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-32 z-9999 bg-white shadow-lg rounded-md">
                    <div
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => navigate("./profile")}
                    >
                      Profile
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login" className="text-black">
                Log in/register
              </Link>
            )}
          </div>
          <div className="hidden md:flex items-center gap-2 border-l border-gray-300 pl-3 text-red-500">
            <a href="#" className="text-red-500">
              Boots Advantage Card
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
