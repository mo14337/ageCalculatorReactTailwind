import { useEffect, useState } from 'react'
import buttonn from "../src/assets/icon-arrow.svg"



function App() {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [formData,setFormData]=useState({
    day:"",
    month:"",  
    year:""

  })
  const [dayError, setDayError] = useState("")
  const [monthError, setMonthError] = useState("")
  const [yearError, setYearError] = useState("")
  let d= new Date();
  let yyyy= d.getFullYear();
  let mm=d.getMonth()+1;
  let dd=d.getDate();

  

 

  function handleSubmit(e) {
    e.preventDefault();
    if(!formData.day){
      setDayError("")
      setDayError("This field is required")
    } 

   if(formData.day>31){
      setDayError("")
      setDayError("Enter a valid day")
    }
    
   if (!formData.month){
      console.log("hello");
      setMonthError("")
      setMonthError("This field is required")
    }
    
   if(formData.month>12){
      setMonthError("")
      setMonthError("Enter a valid month")
    }
    
   if(!formData.year){
      setYearError("")
      setYearError("This field is required")
    }
    
   if(formData.year>2023){
      setYearError("")
      setYearError("Enter a valid year")
    } else{
      
      let currentDate=`${yyyy}-${mm}-${dd}`;
      let inputDate=`${formData.year}-${formData.month}-${formData.day}`

      function getDaysBetweenDates(date1, date2) {
        // Calculate the time difference in milliseconds
        const timeDifference = Math.abs(date2.getTime() - date1.getTime());
      
        // Convert the time difference from milliseconds to days
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      
        return daysDifference;
      }
      
      // Example usage:
      const startDate = new Date(inputDate);
      const endDate = new Date(currentDate);
      const daysBetween = getDaysBetweenDates(startDate, endDate);

      let numberOfYear= Math.floor(daysBetween/365)
      setYear(numberOfYear);

      let numberOfMonths=Math.floor((daysBetween%365)/30)
      setMonth(numberOfMonths)

      let noOfDays=daysBetween%365;
      let noOfMonths=noOfDays%30;
      setDay(noOfMonths)
      
      
     
      
    }
    
    

  }

 function handleChange(e){
  const { name, value } = e.target;
  setFormData((prev) => {
      return { ...prev, [name]: value }
  })
   
   switch (e.target.name) {
    case "day":
      setDayError("")
      break;
    case "month":
      setMonthError("")
      break;
    case "year":
      setYearError("")
      break;
   
   
   }
 
 }




  return (
    <section className=' flex items-center justify-center w-full h-screen bg-slate-200'>

      <div className=' flex flex-col mx-4 shadow-md items-center p-12 md:w-[750px] md:h-[550px] w-full h-fit rounded-[20px] rounded-br-[130px] bg-white'>

        <form onSubmit={handleSubmit} className=' flex  flex-col w-full h-[35%] gap-8'>
          <div className=' flex flex-row gap-2 md:gap-5'>
            <div className=' flex flex-col gap-2'>
              <p className=' font-semibold text-gray-600 text-sm '>DAY</p>
              <input className={`border ${dayError ? "border-red-600":"border-black"} h-[40px]  w-[80px]  md:h-[60px] md:w-[130px] rounded-lg text-xl text-center font-bold`} name='day' value={formData.day} onChange={(e) => handleChange(e)} placeholder='DD'></input>
              { dayError && <p className=' text-xs text-red-600'>{dayError}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-gray-600 text-sm '>MONTH</p>
              <input className={`border ${monthError ? "border-red-600":"border-black"}  h-[40px]  w-[80px] md:h-[60px] md:w-[130px] rounded-lg text-xl text-center font-bold`} name='month' value={formData.month} onChange={(e) => handleChange(e)} placeholder='MM'></input>
              { monthError && <p className=' text-xs text-red-600'>{monthError}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-gray-600 text-sm'>YEAR</p>
              <input className={`border ${yearError ? "border-red-600":"border-black"}  h-[40px]  w-[80px] md:h-[60px] md:w-[130px] rounded-lg text-xl text-center font-bold`} name='year' value={formData.year} onChange={(e) => handleChange(e)} placeholder='YYYY'></input>
              { yearError && <p className=' text-xs text-red-600'>{yearError}</p>}
            </div>

          </div>

          <div className=' relative flex md:justify-end justify-center  w-full h-[1px]  bg-slate-400'>
            <button className=" absolute -top-[26px] flex justify-center items-center p-2  h-14 w-14 rounded-full bg-purple-700  "><img src={buttonn} /></button>
          </div>
        </form>
        <div className=' flex flex-col w-full h-full m-10 justify-center items-start text-5xl md:text-7xl font-extrabold'>
          <p> <span className='text-[#7d50f5]'>{year?year:"--"}</span> years</p>
          <p> <span className='text-[#7d50f5]'>{month?month:"--"}</span> months</p>
          <p> <span className='text-[#7d50f5]'>{day?day:"--"}</span> days</p>


        </div>

      </div>

    </section>
  )
}

export default App
