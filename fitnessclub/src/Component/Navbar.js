import {Stack, AppBar, Toolbar, Button, Typography, Grid} from '@mui/material';
export const Navbar=()=>{
    return <>
        <AppBar  sx={{
                backgroundColor: 'transparent'
            }}>
            <Toolbar>
                <Typography variant='h6' component='div' textAlign='left' flexGrow={1} color='#ff5421' fontWeight='bold'>FITNESS<span style={{color: '#fff'}}>CLUB</span></Typography>
                <Stack direction='row' color='inherit'>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Courses</Button>
                    <Button color='inherit'>Team</Button>
                    <Button color='inherit'>Blogs</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>

    </>
}