import Link from "next/link"
import Image from "next/image"
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants"

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 mt-10">

      <div className="padding-container max-container 
      flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center
        gap-[10%] md:flex-row">

          <Link href="/" className="mb-10">
          <Image src="/logodeOasis.png" alt='logo' width={100} height={100} style={{ borderRadius: '60%' }} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between
          md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                {columns.links.map((link, linkIndex) => (
                  <Link href={link.value} key={linkIndex}>
                    <p className="whitespace-nowrap text-xl text-gray-400">
                      {link.label}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, linkIndex) => (
                  <Link
                    target="true"
                    href="/"
                    key={linkIndex}
                    className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap text-gray-400 text-xl">
                      {link.label}
                    </p>
                    <p className="medium-14 whitespace-nowrap text-gray-400 text-xl">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-400">
                  {SOCIALS.links.map((link, linkIndex) => (
                    <Link href={link.value} key={linkIndex} className="bg-gray-200">
                      <Image
                        src={link.label}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>


          </div>

        </div>
      </div>

      <div className="regular-14 w-full text-center text-gray-30">
        2016 | Proyecto Guajira | Reservados todos los derechos 
      </div>

    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-gray-400">{title}</h4>
      {children}
    </div>
  )
}


export default Footer