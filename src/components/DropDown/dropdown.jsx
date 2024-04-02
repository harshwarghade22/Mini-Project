import { Menu, Button, rem } from '@mantine/core';
import { MenuButton } from './MenuButton';
import classes from "../DropDown/dropdown.module.css"


export function Dropdown() {
  return (
    <Menu width={400} shadow="md" transitionProps={{ transition: 'slide-left', duration: 500 }} classNames={classes.dropdownMenu}>
      <Menu.Target>
        <Button  variant="filled" color="rgba(255, 255, 255, 1)"><MenuButton/></Button>
        {/* <MenuButton/> */}
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="/">
          Home
        </Menu.Item>
        <Menu.Item component="a" href="/roomates">
          Mates
        </Menu.Item>
        <Menu.Item component="a" href="">
          Rent More
        </Menu.Item>
        <Menu.Item component="a" href="">
          Services
        </Menu.Item>
        <Menu.Item component="a" href="">
          Profile
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}