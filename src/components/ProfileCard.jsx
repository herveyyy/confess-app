import React from "react";


function ProfileCard() {
    return (  
    <div className="pb-80">
      <div className="relative h-40">
        <img className="absolute h-full w-full object-cover" src="https://res.cloudinary.com/practicaldev/image/fetch/s--a0VqOvf_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4a6t7pmm323uaz9rv1rf.png"/>
      </div>
      <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img className=" object-cover object-center w-30 h-30" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/315050076_2005437016308785_1048091665151425563_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEHlJF6FXd_kkdRqzQvVfSncCKwmDdjLMVwIrCYN2MsxfSGgUcirI-EV1FWgh60i5ihGqw_AAub8Sb31Pm-RP5e&_nc_ohc=5Llb8Q4BR34AX87Rx1B&_nc_ht=scontent.fcgy1-1.fna&oh=00_AfBlhVm11gw5izrCyTxGr7ug-RPEZ8FryiA0LxBplV0a2g&oe=63F7CE74" />
      </div>
      <div className="mt-16">
        <h1 className="text-lg text-center font-semibold">
          Herbitok 
        </h1>
        <p className="text-sm text-gray-600 text-center">
          BS-Secret
        </p>
      </div>
      
      <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t justify-center">
        <div className="text-sm font-bold mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 bg-indigo-600 text-indigo-100 cursor-default">
          What if 
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
        dili ra ikaw iyang gina entertain
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          dili na diay siya interested nimo
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Gikapoy na siyas imong batasan
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          dili diay jud to sila friends lang
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Mag study naka dara
        </div>
      </div>
      </div>
    
    );
}

export default ProfileCard
