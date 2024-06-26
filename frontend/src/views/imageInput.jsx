import React,{useState,useEffect} from 'react';
import { UploadImage, CaptureImage } from '../controllers/actions'
import {useNavigate} from 'react-router-dom';

import WebcamCapture from './Components/webCam'

// MUI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';

function ImageInput() {
    const [landingPage, setLandingPage] = useState(true)
    const [imageSrc, setImageSrc] = useState(null)
    const navigate = useNavigate();
    if(imageSrc !== null) {
        console.log("we got an image",imageSrc)
        CaptureImage(imageSrc, navigate)
    }
    const handleUpload = (event) => {
        console.log("File selected");
        const file = event.target.files[0];
        console.log(file)
        UploadImage(file,navigate)
    };
    return (
        <>
            <Container maxWidth="xs" sx={{padding: 0}} alignitems="center">
                <Grid container justify="center" sx={{maxHeight:"100vh"}} spacing={1}>
                    {landingPage ? 
                        <Grid item xs={6} sx={{margin:"40vh auto"}} textAlign="center">
                            <PhotoCameraIcon sx={{fontSize:"5em"}}/>    
                            <Button 
                                onClick={() => {setLandingPage(false)}} 
                                variant="contained"
                                fullWidth>
                                Take a photo
                            </Button>
                            <br />
                            OR
                            <label htmlFor="upload-photo">
                            <Button
                                component="span"
                                variant="contained"
                                fullWidth>
                                Upload a photo
                            </Button>
                        </label>
                        <input
                            id="upload-photo"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleUpload}
                        />
                        </Grid>:
                        <WebcamCapture setImageSrc={setImageSrc}/>
                    }
                </Grid>   
            </Container>
        </>
    )
}

export default ImageInput
