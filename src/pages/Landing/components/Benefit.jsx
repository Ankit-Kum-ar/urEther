const Benefit = () => {
  return (
    <div className="mt-48 flex flex-row gap-28">

        <div className="w-6/12 font-yukita">

            <div className="w-9/12 mx-auto flex mt-10 flex-col">
                <h1 className=" text-5xl font-bold text-[#2C3131]">The Most Trusted Cryptocurrency Platform</h1>
                <div className="flex flex-row mt-12 gap-6">
                    <p className=" text-[#D0DBFF] text-2xl font-bold">01</p>
                    <div className="flex flex-col">
                        <h1 className="text-[#2C3131] text-2xl font-bold">Sync between platforms</h1>
                        <p className="text-[#626262]">No matter if you're using our web interface or mobile app — your data is always synced. Just one account for all our services.</p>
                    </div>
                </div>
                <div class="h-[1px] bg-[#E3E3E3] mt-6 w-full"></div>
                <div className="flex flex-row mt-6 gap-6">
                    <p className=" text-[#D0DBFF] text-2xl font-bold">02</p>
                    <div className="flex flex-col">
                        <h1 className="text-[#2C3131] text-2xl font-bold">More focus, less clutter</h1>
                        <p className="text-[#626262]">No ads, just the crypto and content you love.</p>
                    </div>
                </div>
                <div class="h-[1px] bg-[#E3E3E3] mt-6 w-full"></div>
                <div className="flex flex-row mt-6 gap-6">
                    <p className=" text-[#D0DBFF] text-2xl font-bold">03</p>
                    <div className="flex flex-col">
                        <h1 className="text-[#2C3131] text-2xl font-bold">Security by default</h1>
                        <p className="text-[#626262]">Enable privacy mode and app locking to protect your data.</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="w-1/2">
            <img src="/assets/benefit/benefit.png" alt="benefit" />
        </div>
    </div>
  )
}

export default Benefit
