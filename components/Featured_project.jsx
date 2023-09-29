"use client";
const Featured_project = () => {
  return (
    <div className="bg-[#EAEEF3] flex">
      <div className="container my-20">
        <p className="text-[#20B15A]">Featured Project</p>
        <h3>
          We provide the Perfect Solution
          <br /> to your business growth
        </h3>

        <div className=" flex flex-full   my-12  ">
          <div className="flex w-1/2 ">
            <div className="  p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="images/f_product1.png"
              />
              <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                App Design june 20, 2022
              </div>
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                App Redesign
              </h5>
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-auto w-full rounded-lg object-cover object-center"
                src="images/f_product2.png"
              />

              <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                App Design june 20, 2022
              </div>
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                App Redesign
              </h5>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-auto w-full rounded-lg object-cover object-center"
                src="images/f_product4.png"
              />

              <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                App Design june 20, 2022
              </div>
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                App Redesign
              </h5>
            </div>

            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-auto w-full rounded-lg object-cover object-center"
                src="images/f_product3.png"
              />

              <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                App Design june 20, 2022
              </div>
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                App Redesign
              </h5>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-auto w-full rounded-lg object-cover object-center"
                src="images/f_product5.png"
              />

              <div className="text-[10px] my-3 text-black-500 text-neutral-600 dark:text-neutral-200">
                App Design june 20, 2022
              </div>
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                App Redesign
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_project;
