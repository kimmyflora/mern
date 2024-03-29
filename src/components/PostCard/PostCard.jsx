import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";



export default function PostCard({ post, isProfile, deletePost, }) {
  const clickHandler = () => deletePost(post._id)


  return (
    
      <Card>
        {isProfile && (
          <Card.Content textAlign="left">
            <Link to={`/${post.user.username}`}>
              <Image
                floated="left"
                size="large"
                avatar
                src={
                  post.user.photoUrl
                    ? post.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              <Card.Header floated="right">{post.user.username}</Card.Header>
            </Link>


          </Card.Content>
        )}


        <Image src={`${post.photoUrl}`} wrapped ui={false} />
        <Card.Content>
          <Card.Description>{post.caption}</Card.Description>
        </Card.Content>

        <Card.Content extra textAlign="right">
          <Link to={`/post/${post._id}`}>
            <Icon name="comment" />
          </Link>
        </Card.Content>
        <Card.Content>
          <Card.Description>{post.businessType}</Card.Description>
        </Card.Content>
        {isProfile && (
          <Card.Content extra textAlign={"left"} >
            <Icon name={"trash alternate"} size="large" color="red" onClick={clickHandler} />
          </Card.Content>
        )}

      </Card>


    
  );

}
