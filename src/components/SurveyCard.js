import React from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";
import Badge from "./Badge";

const SurveyCard = (props) => {
  const cardTitle = props.cardTitle;
  const badgeContent = props.badgeContent;
  const badgeType = badgeContent === "완료" ? "complete" : "progress";
  const buttonColor = badgeContent === "완료" ? "primary" : "warning";
  const buttonState = badgeContent === "완료" ? "결과 확인" : "설문 참여";
  const dateStart = props.dateStart;
  const dateEnd = props.dateEnd;
  const tags = props.tags;
  const progressVal = props.progressVal;
  let progressColor;

  if (progressVal <= 25) {
    progressColor = "info";
  } else if (progressVal <= 50) {
    progressColor = "success";
  } else if (progressVal <= 75) {
    progressColor = "warning";
  } else if (progressVal <= 99) {
    progressColor = "danger";
  } else {
    progressColor = "primary";
  }

  return (
    <Card style={{ width: "500px", margin: "8px", minWidth: "500px" }}>
      <div className="d-flex flex-row">
        <div style={{ width: "150px" }}>
          <Card.Img src={props.imgSrc} />
        </div>
        <div>
          <Card.Body>
            <div className="d-flex flex-row align-items-center">
              <div style={{ fontWeight: "bolder" }}>{cardTitle}</div>
              <div>
                <Badge content={badgeContent} type={badgeType} />
              </div>
              <div style={{ marginLeft: "auto" }}>
                <Button className="btn-sm" variant={buttonColor}>
                  {buttonState}
                </Button>
              </div>
            </div>
            <div
              style={{
                fontSize: "0.8em",
                fontWeight: "bolder",
                color: "#D90000",
                margin: "0px 0px 5px 0px",
              }}
            >
              {dateStart} ~ {dateEnd}
            </div>
            <div className="d-flex flex-row">
              {tags.map(function (obj, i) {
                return <Badge key={i} content={obj} type="tag" />;
              })}
            </div>
            <div>
              <ProgressBar
                animated
                variant={progressColor}
                now={progressVal}
                label={`${progressVal}%`}
                style={{
                  height: "1.2rem",
                  width: "20rem",
                  marginTop: "10px",
                }}
              />
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default SurveyCard;
