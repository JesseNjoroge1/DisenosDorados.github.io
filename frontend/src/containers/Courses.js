import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { load_subject } from '../actions/courses';
import axios from 'axios';

const Courses = ({ title_global, slug_global }) => {
    const [subjects, setSubjects] = useState([]);

    const fetchSubjects = async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/subjects/`);

            setSubjects(response.data);
        } catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        fetchSubjects();
    }, []);

    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-90 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
                <div className='flex justify-between items-center'>
                <div>
                    <p className='font-bold text-gray-400'>Earnings</p>
                    <p className='text-2xl'>$64, 559.90</p>
                </div>
                </div>
                </div>
                <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                    {/* <div className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                    <p className='text-sm text-gray-400 mt-1'>{title_global}</p>
                    </div> */}
                    {subjects.map((subject) => (
                        <div className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                            <p className='text-sm text-gray-400 mt-1'>{subject.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className='flex gap-10 flex-wrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-xl'>Revenue Updates</p>
                    <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                        <span><GoDotFill /></span>
                        <span>Expense</span>
                    </p>
                    <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                        <span><GoDotFill /></span>
                        <span>Budget</span>
                    </p>
                    </div>
                </div>
                <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                    <div className='border-r-1 border-color m-4 pr-10'>
                    <div>
                        <p>
                        <span className='text-3xl  font-semibold'>$100,000</span>
                        <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>10%</span>
                        </p>
                        <p className='text-gray-500 mt-1'>Budget</p>
                    </div>
                    <div className='mt-8'>
                        <p>
                        <span className='text-3xl  font-semibold'>$20,000</span>
                        </p>
                        <p className='text-gray-500 mt-1'>Expense</p>
                    </div>
                    <div className='mt-5'>
                        <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
                    </div>
                    <div className='mt-10'>
                        <Button
                        color="white"
                        bgColor={currentColor}
                        text="Download Report"
                        borderRadius="10px"
                        />
                    </div>
                    </div>
                    <div>
                    <Stacked width="320px" height="360px" />
                    </div>
                </div>
                </div>
            </div> */}
        </div>
    )
};

const mapStateToProps = state => ({
    title_global: state.title,
    slug_global: state.slug
});

export default connect(mapStateToProps)(Courses);
