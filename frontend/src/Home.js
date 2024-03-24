import myImage from './images/mainimage.jpeg'
import myImage2 from './images/mainimage2.jpeg'
import myImage3 from './images/mainimage3.jpeg'
import flower from './images/flower.png'
import face from './images/face.jpeg'
import flowerbranch from './images/flowerbranch.png'
export default function Home(){
  return(
    <div className=''>
      <div className="flex flex-col items-center p-12">
      <span className="thenew text-9xl">SkinIQ</span>
      <span className="SkinCare SkinCarefont text-6xl">Skin Care</span>
      <div class="four-pointed-star"></div>
      <div class="four-pointed-star align"></div>
      <div class="four-pointed-star alignleft"></div>
      <span className="thenew text-3xl mt-5">Essentials</span><div className='relative containermain'>
      <div><img className='rounded-2xl m-4' src={myImage} alt="Description of the image" width="814px"/></div>
      </div>
      <div className='homemyown'><img className='imagewidth' src={myImage2} alt="Description of the image" /></div>

      <div className='homemyown1'><img className='imagewidth' src={myImage3} alt="Description of the image" /></div>
      </div>
      <div className='homeownbutton'><span className='extrastyles pt-4 font-semibold'> <a href='/input'>Test Now</a>  </span></div>
      <div className='heycontainer flex flex-col text-center justify-center mb-12'>
        <span className='text-6xl thenew m-4'>Hey. Hi. Hello</span>
        <span className='text-xl m-2'>WE’RE YOUR SKIN PROTECTOR</span>
        <span className='text-6xl m-4'>TREATE YOUR SKIN</span>
      </div>
      <div> <img className='imagewidth sunflower1' src={flower} alt="It is a sunflower" /> </div>
      <div> <img className='imagewidth sunflower2' src={flower} alt="It is a sunflower" /> </div>
      <div> <img className='imagewidth sunflower3' src={flower} alt="It is a sunflower" /> </div>

      <div id="sectionabout" className='flex flex-row mt-12 justify-center items-center h-screen heights'>
        <div className='w-2/4 m-10'>
          <div className='text-center SkinCare text-6xl'>About</div>
          <div className='thenew text-xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestias dicta assumenda dolor ex? Reiciendis quaerat eius, molestiae vitae autem nisi accusamus doloribus provident nobis placeat nam nesciunt ut aspernatur esse adipisci eum maiores ratione, inventore repellendus veritatis voluptatum similique ab fugiat libero. Possimus, velit ut. Quasi rem possimus porro, magnam odio praesentium tempora debitis, quia laudantium hic quod impedit nulla mollitia explicabo repudiandae assumenda cum! Amet magnam quas eum quis ratione itaque officia magni totam. Laudantium fugiat dolores quia.</div>
        </div>
        <div className='w-2/4 p-5'><img className='rounded-lg' src={face} alt="Description of the image" /></div>
      </div>

      <div id="sectioncontact" className='flex flex-row justify-center items-center h-screen heights'>
        <div className='w-4/5 m-10'>
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Send us if you have any query</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="border-8	py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-black-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
  </div>
</section>

        </div>
        <div className='arrange p-5 rotate-45'><img className='rounded-lg' src={flowerbranch} alt="Description of the image" /></div>
      </div>

      </div>
  )
}