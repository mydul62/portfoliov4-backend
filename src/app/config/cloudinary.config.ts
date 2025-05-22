import { v2 as cloudinary } from 'cloudinary';
import config from '.';

// cloudinary.config({
//   cloud_name: config.cloudinary_cloud_name,
//   api_key: config.cloudinary_api_key,
//   api_secret: config.cloudinary_api_secret,
// });

    cloudinary.config({ 
    cloud_name: 'dbvlfbxg1', 
       api_key: '388471872361168', 
       api_secret: 'sEeRjHz1eiwp3hit8M0OUT4xqRg' 
    });

export const cloudinaryUpload = cloudinary;
