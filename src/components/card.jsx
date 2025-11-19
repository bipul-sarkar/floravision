import Image from "next/image";
const Card = (props) => {
    return <div className="backdrop-blur-[25px] relative bg-white/5 rounded-[77px] min-h-[644px] flex flex-col">
        <div className="absolute -top-35 w-full">
        <div className="px-[26px] relative  h-[459px]">
            <Image src="/assets/plant1.png" alt="Plant 1" fill className="mx-auto mt-[-60px] object-cover" />
        </div>
        </div>
        <div className="h-[300px]"></div>
        <div className="px-[66px] pb-[51px]   text-white/75 flex flex-col grow">
            <h2 className="text-[38px] mb-[9px]">{props.heading}</h2>
            <p className="text-2xl">{props.subheading}</p>
            
<div className="grow"></div>
            <div className="flex text-[39px] items-center justify-between">
                Rs. {props.price}/-
                <div className="w-[55px] h-[55px] flex flex-none border border-white rounded-xl justify-center items-center">
                    <Image
                        src={props.image}
                        alt="bag"
                        height={34}
                        width={34}
                    />
                </div>
            </div>

        </div>

    </div>

}
export default Card;