import axios from "axios";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import * as contract from "../constants/contract.json";
declare var window: any;
//@ts-ignore
export const MarketContext = createContext();

function MarketProvider({ children }: any) {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [signer, setSigner] = useState<string>("");
  console.log("signer: ", signer);
  const [respone, setRespone] = useState(); // ket qua la 1 objec khi ma minh tai anh len ipfs.
  const [transaction, setTransaction] = useState();
  const [isTransaction, setIsTransaction] = useState<boolean>(false);
  const SUBDOMAIN = "https://chinh-nft-marketplace.infura-ipfs.io";
  const PROJECT_ID = "2LHcjIvWTrFNii6Wyzlezt6U6ov";
  const API_KEY_ID = "8a01c5ea50c6e287e2acb90c1e42fa64";
  const auth = `Basic ${Buffer.from(`${PROJECT_ID}:${API_KEY_ID}`).toString(
    "base64"
  )}`;
  const client = create({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });
  useEffect(() => {
    if (typeof window.ethereum == "undefined") {
      alert("Vui long cai dat metamask");
    }
    try {
      (async function () {
        await connect();
        window.ethereum.on("accountsChanged", (accounts: any) => {
          window.location.reload();
        });
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);
  // connect with metamask
  const fetchContract = async (signerOrProvider: any) => {
    const address = contract.goerli.NFTMarketplaceAddress;
    const abi = contract.goerli.NFTMarketplaceABI;
    return new ethers.Contract(address, abi, signerOrProvider);
  };
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        const Signer = provider.getSigner();
        const address = await Signer.getAddress();
        setIsConnected(true);
        setSigner(address);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsConnected(false);
    }
  }
  // connect with smartcontract
  async function connectingSmartContract() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const deployer = provider.getSigner();
      const smartcontract = await fetchContract(deployer);
      return smartcontract;
    }
  }
  //upload image to ipfs
  const uploadToIPFS = async (file: any) => {
    if (file) {
      try {
        console.log("uploading to ipfs...");
        const added = await client.add({ content: file });
        const url = `${SUBDOMAIN}/ipfs/${added.path}`;
        console.log("URL: ", url);
        return url;
      } catch (error) {
        setError("Error Uploading to IPFS");
        setOpenError(true);
      }
    }
  };

  //---CREATENFT FUNCTION
  const createNFT = async (
    name: string,
    price: number,
    image: string,
    category: string,
    description: string,
    website: string
  ) => {
    if (!name || !description || !price || !image || !category || !website) {
      return setError("Data Is Missing"), setOpenError(true);
    }
    const data = JSON.stringify({
      name,
      description,
      image,
      category,
      website,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.io/ipfs/${added.path}`;
      await createSale(url, price);
      console.log("successfully");
    } catch (error) {
      setError("Error while creating NFT");
      setOpenError(true);
    }
  };
  const createSale = async (
    url: string,
    formInputPrice: number,
    isReselling?: boolean,
    id?: number
  ) => {
    try {
      // Hàm này dùng để chuyển ether ---> wei
      const price = ethers.utils.parseUnits(formInputPrice.toString(), "ether");

      const contract = await connectingSmartContract();
      const listingPrice = await contract?.getListingPrice();

      const transactionResult = !isReselling
        ? await contract?.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract?.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transactionResult.wait();
      setTransaction(transactionResult);
      setIsTransaction(true);
      console.log("transaction: ", transactionResult);
    } catch (error) {
      setError("error while creating sale");
      setOpenError(true);
      console.log(error);
    }
  };
  const fetchNFTs = async () => {
    try {
      const smartcontract = await connectingSmartContract();
      const respone = await smartcontract?.fetchMarketItem();
      const ai = respone.map(async (item: any) => {
        const { owner, seller, sold, price, tokenId } = item;
        const url = await smartcontract?.tokenURI(item.tokenId);
        return {
          owner,
          seller,
          sold,
          price,
          tokenId,
          url,
        };
      });
      const getPromiseAi = await Promise.all(ai);
      const filterAi = getPromiseAi.filter((item) => {
        return !item.url.includes("infura-ipfs");
      });
      const data = filterAi.map(
        async ({ owner, seller, price, sold, tokenId, url }) => {
          const { name, image, description, category, royalties, website } =
            await (
              await axios.get(url)
            ).data;
          // Hàm này dùng để chuyển wei ---> ether
          price = ethers.utils.formatUnits(price.toString(), "ether");
          return {
            owner,
            seller,
            price,
            sold,
            tokenId,
            name,
            image,
            description,
            category,
            royalties,
            website,
          };
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMyNFTs = async () => {
    try {
      const smartcontract = await connectingSmartContract();
      const respone = await smartcontract?.fetchMyNft();
      const result = respone.map(
        async ({ owner, seller, price, sold, tokenId }: any) => {
          const uri = await smartcontract?.tokenURI(tokenId);
          const { name, description, image, category, website } = await (
            await axios.get(uri)
          ).data;
          price = ethers.utils.formatUnits(price.toString(), "ether");
          return {
            owner,
            seller,
            price,
            name,
            description,
            image,
            sold,
            tokenId,
            category,
            website,
          };
        }
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  async function fetchAllNft() {
    try {
      const smartcontract = await connectingSmartContract();
      const respone = await smartcontract?.fetchAllNft();
      const newArr = respone.map(
        async ({ owner, seller, tokenId, sold, price }: any) => {
          const uri = await smartcontract?.tokenURI(tokenId);
          const { name, description, image, category } = await (
            await axios.get(uri)
          ).data;
          price = ethers.utils.formatUnits(price.toString(), "ether");
          return {
            name,
            description,
            image,
            owner,
            seller,
            tokenId,
            sold,
            price,
            category,
          };
        }
      );
      return newArr;
    } catch (error) {
      console.log(error);
    }
  }
  async function buyNFT(nft: any) {
    try {
      const smartcontract = await connectingSmartContract();
      console.log("buying...");
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await smartcontract?.createMarketSale(nft.tokenId, {
        value: price,
      });
      await transaction.wait();
      setIsTransaction(true);
      setTransaction(transaction);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <MarketContext.Provider
      value={{
        isConnected,
        hasMetamask,
        signer,
        connect,
        uploadToIPFS,
        createNFT,
        transaction,
        error,
        openError,
        setOpenError,
        fetchContract,
        fetchNFTs,
        fetchMyNFTs,
        buyNFT,
        isTransaction,
        setIsTransaction,
        fetchAllNft,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}

export default MarketProvider;
