import FeaturesItem from "./FeaturesItem";

export default function Features() {
  return (
    <div className="mt-14 flex flex-col">
      <div className="pb-6">
        <span className="font-bold text-3xl">NFT 101</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <FeaturesItem url="MusicNFT.png" name="What Are Music NFTs ? " />
        <FeaturesItem url="WhatIsNFT.png" name="What Is An NFT ? " />
        <FeaturesItem url="BuyNFTs.png" name="How To Buy NFTs ? " />
        <FeaturesItem url="Mintt.jpg" name="What Is Minting ? " />
      </div>
    </div>
  );
}
