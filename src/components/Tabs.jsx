import React, { useState } from "react";

const tabsData = [
  {
    image:
      "https://www.hulu.com/static/hitch/s3/attachments/cl5hfizp1qtoz1v3cagkvtbk2-ckzyp3x8ycmjp1k4e5pc5p9n9-ckuh9mwjj08j01v4q0ur1z6x1-ckqwp2zlfc1zx1u362echneor-sports-v3-1600x850-min-full.jpg",
    label: "Live Sports",
    content:
      "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
    sub1: "https://www.hulu.com/static/hitch/s3/attachments/cka35rzv205t90wgfxa4wz4q5-cbs-sports-network-logo-1.png",
    sub2: "https://www.hulu.com/static/hitch/s3/attachments/cka358szb054x0whh8qejv0m9-espn-network-logo.png",
    sub3: "https://www.hulu.com/static/hitch/s3/attachments/cka359jx805870wfx5lh6g69s-foxsports1-network-logo-0.svg",
    sub4: "https://www.hulu.com/static/hitch/s3/attachments/ckrp67fa801rn1u0tr0tnice2-nfl140x80.png",
  },
  {
    image:
      "https://www.hulu.com/static/hitch/s3/attachments/ckzyp4x986iio1k7rkj43368r-ckuh9mwg007ws1v4zm8i4kk07-ckqiozsqemxsf1u3mw3ihh0ti-news-1600x850-2x-full.jpg",
    label: "Breaking News",
    content:
      "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
    sub1: "https://www.hulu.com/static/hitch/s3/attachments/cka35p3nn05uc0wgpnfhqdxxy-abc-news-live-network-logo.png",
    sub2: "https://www.hulu.com/static/hitch/s3/attachments/cka35pfke05ur0wgpdxhaveec-cnn-network-logo.svg",
    sub3: "https://www.hulu.com/static/hitch/s3/attachments/cka35pv5705qs0wgflaaelolw-msnbc-network-logo.png",
    sub4: "https://www.hulu.com/static/hitch/s3/attachments/cka35ppx405v60wgp6e9ybu49-foxnews-network-logo.svg",
  },
  {
    image:
      "https://www.hulu.com/static/hitch/s3/attachments/ckzyp5obb6ijq1k7rdave9sam-ckuh9mwj308re1v24oa5phjn9-ckqip2n0m9n5t1u2zln68cft8-biggest-events-1600x850-2x-full.jpg",
    label: "Biggest Events",
    content:
      "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
    sub1: "https://www.hulu.com/static/hitch/s3/attachments/ckuh9udpy09191v07onislhds-ckpzuowwe0pmj184yae00c9dd-emmys-logo-full.png",
    sub2: "https://www.hulu.com/static/hitch/s3/attachments/ckuh9vr6l08uy1v4qqv9nqizi-ckpzut3390pzj183lizxdtgfg-golden-globe-logo-full.png",
    sub3: "https://www.hulu.com/static/hitch/s3/attachments/ckuh9wmfo08gv1v4mntr796of-ckpzutn9o0pt0184yxvnzwqx2-grammys-logo-full.png",
    sub4: "https://www.hulu.com/static/hitch/s3/attachments/ckuh9xcu908hx1v4mbds1x83w-ckpzuu4j00q0z183lbsz61e4i-oscars-logo-full.png",
  },
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="mb-24 relative">
      <img
        className="w-full h-[870px] object-cover"
        src={tabsData[activeTabIndex].image}
        alt=""
      />
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-[30%]">
          <div className="flex space-x-10">
            {tabsData.map((item, id) => {
              return (
                <button
                  key={id}
                  className={`py-2 border-b-4 transition-colors duration-300 text-white font-extrabold uppercase ${
                    id === activeTabIndex
                      ? "border-white"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTabIndex(id)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="py-4">
            <p className="mt-6 text-white text-6xl font-bold">
              {tabsData[activeTabIndex].label}
            </p>
            <p className="text-white max-w-xl mt-6 text-xl">
              {tabsData[activeTabIndex].content}
            </p>
            <div className="flex my-5">
              <img
                className="bg-white rounded-full w-14 h-14 p-2 m-3 object-contain"
                src={tabsData[activeTabIndex].sub1}
                alt="Sub 1"
              />
              <img
                className="bg-white rounded-full w-14 h-14 p-2 m-3 object-contain"
                src={tabsData[activeTabIndex].sub2}
                alt="Sub 2"
              />
              <img
                className="bg-white rounded-full w-14 h-14 p-2 m-3 object-contain"
                src={tabsData[activeTabIndex].sub3}
                alt="Sub 3"
              />
              <img
                className="bg-white rounded-full w-14 h-14 p-2 m-3 object-contain"
                src={tabsData[activeTabIndex].sub4}
                alt="Sub 4"
              />
            </div>
            <p className="text-gray-300 text-xs">
              Live TV plan required. Regional restrictions, blackouts and
              additional terms apply.
              <a className="underline font-bold" href="/#">
                {" "}
                See details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
