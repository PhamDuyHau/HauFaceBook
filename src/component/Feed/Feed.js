import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import { db } from "../../firebase";  // Assuming you're exporting db correctly in firebase.js
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; // Import modular functions

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Create a query for posts, ordered by timestamp
        const postsCollection = collection(db, "posts");
        const q = query(postsCollection, orderBy("timestamp", "desc"));

        // Fetch posts using onSnapshot
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })));
        });

        // Clean up the listener on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePicture={post.data.profilePicture}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    );
}

export default Feed;
