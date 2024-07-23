import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Header from "@/components/Header/Header";
import GoogleMap from "@/components/Map/Map";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Stack spacing={2} padding={4} flex={1} alignContent={"center"} alignItems={"center"} paddingTop={10}>
          <Typography variant="h1" textAlign="center">My Life Tracker</Typography>
          <Image src="/illustration.webp" alt="Think Inside Illustration" width={1200} height={686} priority={true} />

          <Typography variant="h2" textAlign="center">
            Where Have I Been? Where Am I Going?
          </Typography>
          <GoogleMap />
        </Stack>
      </main>
    </>
  );
}
