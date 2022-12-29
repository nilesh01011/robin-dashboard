import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi'
import { MdRefresh } from 'react-icons/md'
import { BiError } from 'react-icons/bi'
import { userdata } from '../UserData';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [error, setError] = useState(false);
    const [errorCaptcha, setErrorCaptcha] = useState(false);
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
    };

    return (
        <div className='h-screen w-full relative overflow-hidden bg-no-repeat bg-cover pt-[20px]' style={{ backgroundImage: 'url("./images/mainbg.png")' }}>

            {/* logo images */}
            <div className='w-full h-[20px] flex lg:justify-end justify-center lg:pr-[25px]'>
                <img src='./images/logo.png' className='h-full lg:w-[160px] w-[140px]' alt='logo-images' />
            </div>
            {/* display contents */}
            <div className='w-full sm:h-[90%] h-max sm:mt-0 mt-8 flex flex-col sm:justify-center gap-[10px] z-20 relative'>
                {/* main contents */}

                <div className='flex flex-col md:justify-between h-max'>
                    {/* robin logo and content*/}
                    <div className='flex flex-col items-center justify-center xl:mb-0 md:mb-7'>
                        {/* robin logo */}
                        <div className='h-max flex flex-col items-center justify-center'>
                            <img src='./images/RobinDark_theme.svg' className='1x1:h-[80px] h-[60px] w-[245px]' alt='robin-images' />
                            {/* <div className='w-auto h-[80px] flex items-center gap-[1px] justify-center'>
                                <img src='./images/R.svg' className={`transition-all 1x1:h-[60px] h-[30px] w-[28px]`} alt='logo-images' />
                                <img src='./images/O.svg' className={`transition-all 1x1:h-[70px] h-[30px] w-[30px] mx-[1px]`} alt='logo-images' />
                                <img src='./images/B_dark_theme.svg' className='1x1:h-[75px] h-[30px] w-[25px]' alt='logo-images' />
                                <img src='./images/i.svg' className={`transition-all 1x1:h-[40px] h-[30px] w-[15px]`} alt='logo-images' />
                                <img src='./images/N.svg' className={`transition-all 1x1:h-[60px] h-[30px] w-[30px]`} alt='logo-images' />
                            </div> */}
                            <img src='./images/Line.png' className='h-[1px] w-[300px] mt-1 mb-3' alt='line-images' />
                        </div>
                        {/* content */}
                        <div>
                            <h2 className='text-white 1x1:text-[24px] text-[20px]'>Dealer Management System</h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between h-full mt-6'>
                        {/* login content */}
                        <div className='w-full h-full flex items-center justify-center'>
                            <div className='2xl:w-[420px] lg:w-[380px] sm:w-[360px] w-[320px] h-max rounded-2xl bg-[rgba(40,39,44,0.8)] sm:py-[15px] py-[10px] px-[25px] mb-3'>
                                <div className='flex flex-col items-center sm:gap-[8px] gap-[5px]'>
                                    <h1 className='font-bold xl:text-[26px] text-[20px] text-white'>Welcome!</h1>
                                    <p className='text-[#DEDEDE] xl:text-[14px] text-[12px] font-[400]'>Please enter your credentials to login</p>

                                    {/* login app */}
                                    <form onSubmit={submitHandler} className='flex flex-col w-full h-full mt-3 gap-[1.6rem]'>
                                        {/* 1 */}
                                        <div className='relative flex items-center border-b-[1px] border-[#DEDEDE] pb-[4px]'>
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

                                        {/* 2 */}

                                        <div className='relative flex items-center border-b-[1px] border-[#DEDEDE] pb-[4px]'>
                                            <input className='bg-transparent w-full xl:text-base text-[14px] pl-[30px] placeholder:text-[#8E8585] text-white'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type='password' placeholder='Password' autoComplete="off" />
                                            {/* <FontAwesomeIcon icon="fa-regular fa-envelope" /> */}
                                            <FiLock className='absolute left-0 text-white' size={18} />

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

                                        {/* 3 */}

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
                                                <MdRefresh size={22} className="text-[#E31837]" />
                                            </div>
                                        </div>

                                        {/* button */}

                                        <div className='w-full h-full flex flex-col justify-center items-center'>
                                            <button className='rounded bg-[#FF3E5B] text-whiet w-full h-[45px] text-white'>Login</button>
                                            {/* forget password */}
                                            <button className='rounded mt-3 font-light text-whiet w-max text-white text-center' type='button'>Forgot password?</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer */}
                    <div className='w-full lg:h-[40px] lg:gap-0 gap-2 sm:py-[15px] py-[10px] flex items-center justify-between lg:flex-row flex-col sm:fixed bottom-0'>
                        <div className='flex items-center gap-4 divide-x-[1px] divide-[#8E8585]'>
                            <span className='text-[#8E8585] sm:text-[14px] text-[9px] sm:px-[25px] px-[8px]'>TERMS OF USE</span>
                            <span className='text-[#8E8585] sm:text-[14px] text-[9px] sm:px-[25px] px-[8px]'>ABOUT US</span>
                            <span className='text-[#8E8585] sm:text-[14px] text-[9px] sm:px-[25px] px-[8px]'>DISCLAIMER</span>
                            <span className='text-[#8E8585] sm:text-[14px] text-[9px] sm:px-[25px] px-[8px]'>CONTACT US</span>
                        </div>
                        <div className='sm:pr-[25px]'>
                            <span className='text-[#8E8585] sm:text-[14px] text-[9px] sm:pl-[25px]'>© 2022 ROBIN. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login