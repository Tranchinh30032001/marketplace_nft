// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; // every nft have unique ID
    Counters.Counter private _itemsSold; // đếm số lượng nft đã bán

    uint256 listingPrice = 0.0025 ether;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    ///@dev ứng với mỗi unique nft thì sẽ tương ứng với detail của nó.
    mapping(uint256 => MarketItem) private idMarketItem;
    ///@dev trigger mỗi khi nft được bán hay mua bởi một ai đó.
    event idMarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    constructor() ERC721("HaiChinh", "HC") {}

    function updateListingPrice(
        uint256 _listingPrice
    ) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    ///@dev sau khi tạo một nft thì nó sẽ về ví người tạo, vào sau đó tới dòng 57 thì nft đó là được chuyển về smartcontract.
    function createToken(
        string memory tokenURI, // tokenURI ở đây chính là đường link mà image upload to ipfs
        uint256 price
    ) public payable returns (uint256) {
        _tokenIds.increment(); // tăng tok enId lên 1.
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);
        return newTokenId;
    }

    ///@dev hàm này được gọi từ hàm createToken.
    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be at least 1");
        ///@dev ???????
        require(
            msg.value == listingPrice,
            "Price must be equal to listingPrice"
        );
        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );
        _transfer(msg.sender, address(this), tokenId);
        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    ///@dev funtion for resale token. Hàm này cho phép người bán nft có thể đặt lại giá bán cao hơn.
    function reSellToken(uint256 tokenId, uint256 price) public payable {
        require(
            idMarketItem[tokenId].owner == msg.sender,
            "Only owner can perform this operation"
        );
        // yêu cầu này là bất kì ai gọi hàm này thì đều phải trả 1 khoản phí hoa hồng cho ứng dụng. và tiền này sẽ chảy về túi smartcontract.
        require(
            msg.value == listingPrice, //41:21
            "Price must be equa to listingPrice"
        );
        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));
        // mỗi khi có 1 giao dịch bán hay mua nft sảy ra thì số lượng _itemSold sẽ tăng lên. nhưng nếu bán lại thì sẽ giảm xuống.
        _itemsSold.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }

    // Function CreateMarketSale. Hàm này là hàm mua NFT
    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idMarketItem[tokenId].price;
        require(msg.value == price, "transaction not invalid");
        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].seller = payable(address(0));
        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);
        ///@dev can lua y.
        address payable owner = payable(owner());
        owner.transfer(listingPrice); // mỗi giao dịch thành công thì chủ sở hữu smartcontract marketplace sẽ được hưởng hoa hông.
        payable(idMarketItem[tokenId].seller).transfer(msg.value); // sau khi bán nft thì tiền bán được sẽ về ví của người bán.
    }

    ///@dev hàm này fetch tất các các nft chưa bán được from our smartcontract
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = itemCount - _itemsSold.current();
        MarketItem[] memory listNft_UnSold = new MarketItem[](unSoldItemCount);
        uint256 index = 0;
        for (uint i = 0; i < itemCount; i++) {
            // Đây là điều kiện chứng tỏ ràng nft này vẫn chưa bán,
            if (idMarketItem[i + 1].owner == address(this)) {
                listNft_UnSold[index++] = idMarketItem[i + 1];
            }
        }
        return listNft_UnSold;
    }

    ///@dev Ham fetch các nft thuộc quyền sở hữu của mình.

    function fetchMyNft() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 myNft_Count = 0;
        uint256 index = 0;
        for (uint i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                myNft_Count += 1;
            }
        }
        MarketItem[] memory list_MyNft = new MarketItem[](myNft_Count);
        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                list_MyNft[index++] = idMarketItem[i + 1];
            }
        }
        return list_MyNft;
    }

    function fetchAllNft() public view returns (MarketItem[] memory) {
        uint256 totalNft = _tokenIds.current();
        MarketItem[] memory resultArray = new MarketItem[](totalNft);
        for (uint i = 0; i < totalNft; i++) {
            resultArray[i] = idMarketItem[i + 1];
        }
        return resultArray;
    }

    ///@dev hàm fetch những nft mà mình đã bán.
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 myNftSell_Count = 0;
        uint256 index = 0;
        for (uint i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                myNftSell_Count += 1;
            }
        }
        MarketItem[] memory list_MyNft = new MarketItem[](myNftSell_Count);
        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                list_MyNft[index++] = idMarketItem[i + 1];
            }
        }
        return list_MyNft;
    }
}
