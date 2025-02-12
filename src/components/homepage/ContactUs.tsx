import Image from "next/image"
import { useState } from "react"
import Container from "../common/Container"
type Props = {}

const ContactUs = (props: Props) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ] = useState('')

    const SERVICE_ID = "service_7off9vs";
    const TEMPLATE_ID = "template_nt2q4ra";
    const PUBLIC_KEY = "PJrVfioBoNH7BNp0P";

    // const handleSubmit = (e) => {

    // }

  return (
 <div className="w-full flex columns-2  py-24">
        <div className="flex flex-col gap-5 lg:w-[60%] p-10">
            <div className="text-5xl lg:text-6xl font-bold font-poppins">Contact Us</div>
            <div className="leading-loose font-poppins ">
                We would be honored to help you while you make changes to your home. Get in touch with us right now to start realizing your vision.
            </div>
            <form className="flex flex-col gap-7">
                <div className="w-full flex flex-wrap gap-5">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className="flex-1 p-2.5 border" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Your Email" className="flex-1 p-2.5 border" />
                </div>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Subject" className="flex-1 p-2.5 border" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" className="px-5 py-3 resize-none" placeholder="Message" cols={30} rows={2}></textarea>
                <button type="submit" className="bg-black px-8 py-3 mt-10 self-start text-white">
                    Submit
                </button>
            </form>
        </div>
        <div className="relative lg:block hidden w-[40%]">
            <Image src='/Icons/world.svg' fill alt="World Map"/>
            <Image className="absolute top-64 left-32" src='/Icons/location-pointer.svg' width={50} height={50} alt="World Map"/>
        </div>
    </div>   
  )
}

export default ContactUs