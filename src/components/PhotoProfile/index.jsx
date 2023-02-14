import my_photo from '../../assets/Image/my_photo.png'

export default function PhotoProfile() {
    return (
        <>
            <img src={my_photo} alt="photo_profile" width={'160px'} className='rounded-cirle'/>
        </>
    );
}