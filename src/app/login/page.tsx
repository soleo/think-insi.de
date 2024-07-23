import { Button, Stack } from "@mui/material";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Stack spacing={2}>
      <Button variant="contained">
        <Link href="/api/auth/login">Login</Link>
      </Button>
    </Stack>
  );
}