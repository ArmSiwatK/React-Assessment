import YouTube from 'react-youtube';

const Bio = () => {
    return (
        <div className="bio-container">
            <p className="paragraph-1">I am a junior software developer and English-Thai translator who recently completed Generation's  Bootcamp. My background in translation has honed my adaptability, which I believe to be my  strongest asset. I am confident in my ability to quickly learn and integrate new technologies into  my skill set, making me a valuable addition to any project. In my free time, I enjoy exploring my  interests in literature, video games, and music. I am also a hobbyist in 3D animation.</p>
            <YouTube
                className="bio-video"
                videoId="O4pRPg-W7ds"
            />
            <p className="paragraph-2">45_Siwat (Arm/อาร์ม)</p>
        </div>
    )
}

export default Bio;