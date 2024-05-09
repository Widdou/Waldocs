import * as React from "react";
import {
  Button,
  List,
  ListItem
} from "@walmart-web/livingdesign-components";
import * as Icon from "@livingdesign/icons";

export default () => {
  return (
    <List>
      <ListItem
        leading={<Icon.Note size="medium" />}
        title="James T. Kirk"
        trailing={
          <Button variant="tertiary">Vote for Jim</Button>
        }
      >
        The Original Series
      </ListItem>
      <ListItem
        leading={<Icon.History size="medium" />}
        title="Jean-Luc Picard"
        trailing={
          <Button variant="tertiary">
            Vote for Jean-Luc
          </Button>
        }
      >
        The Next Generation
      </ListItem>
      <ListItem
        leading={<Icon.Gear size="medium" />}
        title="Benjamin Sisko"
        trailing={
          <Button variant="tertiary">Vote for Ben</Button>
        }
      >
        Deep Space Nine
      </ListItem>
    </List>
  );
}