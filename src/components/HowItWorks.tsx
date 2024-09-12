function HowItWorks(){
    return(
        <div className='flex flex-col gap-5 mt-20 items-end p-40'>
            <div>
                <p className='text-3xl font-bold'>:نحوه کار سایت</p>
            </div>
            <div className='flex gap-5 w-full'>
                <div className='flex flex-col gap-5 items-end w-1/3'>
                    <div className='flex gap-2 items-center border-b-2 border-b-black p-2'>
                        <p className='text-2xl'>به یاد بیاورید</p>
                        <img src='/src/assets/remember.png' className='size-20' alt='import image'/>
                    </div>
                    <p className='' dir='rtl'>بیشتر به یاد بیاورید و دانش خود <br/> را در طول زمان افزایش دهید.
                    </p>
                </div>

                <div className='flex flex-col gap-5 items-end w-1/3'>
                    <div className='flex gap-2 items-center border-b-2 border-b-black p-2'>
                        <p className='text-2xl'>مرور کنید</p>
                        <img src='/src/assets/review.png' className='size-20' alt='import image'/>
                    </div>
                    <p className='' dir='rtl'>بهترین قسمت ها را به راحتی از طریق <br/> ایمیل و برنامه روزانه مرور کنید.
                    </p>
                </div>

                <div className='flex flex-col gap-5 items-end w-1/3'>
                    <div className='flex gap-2 items-center border-b-2 border-b-black p-2'>
                        <p className='text-2xl'>هایلات ها را وارد کنید</p>
                        <img src='/src/assets/import.png' className='size-20' alt='import image'/>
                    </div>
                    <p className='' dir='rtl'> ها را از سایت ها<br/> و کتاب های مختلف وارد سایت کنید</p>
                </div>


            </div>

        </div>
    )
}

export default HowItWorks;