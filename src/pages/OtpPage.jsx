
const OtpPage = () => {
  return (
    <div>
           <div className=" h-screen w-full flex items-center justify-center">
      <div className="container mx-auto">
        <div className="form-control justify-center w-full flex-row">
          <form action="">
            <label className="input-group">
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered" />
                <button className="px-4 py-2 bg-purple-700 text-white">Send Otp</button>
            </label>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OtpPage