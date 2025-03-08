import React from "react";
import Logo from "../Assets/Logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            to: "home",
        },
        {
            text: "About",
            icon: <InfoIcon />,
            to: "about",
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
            to: "testimonials",
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
            to: "contact",
        },
    ];
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-70} // Ajuste se tiver header fixo
                    className="scroll-link" // ← Adicione esta classe
                >
                    Home
                </ScrollLink>

                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="scroll-link">
                    About
                </ScrollLink>

                <ScrollLink
                    to="testimonials"
                    smooth={true}
                    duration={500}
                    className="scroll-link">
                    Testimonials
                </ScrollLink>

                <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="scroll-link">
                    Contact
                </ScrollLink>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ScrollLink
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="mobile-menu-link"
                                    onClick={() => setOpenMenu(false)}>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ScrollLink>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
