"use client";
import getBrandList from "@/lib/getBrandList";
const Brands = async () => {
  const clientImage = await getBrandList();

  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="w-full bg-white my-5">
        <div className="container flex m-auto gap-10 justify-center">
          {clientImage.map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={client.name}
              className="w-auto p-5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Brands;
