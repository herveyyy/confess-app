import React,{useState}from "react";
import YoutubeEmbed from "./RickRolled";

function LoverForm() {
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("onhandleSubmit")
        setFirstName('');
        setSecondName('');
       setShowModal(true)
      };
      
    return (  
<div>
        <form onSubmit={handleSubmit} 
        className="py-7 ">
  <div className="grid md:grid-cols-2 md:gap-6 px-8">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" 
        name="floating_name_nimo" 
        id="floating_name_nimo"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_name_nimo" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Pangalan nimo 😏</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input 
         onChange={(event) => setSecondName(event.target.value)}
         value={secondName}
        type="text" name="floating_name_niya" id="floating_name_niya" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label 
        htmlFor="floating_name_niya" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Pangalan niya ❤️</label>
    </div>

  </div>
  <div className="px-20 flex items-center justify-center">
  <input type="submit"
  value={"Sukodon 📟"}
   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "/>
  </div>
</form>
<>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Naglaum ka?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <YoutubeEmbed />
                </div>
                {/*footer*/}
                
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <div className="flex flex-1 left-0 text-s text-gray-400">
                    HAHAHAHAHAHAHAHAHAHA</div>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
</div>
    );
}

export default LoverForm;