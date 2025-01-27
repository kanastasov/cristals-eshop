import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import cristal from "../../../img/Crystals10.jpg";
import cristal2 from "../../../img/Crystals9.jpg";

import { MENU } from "../../../constants/routeConstants";
import "./HomePageTheme.css";

const HomePageTheme: FC = (): ReactElement => {
    return (
        <div className={"page-theme"}>
            <Row gutter={32}>
                <Col span={12}>
                    <Link to={{ pathname: MENU, state: { id: "female" } }}>
                        <img src={cristal2} alt={"female"} />
                    </Link>
                </Col>
                <Col span={12}>
                    <Link to={{ pathname: MENU, state: { id: "male" } }}>
                        <img src={cristal} alt={"male"} />
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default HomePageTheme;

