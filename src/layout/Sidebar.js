import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import DevicesIcon from '@mui/icons-material/Devices';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import TwitterIcon from '@mui/icons-material/Twitter';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faGraduationCap);

import CustomButton from '../components/CustomButton';

const Sidebar = ({ open, onClose }) => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Drawer
                anchor='left'
                onClose={() => onClose()}
                open={open}
                variant='temporary'
                sx={{
                    '& .MuiPaper-root': {
                        width: '100%',
                        maxWidth: 280
                    },
                }}
            >
                <Box sx={{ height: '100%', padding: 1 }}>
                    <Box width={1} paddingX={2} paddingY={1}>
                            
                        <Typography 
                            variant='h3' 
                            component='div' 
                            color={theme.palette.text.primary}
                            fontFamily='"Love Ya Like A Sister", cursive'
                            fontWeight='bold'
                            textDecoration='none'
                            flexGrow={1}
                        >
                            favoursyre
                        </Typography>
                    </Box>
                    <Box paddingX={2} paddingY={2}>
                        <CustomButton 
                            href='#home'
                            icon={<HomeIcon />}
                            text='Home'
                        />
                        <Box paddingY={1}>
                            <CustomButton 
                                href='#about'
                                icon={<InfoIcon />}
                                text='About'
                            />
                        </Box>
                        <Box paddingY={1}>
                            <CustomButton 
                                href='#projects'
                                icon={<ListIcon />}
                                text='Projects'
                            />
                        </Box>
                        <Box paddingY={1}>
                            <CustomButton 
                                href='#technologies'
                                icon={<DevicesIcon />}
                                text='Technologies'
                            />
                        </Box>
                        <Box paddingY={1}>
                            <CustomButton 
                                href='#contact'
                                icon={<EmailIcon />}
                                text='CONTACT'
                            />
                        </Box>
                        <Box>
                            <Stack direction='row' spacing={1}>
                                <IconButton 
                                    aria-label='GitHub' 
                                    color='primary'
                                    href='https://github.com/favoursyre'
                                    target='_blank'
                                >
                                    <GithubIcon fontSize='large' />
                                </IconButton>
                                <IconButton 
                                    aria-label='LinkedIn' 
                                    color='primary'
                                    href='https://www.linkedin.com/in/favour-ndubuisi-7b019786'
                                    target='_blank'
                                >
                                    <LinkedInIcon fontSize='large' />
                                </IconButton>
                                <IconButton 
                                    aria-label='Twitter' 
                                    color='primary'
                                    href='https://twitter.com/favoursyre?s=09'
                                    target='_blank'
                                >
                                    <TwitterIcon fontSize='large' />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </React.Fragment>
    );
};

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
};

export default Sidebar;