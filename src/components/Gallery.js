"use client";
import { SAMPLE_IMAGES } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";

export default function Gallery() {
  const [photoGrid, setPhotoGrid] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      if (photoGrid) {
        // until the images load, their width
        // and height is not determined.
        // This updates the grid layout
        // to show the images correctly
        // once they are fully loaded.
        // photoGrid.updateLayout();
      }
      // tweak the time as needed
    }, 1000);

    return () => clearTimeout(id);
  }, [photoGrid]);

  return (
    <StackGrid
      columnWidth="25%"
      duration={0}
      gutterHeight={16}
      gutterWidth={16}
      gridRef={(grid) => setPhotoGrid(grid)}
    >
      {SAMPLE_IMAGES.map((src, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={src}
            alt={`Gallery Image ${index}`}
            width={200}
            height={300}
            onClick={() => {
              console.log("Image has been clicked");
            }}
          />
        </div>
      ))}
    </StackGrid>
  );
}
