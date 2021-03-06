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
    <div>
      <p style={{color: "#8B0000", fontFamily: "Josefin Sans", paddingTop: "15px" }}>DISCLAIMER: We are not responsible for any financially devestating mistakes that are made using our charts or resources. 
      All financial decisions should be made at your own discretion. No information we provide is definitively accurate.</p>
      <Segment inverted vertical style={{ padding: "5em 0em"}}>
        <Container style={{float: "center"}}>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="LinkedIn"/>
                <List link inverted>
                  <List.Item floated= "left">
                    <List.Content>
                      <List.Header
                        href="https://www.linkedin.com/in/neilshah20"
                        as="a"
                      >
                        <Image
                          avatar
                          href="https://www.linkedin.com/in/neilshah20"
                          src="https://neilshah20.github.io/images/portrait-default.jpg"
                        />{" "}
                        Neil Shah
                      </List.Header>
                    </List.Content>
                  </List.Item>

                  <List.Item >
                    <List.Content>
                      <List.Header
                        href="https://www.linkedin.com/in/kevinw1008"
                        as="a"
                      >
                        <Image
                          avatar
                          href="https://www.linkedin.com/in/kevinw1008"
                          src="https://media-exp1.licdn.com/dms/image/C4E03AQFhUe63nW9sFw/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=G2fs5DxJIUbzfv0FUDyIuY-wT25CI9DfKu3Z1Of5mJ8"
                        />{" "}
                        Kevin Wang
                      </List.Header>
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content>
                      <List.Header
                        href="https://www.linkedin.com/in/nick-z-421b80140"
                        as="a"
                      >
                        <Image
                          avatar
                          href="https://www.linkedin.com/in/nick-z-421b80140"
                          src="https://media-exp1.licdn.com/dms/image/C5603AQFI-6uW2jvxKw/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=KoQSGcGIhKVgYYTEt9GgE6M5c159QfZNiMjQ_ocm-Vk"
                        />{" "}
                        Nick Zhang
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header inverted as="h4" content="GitHub" />
                <List link inverted>
                  <List.Item
                    as="a"
                    content="Project Repository"
                    href="https://github.com/KevinW1008/Stocks.git"
                    target="_blank"
                  />
                  <List.Item
                    as="a"
                    content="Neil Shah"
                    href="https://github.com/neilshah20/"
                    target="_blank"
                  />
                   <List.Item
                    as="a"
                    content="Kevin Wang"
                    href="https://github.com/KevinW1008/"
                    target="_blank"
                  />
                  <List.Item
                    as="a"
                    content="Nick Zhang"
                    href="https://github.com/jazhang1999/"
                    target="_blank"
                  />
                </List>
              </Grid.Column>
            
              <Grid.Column width={5}>
                <Header inverted as="h4" content="Helpful Resources" />
                <List link inverted>

                  <List.Item>
                    <List.Content>
                      <List.Header
                        href="https://www.marketwatch.com/"
                        as="a"
                      >
                        <Image
                          avatar
                          href="https://www.marketwatch.com/"
                          src="https://vectorlogoseek.com/wp-content/uploads/2018/12/marketwatch-vector-logo.png"
                        />{" "}
                        MarketWatch
                      </List.Header>
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content>
                      <List.Header
                        href="https://www.wsj.com/"
                        as="a"
                      >
                        <Image
                          avatar
                          href="https://www.wsj.com/"
                          src="https://s.wsj.net/img/meta/wsj-social-share.png"
                        />{" "}
                        Wall Street Journal
                      </List.Header>
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content>
                      <List.Header
                        href="https://finance.yahoo.com/"
                        as="a"
                      >
                        <Image
                          avatar
                          href="https://finance.yahoo.com/"
                          src="https://images-na.ssl-images-amazon.com/images/I/71V1O5g6zOL.png"
                        />{" "}
                        Yahoo! Finance
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>



            
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
