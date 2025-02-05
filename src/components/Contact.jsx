import { FaTelegramPlane, FaGithub, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { contact } from "../../data/data";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-3">
        {contact.map((c) => {
          return (
            <div key={c.id} className="flex items-center gap-x-4">
              <div className="w-10 h-10 rounded-full flex justify-center items-center reverse-bg">
                {c.icon}
              </div>
              {c.link ? (
                <Link href={c.link} className="text-white underline">
                  {c.text}
                </Link>
              ) : (
                <p className="text-white">{c.text}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
