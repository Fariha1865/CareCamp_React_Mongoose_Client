import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/AxiosSecure";
import "./details.css"
import { Button } from "flowbite-react";
import SectionTitle from "../../Components/SectionTitle";
const CampDetails = () => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [camp, setCamp] = useState([]);

    const url = `/details/${id}`

    useEffect(() => {

        axiosSecure.get(url)
            .then(result => {

                setCamp(result?.data[0])
            })

    }, [axiosSecure, url])
    console.log(id)
    return (
        <div className="max-w-6xl mx-auto pt-24">
            <SectionTitle subheading="" heading={camp?.CampName}></SectionTitle>
            <div className="flex flex-col lg:flex-row items-center  justify-between">
                <img src={camp?.Image} alt="" className="border-solid border-2 border-blue-900 w-[710px] h-[350px]" />


                <div className="card2">
                    <div className="content2">
                        <div className="back">
                            <div className="back-content">
                                <div className="flex flex-col gap-3 border-blue-300 border-solid border-2 py-20 px-3">
                                    <h1><span className="text-lg text-blue-800 font-bold underline mr-5">Camp Name:</span> {camp?.CampName}</h1>
                                    <h1><span className="text-lg text-blue-800 font-bold underline mr-5">Location:</span> {camp?.Venue}, {camp?.Location}</h1>
                                    <h1><span className="text-lg text-blue-800 font-bold underline mr-5">Date & Time:</span> {camp?.ScheduledDateTime}</h1>
                                    <h1><span className="text-lg text-blue-800 font-bold underline mr-5">Target Audience:</span> {camp?.TargetAudience}</h1>
                                    <h1><span className="text-lg text-blue-800 font-bold underline mr-5">Total Registered Participants:</span> {camp?.Participants}</h1>
                                    <h1><span className="text-lg text-blue-800 font-bold underline mr-5">Camp Fees:</span> {camp?.CampFees}</h1>

                                    <Button gradientDuoTone="greenToBlue" className="mt-4">Join This Camp</Button>
                                </div>

                            </div>
                        </div>
                        <div className="front">

                            <div className="img">
                                <div className="circle">
                                </div>
                                <div className="circle" id="right">
                                </div>
                                <div className="circle" id="bottom">
                                </div>
                            </div>

                            <div className="front-content">
                                <small className="badge">Interested ?</small>
                                <div className="description">
                                    <div className="title">
                                        <Button gradientDuoTone="greenToBlue" >Join This Camp</Button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className="mt-10 font-serif text-lg shadow-2xl p-5">{camp?.Description}</h1>

            <div>
                <div className="flex justify-between items-center  h-20 mt-20">
                    <h1 className="text-black font-bold text-xl"><span className="text-blue-800 underline mb-3">Specialized Services:</span><br /> <li>{camp?.SpecializedServices[0]}</li><li>{camp?.SpecializedServices[1]}</li></h1>
                    <h1 className="text-black font-bold text-xl"><span className="text-blue-800 underline mb-3">Healthcare Professionals:</span><br /> <li>{camp?.HealthcareProfessionals[0].Name},{camp?.HealthcareProfessionals[0].Specialty}</li><li>{camp?.HealthcareProfessionals[1].Name},{camp?.HealthcareProfessionals[1].Specialty}</li></h1>

                </div>
            </div>
        </div>
    );
};

export default CampDetails;