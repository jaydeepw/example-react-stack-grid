import Gallery from "@/components/Gallery";
import { BLOG_LINK } from "@/utils/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            marginTop: "34px",
            marginBottom: "34px",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "120px",
            }}
          >
            Masonry Style Grid
          </h1>
          <div>
            <h1
              style={{
                marginTop: "34px",
              }}
            >
              With{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ff6b6b, #fbc531, #4cd137, #00a8ff, #9c88ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                React Stack Grid
              </span>
              &nbsp;|&nbsp;
              <Link
                style={{
                  color: "lightpink",
                }}
                target="_blank"
                href={BLOG_LINK}
              >
                Visit Blog
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            width: "80%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Gallery />
        </div>
      </div>
    </>
  );
}
