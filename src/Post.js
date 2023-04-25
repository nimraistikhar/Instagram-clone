import React from 'react'
import './Post.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Post({ username, caption, imageUrl }) {
    return (
        <div className='post'>
            <div className='post_header'>
                <AccountCircleIcon
                    className='post_avatar'
                    alt="RafehQazi"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpljf2usV70TCdkcZJqOqWbfe7a2KOHiLheg&usqp=CAU"
                />
                <h3>{username}</h3>
            </div>
            {/* header --> avatar + username */}

            <img className='post_image' src={imageUrl} />
            {/* image */}

            <h4 className='post_text'><strong>{username}</strong>{caption}</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post