import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";



export default function PostCard({ post, isProfile }) {

  console.log(post, "post ") 

  return (

    <Card>
      {isProfile ? null : (
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
    </Card>
  );

}
