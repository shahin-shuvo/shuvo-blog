import React from 'react'
import { Button, Card, Image, Item } from 'semantic-ui-react'
import { Avatar } from 'antd';

function ProfileView(props) {

    return (
        <Card style = {{width : "50vw"}}>
            <Card.Content>
                <Avatar shape="square" size={32}
                    style={{ color: 'white', backgroundColor: '#87d068', float: "right" }}>
                    <p>
                        {((props.user.username || "").substring(0, 2) || "").toUpperCase()}
                    </p>
                </Avatar>
                <Card.Header>{props.user.username}</Card.Header>

            </Card.Content>
            <Card.Content>
                <Item>
                    <Item.Content style={{ marginBottom: "10px" }}>
                        <Item.Meta as='a'>User Token</Item.Meta>
                        <Item.Header>{props.user.token}</Item.Header>
                    </Item.Content>
                    <Item.Content style={{ marginBottom: "10px" }}>
                        <Item.Meta as='a'>Email</Item.Meta>
                        <Item.Header>{props.user.email}</Item.Header>
                    </Item.Content>
                    <Item.Content style={{ marginBottom: "10px" }}>
                        <Item.Meta as='a'>Total Post</Item.Meta>
                        <Item.Header>{props.totalPost}</Item.Header>
                    </Item.Content>
                </Item>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Update Profile
            </Button>

                </div>
            </Card.Content>
        </Card>
    );
}

export default ProfileView;
