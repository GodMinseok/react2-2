import { Menu, MenuItems, MenuItem, MenuButton } from "@headlessui/react";

export default function TailWind() {
  return (
    <div>
      <h1>TailWind Page.</h1>
      <h1 className="text-5xl font-bold underline">hello world!</h1>

      <Menu>
        <MenuButton>My account</MenuButton>
        <MenuItems>
          <MenuItem>
            <button type="button" className="cursor-pointer">
              Submit
            </button>
          </MenuItem>
          <MenuItem>
            <button type="button" className="cursor-progress">
              Saving...
            </button>
          </MenuItem>
          <MenuItem>
            <button type="button" className="cursor-not-allowed">
              Confirm
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
