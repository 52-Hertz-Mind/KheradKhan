function Hero(){
    return(
        <div className='flex flex-col gap-5 items-center justify-center mt-10 h-screen'>
            <div className='flex flex-col gap-2 justify-center'>
                <p className='text-3xl font-bold'>از آنچه می خوانید بیشترین بهره را ببرید</p>
                <p>ما بازدید مجدد و یادگیری از نکات برجسته کتاب و مقاله الکترونیکی را آسان می کنیم</p>
            </div>
            <div>
                <button className='bg-blue-500 rounded-2xl text-white p-2 w-40'>رایگان شروع کنید</button>
            </div>
            <div>
                <img src='/src/assets/hero.png' className='' />
            </div>
        </div>
    )
}
export default Hero;