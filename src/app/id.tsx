import React from 'react';
import Image from 'next/image'

export default function IdCard() {
    return (
        <div className='flex flex-colbg-white min-h-screen p-4 m-4'>
            <div className='flex-grow flex items-center justify-center p-6'>
                <div className='bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex item-center justify-center border-4 border-sky-300'>

                    {/*background image*/}
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='relative w-full h-full max-w-[400px] max-h-[300px]'>
                            <Image
                                src="/images/governor.PNG"
                                alt="governor" width={400}
                                height={300}
                                objectFit="cover"
                                className="opacity-30" />
                        </div>
                    </div>
                    {/* left side*/}
                    <div className='w-2/3 pr-4 pt-16 relative z-10'>
                        {/*logo*/}
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className='absolute top-[-16px] left-0 w-20 h-20 z-10' />

                        <p className='mb-2'>
                            <span className='text-sky-500'>
                                {" "}
                                <strong> Name </strong>
                            </span>
                            <span className='text-black'> <strong>Rizwana Perveen</strong></span>
                        </p>

                        <p className='mb-2'>
                            <span className='text-sky-500'>
                                {" "}
                                <strong> Roll No. </strong>
                            </span>
                            <span className='text-black'> <strong>00245410</strong></span>
                        </p>

                        <p className='mb-2'>
                            <span className='text-sky-500'>
                                {" "}
                                <strong> Distance Learning </strong>
                            </span>
                            <span className='text-black'> <strong> No </strong></span>
                        </p>

                        <p className='mb-2'>
                            <span className='text-sky-500'>
                                {" "}
                                <strong> City </strong>
                            </span>
                            <span className='text-black'> <strong> Karachi </strong></span>
                        </p>
                        <p className='mb-2'>
                            <span className='text-sky-500'>
                                {" "}
                                <strong> Center </strong>
                            </span>
                            <span className='text-black'> <strong> Governor House Karachi </strong></span>
                        </p>
                        <p className='mb-2'>
                            <span className='text-sky-500'>
                                {" "}
                                <strong> Campus </strong>
                            </span>
                            <span className='text-black'> <strong> Main </strong></span>
                        </p>
                        <p className='mb-2'>
                            <span className='text-sky-500'>
                                {" "}
                                <strong> DayTime</strong>
                            </span>
                            <span className='text-black'> <strong> Sunday 2:00pm to 5:00 pm</strong></span>
                        </p>
                        <p className='mb-2'>
                            <span className='text-sky-500'>
                                {" "}
                                <strong>Batch</strong>

                            </span>
                            <span className='text-black'> <strong> 1 </strong></span>
                        </p>


                        {/*button*/}
                        <div className='flex flex-col mt-4'>
                            <button className='relative w-full p-1 rounded-lg border border-gray-300 bg-blue-900 text-white items-center justify-center flex'>
                                <span className='absolute inset-0 bg-slate-500'
                                    style={{ width: "50%" }}>
                                </span>
                                <span className='relative z-10'>Q2 & WMD</span>

                            </button>

                        </div>
                    </div>
                    {/*right side*/}
                    <div className='w-1/5 text-center relative z-10'>
                        <Image
                            src={"/images/profile.png"}
                            alt={"pic"}
                            width={600}
                            height={400}
                            className='rounded-lg mb-6 w-full' />
                        <p className='border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-14 text-xl'>Authorized Signature</p>
                    </div>









                </div>
            </div>
        </div>
    );
}