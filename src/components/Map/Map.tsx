'use client';

import { Box } from '@mui/material';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function GoogleMap() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}>
      <Box padding={4} margin={2}>
        <Map
          style={{width: '100vw', height: '50rem'}}
          defaultCenter={{lat: 22.54992, lng: 0}}
          defaultZoom={4}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
        />
      </Box>
    </APIProvider>
  );
}