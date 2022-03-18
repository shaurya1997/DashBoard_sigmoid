import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMinMaxdDate } from "../Store/Action/DateAction";

import DatePicker from "./DatePicker";
import { Button } from "@mui/material";
import { logout } from "../Store/Action/UserAction";
import { getDashBoardData } from "../Store/Action/DashDataAction";
import TableData from "./TableData";
import PieData from "./PieData";
import BarData from "./BarData";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDateLoading, dateRange } = useSelector((state) => state.date);
  const { isDashLoading, tableData, pieData, barData } = useSelector(
    (state) => state.dashData
  );
  const { data } = useSelector((state) => state.user);
  useEffect(() => {
    if (
      data ||
      localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token")
    ) {
      dispatch(getMinMaxdDate());
    } else {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleData = () => {
    dispatch(
      getDashBoardData(dateRange[0].toString(), dateRange[1].toString())
    );
  };
  return (
    <>
      {isDateLoading ? (
        <div className="parent_loader">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="logout_btn">
            <Button
              variant="contained"
              onClick={handleLogout}
              color="error"
              className="logout_button"
            >
              Logout
            </Button>
          </div>
          <div className="calender">
            <DatePicker />
            <Button variant="contained" onClick={handleData} className="btn">
              GET DATA
            </Button>
          </div>
          {isDashLoading ? (
            <div className="parent_loader">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              {tableData.length > 0 && <TableData />}
              {pieData.length > 0 && <PieData />}
              {barData.length > 0 && <BarData />}
            </>
          )}
        </>
      )}
    </>
  );
};
export default Dashboard;
