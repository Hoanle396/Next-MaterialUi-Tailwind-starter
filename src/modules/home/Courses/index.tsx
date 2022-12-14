import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { styles } from '../../../styles';


const Courses = () => {
   const [active, setActive] = useState(1);
   const isMobile = useMediaQuery('(min-width:768px)');
   return (
      <div className={`${styles.flexCenter} cursor-pointer flex-col py-16`}>
         <div className={`${styles.flexCenter} flex-col bg-transparent max-w-4xl`}>
            <h1 className="flex-1 text-center font-poppins font-semibold sm:text-[72px] text-[52px] text-purple-600 sm:leading-[100.8px] leading-[75px]">
               Latest News & Articles
            </h1>
            <p className='text-center'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
         </div>
         <div className={`${styles.flexCenter} flex-row bg-transparent max-w-5xl mt-10 `}>
            {!isMobile ? (
               <div className="flex flex-col items-center justify-center gap-12">
                  <div
                     onClick={() => setActive(0)}
                     className={clsx('transition-all duration-700 relative cursor-pointer')}
                  >
                     <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                     </div>
                  </div>
                  <div className={clsx('transition-all duration-700 relative cursor-pointer')}>
                     <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                     </div>
                  </div>

                  <div className={clsx('relative cursor-pointer')}>
                     <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="flex items-end gap-10">
                  <div
                     onClick={() => setActive(0)}
                     className={clsx('transition-all duration-700 relative w-full cursor-pointer', {
                        'z-[2]': active === 0,
                        'z-[0] -mr-40': active === 2,
                        'drop-shadow-card-gray scale-[80%]': active !== 0,
                     })}
                  >
                     <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                     </div>
                  </div>
                  <div
                     onClick={() => setActive(1)}
                     className={clsx('transition-all duration-700 relative w-full cursor-pointer', {
                        'z-[1] -ml-20 scale-[90%]': active === 0,
                        'z-[1] -mr-20 scale-[90%]': active === 2,
                        'drop-shadow-card-gray': active !== 1,
                     })}
                  >
                     <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                     </div>
                  </div>
                  <div
                     onClick={() => setActive(2)}
                     className={clsx(
                        'transition-all duration-700 relative h-fit w-full cursor-pointer',
                        {
                           'z-[0] -ml-40': active === 0,
                           'z-[2]': active === 2,
                           'drop-shadow-card-gray scale-[80%]': active !== 2,
                        }
                     )}
                  >
                     <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Courses;