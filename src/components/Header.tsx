function Header(){
    return (
        <div className='p-5 px-96 flex items-center justify-between'>
            <div>Logo</div>
            <button
                className="px-6 py-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                Sign up
            </button>
        </div>

    )
}

export default Header