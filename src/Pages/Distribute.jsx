import React, { useState } from "react";
import Title from "../components/Title";

const Distribute = () => {
  const [dists, setDists] = useState([
    "Spotify",
    "Instagram & Facebook",
    "Amazon",
    "Deezer",
    "ClaroMúsica",
    "Anghami",
    "Tencent",
    "Kuack Media",
    "Flo",
    "Apple Music",
    "TikTok, Resso & Luna",
    "Soundtrack by Twitch",
    "Tidal",
    "Saavn",
    "KKBox",
    "Qobuz",
    "Yandex Music (beta)",
    "MediaNet & many smaller outlets",
    "iTunes",
    "YouTube Music",
    "Pandora",
    "iHeartRadio",
    "Boomplay",
    "NetEase",
    "Joox",
    "Adaptr",
    "Snapchat",
  ]);
  return (
    <div className="my-10">
      <div className="mx-20 py-8 text-4xl">
        {/* <Title text1={"WILL BE DEVELOPED"} text2={"SOON"} /> */}
        <div className="text-2xl pb-10 border-b-2">Upload music</div>
        <div className="flex my-5 pb-10 border-b-2">
          <div className="text-base w-[30%]">services</div>
          <form
            action="/submit"
            method="post"
            className="grid grid-cols-3 w-[70%] gap-0"
          >
            {dists.map((item, index) => {
              return (
                <div key={index} className="flex items-center text-sm">
                  <input type="checkbox" id={item} name={item} value={item} />
                  <label htmlFor={item} className="pl-1">
                    {item}
                  </label>
                </div>
              );
            })}
          </form>
        </div>
        <div className="flex items-center text-sm  pb-10 border-b-2">
          <div className="text-base w-[30%]">Number of songs</div>
          <form
            action="/submit"
            method="post"
            className="border-black border-2 rounded"
          >
            <select id="numSong" name="numSong" className="px-5">
              <option value="single">1 song (a single)</option>
              <option value="album">an album</option>
            </select>
          </form>
        </div>

        <div>
          <div
            className="w-full text-xl p-2"
            style={{
              background: "linear-gradient(to right, #A09383, #3C4F77)",
            }}
          >
            TRACK 1
          </div>
          <div className="r text-sm  pb-10 border-b-2">
            <form action="/submit" method="post" className="">
              <div className="flex items-center my-2">
                <label className="text-base w-[30%]">Song Title</label>
                <input
                  className="border-black border-2  px-4 py-1 w-[50%]"
                  type="text"
                  placeholder="Track 1 title"
                />
              </div>
              <div className="flex items-center my-2">
                <label className="text-base w-[30%]">Primary Artist Name</label>
                <input
                  className="border-black border-2  px-4 py-1 w-[50%]"
                  type="text"
                  placeholder="artist name"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribute;
