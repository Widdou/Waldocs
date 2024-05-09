import * as React from "react";
import * as Icon from "@livingdesign/icons";
import {IconButton, Menu, MenuItem} from "@walmart-web/livingdesign-components";

export default () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLElement>();

  return (
    <Menu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      trigger={
        <IconButton a11yLabel="Options" ref={triggerRef}>
          <Icon.More />
        </IconButton>
      }
      triggerRef={triggerRef}
    >
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  );
};