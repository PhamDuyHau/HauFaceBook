import React from 'react'
import "./StoryReel.css"
import Story from "../Story/Story";
function StoryReel() {
    return (
        <div className='storyReel'>

            <Story
                image="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
                profileSource="https://loremfaces.net/96/id/1.jpg"  // Fixed profile image
                title="A Cool Story"
            />

            <Story
                image="https://images.pexels.com/photos/2437295/pexels-photo-2437295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                profileSource="https://loremfaces.net/96/id/2.jpg"  // Another fixed profile image
                title="A Wonderful Journey"
            />

            <Story
                image="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                profileSource="https://loremfaces.net/96/id/3.jpg"  // Another fixed profile image
                title="An Amazing Adventure"
            />

            <Story
                image="https://images.pexels.com/photos/29342153/pexels-photo-29342153/free-photo-of-stunning-dolomites-mountain-landscape-in-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                profileSource="https://loremfaces.net/96/id/4.jpg"  // Another fixed profile image
                title="A Journey in the Mountains"
            />

            <Story
                image="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600"
                profileSource="https://loremfaces.net/96/id/5.jpg"  // Another fixed profile image
                title="Beneath the Waves"
            />


        </div>
    )
}

export default StoryReel
