import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Profile from "@/components/Profile/Profile";

export default function Header() {
  return (
    <header>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Think Inside - My Life Tracker
          </Typography>
          <Profile />
        </Toolbar>
      </AppBar>
    </header>
  );
}