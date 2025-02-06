import { contact } from "../../data/data";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-3">
        {contact.map((c) => {
          return (
            <div key={c.id} className="flex items-center gap-x-4">
              {c.link ? (
                <Link href={c.link} target="_blank">
                  <div className="w-10 h-10 rounded-full flex justify-center items-center reverse-bg">
                    {c.icon}
                  </div>
                </Link>
              ) : (
                <div className="w-10 h-10 rounded-full flex justify-center items-center reverse-bg">
                  {c.icon}
                </div>
              )}
              {c.link ? (
                <Link
                  href={c.link}
                  target="_blank"
                  className="text-white underline sm:text-base text-sm"
                >
                  {c.text}
                </Link>
              ) : (
                <p className="text-white sm:text-base text-sm">{c.text}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
