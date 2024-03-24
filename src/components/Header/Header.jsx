import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader({ loggedUser, handleLogout }) {
    console.log(handleLogout)
  return (
    <Segment clearing style={{ backgroundColor: "white", border: "none" }}>
      <Header as="h2" floated="left">
        <Link to={`/${loggedUser.username}`} >
          <Image
            src={
                loggedUser.photoUrl
                ? loggedUser.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          />
        </Link>
        <Link to="/">
          <Icon name="home" />
        </Link>
      </Header>
        
      <Header as="h2" floated="right">
        <Link to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
    </Segment>
  );
}
