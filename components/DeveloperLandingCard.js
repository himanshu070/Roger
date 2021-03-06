import Image from "next/image";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";


const DeveloperLandingCard = (props) => {

  const [firstLoad, setFirstLoad] = useState(1);

  const container = useRef(null); 

  useEffect(() => {

    lottie.loadAnimation(
      {
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../Json/arrow.json"),
      }
    );
  });


  return (
    <div className="cardBody ">
      <div className="flex flex-row justify-center">
           <div className="divImg">
            <img className="img rounded-full" src={`${props.img}`} alt="logo" width={120} height={120} />
          </div>
      </div>
      <div>
        <div className="text-xl mt-6 font-bold flex items-center">{props.name} <div className="ml-3">
          {/* <Image src="/Images/Frame.png" alt="logo" width={22} height={22} /> */}
          </div></div>
        <div className="text-lg mt-4 font-normal">{props.qual}</div>
        <div className="text-lg mt-4 font-bold text-gray-600">{props.tech}</div>
      </div>
      {/* <Link href="/developers" className="button"> */}
      <Link href={props.githubUrl?props.githubUrl:""} >
      <a target="_blank" className="button">
        <span className="pl-7 font-bold text-gray-600">Check Profile</span>
        <span className="arrow">
            <Image src="/images/Arrow.png" alt="logo" width={15} height={15} />
        </span>
      </a>
      </Link>
      {/* </Link> */}
      <style jsx>{`
        .cardBody{
                height: 397px;
        width: 267px;
        background-color: #c4c4cd;
        box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        margin-top: 44px;
        margin-right: 14px;
        margin-bottom: 40px;
        margin-left: 92px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          padding: 20px 40px;
        }
        
        .divImg{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 140px;
          height: 140px;
          background-color: #c4c4cd;

          box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
              -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
          border-radius: 50%;
        }
        
        .button{
          width: 200;
          height: 55px;
          margin-top: 20px;
          background-color: #c4c4cd;

          box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
              -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
          border-radius: 42.5px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        
        .arrow{
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #c4c4cd;
          box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
              inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
          border-radius: 50%;
        }
        .title{
          top: 35px;
          font-size: 3rem;
        }
    `}</style>
    </div>
  );
};

export default DeveloperLandingCard;
