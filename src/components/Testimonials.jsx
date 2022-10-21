import ReactPlayer from 'react-player'

const Testimonials = () =>{
    return(
        <div className='holder'>
         <div className='flex__container' style={{justifyContent: 'center'}}>
            <p className='big__text'>Testimonials</p>
            <img className='image' src='https://e7.pngegg.com/pngimages/595/515/png-clipart-quotation-mark-symbol-sign-computer-icons-quotation-logo-computer-wallpaper-thumbnail.png'/>
         </div>   
        <p>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point 
            of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here, content here', making it look like readable English. 
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default 
            model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            Various versions have evolved over the years, sometimes by accident,
             sometimes on purpose (injected humour and the like).
        </p>
        <div className='flex__container'>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        <ReactPlayer url='https://www.youtube.com/watch?v=8LSt8_11wbQ' />
        <ReactPlayer url='https://www.youtube.com/watch?v=tOwjEOt1zYU' />
        </div>
    </div>
    )
}
export default Testimonials;