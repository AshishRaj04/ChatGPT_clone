import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import BusinessIcon from '@mui/icons-material/Business';
const About = () => {
  

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <Paper elevation={3} className='p-8 max-w-md mx-auto'>
        <Typography variant="h4" className='text-3xl font-bold mb-4'>
          About Us
        </Typography>
        <Typography variant="body1" className='mb-4'>
          <BusinessIcon className="mr-2" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra sapien eget congue pulvinar.
          Integer tristique arcu at facilisis. In hac habitasse platea dictumst.
        </Typography>
        <Typography variant="body1" className='mb-4'>
          <BusinessIcon className="mr-2" />
          Aliquam iaculis leo sed dui tempor, et euismod nunc fermentum. Nullam vitae malesuada ex.
          Integer pellentesque posuere est, id hendrerit justo consequat id.
        </Typography>
        <Typography variant="body1" className='mb-4'>
          <BusinessIcon className="mr-2" />
          Phasellus auctor aliquam est a lobortis. Sed tristique semper mi in fermentum. Duis
          elementum pretium quam, at cursus orci bibendum sed. Proin hendrerit est non dolor
          elementum, sit amet ultricies leo venenatis.
        </Typography>
      </Paper>
    </div>
  );
};

export default About;
