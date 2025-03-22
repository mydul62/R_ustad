import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaFacebookF, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-[100px] ">
      {/* Top Section */}
      <div className="container mx-auto w-[90%]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
          {/* Contact Info */}
          <div className="space-y-4 text-left">
          <div>
          <h2 className="text-4xl uppercase font-bold text-left mb-5">Get in touch</h2>
        <div>
        <ul className=" flex justify-start items-center gap-3 list-none">
        <li><Link href={"#"}><FaFacebookF size={40} className=" bg-yellow-400 rounded-md p-2"></FaFacebookF></Link></li>
        <li><Link href={"#"}><FaWhatsapp size={40} className=" bg-yellow-400 rounded-md p-2"></FaWhatsapp></Link></li>
        <li><Link href={"#"}><FaLinkedin size={40} className=" bg-yellow-400 rounded-md p-2"></FaLinkedin></Link></li>
        <li><Link href={"#"}><FaTwitter size={40} className=" bg-yellow-400 rounded-md p-2"></FaTwitter></Link></li>
        </ul>
        </div>
          </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-teal-500 text-xl" />
              <span className="text-gray-700">+60 17-630 5405</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-teal-500 text-xl" />
              <span className="text-gray-700">info@confido-agency.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-teal-500 text-xl" />
              <span className="text-gray-700">
                Saver,Nabinagar,Dhaka
              </span>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Name" className="w-full  "  />
              </div>
              <div>
                <Input type="email" placeholder="Email Address" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Write a Message" className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 my-10 pt-4">
        <p className="text-center text-gray-600">© 2025 Research Ustad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
