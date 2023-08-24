import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ buttonText, ButtonIcon, count, isAuthenticated }) => {
  const myMenuButton = (
    <Link to={buttonText === "쪽지" ? "/mypage/inbox" : "/mypage/coupon/coupon-usage"}>
      <div
        style={{
          color: "#2d2834",
          height: "82px",
          marginTop: "-3px",
        }}
        className={`w-80px flex-shrink-0 text-r2d2834 relative flex flex-col items-center justify-center cursor-pointer hover:filter hover:brightness-150`}
      >
        <div className="relative flex justify-center w-48px h-48px -mt-2px">
          {isAuthenticated && (
            <div
              className="absolute flex items-center justify-center px-8px h-19px top-2px -right-8px text-white font-roboto tracking-tight text-12px bg-rf04281 rounded-9px"
              style={{ width: count < 10 ? "19px" : "30px" }}
            >
              <p
                className={`flex items-center justify-center text-white font-roboto tracking-tight text-12px h-10px -mt-px`}
              >
                {count}
              </p>
            </div>
          )}

          <img className="object-none" src={ButtonIcon} alt="my menu" />
        </div>
        <span
          style={{ marginBottom: "0px", color: "#5e399a", fontSize: "13px" }}
          className="cursor-pointer font-bold text-14px tracking-tight -mt-px"
        >
          {buttonText}
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <div style={{ height: "82px" }} className="relative flex justify-between flex-row flex-shrink-0">
        <div className="flex items-center flex-shrink-0">{myMenuButton}</div>
      </div>
    </>
  );
};

export default LinkButton;
