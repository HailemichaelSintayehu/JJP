import { Projects } from "@/data";
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri";
import Image from "next/image";
import { useState, useEffect } from "react";
type Props = {};

const FeaturedProperties = (props: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  
 const handleNext = () => {
    if (endIndex >= Projects.length) {
     setStartIndex(0);
     setEndIndex(4);
    } else {
      setStartIndex(startIndex + 4);
      setEndIndex(endIndex + 4);
    }
  };
 
  const handlePrevious = () => {
    if (startIndex <= 0) {
      setStartIndex(Projects.length - 4);
      setEndIndex(Projects.length);
   } else {
     setStartIndex(startIndex - 4);
     setEndIndex(endIndex - 4);
    }
  };


  const displayedProjects = Projects.slice(startIndex, endIndex);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        handleNext();
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      window.removeEventListener("scroll", handleScroll);
    }, 5000);
  });

  return (
    <div className="w-full md:px-32  bg-[#F5F5FF] p-5 py-24  space-y-10 ">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="font-bold text-6xl leading-normal">
          Featured Properties
        </div>
        <div className=" leading-loose font-montserrat text-gray-500 text-2xl pt-5">
          Take a look at our many finished projects that have been so amazing,
          we&apos;re sure you&apos;ll want them too.
        </div>
        <div className="flex justify-end self-start gap-3">
          <button className="p-4 rounded-2xl bg-white" onClick={handlePrevious}>
            <RiArrowLeftFill className="text-primary" size={30} />
          </button>
          <button className="p-4 rounded-2xl bg-primary shadow-primary shadow-2xl" onClick={handleNext}>
            <RiArrowRightFill className="text-white" size={30} />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
        {displayedProjects.map((property, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-white animate-slide-left overflow-hidden transition duration-300 ease-in-out hover:scale-110 shadow-lg p-3 rounded-md"
          >
            <Image
              className="transition duration-300 ease-in-out hover:scale-110 object-cover rounded-md"
              src={property.frontview}
              width={500}
              height={800}
              alt={property.name}
            />
            <div>
              <div className="font-bold">{property.name}</div>
              <div className="text-gray-400">{property.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;