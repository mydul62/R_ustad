"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../SectionTitle";

const achievements = [
    { id: 1, image: "/ac1.png", title: "Best Web Developer Award", description: "Recognized for excellence in web development Recognized for excellence in web development Recognized for excellence in web development." },
    { id: 2, image: "/ac2.jpeg", title: "UI/UX Design Champion", description: "Awarded for outstanding UI/UX design skills." },
    { id: 3, image: "/ac3.jpeg", title: "Innovator of the Year", description: "Honored for creating innovative web solutions." },
];

const Achievement = () => {
    const [hoveredId, setHoveredId] = useState<null | number>(null);

    return (
     <div className="  container sm:w-[90%] mx-auto">
           <div className=" md:mx-0 mx-2">
            <SectionTitle title="Achievements"  discription={"Our team’s dedication has earned recognition and honors in various fields."}/>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {achievements.map((achieve) => (
                <motion.div 
                    key={achieve.id}
                    className="relative w-full lg:h-56 h-full bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredId(achieve.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {/* Image */}
                    <motion.img
                        src={achieve.image}
                        alt={achieve.title}
                        className="w-full h-full object-cover transition-all duration-500"
                    />

                    {/* Gradient Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-all duration-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === achieve.id ? 1 : 0 }}
                    />

                    {/* Description - Visible Only on Hover */}
                    <motion.div
                        className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: hoveredId === achieve.id ? 1 : 0, y: hoveredId === achieve.id ? 0 : 20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-lg font-bold drop-shadow-lg">{achieve.title}</h3>
                        <p className="text-sm mt-2 drop-shadow-lg ">{achieve.description}</p>
                    </motion.div>
                </motion.div>
            ))}
           </div>
  </div>
     </div>
    );
};

export default Achievement;
