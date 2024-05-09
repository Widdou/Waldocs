import * as React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@walmart-web/livingdesign-components";
import * as Icon from "@livingdesign/icons";

export default () => {
  return (
    <Card size="small">
      <React.Fragment>
        <CardMedia>
          <img
            alt="A placeholder kitten"
            src="https://digitaltoolkit.livingdesign.walmart.com/hero-images/develop-landing-page.svg"
            // width="100%"
            // height="300px"
          />
        </CardMedia>
        <CardHeader
          leadingIcon={<Icon.WalmartPlus size="large" />}
          title="Welcome"
          trailing={<Button variant="tertiary">Start Here</Button>}
        />
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button variant="tertiary">Action1</Button>
            <Button variant="primary">Action2</Button>
          </ButtonGroup>
        </CardActions>
      </React.Fragment>
    </Card>
  );
};