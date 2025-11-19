import Card from "../card";
const card = [
  {
    image: "/assets/bag.png",
    heading: "Aglaonema plant",
    subheading:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.",
    price: "300"
  },
  {
    image: "/assets/bag.png",
    heading: "Plantain Lilies",
    subheading:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes and sizes.",
    price: "380"
  },
  {
    image: "/assets/bag.png",
    heading: "Cactus",
    subheading:
      "It is known for their ability to thrive in arid environments.",
    price: "259"
  },
  {
    image: "/assets/bag.png",
    heading: "Swiss cheese Plant",
    subheading:
      "It is a popular tropical houseplant known for its distinctive, perforated leaves.",
    price: "400"
  },
  {
    image: "/assets/bag.png",
    heading: "Sansevieria plant",
    subheading:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "450"
  },
  {
    image: "/assets/bag.png",
    heading: "Agave plant",
    subheading:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "359"
  }
];

const TopSellingBrands = () => {
    return <section className="min-h-screen bg-[#1c2416] px-[39px]">
        {/* triyed to make a fancy header but failed */}


        {/* <div className="text-[55px]  relative font-semibold mx-auto max-w-max text-white">
            <h2>Our Top Selling Plant</h2>
            <div className="bg-linear-to-b absolute -left-[13px] bottom-0.5 rounded-bl-[25px] pl-[5px] pb-[5px] from-white to-[#FBD300] flex justify-end  ">
                <div className="bg-[#1c2416] rounded-bl-[20px] h-14  leading-12 tracking-tighter pl-[9px] ">O</div>
            </div>
            <div className="bg-linear-to-b absolute -right-[50px] top-2.5 rounded-tr-[25px] pr-[5px] pt-[5px] w-[47px] from-white to-[#FBD300] flex justify-end  ">
                <div className="bg-[#1c2416] rounded-tr-[20px] h-14 w-full  leading-12 tracking-tighter pr-[9px] ">s</div>
            </div>
        </div> */}

        <div className="flex h-[102px]  items-center justify-center mb-[242px]">
        <div className="h-[69.5] w-[68px]  font-semibold rounded-[3px] pl-[5px] pb-[5px] border-gradient self-end">
          <div className="h-full w-full flex items-start justify-end bg-[#1c2416] rounded-[3px]">
            <p className="leading-8 text-[55px] text-[#FFFFFF] uppercase">O</p>
          </div>
        </div>
        <div className="leading-none  pb-2 self-center">
          <p className="text-[55px]  text-[#FFFFFF] font-semibold">ur Top Selling Plant</p>
        </div>

        <div className="h-[69.5] w-[68px] text-[55px] text-[#FFFFFF] font-semibold rounded-[3px] pr-[5px] pt-[5px] border-gradient self-start ">
          <div className="h-full w-full flex items-center justify-start bg-[#1c2416] rounded-[3px] pt-6 ">
            <p className="  text-[55px] text-[#FFFFFF] ">s</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[49px] gap-y-[140px]">
       {card.map((item,i)=>{
        return <Card key={i} heading={item.heading} subheading={item.subheading} price={item.price} image={item.image} />
       })}
      </div>


    </section>
}
export default TopSellingBrands;