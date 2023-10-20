import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});

  const handleShorten = async () => {
    let newUrl = url;
    const objUrl = new URL(url);
    console.log(objUrl);
    if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://")) {
      // If not, prepend "https://"
      newUrl = "https://" + url;
    }

    const data = await axios.post("http://localhost:8000/", {
      originalUrl: newUrl,
    });
    console.log(data);
    setData(data?.data);
  };
  return (
    <main className="container mx-auto ">
      <div className="">
        <div className="flex justify-center items-center h-screen flex-col">
          <h1 className="text-2xl mb-20">URL Shortner</h1>
          <div>
            <div className="flex w-[500px] mb-5 items-center space-x-2">
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="url"
                placeholder="Enter a link to shorten it"
              />
              <Button className="w-[200px] " onClick={handleShorten}>
                Shorten URL
              </Button>
            </div>
            <div>
              <p>Original url : {data?.originalUrl}</p>
              <p>
                Shorten url :
                <a
                  target="_blank"
                  href={`http://localhost:8000/${data?.shortenUrl}`}
                >
                  http://localhost:8000/{data?.shortenUrl}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
