import { MarketContext } from "@/context/MarketProvider";
import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";
import { MdOutlineAttachFile } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import images from "../../public/img";
const IMAGE_MAX_SIZE = 5000000;
const categoryArray = [
  {
    image: images.nft_image_1,
    category: "Sports",
  },
  {
    image: images.nft_image_2,
    category: "Arts",
  },
  {
    image: images.nft_image_3,
    category: "Music",
  },
  {
    image: images.nft_image_1,
    category: "Digital",
  },
  {
    image: images.nft_image_2,
    category: "Time",
  },
  {
    image: images.nft_image_3,
    category: "Photography",
  },
];

function DropZone() {
  // @ts-ignore
  const { createNFT, uploadToIPFS, error, openError, setOpenError } =
    useContext(MarketContext);
  const [isImage, setIsImage] = useState(false);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState<string>("");
  const [royalites, setRoyalites] = useState<number>();
  const [size, setSize] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [propertie, setPropertie] = useState<number>();
  const [urlImage, setUrlImage] = useState<string>("");
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const onDrop = useCallback(async (acceptedFile: any) => {
    const url = await uploadToIPFS(acceptedFile[0]);
    setUrlImage(url);
    setIsImage(true);
  }, []);
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDrop,
    // @ts-ignore
    accept: "image/*",
    maxSize: IMAGE_MAX_SIZE,
  });
  const handleCategory = (category: string) => {
    setCategory(category);
  };
  useEffect(() => {
    if (openError) {
      alert(error);
      setOpenError(false);
    }
  }, [openError]);
  const handleCreate = async (
    name: string,
    price: number,
    url: string, // image upload to ipfs(link )
    description: string,
    category: string,
    website: string
  ) => {
    setIsCreate(true);
    await createNFT(name, price, url, category, description, website);
    setIsCreate(false);
  };
  return (
    <div className="max-w-[800px] mx-auto">
      <div
        className="border-dashed border-2 border-yellow-400 rounded-xl p-4 cursor-pointer flex flex-col items-center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>JPG, PNG, WEBM, MAX 100MB</p>
        <Image
          src={images.upload}
          alt="upload"
          className="bg-gray-400 rounded-3xl"
          width={120}
          height={120}
        />
        <p>Drag & drop file here</p>
        <p>or Browser media on your device</p>
      </div>
      {isImage && (
        <div className="border-dashed border-2 border-yellow-400 p-4 mt-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
            {/* left */}
            <div className="border-[1px] rounded-xl p-2 border-yellow-300 mx-auto md:mx-0">
              <img
                src={urlImage}
                alt="image"
                className="w-[150px] h-[150px] rounded-xl object-cover"
              />
            </div>
            {/* right */}
            <div className="flex-1 px-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
                <div className="break-all">
                  <span className=""> NFT Name:</span>{" "}
                  {name && (
                    <span className="ml-1  font-bold capitalize">{name}</span>
                  )}{" "}
                </div>
                <div className="break-all">
                  <span className="">Website: </span>
                  {website && (
                    <span className="ml-1  font-bold ">{website}</span>
                  )}
                </div>
              </div>
              <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                <div className="">
                  <div className="break-all">
                    <span className="font-bold"> Description:</span>{" "}
                    {description && (
                      <span className="ml-1 text-[14px]">{description}</span>
                    )}{" "}
                  </div>
                  <div className="break-all mt-2">
                    <span className="font-bold"> Royalites:</span>{" "}
                    {royalites && (
                      <span className="ml-1 text-[14px]">{royalites}</span>
                    )}{" "}
                  </div>
                  <div className="break-all mt-2">
                    <span className="font-bold"> Category:</span>{" "}
                    {category && (
                      <span className="ml-1 text-[14px]">{category}</span>
                    )}{" "}
                  </div>
                  <div className="break-all mt-2">
                    <span className="font-bold"> File Size:</span>{" "}
                    {size && <span className="ml-1 text-[14px]">{size}</span>}{" "}
                  </div>
                  <div className="break-all mt-2">
                    <span className="font-bold"> Properties:</span>{" "}
                    {propertie && (
                      <span className="ml-1 text-[14px]">{propertie}</span>
                    )}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="">
        <div className="mt-4">
          <label className="text-lg font-bold text-[#444444] ml-3" htmlFor="">
            Item Name
          </label>
          <div className="mt-1 p-2 px-3 border-[1px] border-yellow-400 rounded-xl">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Women"
              type="text"
              className="placeholder:text-[13px] text-[13px] w-full bg-transparent"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="capitalize text-lg font-bold text-[#444444] ml-3"
            htmlFor=""
          >
            Website
          </label>
          <div className="mt-1 overflow-hidden flex items-center border-[1px] border-yellow-400 rounded-xl">
            <p className="bg-yellow-300 py-2 px-3 font-medium mr-3">HTTP</p>
            <input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="facebook.com"
              type="url"
              className="placeholder:text-[13px] text-[13px] w-full pr-3 bg-transparent"
            />
          </div>
        </div>
        <p className="text-[14px] mt-2 ml-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ratione, laborum perferendis cumque blanditiis voluptas
          ut obcaecati repudiandae dolores voluptatem unde.
        </p>
        <div className="flex flex-col mt-2">
          <label className="text-lg font-bold text-[#444444] ml-3" htmlFor="">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-[1px] rounded-xl mt-2 border-yellow-400 p-2 px-3 placeholder:text-[13px] text-[13px] outline-none bg-transparent"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore tempora voluptatum laborum"
            name="description"
            id=""
            //@ts-ignore
            cols="20"
            //@ts-ignore
            rows="6"
          ></textarea>
          <p className="text-[14px] mt-2 ml-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
            quae tempore perferendis
          </p>
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-bold text-[#444444] ml-3">
            Choose collection
          </h2>
          <p className="text-[14px] ml-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-5">
            {categoryArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`border-[1px] border-yellow-400 rounded-xl p-3 cursor-pointer ${
                    category == item.category &&
                    "bg-yellow-300 transition-all duration-200 ease-in"
                  }`}
                  onClick={() => handleCategory(item.category)}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                      <Image src={item.image} alt="alt" />
                    </div>
                    <div className="p-1 bg-yellow-400 rounded-full text-[#44444]">
                      <TiTick />
                    </div>
                  </div>
                  <div className="mt-2">
                    <h2 className="text-lg font-bold">
                      Crypto Legend <p>-{item.category}</p>{" "}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap  gap-4 mt-8 sm:justify-center md:justify-start lg:justify-between">
          <InputItem
            value={royalites}
            onChange={(data: number) => setRoyalites(data)}
            heading="Royaltes"
            icon={<FaPercent />}
            placeholder="20%"
          />
          <InputItem
            value={size}
            onChange={(data: number) => setSize(data)}
            heading="size"
            icon={<MdOutlineAttachFile />}
            placeholder="165MB"
          />
          <InputItem
            value={propertie}
            onChange={(data: number) => setPropertie(data)}
            heading="propertie"
            icon={<AiTwotonePropertySafety />}
            placeholder="20%"
          />
          <InputItem
            value={price}
            onChange={(data: number) => setPrice(data)}
            heading="price"
            icon={<FaPercent />}
            placeholder="0.01 ETH"
          />
        </div>
        <div className="flex gap-4 mt-8 ">
          <button
            //@ts-ignore
            onClick={() =>
              handleCreate(
                name,
                //@ts-ignore
                price,
                urlImage,
                description,
                category,
                website
              )
            }
            className={`capitalize flex items-center justify-center flex-1 bg-yellow-400 font-medium rounded-full py-2 px-4 hover:opacity-80 active:opacity-30 ${
              isCreate && "opacity-50"
            }`}
            disabled={isCreate}
          >
            <p>Upload</p>
            {isCreate && (
              <Image
                src={images.loadingIcon}
                alt="loading"
                width={36}
                height={36}
                className="rounded-full ml-4"
              />
            )}
          </button>
          <button className="capitalize flex-1 bg-yellow-400 font-medium rounded-full py-2 px-4 hover:opacity-80 active:opacity-30">
            {" "}
            preview
          </button>
        </div>
      </div>
    </div>
  );
}

export function InputItem({
  heading,
  icon,
  placeholder,
  value,
  onChange,
}: any) {
  return (
    <div className="">
      <h2 className="font-bold ml-3 capitalize">{heading}</h2>
      <div className="flex items-center border-[1px] border-yellow-400 rounded-xl overflow-hidden">
        <div className="bg-yellow-400 p-2 px-3 mr-3">{icon}</div>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="number"
          placeholder={placeholder}
          className="flex-1 pr-1 placeholder:text-[14px] text-[14px] bg-transparent"
        />
      </div>
    </div>
  );
}

export default DropZone;
