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
	
		async function AddComment(postId){ // postId comes from the card component
			// where we call this function
			try {
			  const response = await fetch(`/api/posts/${postId}/comments`, {
				method: 'POST',
				headers: {
				  // convention for sending jwts in a fetch request
				  Authorization: "Bearer " + tokenService.getToken(),
				  // We send the token, so the server knows who is making the
				  // request
				}
			  })
		
			  const data = await response.json();
			  console.log(data, ' response from addComment')
			  getPosts(); // Refetch the posts, which updates the state, 
			  // the post will now have the user in inside of the 
			  // post.likes array
			} catch(err){
			  console.log(err)
			}
		  }







		return (
			<Card.Group itemsPerRow={itemsPerRow}>
				{postCards}
			</Card.Group>
		);
    
}