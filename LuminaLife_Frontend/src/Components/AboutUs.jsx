// import React from 'react';


// const AboutUs = () => {

//   return (
//     <section className="py-16 bg-[#f8f9fa]">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-[#54402d] mb-4">About LuminaLife</h2>
//           <div className="w-24 h-1 bg-[#faedcd] mx-auto mb-6"></div>
//           <p className="text-[#6c757d] max-w-2xl mx-auto">
//             Guiding you toward wellness, balance, and mindful living in every aspect of your journey.
//           </p>
//         </div>


//         <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
//           <div className="lg:w-1/2">
//             <img 
//               src="LuminaLife_Frontend/src/assets/HeroSectionPicture.jpg" 
//               alt="Our Journey" 
//               className="rounded-lg shadow-md object-cover w-full h-full"
//             />
//           </div>
//           <div className="lg:w-1/2">
//             <h3 className="text-2xl font-semibold text-[#54402d] mb-4">Our Story</h3>
//             <p className="text-[#6c757d] mb-4">
//               LuminaLife began as a simple idea: wellness shouldn't be complicated. Founded in 2025 by a group of health enthusiasts, mindfulness practitioners, and wellness experts, we set out to create a community that makes holistic wellbeing accessible to everyone.
//             </p>
//             <p className="text-[#6c757d] mb-4">
//               What started as local workshops in a small studio has grown into a global community dedicated to helping people find their balance in an often chaotic world. Through our carefully crafted programs and supportive community, we've guided thousands toward their personal wellness goals.
//             </p>
//             <p className="text-[#6c757d]">
//               Today, LuminaLife stands as a beacon for those seeking to integrate wellness practices into their everyday lives, creating lasting positive change through small, consistent actions.
//             </p>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-8 shadow-sm mb-20">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-semibold text-[#54402d] mb-4">Our Mission</h3>
//               <p className="text-[#6c757d] mb-6">
//                 At LuminaLife, we're committed to illuminating the path to holistic wellness by providing accessible resources, supportive community, and evidence-based practices that empower individuals to thrive physically, mentally, and emotionally.
//               </p>
//               <div className="bg-[#faedcd] p-6 rounded-lg">
//                 <p className="italic text-[#54402d]">
//                   "We believe true wellness comes from balance—honoring the connection between mind, body, and spirit in everyday living."
//                 </p>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-[#54402d] mb-4">Our Values</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <div className="bg-[#d8e2dc] rounded-full p-1 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#54402d]" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div>
//                     <strong className="text-[#54402d]">Holistic Approach</strong>
//                     <p className="text-[#6c757d]">We embrace the interconnectedness of physical, mental, and emotional wellbeing.</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="bg-[#d8e2dc] rounded-full p-1 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#54402d]" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div>
//                     <strong className="text-[#54402d]">Authenticity</strong>
//                     <p className="text-[#6c757d]">We champion genuine self-discovery and celebrate each individual's unique wellness journey.</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="bg-[#d8e2dc] rounded-full p-1 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#54402d]" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div>
//                     <strong className="text-[#54402d]">Inclusivity</strong>
//                     <p className="text-[#6c757d]">We create spaces where everyone feels welcome, respected, and supported.</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="bg-[#d8e2dc] rounded-full p-1 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#54402d]" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div>
//                     <strong className="text-[#54402d]">Evidence-Based Practice</strong>
//                     <p className="text-[#6c757d]">We combine traditional wisdom with modern research to provide reliable guidance.</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-semibold text-[#54402d] text-center mb-12">What Our Community Says</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Testimonial 1 */}
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                   <img 
//                     src="/api/placeholder/100/100" 
//                     alt="User" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-[#54402d]">Emily T.</h4>
//                   <p className="text-sm text-[#6c757d]">Member since 2021</p>
//                 </div>
//               </div>
//               <div className="mb-3 text-yellow-500 flex">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-[#6c757d] italic">
//                 "LuminaLife transformed how I approach self-care. Their holistic program helped me establish sustainable habits that fit perfectly into my busy schedule. I've never felt more balanced!"
//               </p>
//             </div>
            
//             {/* Testimonial 2 */}
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                   <img 
//                     src="/api/placeholder/100/100" 
//                     alt="User" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-[#54402d]">Marcus J.</h4>
//                   <p className="text-sm text-[#6c757d]">Member since 2022</p>
//                 </div>
//               </div>
//               <div className="mb-3 text-yellow-500 flex">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-[#6c757d] italic">
//                 "The meditation sessions have been life-changing for my anxiety. I've learned techniques that actually work, and the community support makes all the difference. Couldn't recommend it more highly."
//               </p>
//             </div>
            
//             {/* Testimonial 3 */}
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                   <img 
//                     src="/api/placeholder/100/100" 
//                     alt="User" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-[#54402d]">Sophia R.</h4>
//                   <p className="text-sm text-[#6c757d]">Member since 2023</p>
//                 </div>
//               </div>
//               <div className="mb-3 text-yellow-500 flex">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-[#6c757d] italic">
//                 "What sets LuminaLife apart is how personalized their approach is. The nutrition plan was tailored perfectly to my needs, and I've seen incredible improvements in my energy levels and overall wellbeing."
//               </p>
//             </div>
//           </div>
//         </div>
        
//         </div>
//         </section>
//   )
// }

// export default AboutUs;
