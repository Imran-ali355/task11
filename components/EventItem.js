import { useRouter } from "next/router";

function EventItem({id, title, date, desc}) {
    const router = useRouter();
    return (
  <div className="bg-gray-700    flex items-center justify-center">
        <div className="bg-white h-52 my-3 w-8/12  m-auto flex  ">
          <div className="bg-red-200 w-5/12">
            {" "}
            <img src="img.jpg " className="h-full w-full" alt="" />
          </div>
  
          <div className=" flex-1 ">
            <h1 className="text-2xl font-bold p-2">{title}</h1>
            <h4 className="text-xl font-bold p-2">{date}</h4>
            <p className="p-2">
              {desc}
            </p>
            <div className="flex justify-end mr-4">
              <button 
              onClick={() => router.push('/event') }
              className="justify-end bg-green-500 rounded-md p-2 m-1 hover:bg-green-700">
                Explore Events
              </button>
            </div>
          </div>
        </div>
  
       
      </div>  )
  }
  
  export default EventItem