import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';

import MagicButton from './MagicButton';

const Footer = () => {
  const LinkNumber: string = `https://wa.me/201220407008?text=السلام%20عليكم%20ورحمة%20الله%20وبركاته!%20أنا%20أحمد%20مطور%20واجهة%20أمامية%20متخصص%20في%20إنشاء%20مواقع%20ويب%20حديثة%20واحترافية.%20إذا%20كنت%20بحاجة%20إلى%20تصميم%20واجهة%20مستخدم%20مبتكرة%20أو%20تطوير%20موقع%20يتوافق%20مع%20أحدث%20التقنيات،%20فأنا%20جاهز%20لتنفيذ%20مشروعك%20باحترافية%20وفي%20أسرع%20وقت.%20أخبرني%20عن%20تفاصيل%20مشروعك%20وأنا%20سأكون%20سعيدًا%20بمساعدتك!`;
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={20}
          height={20}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href={LinkNumber} target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Ahmed Fathi
        </p>
{/* 
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={item.link} target='_blank'>
                <Image src={item.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
