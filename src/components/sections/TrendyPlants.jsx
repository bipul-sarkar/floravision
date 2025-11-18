import Image from "next/image";
import Button from "../ui/buttons/Button";
const data = [
  {
    image: "/assets/plant2.png",
    heading: "For Your Desks Decorations",
    desc: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "599",
  },
  {
    image: "/assets/plant3.png",
    heading: "For Your Desks Decorations",
    desc: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "399",
  },
];
const TrendyPlants = () => {
  return (
    <section>
      <div className="py-[83px] px-[39px]">
        <h2 className="max-w-max text-[#FFFFFF] text-[55px] font-semibold mx-auto">
          Our Trendy plants
        </h2>
        <div className="mt-[79px]">
          <div className="space-y-[127px]">
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="rounded-[151px] overflow-hidden text-white bg-linear-to-br from-[#FFFFFF]/5 to-[#666666]/5 bg-clip-border  backdrop-blur-[17px]  border-2 border-white"
                >
                  <div className="grid items-center grid-cols-2">
                    <div>
                      <Image
                        src={item.image}
                        alt="image"
                        width={601}
                        height={739}
                      />
                    </div>
                    <div className="px-[45px]">
                      <h2 className="font-semibold text-[38px] mb-[34px]">
                        {item.heading}
                      </h2>
                      <div className="space-y-6">
                        <p className="text-xl font-semibold">{item.desc}</p>
                        <p className="text-[38px] font-semibold">
                          Rs. {item.price}/-{" "}
                        </p>
                        <div className="flex gap-8">
                          <Button>Explore</Button>
                          <div className="w-16 h-16 flex flex-none border border-white rounded-xl justify-center items-center">
                            <Image
                              src={"/assets/bag.png"}
                              alt="bag"
                              height={34}
                              width={34}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrendyPlants;
