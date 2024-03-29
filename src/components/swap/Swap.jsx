"use client";

import { Button } from "@/components/ui/button";

export default function Swap() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="p-0 md:p-6 pb-4 bg-background md:border md:shadow-md rounded-2xl w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Transfer</h2>

          <div className="flex items-center gap-x-1">
            <p className="flex items-center mr-2"></p>
      
          </div>
        </div>
        <form
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
