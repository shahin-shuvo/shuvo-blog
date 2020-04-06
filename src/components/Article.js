import React from 'react'

import { List, Avatar, Typography } from 'antd';
import {  CommentOutlined } from '@ant-design/icons';
const { Text } = Typography;

const IconText = ({ icon, text }) => (
    <span>
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
    </span>
);



const Article = (prpos) => {

    return (

        <div>

            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={prpos.data}

                renderItem={item => (

                    <div className="card post-div" style={{ marginBottom: "10px", backgroundColor: "#E9F7EF" }}>
                        <List.Item
                            key={item.title}
                            actions={[
                                <div style = {{fontSize: "1.5rem"}}>
                                    <Text code strong >
                                        <IconText icon={CommentOutlined} text="" key="list-vertical-message" />
                                    </Text>
                                </div>

                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar size={40}
                                    style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                    {((item.userName || "").substring(0, 2) || "").toUpperCase()}
                                </Avatar>}

                                title={item.userName}

                                description={<a href={`/articles/${item.id}/`}>
                                    <p style = {{fontSize:"1.5rem"}}><Text code type="danger">{item.title}</Text></p>
                                </a>}
                            />
                            {item.content}
                        </List.Item>
                    </div>
                )}
            />
        </div>
    );

}

export default Article;