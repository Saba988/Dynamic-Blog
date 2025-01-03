
// import Image from 'next/image';

// const About = () => {
//   return (
//     <main className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl font-bold text-center  from-indigo-600 to-blue-500">About Us</h1>
//       <p className="text-center text-gray-600 mt-2 font-serif">Learn more about our mission and values.</p>

//       <div className="mt-8 space-y-6">
//         <div className="flex justify-center">
//           <Image 
//             src="/aboutimage.jpg" 
//             alt="About Image"
//             width={300} 
//             height={200} 
//             className="rounded-lg shadow-lg object-cover w-full sm:w-3/4 md:w-1/2 lg:w-2/3"
//           />
//         </div>

//         <section className="mt-6">
//           <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
//           <p className="text-gray-600 mt-2">
//             We are dedicated to providing insightful content on web development, technology, and design. Our goal is to help you stay updated with the latest trends and best practices in the industry.
//           </p>
//         </section>

//         <section className="mt-6">
//           <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
//           <ul className="list-disc pl-6 mt-2 text-gray-600">
//             <li>Innovation: Embrace new technologies and ideas.</li>
//             <li>Education: Share knowledge and empower others.</li>
//             <li>Community: Foster a collaborative environment.</li>
//             <li>Integrity: Maintain honesty and transparency in all our work.</li>
//           </ul>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default About;
import Image from 'next/image';

const About = () => {
  return (
    <main className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-blue-500">About Us</h1>
      <p className="text-center text-gray-600 mt-2 font-serif">Explore Saba's Blog for in-depth insights on the ever-evolving world of technology.</p>

      <div className="mt-8 space-y-6">
        <div className="flex justify-center">
          <Image 
            src="/aboutimage.jpg" 
            alt="About Image"
            width={300} 
            height={200} 
            className="rounded-lg shadow-lg object-cover w-full sm:w-3/4 md:w-1/2 lg:w-2/3"
          />
        </div>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">About Saba's Blog</h2>
          <p className="text-gray-600 mt-2">
            Saba's Blog provides vast knowledge and expert insights into the ever-changing world of technology. Our mission is to share valuable content that helps readers stay ahead of the curve in an increasingly digital world. Whether you're a developer, tech enthusiast, or business leader, our blog covers a broad spectrum of topics designed to keep you informed and inspired.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li><strong>In-Depth Articles:</strong> Expert-written content on the latest trends and developments in the tech industry.</li>
            <li><strong>Educational Resources:</strong> Tutorials, guides, and tips to help readers expand their knowledge and skills in web development, cloud computing, and more.</li>
            <li><strong>Tech Reviews:</strong> Honest and comprehensive reviews of new technologies, products, and services.</li>
            <li><strong>Industry Insights:</strong> Updates on the latest innovations, breakthroughs, and news in the tech world.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Core Values</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Innovation: We embrace the latest technologies and explore their potential to drive change.</li>
            <li>Education: We aim to empower readers by providing accessible knowledge on complex topics.</li>
            <li>Community: We foster a supportive environment where technology enthusiasts can connect and learn together.</li>
            <li>Integrity: We believe in delivering accurate and trustworthy information to our audience.</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default About;
