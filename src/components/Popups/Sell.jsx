import React, { useRef, useState } from 'react';
import { getCroppedImg } from '../Utils/CropImage';
import Cropper from 'react-easy-crop';
import CropPopup from './CropPopup';
import adddPro from '../../assets/images/addProdect.jpeg'

export default function Sell() {

    // image and its crop
    const [imageSrc, setImageSrc] = useState(null);
    const [cropPopup, showCropPopup] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1); // For zoom level
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null); // To show cropped image
    const [aspect, setAspect] = useState(4 / 3); // Default aspect ratio
    const croper = useRef();

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result); // Set the image for cropping
                showCropPopup(true)

                // Set the background image for the cropper container
                setTimeout(() => {
                    if (croper.current) {
                        croper.current.style.backgroundImage = `url(${reader.result})`;
                        croper.current.style.backgroundSize = 'cover';
                        croper.current.style.backgroundPosition = 'center';
                    }
                }, 50);
            };
            reader.readAsDataURL(file);
        }
    };

    const cropImage = async () => {
        try {
            const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
            setCroppedImage(croppedImageUrl); // Display cropped image
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='w-screen h-screen bg-red-900 z-[110] fixed top-0 anime'>
            <h1 className='text-[28px] mb-2 max-w-[1280px] w-full mx-auto mt-20 font-bold'>Sell Yours</h1>
            <div className="w-full max-w-[1280px] mx-auto flex">
                <div className='flex-1'>
                    <p className='mb-1 mt-10'>Product Name</p>
                    <input placeholder='Iphone XR' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="text" />

                    <p className='mb-1 mt-10'>Description</p>
                    <input placeholder='Iphone XR' className='mb-10 w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="text" />

                    <br />
                    <label htmlFor="subcategory">Subcategory: </label><br></br>
                    <select className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' id="subcategory" name="">
                        <option value="Car">Car</option>
                        <option value="Bus">Bus</option>
                    </select>

                    <p className='mb-1 mt-10'>Price</p>
                    <input placeholder='Iphone XR' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="text" />

                    <p className='mb-1 mt-10'>Location</p>
                    <input placeholder='Iphone XR' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="text" />

                    <p className='mb-1 mt-10'>Contact Details</p>
                    <input placeholder='Iphone XR' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="text" />
                </div>

                <div className="flex-1 pt-16 flex flex-col justify-center duration-500">
                    {!imageSrc &&
                        <img className='w-full h-auto mb-10 flex-1 max-w-[300px] mx-auto anime' src={adddPro} alt="" />}
                        
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-full  bg-blue-500 px-5 py-3 max-w-[400px] relative text-center rounded-md grid place-items-center z-[0]'>
                            <input className='absolute w-full h-full opacity-0 z-[2]' type="file" onChange={handleImageUpload} />
                            <p className='w-full h-full font-bold z-[1]'>{!imageSrc ? 'Select the Image of you prodect' : 'Replace image'}</p>
                        </div>

                        {cropPopup && <CropPopup pro={{ aspect, imageSrc, croper, Cropper, crop, zoom, setCrop, setZoom, onCropComplete, cropImage, setAspect, showCropPopup }} />}

                        {croppedImage && (
                            <>
                                <div className="anime mt-5 w-full max-w-[400px] flex items-center justify-center flex-col rounded-lg overflow-hidden">
                                    <h3 className='mb-2'>Cropped Image:</h3>
                                    <img className='w-full h-auto' src={croppedImage} alt="Cropped" />
                                </div>
                                <div onClick={()=>{ showCropPopup(true) }} className='anime w-full mt-10 bg-blue-500 px-5 py-3 max-w-[400px] relative text-center rounded-md grid place-items-center'>
                                    <p className='w-full h-full font-bold'>Crop image</p>
                                </div>    
                            </>
                        )} 
                    </div>
                </div>
            </div>
        </div>
    );
}
