import myImage from './images/mainimage.jpeg'
import myImage2 from './images/mainimage2.jpeg'
import myImage3 from './images/mainimage3.jpeg'
import flower from './images/flower.png'
import face from './images/face.jpeg'
import flowerbranch from './images/flowerbranch.png'
export default function Home(){
  return(<>
<div class="hero">
  <div class="hero-img">
    <img src="https://i.postimg.cc/kMNz5grj/flower.png" alt="Pixel Skincare"/>
  </div>
  <div class="hero-text">
    <h1>Your Skin<br></br> Would Loved It!</h1>
    <a href="#featured" class="btn">Explore</a>
  </div>
</div>

<section id="featured">
  <div class="title title-left">
    <span class="line"></span><h3>New Friend!</h3>
  </div>
  <div class="wrapper">
    <div class="image">
      <img src="https://i.postimg.cc/DyM1SgNb/flower-copy.png" alt="Pixel Facial Cream"/>
    </div>
    <div class="text">
      <h2>SkinIQ Facial Cream</h2>
      <p>A lightweight formula that packs a punch with avocado protein extract to strengthen skin's own moisture barrier, sealing in hydration to protect, nourish and soften skin.</p>
      <a href="#" class="btn">Details</a>
    </div>
  </div>
</section>

<section id="collections">
  <div class="title title-right">
    <span class="line line-right"></span><h3>Collections</h3>
  </div>
  <div class="wrapper">
    <a class="box box1">
      <h4>Moisturizers</h4>
      <div class="box-overlay"></div>
    </a>
    <a class="box box2">
      <h4>Eye & Lip Care</h4>
      <div class="box-overlay"></div>
    </a>
    <a class="box box3">
      <h4>Cleansers & Toners</h4>
      <div class="box-overlay"></div>
    </a>
  </div>
</section>

<section id="about">
  <div class="title title-left">
    <span class="line"></span><h3>SkinIQ Skincare</h3>
  </div>
  <div class="wrapper">
    <div class="text">
      <p>Since 2016, SkinIQ Skin Care has been at the forefront of the move towards organic and natural skincare product recommendation.</p>
      <p>Specialising in emerging niche natural skin care brands, SkinIQ Skin Care is a safe zone for you and your skin where we have taken special care to hand pick and offer you some of the purest and safest brands from global organic specialists.</p>
      <p>From cutting edge science to luxurious natural indulgence, we have selected the best products and treatments for healing and improving your well-being.</p>
    </div>

  </div>
</section>
<div class="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-6">Contact Us</h2>
        <form action="#" method="POST">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Your Name" required/>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Your Email" required/>
            </div>
            <div class="mb-6">
                <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Send</button>
        </form>
    </div>
</>
  )
}