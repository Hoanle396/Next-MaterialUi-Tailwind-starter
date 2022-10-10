import type { NextPage } from 'next'
import ArowUp from '../../components/icons/ArowUp';
import Layout from '../../components/Layout'
import { styles } from '../../styles';
const Abouts: NextPage = () => {
   return (
      <Layout showBackground>
         <div
            className={`py-16 ${styles.flexCenter}  flex-col`}
         >
            <div id="feature" className={`px-4 ${styles.flexCenter}`}>
               <div className="container">
                  <div className="flex flex-wrap items-center">
                     <div className="w-full lg:w-1/2">
                        <div className="mb-5 lg:mb-0">
                           <h2 className="mb-12 text-teal-600 font-bold text-9xl" data-wow-delay="0.3s">Learn More About Us</h2>

                           <div className="flex flex-wrap">
                              <div className="w-full sm:w-1/2 lg:w-1/2">
                                 <div className="m-3">
                                    <div className="icon text-4xl">
                                       <i className="lni lni-layers"></i>
                                    </div>
                                    <div className="features-content">
                                       <h4 className="text-teal-500 font-semibold text-lg">Built with TailwindCSS</h4>
                                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full sm:w-1/2 lg:w-1/2">
                                 <div className="m-3">
                                    <div className="icon text-4xl">
                                       <i className="lni lni-gift"></i>
                                    </div>
                                    <div className="features-content">
                                       <h4 className="text-teal-500 font-semibold text-lg">Free to Use</h4>
                                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full sm:w-1/2 lg:w-1/2">
                                 <div className="m-3">
                                    <div className="icon text-4xl">
                                       <i className="lni lni-laptop-phone"></i>
                                    </div>
                                    <div className="features-content">
                                       <h4 className="text-teal-500 font-semibold text-lg">Fully Responsive</h4>
                                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full sm:w-1/2 lg:w-1/2">
                                 <div className="m-3">
                                    <div className="icon text-4xl">
                                       <i className="lni lni-leaf"></i>
                                    </div>
                                    <div className="features-content">
                                       <h4 className="text-teal-500 font-semibold text-lg">Easy to Customize</h4>
                                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="w-full lg:w-1/2">
                        <div className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight" data-wow-delay="0.3s">
                           <img src="/assets/img/feature/img-1.svg" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <section id="team" className="py-24 text-center">
               <div className="container">
                  <div className="text-center">
                     <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">Our Team</h2>
                  </div>
                  <div className="flex flex-wrap justify-center">
                     <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
                        <div className="team-item">
                           <div className="team-img relative">
                              <img className="img-fluid" src="/assets/img/team/img1.jpg" alt="" />
                              <div className="team-overlay">
                                 <ul className="flex justify-center">
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-indigo-500">
                                          <i className="lni lni-facebook-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-blue-400">
                                          <i className="lni lni-twitter-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-red-500">
                                          <i className="lni lni-instagram-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="text-center px-5 py-3">
                              <h3 className="team-name">John Doe</h3>
                              <p>UX UI Designer</p>
                           </div>
                        </div>
                     </div>
                     <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
                        <div className="team-item">
                           <div className="team-img relative">
                              <img className="img-fluid" src="/assets/img/team/img2.jpg" alt="" />
                              <div
                                 className="team-overlay">
                                 <ul className="flex justify-center">
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-indigo-500">
                                          <i className="lni lni-facebook-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-blue-400">
                                          <i className="lni lni-twitter-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-red-500">
                                          <i className="lni lni-instagram-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="text-center px-5 py-3">
                              <h3 className="team-name">Sarah Doe</h3>
                              <p>Front-End Developer</p>
                           </div>
                        </div>
                     </div>
                     <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
                        <div className="team-item">
                           <div className="team-img relative">
                              <img className="img-fluid" src="/assets/img/team/img3.jpg" alt="" />
                              <div className="team-overlay">
                                 <ul className="flex justify-center">
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-indigo-500">
                                          <i className="lni lni-facebook-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-blue-400">
                                          <i className="lni lni-twitter-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-red-500">
                                          <i className="lni lni-instagram-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="text-center px-5 py-3">
                              <h3 className="team-name">Rob Hope</h3>
                              <p>Front-end Developer</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <div id="clients" className="py-16 bg-blue-100 w-full">
               <div className="container w-full">
                  <div className="text-center">
                     <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">As Seen On</h2>
                  </div>
                  <div className="flex flex-wrap justify-center">
                     <div className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="m-3 wow fadeInUp" data-wow-delay="0.3s">
                           <img className="client-logo" src="/assets/img/clients/img1.svg" alt="" />
                        </div>
                     </div>
                     <div className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="m-3 wow fadeInUp" data-wow-delay="0.6s">
                           <img className="client-logo" src="/assets/img/clients/img2.svg" alt="" />
                        </div>
                     </div>
                     <div className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="m-3 wow fadeInUp" data-wow-delay="0.9s">
                           <img className="client-logo" src="/assets/img/clients/img3.svg" alt="" />
                        </div>
                     </div>
                     <div className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="m-3 wow fadeInUp" data-wow-delay="1.2s">
                           <img className="client-logo" src="/assets/img/clients/img4.svg" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <section id="testimonial" className="py-24">
               <div className="container w-full">
                  <div className="flex justify-center mx-3">
                     <div className="w-full lg:w-7/12">
                        <div id="testimonials" className="testimonials">
                           <div className="item focus:outline-none">
                              <div className="text-center py-10 px-8 md:px-10 rounded border border-gray-900">
                                 <div className="text-center">
                                    <p className="text-gray-600 leading-loose">Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness. </p>
                                 </div>
                                 <div className="my-3 mx-auto w-24 h-24 shadow-md rounded-full">
                                    <img className="rounded-full p-2 w-full" src="/assets/img/testimonial/img1.jpg" alt="" />
                                 </div>
                                 <div className="mb-2">
                                    <h2 className="font-bold text-lg uppercase text-blue-600 mb-2">Fajar</h2>
                                    <h3 className="font-medium text-white text-sm">Euphoriya</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="w-8/12 text-center py-20">
               <div className="container w-full">
                  <div className="flex justify-center mx-3">
                     <div className="w-full md:w-3/4 lg:w-2/3">
                        <h4 className="mb-3 text-teal-600 font-bold text-lg" data-wow-delay="0.3s">Start For Free</h4>
                        <p className="mb-4 text-gray-600 leading-loose text-md " data-wow-delay="0.6s">Existing customized ideas through client-based deliverables. <br /> Compellingly unleash fully tested outsourcing</p>
                        <form >
                           <div className="wow fadeInDown" data-wow-delay="0.3s">
                              <input type="Email" className="w-full mb-5 bg-white border border-blue-300 rounded-full px-5 py-3 duration-300 focus:border-blue-600 outline-none" name="email" placeholder="Email Address" />
                              <button className="border-0 bg-blue-600 text-white rounded-full w-24 h-24 duration-300 hover:opacity-75" type="submit">Send</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </section>
            {/* <section id="contact" className="py-24">
               <div className="container">
                  <div className="text-center">
                     <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide wow fadeInDown" data-wow-delay="0.3s">Contact</h2>
                  </div>
                  <div className="flex flex-wrap contact-form-area wow fadeInUp" data-wow-delay="0.4s">
                     <div className="w-full md:w-1/2">
                        <div className="contact">
                           <h2 className="uppercase font-bold text-xl text-gray-700 mb-5 ml-3">Contact Form</h2>
                           <form id="contactForm" action="assets/contact.php">
                              <div className="flex flex-wrap">
                                 <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                                    <div className="mx-3">
                                       <input type="text" className="form-input rounded-full" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                                    </div>
                                 </div>
                                 <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                                    <div className="mx-3">
                                       <input type="text" placeholder="Email" id="email" className="form-input rounded-full" name="email" required data-error="Please enter your email" />
                                    </div>
                                 </div>
                                 <div className="w-full">
                                    <div className="mx-3">
                                       <input type="text" placeholder="Subject" id="subject" name="subject" className="form-input rounded-full" required data-error="Please enter your subject" />
                                    </div>
                                 </div>
                                 <div className="w-full">
                                    <div className="mx-3">
                                       <textarea className="form-input rounded-lg" id="message" name="message" placeholder="Your Message" rows={5} data-error="Write your message" required></textarea>
                                    </div>
                                 </div>
                                 <div className="w-full">
                                    <div className="submit-button mx-3">
                                       <button className="btn" id="form-submit" type="submit">Send Message</button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="w-full md:w-1/2">
                        <div className="ml-3 md:ml-12 wow fadeIn">
                           <h2 className="uppercase font-bold text-xl text-gray-700 mb-5">Get In Touch</h2>
                           <div>
                              <div className="flex flex-wrap mb-6 items-center">
                                 <div className="contact-icon">
                                    <i className="lni lni-map-marker"></i>
                                 </div>
                                 <p className="pl-3">Skopje, Macedonia</p>
                              </div>
                              <div className="flex flex-wrap mb-6 items-center">
                                 <div className="contact-icon">
                                    <i className="lni lni-envelope"></i>
                                 </div>
                                 <p className="pl-3">
                                    <a href="#" className="block">email@gmail.com</a>
                                    <a href="#" className="block">tomsaulnier@gmail.com</a>
                                 </p>
                              </div>
                              <div className="flex flex-wrap mb-6 items-center">
                                 <div className="contact-icon">
                                    <i className="lni lni-phone-set"></i>
                                 </div>
                                 <p className="pl-3">
                                    <a href="#" className="block">+42 374 5967</a>
                                    <a href="#" className="block">+99 123 5967</a>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section> */}
            <section id="google-map-area" className='w-full'>
               <div className="mx-6 mb-6">
                  <div className="flex">
                     <div className="w-full">
                        <object style={{ border: 0, height: 450, width: "100%" }} data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"></object>
                     </div>
                  </div>
               </div>
            </section>

         </div >
      </Layout >
   )
}

export default Abouts