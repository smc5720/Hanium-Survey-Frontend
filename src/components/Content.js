import React from "react";
import SurveyCard from "./SurveyCard";
import imgSrc1 from "../images/photo1.jpg";
import imgSrc2 from "../images/photo2.jpg";
import imgSrc3 from "../images/photo3.jpg";
import imgSrc4 from "../images/photo4.jpg";
import imgSrc5 from "../images/photo5.jpg";
import imgSrc6 from "../images/photo6.jpg";
import imgSrc7 from "../images/photo7.jpg";
import "../style/Content.css";

const Content = () => {
  const finishCardData = [
    {
      cardTitle: "인천지역 소비패턴 조사",
      badgeContent: "완료",
      dateStart: "2021/04/15",
      dateEnd: "2021/05/08",
      tags: ["인천", "소비자", "가성비"],
      progressVal: 100,
      imgSrc: imgSrc4,
    },

    {
      cardTitle: "의류 브랜드 인지도 조사",
      badgeContent: "완료",
      dateStart: "2021/04/17",
      dateEnd: "2021/05/04",
      tags: ["의류", "브랜드", "마케팅", "캐주얼"],
      progressVal: 100,
      imgSrc: imgSrc7,
    },

    {
      cardTitle: "청주시 생활 만족도 조사",
      badgeContent: "완료",
      dateStart: "2021/03/15",
      dateEnd: "2021/05/11",
      tags: ["청주", "만족도", "생활"],
      progressVal: 100,
      imgSrc: imgSrc5,
    },

    {
      cardTitle: "코로나 방역 만족도 조사",
      badgeContent: "완료",
      dateStart: "2021/02/15",
      dateEnd: "2021/04/08",
      tags: ["강남구", "코로나", "방역", "만족도"],
      progressVal: 100,
      imgSrc: imgSrc6,
    },
  ];

  const progressCardData = [
    {
      cardTitle: "20대 정치 성향 조사",
      badgeContent: "진행",
      dateStart: "2021/06/15",
      dateEnd: "2021/06/30",
      tags: ["정치", "20대", "만족도"],
      progressVal: 21,
      imgSrc: imgSrc3,
    },

    {
      cardTitle: "연령별 소비패턴 조사",
      badgeContent: "진행",
      dateStart: "2021/07/01",
      dateEnd: "2021/07/18",
      tags: ["전연령", "소비", "가성비"],
      progressVal: 78,
      imgSrc: imgSrc3,
    },

    {
      cardTitle: "헤어제품 관련 조사",
      badgeContent: "진행",
      dateStart: "2021/07/01",
      dateEnd: "2021/08/08",
      tags: ["머리/헤어", "탈모", "마케팅"],
      progressVal: 45,
      imgSrc: imgSrc2,
    },

    {
      cardTitle: "카카오 캐릭터 인기투표",
      badgeContent: "진행",
      dateStart: "2021/08/01",
      dateEnd: "2021/09/08",
      tags: ["카카오", "캐릭터", "혜택", "마케팅"],
      progressVal: 64,
      imgSrc: imgSrc1,
    },
  ];

  return (
    <div className="container">
      <div style={{fontWeight: "bolder"}}>조사가 완료된 설문조사</div>
      <div
        className="d-flex"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {finishCardData.map(function (obj, i) {
          return (
            <SurveyCard
              key={i}
              cardTitle={obj.cardTitle}
              badgeContent={obj.badgeContent}
              dateStart={obj.dateStart}
              dateEnd={obj.dateEnd}
              tags={obj.tags}
              progressVal={obj.progressVal}
              imgSrc={obj.imgSrc}
            ></SurveyCard>
          );
        })}
      </div>
      <div style={{fontWeight: "bolder"}}>진행 중인 설문조사</div>
      <div
        className="d-flex"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {progressCardData.map(function (obj, i) {
          return (
            <SurveyCard
              key={i}
              cardTitle={obj.cardTitle}
              badgeContent={obj.badgeContent}
              dateStart={obj.dateStart}
              dateEnd={obj.dateEnd}
              tags={obj.tags}
              progressVal={obj.progressVal}
              imgSrc={obj.imgSrc}
            ></SurveyCard>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
