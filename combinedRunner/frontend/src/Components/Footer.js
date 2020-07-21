import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contributors' LinkedIn" />
              <List link inverted>
                <List.Item>
                  <List.Content>
                    <List.Header
                      href="https://www.linkedin.com/in/neilshah20"
                      as="a"
                    >
                      <Image
                        avatar
                        href="https://www.linkedin.com/in/neilshah20"
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQHXTYNZsmAd9Q/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=1r2lPBR8aJWt7FMZlBZLwCy-1pthFQZjtpIdQBKqtHA"
                      />{" "}
                      Neil Shah
                    </List.Header>
                  </List.Content>
                </List.Item>

                {/*<List.Item
                  as="a"
                  content="Neil Shah"
                  href="https://www.linkedin.com/in/neilshah20"
                  target="_blank"
                />
                <Image
                  avatar
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQHXTYNZsmAd9Q/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=1r2lPBR8aJWt7FMZlBZLwCy-1pthFQZjtpIdQBKqtHA"
                />
                <List.Item
                  as="a"
                  content="Kevin Wang"
                  href="https://www.linkedin.com/in/kevinw1008"
                  target="_blank"
                />
                <Image
                  avatar
                  src="https://vignette.wikia.nocookie.net/gameofthrones/images/8/89/TywinLannisterCP.png/revision/latest?cb=20140824183623"
                />
                <List.Item
                  as="a"
                  content="Nick Zhang"
                  href="https://www.linkedin.com/in/nick-z-421b80140"
                  target="_blank"
                /> */}
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="GitHub Repo" />
              <List link inverted>
                <List.Item
                  as="a"
                  content="Github Page"
                  href="https://github.com/KevinW1008/Stocks.git"
                  target="_blank"
                />
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>Any man who must say I am the king is no true king</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
