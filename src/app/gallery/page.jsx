import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimizations</h1>
      <Image src="https://img.freepik.com/premium-vector/colorful-picture-word-cool-blue-orange_135595-127449.jpg?semt=ais_incoming"
      alt="Next image"
      width={500}
      height={500}
      />
    </div>
  );
};

export default GalleryPage;
