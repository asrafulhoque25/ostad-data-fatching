const CartPage = () => {
  return (
    <div>
      <div className="mt-10 container mx-auto">
        <div className="grid grid-flow-row-dense grid-cols-3 gap-7">
          <div className="col-span-2">
            <div className=" px-5 py-3 shadow-lg flex items-start justify-between ">
                <div className="flex items-start gap-5">
                    <img src="https://i.postimg.cc/xCLsShPQ/daniel-korpai-t-E-k-Ghsc-UTU-unsplash.jpg" className=" w-16" alt="" />
                  <div>
                  <p className=" text-lg">product name</p>
                    <h4 className=" font-bold text-xl ">price -  $1000</h4>
                  </div>
                </div>
                <button className="px-3 py-2 bg-purple-600 text-white hover:bg-purple-500 transition-all">Remove</button>
            </div>
          </div>
          <div className="px-4 py-3 shadow-md ">
                <h4 className="pb-4">Total Items-</h4>
                <h4 className="pb-4">Total Price-</h4>
                <button className="px-3 py-2 bg-purple-600 text-white hover:bg-purple-500 transition-all">CheckOut </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
