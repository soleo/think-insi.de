'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, Button, Skeleton, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <Skeleton variant="circular" width={40} height={40} />
    if (error) return <div>{error.message}</div>
    if (!user) {
        return (
            <Button color="inherit">
                <Link href="/api/auth/login">Login</Link>
            </Button>
        );
    }
    return (
        user && (
        <Stack flexDirection={'row'}>
            <Avatar src={user.picture!} alt={user.name!} />
            <Button color="inherit">
                <Link href="/api/auth/logout">Logout</Link>
            </Button>
        </Stack>
        )
    );
}