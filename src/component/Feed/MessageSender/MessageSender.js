import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "../../../StateProvider";
import { db } from "../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add a new post to Firestore
        await addDoc(collection(db, 'posts'), {
            message: input,
            timestamp: serverTimestamp(), // Server timestamp
            profilePicture: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        // Reset the input fields
        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        className="messageSender_input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder={`What's on your mind, ${user.displayName}?`} // Correct template literal usage
                    />
                    <input
                        className="messageSender_input"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Post
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
