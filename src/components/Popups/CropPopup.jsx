import React, { useRef } from 'react'
import { getCroppedImg } from '../Utils/CropImage'


export default function CropPopup(props) {


    const { aspect, imageSrc, croper, Cropper, crop, zoom, setCrop, setZoom, onCropComplete, cropImage,setAspect,showCropPopup } = props.pro
    const mainCropPopupLayout = useRef()
    const onConformCrop = ()=>{
        cropImage()
        mainCropPopupLayout.current.classList.add('onime')
        setTimeout(() => {
            showCropPopup(false)       
        }, 400);
        
    }

    return (
        <>
            <div ref={mainCropPopupLayout} className='w-screen h-screen backdrop-blur-3xl fixed top-0 left-0 grid place-items-center anime z-[156]'>
                <div className='w-auto h-auto bg-red-600 rounded-lg flex items-center flex-col px-[10px] sm:px-[50px] md:px-[100px] duration-500 py-[50px]  z-[157]'>
                    {
                        <div className='w-full min-w-[300px]'>
                            <label className='text-[16px]'>Select Aspect Ratio: </label>
                            <select className='mt-1 w-[100%] max-w-[300px] h-12 rounded-md outline-none px-5 border-2 border-black focus:border-[#47e7df]' value={aspect} onChange={(e) => setAspect(parseFloat(e.target.value))}>
                                <option value={4 / 3}>4:3</option>
                                <option value={16 / 9}>16:9</option>
                                <option value={1 / 1}>1:1</option>
                            </select>
                        </div>
                    }
                    {imageSrc && (
                        <div>
                            {/* Cropper with zoom functionality */}
                            <div ref={croper} className='w-[300px] h-[300px] relative m-auto mt-10 before:inset-0 before:backdrop-blur-md before:absolute z-[0] rounded-[10px] overflow-hidden '>
                                <Cropper
                                    image={imageSrc}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={aspect} // Aspect ratio selected by user
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom} // To handle zoom
                                    onCropComplete={onCropComplete}
                                    style={{
                                        containerStyle: { width: '100%', height: '100%' },
                                    }}
                                />
                            </div>

                            {/* Zoom Slider */}
                            <div className='w-[300px] mt-5'>
                                <label className='text-[16px]'>Zoom: {zoom}</label>
                                <input
                                    type="range"
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    value={zoom}
                                    onChange={(e) => setZoom(e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    )}
                    <button onClick={onConformCrop} className="mt-5 w-full max-w-[300px] bg-green-500 text-white p-2 rounded">
                        Confirm Crop
                    </button>
                </div>
            </div>
        </>
    )
}
