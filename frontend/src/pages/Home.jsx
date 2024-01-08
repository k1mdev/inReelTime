import { React } from 'react'
import Datebar from '../components/Datebar';
import Bulletin from '../components/Bulletin';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "Axios";
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/curUserSlice';

const Home = () => {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);


  const dispatch = useDispatch();
  const setCurUser = (id) => {
    dispatch(setUser(id));
  }


  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5555",
        {},
        { withCredentials: true }
      );
      const { status, user, userID } = data;
      setCurUser(userID)
      return status
        ? null
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);


  return (
    <div className='flex'>
      <span className='flex-none'>
        <Datebar />
      </span>
      <span className='flex-1'>
        <Bulletin />
      </span>
    </div>
  )

}

export default Home