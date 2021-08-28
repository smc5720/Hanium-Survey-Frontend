import React from "react";
import { Button, Card } from "react-bootstrap";
import cardImg from "../images/photo1.jpg";
import Badge from "./Badge";

const Content = () => {
  return (
    <div>
      <Card>
        <div className="d-flex flex-row">
          <div style={{ width: "150px" }}>
            <Card.Img src={cardImg} />
          </div>
          <div>
            <Card.Body>
              <div className="d-flex flex-row align-items-center">
                <div style={{ fontWeight: "bolder" }}>
                  의류 브랜드 인지도 조사
                </div>
                <div>
                  <Badge content="완료" type="complete" />
                </div>
              </div>

              <div>2021/04/15 ~ 2021/05/08</div>
            </Card.Body>
          </div>
          <div>
            <Button variant="primary">결과 확인</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Content;
