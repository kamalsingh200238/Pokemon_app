import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const linkData = [
    {
      link: "/csr",
      data: "Clent Side generated app",
    },
    {
      link: "/ssr",
      data: "Server Side generated app",
    },
    {
      link: "/ssg",
      data: "Staticly Generated Site",
    },
  ];
  return (
    <>
      <div className="">
        {linkData.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <a className="">{item.data}</a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
