function Backdrop({ isModalShown, setIsModalShown }) {
    return (
        <>
            {isModalShown && (
                <div
                    onClick={() => setIsModalShown(false)}
                    className='w-full h-screen bg-black/50 z-40 absolute inset-0 backdrop-blur-sm'
                ></div>
            )}
        </>
    );
}

export default Backdrop;
