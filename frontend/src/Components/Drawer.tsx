import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Menu } from "lucide-react";
import { categories } from "../Data/categories";
import SearchModal from "../UI/SearchModal";

const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="md:hidden flex items-center">
      {/* Hamburger Menu */}
      <IconButton onClick={toggleDrawer(true)} className="text-gray-800">
        <Menu size={28} />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: "#1a1a2e", height: "100vh" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          className="text-white"
        >
          {/* Logo */}
          <div className="p-4 flex justify-center">
            <Link to="/" className="text-2xl font-bold text-white">
              News<span className="text-blue-400">Park</span>
            </Link>
          </div>

          <Divider className="bg-gray-500" />

          {/* Navigation Links */}
          <List>
            {categories.map((data, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={data.to}>
                  <ListItemText primary={data.name} className="text-white" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider className="bg-gray-500" />

          {/* Search Option */}
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setIsSearchOpen(true)}>
                <ListItemText primary="Search" className="text-white" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

        {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </div>
  );
};

export default TemporaryDrawer;
