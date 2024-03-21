import PostCard from '../PostCard/PostCard'
import { Card } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";

export default function PostFeed({posts, itemsPerRow, isProfile, loggedUser, businessType, deletePost }){
        console.log(posts, ' < This is posts[0].caption')

		// filter in each page connect with the business type 
		// const filteredPosts = businessType
        // ? posts.filter(post => post.businessType === businessType)
        // : posts;
		
	
		const postCards = posts.map((post) => {
			return <PostCard post={post} key={post._id} isProfile={isProfile} businessType={businessType} loggedUser={loggedUser} deletePost={deletePost}/>
			
			
		});
	
		return (
			<Card.Group itemsPerRow={itemsPerRow}>
				{postCards}
			</Card.Group>
		);
    
}