import Link from "next/link"
import Image from "next/image"


const Footer = () => {

  

  return (
    <footer className="bg-gray-900 text-white text-center py-4">
        
      <p>Made with Next.js and Tailwind CSS</p>
      <p>Powered by Trae</p>
      <div className="flex justify-center">
    <Image 
      src="/m41k80.ico" 
      alt="m41k80" 
      width={100} 
      height={100} 
      className="rounded-full"
    />
  </div>
      <p>Coded by: 
      <Link href={'https://www.linkedin.com/in/jose-magdiel-mora-perez-0384492b9/'} className="text-blue-500 hover:underline">
      m41k80mp 
      </Link>
      </p>
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    </footer>
  )
}

export default Footer
