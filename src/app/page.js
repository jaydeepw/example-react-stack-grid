import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "24px",
          marginBottom: "24px",
          justifyContent: "center",
        }}
      >
        <h1>Image Gallery</h1>
      </div>
      <div
        style={{
          width: "70%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Gallery />
      </div>
    </div>
  );
}
