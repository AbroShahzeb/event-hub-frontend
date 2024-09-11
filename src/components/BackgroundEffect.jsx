import Beams from '../assets/beams.jpg';
import BeamsDark from '../assets/beams-dark.jpg';
function BackgroundEffect() {
    return (
        <>
            <img
                src={Beams}
                alt=''
                className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 h-full select-none no-drag dark:hidden'
                width='100%'
            />

            <img
                src={BeamsDark}
                alt=''
                className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 h-full select-none no-drag hidden dark:block'
                width='100%'
            />
            <div className='absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:hidden'></div>

            <div className='absolute inset-0 bg-grid-dark bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] hidden dark:block'></div>
        </>
    );
}

export default BackgroundEffect;
