import React, { useState, useEffect } from 'react';

const Login = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = [
        { day: 'sat', class: 1, subject: 'CSE-3637, SE, CX504' },
        { day: 'sat', class: 2, subject: 'CSE-3636, AILab, CX204' },
        { day: 'sat', class: 3, subject: 'CSE-3636, AILab, CX204' },
        { day: 'sat', class: 4, subject: 'CSE-3635, AI, CX503' },
        { day: 'sat', class: 5, subject: 'CSE-3635, AI, CX503' },
        { day: 'sat', class: 6, subject: 'CSE-3635, AI, CX503' },
        { day: 'sun', class: 1, subject: 'CSE-3637, SE, CX505' },
        { day: 'sun', class: 2, subject: 'CSE-3637, SE, CX505' },
        { day: 'sun', class: 4, subject: 'CSE-3632/31, OS, CX601' },
        { day: 'sun', class: 5, subject: 'CSE-3632/31, OS, CX601' },
        { day: 'sun', class: 6, subject: 'CSE-3632/31, OS, CX601' },
        { day: 'mon', class: 1, subject: 'CSE-3638, SELab, C501' },
        { day: 'mon', class: 2, subject: 'CSE-3640, SD2Lab, C501' },
        { day: 'mon', class: 3, subject: 'CSE-3640, SD2Lab, C501' },
        { day: 'mon', class: 4, subject: 'URED-3604, LTPM, C504' },
        { day: 'mon', class: 5, subject: 'URED-3604, LTPM, C504' },
        { day: 'tue', class: 1, subject: 'ECON-3501, EC, CXB204' },
        { day: 'tue', class: 2, subject: 'ECON-3501, EC, CXB204' },
        { day: 'tue', class: 4, subject: 'CSE-3525, DC, CX102' },
        { day: 'tue', class: 5, subject: 'CSE-3525, DC, CX102' },
        { day: 'tue', class: 6, subject: 'MDP-3606, MDP, CX102' },
        { day: 'wed', class: 1, subject: 'CSE-3525, DC, CX505' },
        { day: 'wed', class: 2, subject: 'GEHE=3601, HEB, CX505' },
        { day: 'wed', class: 3, subject: 'GEHE=3601, HEB, CX505' },
        { day: 'wed', class: 4, subject: 'CSE-3631, OS, CX101' },
        { day: 'wed', class: 5, subject: 'CSE-3631, OS, CX101' },


      ];
      setSchedule(response);
    };

    fetchData();
  }, []);

  const days = ['sat','sun','mon', 'tue', 'wed'];
  const classes = ["10.30-11.20", "11.20-12.10", "12.10-1.00", "1.40-2.30", "2.30-3.20","3.20-4.10"];
  const classes2 = [1, 2, 3, 4, 5,6];

  const getSubject = (day, classNumber) => {
    const found = schedule.find(
      (item) => item.day === day && item.class === classNumber
    );
    return found ? found.subject : 'Null';
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-indigo-900 to-slate-800 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl  shadow-blue-700">
        <h1 className="text-2xl font-bold text-center text-slate-700 font-serif bg-blue-300 py-4">
          Class Schedule
        </h1>
        <table className="table-aut w-full text-left">
          <thead className="bg-indigo-900 text-white">
            <tr>
              <th className="p-4">Day</th>
              {classes.map((classNumber) => (
                <th key={classNumber} className=" font-bold p-4">
                {classNumber}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, dayIndex) => (
              <tr
                key={day}
                className={`${
                  dayIndex % 2 === 0 ? 'bg-gradient-to-r from-gray-400 via-gray-300 to-gray-50' : 'bg-gradient-to-r to-gray-400 via-gray-300 from-gray-50'
                } hover:bg-blue-100`}
              >
                <td className="p-4 text-gray-700 capitalize font-bold  ">{day}</td>
                {classes2.map((classNumber) => (
                  <td key={classNumber} className="p-4 text-gray-600">
                    {getSubject(day, classNumber)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Login;
