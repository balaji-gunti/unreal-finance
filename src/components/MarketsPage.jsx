import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { rows } from "../utils/constants";

const MarketsPage = () => {
  return (
    <div className="mt-[60px] mx-[150px]">
      <div className=" flex  items-center  gap-5">
        <div className="flex">
          <img
            width="60"
            height="30"
            src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
            alt="USDC"
          />
          <img
            width="60"
            height="30"
            style={{ borderRadius: "50%" }}
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/ethereum-2752194-2285011.png?f=webp&w=128"
            alt="Ethereum"
          />
        </div>
        <div className="text-white flex flex-col font-bold">
          <span className="text-4xl">
            USDC <span className="text-gray-500">| Ethereum</span>
          </span>
          <span className="flex items-center gap-2 text-gray-500">
            0xc3d688B66703497DAA19211EEdff47f25384cdc3{" "}
            <span>
              <BiSolidEdit />
            </span>
          </span>
        </div>
      </div>
      <div className="flex mt-[60px] justify-between font-bold text-white">
        <div className="w-[500px] flex flex-col ">
          <span className="text-[#00C289] ">Total Collateral</span>
          <span className="text-3xl">$515.64M</span>
        </div>
        <div className="w-[500px] flex flex-col">
          <span className="text-[#8F66FF] ">Total Borrowing</span>
          <span className="text-3xl">$234.94M</span>
        </div>
      </div>
      <div className="bg-[#1D2833] flex flex-col gap-10 font-bold text-white h-[auto] mt-[60px] p-4 px-10 ">
        <div className="flex gap-[80px]">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Total Earning</span>
            <span>$249.99M</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Earn APR</span>
            <div className="flex gap-2">
              <img
                width="20"
                height="20"
                src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                alt=""
              />
              <span>3.19%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Earn Distribution</span>
            <div className="flex gap-2">
              <img
                width="20"
                height="20"
                style={{ borderRadius: "50%" }}
                src="https://cryptologos.cc/logos/compound-comp-logo.png"
                alt=""
              />
              <span>3.19%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Reserves</span>
            <span>$1.39M</span>
          </div>
        </div>
        <div className="flex gap-[70px]">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Total Earning</span>
            <span>$24.94M</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Borrow APR</span>
            <div className="flex gap-2">
              <img
                width="20"
                height="20"
                src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                alt=""
              />
              <span>3.19%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Borrow Distribution</span>
            <div className="flex gap-2">
              <img
                width="20"
                height="20"
                style={{ borderRadius: "50%" }}
                src="https://cryptologos.cc/logos/compound-comp-logo.png"
                alt=""
              />
              <span>4.80%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Reserves</span>
            <span>$1.39M</span>
          </div>
        </div>
      </div>

      <div className="mt-[60px] text-white bg-[#1D2833]">
        <div class="grid grid-rows-5 grid-cols-7  gap-4 font-bold p-10 px-10">
          <div className="text-gray-400">Collateral Asset</div>
          <div className="text-gray-400">Total Supply</div>
          <div className="text-gray-400">Oracle Price</div>
          <div className="text-gray-400">Reserves</div>
          <div className="text-gray-400">Collateral Factor</div>
          <div className="text-gray-400">Liquidation Factor</div>
          <div className="text-gray-400">Liquidation Penalty</div>
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <div className="flex gap-3">
                <img
                  width={50}
                  src={row.collateralAsset.url}
                  alt={row.collateralAsset.name}
                />
                <span>{row.collateralAsset.name}</span>
              </div>
              <div>{row.totalSupply}</div>
              <div>{row.oraclePrice}</div>
              <div>{row.reserves}</div>
              <div>{row.collateralFactor}</div>
              <div>{row.liquidationFactor}</div>
              <div>{row.liquidationPenalty}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketsPage;
