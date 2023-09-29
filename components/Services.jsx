import getServices from "@/lib/getServices";

const Services = async () => {
  const data = await getServices();

  return (
    <div>
      <section>
        <div className="contanier">
          <div className="py-20 bg-gray-50 radius-for-skewed">
            <div className="container mx-auto">
              <div className="mb-8 lg:mb-16 text-left ">
                <p className="text-[#20B15A]">Our All Services</p>
                <h2>We Provide Best Web Design Services</h2>
              </div>
              <div className="grid  grid-cols-3 gap-3 ">
                {data.map((item, i) => {
                  return (
                    <div key={i} className="mb-6 w-full  px-4">
                      <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                        <img
                          className="w-full h-80 object-cover"
                          src={item["image"]}
                          alt=""
                        />
                        <div className="flex -mt-16 rounded-[25px] bg-white py-2 px-5 bg-opacity-[0.9] text-black mx-auto">
                          <a className="mr-3" href={item["facebook"]}>
                            <img src="images/social/facebook.svg" alt="" />
                          </a>
                          <a className="mr-3" href={item["twitter"]}>
                            <img src="images/social/twitter.svg" alt="" />
                          </a>
                          <a href={item["instagram"]}>
                            <img src="images/social/instagram.svg" alt="" />
                          </a>
                        </div>
                        <div className="w-full   lg:pl-6 p-4">
                          <h4 className="mb-2 text-2xl font-bold font-heading">
                            {item["name"]}
                          </h4>
                          <p className="mb-4 text-gray-500 leading-loose">
                            {item["bio"]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
