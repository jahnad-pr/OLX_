import React, { Suspense, useContext, useRef, useState } from 'react';
import { getCroppedImg } from '../Utils/CropImage';
import Cropper from 'react-easy-crop';
import CropPopup from './CropPopup';
import adddPro from '../../assets/images/addProdect.jpeg'
import { addProdect, uploadImage } from '../../Auth/DBcrud'
import { Categories } from '../../context/Category'
import { formatToINR } from "../Utils/PriceFormat"



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
    const [Prodect, setProdect] = useState({ category: 'Car',featured:false })
    const [seccuss, showSeccuss] = useState(false)
    const [loader, showLoader] = useState(false)
    const { isSign } = useContext(Categories)
    const loaderScreen = useRef()
    const decINput = useRef();
    

    const closeSellPopup = () => {
        sellPopupLayout.current.classList.add('Inime')
        setTimeout(() => { makeSell(false) }, 400);
    }
    const descriptionInput = ()=>{
        decINput.current.focus()
    }

    // Form Settlement
    // Update prodect onChange
    const onChangecontactalue = (evenet) => {
        if(e.target.name!=='featured')
            setProdect({ ...Prodect, [evenet.target.name]: evenet.target.value })
        else {
            setProdect({ ...Prodect, featured: !Prodect.featured })}
    }
    // price change by coamas
    const onChangecontactaluePrice = (evenet)=>{
        setProdect({ ...Prodect, [evenet.target.name]: formatToINR(Number(evenet.target.value.replace(/[^0-9.-]+/g, ''))) })
        evenet.target.value = formatToINR(Number(evenet.target.value.replace(/[^0-9.-]+/g, '')))
    }
    // Valiadtaion
    const formValidation = async (e) => {
        e.preventDefault()
        showLoader(true)


        // to Get url of Image
        if (croppedImage) {
            const url = await uploadImage(croppedImage)
            // add Prodect to firebase
            addProdect(Prodect, url, showSeccuss, isSign)
        }
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
            <div ref={sellPopupLayout} className={`overflow-scroll w-screen h-screen bg-white z-[110] fixed top-0 anime ${seccuss ? 'opacity-0' : ''}`}>
                <img onClick={closeSellPopup} className='absolute w-[40px] h-[40px] right-10 top-10 hover:cursor-pointer' src="https://www.svgrepo.com/show/32011/close-button.svg" alt="" />
                <form onSubmit={formValidation} className='mb-48 w-[calc(100vw_-_50px)] mx-auto' method='DIALOG' action="">
                    <h1 className='text-[28px] mb-2 xl:max-w-[1280px] max-w-[600px] w-[calc(100%_-_45px)] mx-auto mt-20 font-bold'>Sell Yours</h1>
                    <div className="w-full max-w-[1280px] mx-auto flex flex-col xl:flex-row">
                        <div className='w-auto grid place-items-center xl:flex-1'>

                            {/* FOEM FIRST SECTION */}
                            {/* PRODECT NAME */}
                            <p className='mb-1 mt-10 max-w-[600px] w-full'>Product Name</p>
                            <input onChange={onChangecontactalue} name='prodectName' required placeholder='Iphone XR' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-gray-300 focus:border-[#47e7df]' type="text" />

                            {/* DECSRIPTION */}
                            <p className='mb-1 mt-10 max-w-[600px] w-full'>Description</p>
                            <div onClick={descriptionInput} className="bg-white mb-10 w-[100%] group max-w-[600px] h-16 rounded-md outline-none px-5 border-2 border-gray-300 focus-within:border-[#47e7df]">
                                <input ref={decINput} onChange={onChangecontactalue} name='description' required placeholder='Clean and neet piece' className='w-full outline-none mt-3' type="text" />
                            </div>

                            {/* CATEGORY */}
                            <div className='w-[100%] max-w-[600px] flex'>
                                <div className='flex-1 pr-3'>
                                    <br /><label htmlFor="subcategory">Subcategory: </label><br></br>
                                    <select onChange={onChangecontactalue} required className='mt-2 h-12 w-full rounded-md outline-none px-5 border-2 border-gray-300 focus:border-[#47e7df]' id="subcategory" name="category">
                                        <option value="Car">Cars</option>
                                        <option value="Propertie">Properties</option>
                                        <option value="Mobile">Mobiles</option>
                                        <option value="Bike">Bikes</option>
                                        <option value="Job">Jobs</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Pet">Pets</option>
                                        <option value="Accessorie">Accessories</option>
                                        <option value="Laptop/pc">Laptop/pc</option>
                                        <option value="Serviece">Servies</option>
                                        <option value="Other">Others</option>
                                    </select>

                                </div>

                                <label className="inline-flex items-center cursor-pointer flex-0 mt-12">
                                    <span className="ms-3 font-medium  mr-5 ml-5 text-yellow-600">Featured</span>
                                    <input onChange={onChangecontactalue} type="checkbox" value={Prodect.featured} className="sr-only peer" name='featured' />
                                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>


                            </div>

                            {/* PRICE */}
                            <p className='mb-1 mt-10 max-w-[600px] w-full'>Price</p>
                            <input onChange={onChangecontactaluePrice} name='price' required placeholder='12000' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-gray-300 focus:border-[#47e7df]' type="text" />

                            {/* LOCATION */}
                            <p required className='mb-1 mt-10 max-w-[600px] w-full'>Location</p>
                            <input onChange={onChangecontactalue} name='location' placeholder='Kochi' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-gray-300 focus:border-[#47e7df]' type="text" />

                            {/* CONTACT */}
                            <p required className='mb-1 mt-10 max-w-[600px] w-full'>Contact Details</p>
                            <input onChange={onChangecontactalue} name='contact' placeholder='9900XXXXXX' className='w-[100%] max-w-[600px] h-12 rounded-md outline-none px-5 border-2 border-gray-300 focus:border-[#47e7df]' type="number" />


                        </div>

                        <div className="flex-1 pt-16 flex flex-col justify-center duration-500">

                            {/*FORM SECOND PART */}
                            {/* Add prodect image */}
                            {!imageSrc && <img className='w-full h-auto mb-10 flex-1 max-w-[300px] mx-auto anime ' src={adddPro} alt="" />}

                            {/* Container without image */}
                            <div className='w-full flex flex-col justify-center items-center sm:border-[1px] xl:border-0 border-gray-300 max-w-[600px] mx-auto py-10 rounded-md'>

                                {/* Upload/Replace Button */}
                                <div className='w-full  bg-blue-500 text-white px-5 py-3 max-w-[400px] relative text-center rounded-md grid place-items-center z-[0]'>
                                    <input className='absolute w-full h-full opacity-0 z-[2]' type="file" onChange={handleImageUpload} />
                                    <p className='w-full h-full font-bold z-[1]'>{!imageSrc ? 'Select the Image of you prodect' : 'Replace image'}</p>
                                </div>

                                {/* CropPopup */}
                                {cropPopup && <CropPopup pro={{ aspect, imageSrc, croper, Cropper, crop, zoom, setCrop, setZoom, onCropComplete, cropImage, setAspect, showCropPopup }} />}

                                {/* After img auploaded */}
                                {croppedImage && (<>

                                    {/* Image output */}
                                    <div className="anime mt-5 w-full max-w-[400px] flex items-center justify-center flex-col rounded-lg overflow-hidden">
                                        <h3 className='mb-2 opacity-30'>Cropped Image</h3>
                                        <img className='w-full h-auto' src={croppedImage} alt="Cropped" />
                                    </div>

                                    {/* Crop image */}
                                    <div onClick={() => { showCropPopup(true) }} className='anime w-full mt-10 text-blue-500 border-[2px] border-gray-200 px-5 py-3 max-w-[400px] relative text-center rounded-md grid place-items-center'>
                                        <p className='w-full h-full font-bold'>Crop image</p>
                                    </div>

                                    {/* Submit */}

                                </>)}
                            </div>
                                { croppedImage && <input type='submit' className="bg-[#14b8a6] w-full md:mt-16 text-white max-w-[600px] py-2 flex jc rounded-md font-bold mx-auto" value={'Sell Product'} />} 
                        </div>
                    </div>
                </form>
            </div >
            {loader &&
                <Suspense>
                    <div ref={loaderScreen} className={`w-screen h-screen fixed flex bg-black justify-center items-center  top-0 left-0  z-[120] ${!seccuss ? 'Jnime' : ''}`}>
                        <Loader color={'#ffffff'} loaderScreen={loaderScreen} sell={sell} showLoader={showLoader} seccuss={seccuss} />
                    </div>
                </Suspense>}
        </>
    );
}
