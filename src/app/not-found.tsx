import Link from 'next/link'
import Image from 'next/image'
import { headers } from 'next/headers'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')

  return (
    <Stack padding={10} justifyContent={'center'} justifyItems={'center'} sx={{ height: "100vh", textAlign: "center", margin: "0 auto"}}>
      <Typography variant='h1'>{'Oops, looks like you\'ve stumbled into a parallel universe!'}</Typography>
      <Box sx={{margin: "0 auto"}}>
        <Image src="/cats-dogs.webp" alt="Cats and Dogs in Space" width={1200} height={686} priority={true} />
      </Box>
      <Typography variant='body1'>{'Don\'t worry, our intergalactic navigation team is on the case. In the meantime, why don\'t you head back to the homepage and explore our wondrous world?'}</Typography>
      <Box sx={{ width: "100%" }} height={100} alignContent={"center"} alignItems={"center"}>
        <Button color='primary' variant='contained'>
          <Link href="/">Beam me back to the Home</Link>
        </Button>
      </Box>
      <Typography variant="caption">domain: {domain}</Typography>
    </Stack>
  )
}