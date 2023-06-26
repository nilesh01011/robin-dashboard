/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi'
import { BiError } from 'react-icons/bi'
import { userdata } from '../UserData';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [captcha, setCaptcha] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [errorCaptcha, setErrorCaptcha] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const captchaCode = 'XDQA5K';
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const fetchData = userdata.map((ele) => {
            navigate('/dashboard');
            // if (!email && !password && !errorCaptcha) {
            //     setError(true)
            //     setErrorCaptcha(true)
            // }

            // if (ele.username === email && ele.password === password && captchaCode === captcha) {

            //     if (captchaCode === captcha) {
            //         navigate('/dashboard');
            //     } else {
            //         setErrorCaptcha(true);
            //         setEmail(email)
            //         setPassword(password)
            //     }

            // } else {
            //     setError(true);
            //     setErrorCaptcha(true);
            //     console.log(email, password, captcha)
            //     setEmail('');
            //     setPassword('');
            //     setCaptcha('');
            // }
        })

        console.log(fetchData)
    }

    return (
        <div id='login' className={`h-screen w-full flex flex-col justify-around relative overflow-hidden bg-no-repeat bg-cover`} style={{ backgroundImage: 'url("./images/mainbg.png")' }}>

            {/* logo images */}
            <div className='w-full flex flex-col lg:mt-[23px] sm:mt-[45px]'>
                <div className='lg:h-[40px] h-[30px] 1x1:w-[220px] w-[160px] lg:ml-auto lg:mx-0 mx-auto flex items-center justify-center lg:pr-[25px]'>
                    <img width={220} height={40} src='./Logo.svg' className='h-full w-full object-contain scale-[1.1]' alt='logo-images' />
                </div>
            </div>
            {/* robin logo and content*/}
            {/* 1x1:mt-6 mt-4 */}
            <div className='h-max flex flex-col items-center mb-7 xs:mt-6 mt-3'>
                {/* robin logo */}
                <div className='h-max flex flex-col items-center justify-center lg:gap-6 gap-3'>
                    <img width={245} height={50} src='./images/RobinDark_theme.svg' className='1x1:h-[50px] lg:h-[40px] h-[30px] sm:w-[245px] w-[100px]' alt='robin-images' />
                    <img width={300} height={1} src='./images/Line.png' className='h-[1px] w-[300px] mb-3' alt='line-images' />
                </div>
                {/* content */}
                <div>
                    <h2 className='text-white 1x1:text-[24px] lg:text-[18px] text-[16px]'>Dealer Management System</h2>
                </div>
            </div>
            {/* display contents */}
            <div className='w-full h-max flex flex-col justify-center gap-[10px] z-20 relative'>
                {/* main contents */}
                <div className='h-max flex flex-col justify-center'>
                    {/* login content */}
                    <div className='flex flex-col'>
                        <div className='w-full h-max flex items-center justify-center'>
                            {/* sm:w-[360px] w-[320px] */}
                            <div className='1x1:w-[420px] sm:w-[360px] w-[320px] h-max rounded-2xl bg-[rgba(40,39,44,0.8)] 1x1:p-[25px] p-[18px_25px]'>
                                {/* 1x1:py-[25px] sm:py-[15px] py-[10px] */}
                                {/* gap-[5px] */}
                                <div className='flex flex-col items-center gap-[8px]'>
                                    <h1 className='font-bold sm:text-[26px] text-[20px] text-white'>Welcome!</h1>
                                    <p className='text-[#DEDEDE] xl:text-[14px] text-[12px] font-[400] 1x1:mt-2'>Please enter your credentials to login</p>

                                    {/* login app */}
                                    <form onSubmit={submitHandler} className='flex flex-col w-full h-full md:mt-4 mt-3 1x1:gap-[2rem] lg:gap-[1.3rem] gap-[1.6rem]'>
                                        {/* user input */}
                                        <div className='relative flex items-center border-b-[1px] border-[#DEDEDE] 1x1:pb-[6px] pb-[4px]'>
                                            <input className='bg-transparent w-full xl:text-base text-[14px] pl-[30px] placeholder:text-[#8E8585] text-white' type='text'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='User ID, mobile no, or email ID' autoComplete="off" />
                                            {/* <FontAwesomeIcon icon="fa-regular fa-envelope" /> */}
                                            <FiMail className='absolute left-0 text-white' size={18} />

                                            {
                                                error && (
                                                    <div className='absolute -bottom-[25px] left-0'>
                                                        <span className='text-[#FF3E5B] flex items-center gap-1 text-[12px]'>
                                                            <BiError size={12} />
                                                            User name not found
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </div>

                                        {/* password input */}

                                        <div className='relative flex items-center border-b-[1px] border-[#DEDEDE] 1x1:pb-[6px] pb-[4px]'>
                                            <input className='bg-transparent w-full xl:text-base text-[14px] pl-[30px] placeholder:text-[#8E8585] text-white'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder='Password' autoComplete="off" />
                                            <FiLock className='absolute left-0 text-white' size={18} />

                                            <div onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-1 cursor-pointer'>
                                                {
                                                    !showPassword ?
                                                        <AiOutlineEyeInvisible className='text-[#DEDEDE]' size={18} />
                                                        : <AiOutlineEye className='text-white' size={18} />
                                                }
                                            </div>

                                            {
                                                error && (
                                                    <div className='absolute -bottom-[25px] left-0'>
                                                        <span className='text-[#FF3E5B] flex items-center gap-1 text-[12px]'>
                                                            <BiError size={12} />
                                                            Password must contain at least 7 characters
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </div>

                                        {/* capture input */}

                                        <div className='relative flex items-center gap-4'>
                                            <div className='border-b-[1px] border-[#DEDEDE] pb-[8px] w-[60%]'>
                                                <input className='bg-transparent w-full xl:text-base text-[14px] placeholder:text-[#8E8585] text-white'
                                                    value={captcha}
                                                    onChange={(e) => setCaptcha(e.target.value)}
                                                    type='text' maxLength={6} placeholder='Captcha' />

                                                {
                                                    errorCaptcha && (
                                                        <div className='absolute -bottom-[25px] left-0'>
                                                            <span className='text-[#FF3E5B] flex items-center gap-1 text-[12px]'>
                                                                <BiError size={12} />
                                                                Please enter a valid captcha code
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className='flex items-center gap-2 w-[40%] justify-center'>
                                                <span className='line-through sm:text-[20px] text-[16px] font-[400] text-white'>XDQA5K</span>
                                                {/* <MdRefresh size={22} className="text-[#E31837]" /> */}
                                                <div className={`cursor-pointer`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                                        <path d="M8 4V0L3 5L8 10V6C9.18669 6 10.3467 6.35189 11.3334 7.01118C12.3201 7.67047 13.0892 8.60754 13.5433 9.7039C13.9974 10.8003 14.1162 12.0067 13.8847 13.1705C13.6532 14.3344 13.0818 15.4035 12.2426 16.2426C11.4035 17.0818 10.3344 17.6532 9.17054 17.8847C8.00666 18.1162 6.80026 17.9974 5.7039 17.5433C4.60754 17.0892 3.67047 16.3201 3.01118 15.3334C2.35189 14.3467 2 13.1867 2 12H0C0 13.5823 0.469192 15.129 1.34824 16.4446C2.22729 17.7602 3.47672 18.7855 4.93853 19.391C6.40034 19.9965 8.00887 20.155 9.56072 19.8463C11.1126 19.5376 12.538 18.7757 13.6569 17.6569C14.7757 16.538 15.5376 15.1126 15.8463 13.5607C16.155 12.0089 15.9965 10.4003 15.391 8.93853C14.7855 7.47672 13.7602 6.22729 12.4446 5.34824C11.129 4.46919 9.58225 4 8 4Z" fill="#E31837" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* submit button */}

                                        <div className='w-full h-full flex flex-col justify-center items-center'>
                                            <button className='rounded bg-[#FF3E5B] text-whiet w-full 1x1:h-[50px] h-[45px] text-white'>Login</button>
                                            {/* forget password */}
                                            <button className='rounded 1x1:mt-5 mt-3 font-light text-whiet w-max text-white text-center' type='button'>Forgot password?</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className='w-full lg:h-[40px] lg:gap-0 gap-2 sm:pb-[15px] pb-[10px] flex items-center justify-between lg:flex-row flex-col 1x1:mt-3 lg:mt-0 md:mt-3'>
                <div className='flex items-center gap-4 divide-x-[1px] divide-[#8E8585]'>
                    <a href='#terms' className='text-[#8E8585] sm:text-[14px] text-[9px] sm:px-[25px] px-[8px] cursor-pointer'>TERMS OF USE</a>
                    <a href='#about' className='text-[#8E8585] sm:text-[14px] text-[9px] sm:px-[25px] px-[8px] cursor-pointer'>ABOUT US</a>
                    <a href='#disclaimer' className='text-[#8E8585] sm:text-[14px] text-[9px] sm:px-[25px] px-[8px] cursor-pointer'>DISCLAIMER</a>
                    <a href='#contact' className='text-[#8E8585] sm:text-[14px] text-[9px] sm:px-[25px] px-[8px] cursor-pointer'>CONTACT US</a>
                </div>
                <div className='sm:pr-[25px]'>
                    <span className='text-[#8E8585] sm:text-[14px] text-[9px] sm:pl-[25px]'>© 2023 ROBIN. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Login