function BackgroundEffect() {
    return (
        <>
            <img
                src='https://play.tailwindcss.com/img/beams.jpg'
                alt=''
                className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 h-full'
                width='100%'
            />
            <div className='absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]'></div>
        </>
    );
}

export default BackgroundEffect;
