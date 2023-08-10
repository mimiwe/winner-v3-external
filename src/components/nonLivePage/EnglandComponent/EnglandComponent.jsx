import React, { useEffect } from "react";
import icon from "../../../images/nonLivePage/EnglandComponent/Icon.png";
import flag from "../../../images/nonLivePage/EnglandComponent/Flag.png";
import img from "../../../images/nonLivePage/EnglandComponent/Img.png";
import img2 from "../../../images/nonLivePage/EnglandComponent/img2.png";
import { useSelector } from "react-redux";

const EnglandComponent = ({ englandActive, setEnglandActive }) => {
  const liveGameData = useSelector((state) => state.nonLive.liveGame.data);

  useEffect(() => {
    if (!englandActive) setEnglandActive(false);
  }, [englandActive, setEnglandActive]);

  return (
    <>
      {liveGameData.length > 0 && (
        <>
          <div
            style={{
              background: "#ebabff",
              width: "640px",
              height: "61px",
              borderRadius: "10px",
              boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.8)",
              marginLeft: "4px",
            }}
            className="p-2px mb-10px mt-10px mr-10px"
          >
            <div
              style={{
                background: "linear-gradient(to right, #9d3bbb, #5423a0)",
                height: "57px",
                borderRadius: "8px",
              }}
              className="flex items-center justify-between"
            >
              <div className="ml-13px items-center">
                <div className="flex items-center">
                  <img className="-ml-px mt-3px" src={icon} alt="icon" />
                  <img className="ml-5px mt-3px" src={flag} alt="icon" />
                  <p
                    style={{ color: "#eeeeee", letterSpacing: "-0.031em" }}
                    className="ml-4px mt-10px text-12px font-MalgunGothicBold"
                  >
                    잉글랜드 - 프리미어리그
                  </p>
                </div>
                <div className="flex items-center mb-12px -ml-px">
                  <p
                    style={{ color: "#dddddd", letterSpacing: "-0.031em" }}
                    className="text-12px mt-2px font-MalgunGothicBold"
                  >
                    2023-03-22 13:00
                  </p>
                  <div
                    style={{ background: "#cb78e6" }}
                    className="ml-10px mr-2px mt-4px w-px h-10px"
                  ></div>
                  <p
                    style={{ color: "#dddddd", letterSpacing: "-0.031em" }}
                    className="ml-7px mt-3px mr-1px text-12px font-MalgunGothicBold"
                  >
                    아스널
                  </p>
                  <p
                    style={{ color: "#ffc900", letterSpacing: "-0.031em" }}
                    className="ml-7px mr-3px -mb-3px mt-px text-12px font-MalgunGothicBold"
                  >
                    VS
                  </p>
                  <p
                    style={{ color: "#dddddd", letterSpacing: "-0.031em" }}
                    className="ml-4px mt-3px text-12px font-MalgunGothicBold"
                  >
                    리버풀
                  </p>
                </div>
              </div>
              <div className="mr-13px mt-2px">
                <img src={img} alt="icon" />
              </div>
            </div>
          </div>
          <div
            className=" mb-10px -mr-2px"
            style={{
              marginLeft: "4px",
            }}
          >
            <img src={img2} alt="icon" />
          </div>
        </>
      )}
    </>
  );
};

export default EnglandComponent;
