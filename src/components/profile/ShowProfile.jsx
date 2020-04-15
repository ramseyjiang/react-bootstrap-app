import React, {useEffect} from "react";
import { useProfileContext } from "../../contexts/ProfileContext";
import RenderLoading from '../common/utils/RenderLoading';
import { Container, Figure, ListGroup } from "react-bootstrap";

const ShowProfile = () => {
  const { profileApi } = useProfileContext();
  useEffect(() => {
      profileApi.getProfile(); 
  }, []);

  return (
    <>
      {!profileApi.state.data ? 
      (<RenderLoading />) : 
      (<Container className="profile-bg rounded profile-bottom">
        <div className="row">
          <div className="col-3">
            <Figure className="thumbnail">
              <Figure.Image
                alt="image"
                src={profileApi.state.data.avatar_url}
              />
            </Figure>
          </div>
          <div className="col-9">
            <span>I am Ramsey Jiang, looking for a role as fullstack or backend or react developer.</span>
            <p>I am a New Zealand Permanent Resident and I have over 10 years experience as a fullstack developer. I Enjoy jogging and fishing.</p>
            <p>Good at by following techs, such as PHP, Laravel, React, VueJS, JQuery, MySQL, Mongo, Ajax, HTML/HTML5, CSS/CSS3, Github, Docker, NodeJs, Python.</p>
            
          </div>
          <div className="col-12">
            <ListGroup>
              <ListGroup.Item variant="success">Certification : ICAgile Certified Professional (ICP)</ListGroup.Item>
              <ListGroup.Item variant="danger">Held 10 million hits per hour on a e-commerical website. </ListGroup.Item>
              <ListGroup.Item variant="warning">Optimised an e-commerical tool 5 times faster.</ListGroup.Item>
              <ListGroup.Item variant="info">Developed training and HR applications for councils before.</ListGroup.Item>
              <ListGroup.Item variant="dark">Had payment and e-commercial application experience.</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Container>)}
    </>
  );
}
  
export default ShowProfile;