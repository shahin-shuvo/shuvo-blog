import React from 'react'
import StatView from "./StatView"
import CountrySelector from "./CountrySelector"
import Comparison from "./Comparison"
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import { SmileOutlined, AreaChartOutlined } from '@ant-design/icons';


const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} className="site-custom-tab-bar" style={{  }} />
        )}
    </Sticky>
);


export default function Covid19() {

    return (

        <div>

            <StickyContainer>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <TabPane tab={
                        <span>
                                <SmileOutlined />
                             Statistics
                         </span>
                        }
                        key="1">
                        <div>
                            <div>
                                <StatView url="https://covid19.mathdro.id/api" header="Overall"
                                    col="col col-md-4 col-sm-4 col-6" />
                            </div>
                            <div style={{ border: "1.5px #191e4d solid", marginTop: "10px", borderRadius: "2px" }}>
                                <div style={{ margin: "5px" }}>
                                    <CountrySelector />
                                </div>

                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab={
                        <span>
                           <AreaChartOutlined />
                             Comparison
                         </span>
                        } key="2">
                        <div>
                            <Comparison />
                        </div>

                    </TabPane>
                </Tabs>
            </StickyContainer>

            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <p>
                    <a target="blank" href="https://github.com/CSSEGISandData/COVID-19">Serving data from John Hopkins University CSSE
                </a>
                </p>
                <p> Served data using api from
                    <a href="https://covid19.mathdro.id" target="blank"> mathdroid</a> &  <a target="blank" href="https://github.com/pomber/covid19">pomber</a>
                </p>
            </div>
        </div>
    )
}