import {PiDoorOpen } from 'react-icons/pi';
import { BiBuildings, BiCategory, BiCurrentLocation, BiSolidHourglass, BiSolidStar, } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';

const BusinessesCard = ({businesses}) => {
    const displayValue = (value) =>{
        if(value == null || value == "0:0-0:0"){
            return 'Closed';
        }else{
            return value;
        }
    };
    const isOpen = (value) =>{
        return value == 1 ? "Yes" : "No";
    };
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {businesses.map((item)=>(
            <div key={item._id} className="bg-orange-200 border-2 border-white rounded-lg px-4 py-2 m-4 relative hover:bg-orange-300 shadow-3xl">
                <div className="flex justify-start items-center gap-x-2">
                <BiBuildings className="text-orange-600 text-3xl"/>
                    <h2 className="my-1 text-lg font-bold">{item.name}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                <FaLocationDot className="text-rose-500 text-2xl"/>
                    <h2 className="my-1">{item.address}, {item.city}, {item.state} {item.postal_code}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiCurrentLocation className="text-green-600 text-2xl"/>
                    <h2 className="my-1">{item.latitude}, {item.longitude}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiSolidStar className="text-yellow-600 text-2xl"/>
                    <h2 className="my-1">{item.stars}/5 Stars</h2>
                    <h2 className="text-gray-600">({item.review_count} Reviews)</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <PiDoorOpen className="text-black text-2xl"/>
                    <h2 className="my-1">Open: {isOpen(item.is_open)}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiCategory className="text-blue-600 text-2xl"/>
                    <h2 className="my-1">{item.categories}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiSolidHourglass className="text-orange-900 text-2xl"/>
                    <h2 className="my-1">
                        Monday: {displayValue(item.hours?.Monday)} <br />
                        Tueday: {displayValue(item.hours?.Tuesday)} <br />
                        Wednesday: {displayValue(item.hours?.Wednesday)} <br />
                        Thursday: {displayValue(item.hours?.Thursday)} <br />
                        Friday: {displayValue(item.hours?.Friday)} <br />
                        Saturday: {displayValue(item.hours?.Saturday)} <br />
                        Sunday: {displayValue(item.hours?.Sunday)} <br />
                    </h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BusinessesCard