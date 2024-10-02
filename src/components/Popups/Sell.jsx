import React, { Suspense, useRef, useState } from 'react';
import { getCroppedImg } from '../Utils/CropImage';
import Cropper from 'react-easy-crop';
import CropPopup from './CropPopup';
import adddPro from '../../assets/images/addProdect.jpeg'
import { addProdect, uploadImage } from '../../Auth/DBcrud'



export default function Sell({ sell, makeSell }) {


    // image and its crop
    const [imageSrc, setImageSrc] = useState(null)
    const [cropPopup, showCropPopup] = useState(false)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [aspect, setAspect] = useState(4 / 3)
    const sellPopupLayout = useRef()
    const croper = useRef();

    // get LOading
    const Loader = React.lazy(() => import('../Utils/Loader'));

    // Form data States
    const [Prodect, setProdect] = useState({ caregory: 'car' })
    const [seccuss, showSeccuss] = useState(false)
    const [loader, showLoader] = useState(false)
    const loaderScreen = useRef()


    const closeSellPopup = ()=>{
        sellPopupLayout.current.classList.add('Inime')
        setTimeout(() => { makeSell(false) }, 400);
    }

    // Form Settlement
    // Update prodect onChange
    const onChangecontactalue = (e) => {
        setProdect({ ...Prodect, [e.target.name]: e.target.value })
    }
    // Valiadtaion
    const formValidation = async (e) => {
        e.preventDefault()
        showLoader(true)

        // to Get url of Image
        if (croppedImage) {
            const url = await uploadImage(croppedImage)
            addProdect(Prodect, url, showSeccuss)
        }
        // add Prodect to firebase
    }




    // Image/Crop functions
    // Crop Functioner
    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    // onFile Receved
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                // Set the image for cropping
                setImageSrc(reader.result);
                showCropPopup(true)
                // Set the background image for the cropper container
                setTimeout(() => {
                    if (croper.current) {
                        croper.current.style.backgroundImage = `url(${reader.result})`
                        croper.current.style.backgroundSize = 'cover'
                        croper.current.style.backgroundPosition = 'center'
                    }
                }, 50)
            }
            reader.readAsDataURL(file);
        }
    };

    // Crop image
    const cropImage = async () => {
        try {
            const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
            // Display cropped image
            setCroppedImage(croppedImageUrl)
        } catch (e) { console.error(e) }
    }




    return (
        <>
            <div ref={sellPopupLayout} className={`w-screen h-screen bg-red-900 z-[110] fixed top-0 anime ${seccuss?'opacity-0':''}`}>
                <img onClick={closeSellPopup} className='absolute w-[40px] h-[40px] right-10 top-10' src="https://www.svgrepo.com/show/32011/close-button.svg" alt="" />
                <form method='DIALOG' action="">
                    <h1 className='text-[28px] mb-2 max-w-[1280px] w-full mx-auto mt-20 font-bold'>Sell Yours</h1>
                    <div className="w-full max-w-[1280px] mx-auto flex">
                        <div className='flex-1'>

                            {/* FOEM FIRST SECTION */}
                            {/* PRODECT NAME */}
                            <p className='mb-1 mt-10'>Product Name</p>
                            <input onChange={onChangecontactalue} name='prodectName' required placeholder='Iphone XR' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="text" />

                            {/* DECSRIPTION */}
                            <p className='mb-1 mt-10'>Description</p>
                            <div className="bg-white mb-10 w-[100%] max-w-[600px] h-16 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]">
                                <input onChange={onChangecontactalue} name='description' required placeholder='Clean and neet piece' className='w-full outline-none mt-3' type="text" />
                            </div>

                            {/* CATEGORY */}
                            <br /><label htmlFor="subcategory">Subcategory: </label><br></br>
                            <select onChange={onChangecontactalue} required className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' id="subcategory" name="caregory">
                                <option value="Car">Cars</option>
                                <option value="Bus">Properties</option>
                                <option value="Bus">Mobiles</option>
                                <option value="Bus">Bikes</option>
                                <option value="Bus">Jobs</option>
                                <option value="Bus">Fashion</option>
                                <option value="Bus">Pets</option>
                                <option value="Bus">Servies</option>
                            </select>

                            {/* PRICE */}
                            <p className='mb-1 mt-10'>Price</p>
                            <input onChange={onChangecontactalue} name='price' required placeholder='12,000' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="text" />

                            {/* LOCATION */}
                            <p required className='mb-1 mt-10'>Location</p>
                            <input onChange={onChangecontactalue} name='location' placeholder='Kochi' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="text" />

                            {/* CONTACT */}
                            <p required className='mb-1 mt-10'>Contact Details</p>
                            <input onChange={onChangecontactalue} name='contact' placeholder='9900XXXXXX' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' type="number" />


                        </div>

                        <div className="flex-1 pt-16 flex flex-col justify-center duration-500">

                            {/*FORM SECOND PART */}
                            {/* Add prodect image */}
                            {!imageSrc && <img className='w-full h-auto mb-10 flex-1 max-w-[300px] mx-auto anime' src={adddPro} alt="" />}

                            {/* Container without image */}
                            <div className='w-full flex flex-col justify-center items-center'>

                                {/* Upload/Replace Button */}
                                <div className='w-full  bg-blue-500 px-5 py-3 max-w-[400px] relative text-center rounded-md grid place-items-center z-[0]'>
                                    <input className='absolute w-full h-full opacity-0 z-[2]' type="file" onChange={handleImageUpload} />
                                    <p className='w-full h-full font-bold z-[1]'>{!imageSrc ? 'Select the Image of you prodect' : 'Replace image'}</p>
                                </div>

                                {/* CropPopup */}
                                {cropPopup && <CropPopup pro={{ aspect, imageSrc, croper, Cropper, crop, zoom, setCrop, setZoom, onCropComplete, cropImage, setAspect, showCropPopup }} />}

                                {/* After img auploaded */}
                                {croppedImage && (<>

                                    {/* Image output */}
                                    <div className="anime mt-5 w-full max-w-[400px] flex items-center justify-center flex-col rounded-lg overflow-hidden">
                                        <h3 className='mb-2'>Cropped Image:</h3>
                                        <img className='w-full h-auto' src={croppedImage} alt="Cropped" />
                                    </div>

                                    {/* Crop image */}
                                    <div onClick={() => { showCropPopup(true) }} className='anime w-full mt-10 bg-blue-500 px-5 py-3 max-w-[400px] relative text-center rounded-md grid place-items-center'>
                                        <p className='w-full h-full font-bold'>Crop image</p>
                                    </div>

                                    {/* Submit */}
                                    <input onClick={formValidation} type='submit' className="w-full mt-10 bg-blue-500 max-w-[400px] py-2 flex jc rounded-md font-bold" value={'Sell Prodect'} />

                                </>)}
                            </div>
                        </div>
                    </div>
                </form>
            </div >
            {loader &&
                <Suspense>
                    <div ref={loaderScreen} className={`w-screen h-screen fixed flex bg-black justify-center items-center  top-0 left-0  z-[120] ${!seccuss?'Jnime':''}`}>
                        <Loader color={'#ffffff'} loaderScreen={loaderScreen} sell={sell} showLoader={showLoader} seccuss={seccuss} />
                    </div>
                </Suspense>}
        </>
    );
}
