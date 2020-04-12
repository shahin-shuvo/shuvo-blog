import React from 'react'

import { List, Avatar, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
const { Text } = Typography;

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
                            <div class="ui">
                                <a class="active teal item" href={`/articles/comment/${item.id}/`}>
                                <i class="comment icon"></i>See comments
                                </a>
                            </div>

                        ]}
                        >
                        <a href={`/articles/${item.id}/`} style = {{float: "right"}}>
                            <EditOutlined />

                        </a>

                        <List.Item.Meta
                            avatar={<Avatar size={40}
                                style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                {((item.userName || "").substring(0, 2) || "").toUpperCase()}
                            </Avatar>}

                            title={item.userName}

                            description={<a href={`/articles/${item.id}/`}>
                               <Text mark> {item.title}</Text>
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