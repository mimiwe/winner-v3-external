module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        112: "28rem",
        124: "32rem",
        default: "1260px",
        1300: "1300px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px",
        "31px": "31px",
        "32px": "32px",
        "33px": "33px",
        "34px": "34px",
        "35px": "35px",
        "36px": "36px",
        "37px": "37px",
        "38px": "38px",
        "39px": "39px",
        "40px": "40px",
        "41px": "41px",
        "42px": "42px",
        "43px": "43px",
        "44px": "44px",
        "45px": "45px",
        "46px": "46px",
        "47px": "47px",
        "48px": "48px",
        "49px": "49px",
        "50px": "50px",
        "51px": "51px",
        "52px": "52px",
        "53px": "53px",
        "54px": "54px",
        "55px": "55px",
        "56px": "56px",
        "57px": "57px",
        "59px": "59px",
        "60px": "60px",
        "61px": "61px",
        "62px": "62px",
        "63px": "63px",
        "64px": "64px",
        "67px": "67px",
        "68px": "68px",
        "69px": "69px",
        "70px": "70px",
        "72px": "72px",
        "73px": "73px",
        "75px": "75px",
        "76px": "76px",
        "78px": "78px",
        "80px": "80px",
        "81px": "81px",
        "82px": "82px",
        "83px": "83px",
        "84px": "84px",
        "85px": "85px",
        "88px": "88px",
        "89px": "89px",
        "90px": "90px",
        "92px": "92px",
        "98px": "98px",
        "100px": "100px",
        "102px": "102px",
        "104px": "104px",
        "113px": "113px",
        "120px": "120px",
        "122px": "122px",
        "124px": "124px",
        "127px": "127px",
        "130px": "130px",
        "134px": "134px",
        "138px": "138px",
        "139px": "139px",
        "143px": "143px",
        "150px": "150px",
        "156px": "156px",
        "157px": "157px",
        "162px": "162px",
        "163px": "163px",
        "170px": "170px",
        "175px": "175px",
        "178px": "178px",
        "180px": "180px",
        "176px": "176px",
        "184px": "184px",
        "193px": "193px",
        "214px": "214px",
        "220px": "220px",
        "228px": "228px",
        "240px": "240px",
        "262px": "262px",
        "403px": "403px",
        "410px": "410px",
        "1260px": "1260px",
        "1836px": "1836px",
      },
      boxShadow: {
        plain:
          "0 0px 5px 0 rgba(0, 0, 0, 0.5), 0 4px 4px 0 rgba(0, 0, 0, 0.06)",
        plain1: "0 4px 3.5px 0px rgba(0, 0, 0, 0.25)",
        plain2: "inset 1px 1px 1px 0px rgba(0, 0, 0, 0.2)",
        plain3: "1px 1px 2px 0px rgba(0, 0, 0, 0.3)",
        plain4: "1px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        plain5: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
        subNavbar: "0 0px 6px 0 rgba(0, 0, 0, 0.2)",
        popup: "0 6px 10px 4px rgba(0, 0, 0, 0.3)",
        glow: "0 0 3px 2px rgba(0, 0, 0, 0.1)",
        navbar: "0 0px 7px 0 rgba(0,0,0,0.4)",
        link: "0px 2px 5px 0px rgba(0, 0, 0, 0.6)",
        btn: "0px 2px 5px 0px rgba(0, 0, 0, 0.5)",
        table: "0 0px 7px 1px rgba(0,0,0,0.6)",
        card: "5px 5px 2px 0 rgba(0,0,0,0.75)",
        plain10: "0px 1px 1px 0px rgba(0, 0, 0, 0.6)",
        plain11: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        limit: "1261px",
        limit1836: "1836px",
        limit1920: "1905px",
        limit1600: "1600px",
        limit734: "734px",
      },
      brightness: {
        400: "4.00",
      },
      colors: {
        r797979: "#797979",
        r362574: "#362574", // header
        r9688c7: "#9688c7",
        rf04281: "#f04281", // Red circle
        r666666: "#666666", // Text
        r2c1137: "#2c1137",
      },
      fontFamily: {
        spoqa: ["SpoqaHanSansNeo"],
        spoqaMedium: ["SpoqaHanSansNeoMedium"],
        spoqaBold: ["SpoqaHanSansNeoBold"],
        robotoRegular: ["RobotoRegular"],
        roboto: ["RobotoMedium"],
        robotoBold: ["RobotoBold"],
        digital: ["Digital-7"],
        swagger: ["Swagger"],
        malgun: ["MalgunGothicRegular"],
        MalgunGothicRegular: ["MalgunGothicRegular"],
        MalgunGothicBold: ["MalgunGothicBold"],
      },
      fontSize: {
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "30px": "30px",
        "32px": "32px",
        "36px": "36px",
        "42px": "42px",
      },
      borderRadius: {
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "20px": "20px",
      },
      letterSpacing: {
        digital: ".04em",
        minus05: "-.005em",
      },
      backgroundOpacity: {
        85: "0.85",
      },
    },
  },
  variants: {
    extend: {
      linearGradients: ["hover", "responsive"],
      borderWidth: ["last"],
      brightness: ["hover"],
      filter: ["hover", "focus"],
    },
  },
  plugins: [],
};
