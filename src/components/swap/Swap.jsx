"use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { IoWalletOutline } from "react-icons/io5";
// import * as z from "zod";

// import { useAccount, useContractRead } from "wagmi";
// import WCX_Token_ABI from "@/abi/wcx-token-abi.json";

import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { Input } from "@/components/ui/input";
// import { stakeSchema } from "@/lib/validators";
// import { def } from "@/lib/utils";

export default function Swap() {
  //   const account = useAccount();
  //   const result = useContractRead({
  //     abi: WCX_Token_ABI,
  //     address: "0xbFf157FE56a966208b00f1cb3699dF7601a13a08",
  //     functionName: "balanceOf",
  //     args: [account?.address],
  //   });

  return (
    <div className="w-full flex items-center justify-center">
      <div className="p-0 md:p-6 pb-4 bg-background md:border md:shadow-md rounded-2xl w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Transfer</h2>

          <div className="flex items-center gap-x-1">
            <p className="flex items-center mr-2">
              {/* <IoWalletOutline className="w-5 h-5 text-primary mr-1" /> */}
              <span className="font-medium text-sm">WCX</span>
            </p>

            <Button
              size="sm"
              variant="secondary"
              className="py-2 h-7 font-bold rounded-full shadow"
            >
              Max
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="py-2 h-7 font-bold rounded-full shadow"
            >
              Half
            </Button>
          </div>
        </div>

        {/* <Form {...form}> */}
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          className="my-5 flex flex-col gap-4"
        >
          <div className="rounded-full p-3 pl-5 flex items-center border h-16">
            <input
              type="number"
              placeholder="0"
              className="border-none ring-offset-0 outline-none bg-transparent w-full"
            />
            <div className="rounded-full h-full border flex items-center gap-2 p-2 pr-3 bg-secondary">
              <div className="w-6 h-6 rounded-full bg-background"></div>
              <p className="text-base font-bold">BASE</p>
            </div>
          </div>

          <div className="rounded-full p-3 pl-5 flex items-center border h-16">
            <input
              type="number"
              placeholder="0"
              className="border-none ring-offset-0 outline-none bg-transparent w-full text-lg"
            />
            <div className="rounded-full h-full border flex items-center gap-2 p-2 pr-3 bg-secondary">
              <div className="w-6 h-6 rounded-full bg-background"></div>
              <p className="text-base font-bold">OP</p>
            </div>
          </div>

          <div className="mt-10">
            <label className="text-lg font-semibold">Recipent Address</label>
            <div className=" mt-5 rounded-3xl p-3 pl-5 flex items-center border h-16">
              <input
                type="text"
                placeholder="0x"
                className="border-none ring-offset-0 outline-none bg-transparent w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:px-6">
            {/* <div className="flex items-center justify-between mb-3">
              <p className="text-base font-semibold">You will receive</p>
              <p className="text-base font-semibold">1900.00 RBCW</p>
            </div> */}

            <Button
              type="submit"
              className="h-12 md:h-14 rounded-lg md:rounded-full text-lg font-medium"
            >
              Send
            </Button>

            <div className="flex items-center justify-between mt-3">
              <p className="text-base font-semibold">Protocol Fee</p>
              <p className="text-base font-semibold">$300</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-base font-semibold">Commission</p>
              <p className="text-base font-semibold">10%</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-base font-semibold">Estimated Time</p>
              <p className="text-base font-semibold">25 mins</p>
            </div>
          </div>
        </form>
        {/* </Form> */}
      </div>
    </div>
  );
}
