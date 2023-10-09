

const Product = () => {

  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-12">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/xCLsShPQ/daniel-korpai-t-E-k-Ghsc-UTU-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>Price - $1000</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary uppercase text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Product;
