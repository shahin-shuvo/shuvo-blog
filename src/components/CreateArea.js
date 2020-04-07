import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from 'axios'
import uuid from "uuid";


function CreateArea(props) {
    const [isExpanded, changeExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
        userName: localStorage.getItem('username'),
        userToken: localStorage.getItem('token'),
        postID: uuid.v4()
    });

    function handleInputChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return { ...prevNote, [name]: value };
        });
    }

    function submitNote(event) {
        axios.post('https://shuvo-blog.herokuapp.com/api/', {
            title: note.title,
            content: note.content,
            userName: note.userName,
            userToken: note.userToken,
            postID: note.postID
        }).then(
            window.location.reload(false)
        )



        setNote({
            title: "",
            content: ""
        });
        changeExpanded(false);


    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleInputChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}
                <textarea
                    name="content"
                    onClick={() => {
                        changeExpanded(true);
                    }}
                    onChange={handleInputChange}
                    value={note.content}
                    placeholder="Write post..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
