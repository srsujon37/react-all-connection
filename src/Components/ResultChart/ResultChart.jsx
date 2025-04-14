import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultChart = () => {
    const resultData = [
        {
          "id": 1,
          "name": "Ayaan Rahman",
          "physics": 88,
          "chemistry": 82,
          "math": 91
        },
        {
          "id": 2,
          "name": "Nadia Islam",
          "physics": 95,
          "chemistry": 90,
          "math": 89
        },
        {
          "id": 3,
          "name": "Hasan Karim",
          "physics": 72,
          "chemistry": 68,
          "math": 79
        },
        {
          "id": 4,
          "name": "Mehjabin Akter",
          "physics": 85,
          "chemistry": 88,
          "math": 80
        },
        {
          "id": 5,
          "name": "Riyad Hossain",
          "physics": 65,
          "chemistry": 70,
          "math": 60
        },
        {
          "id": 6,
          "name": "Tanzim Alam",
          "physics": 91,
          "chemistry": 93,
          "math": 95
        },
        {
          "id": 7,
          "name": "Farzana Jahan",
          "physics": 78,
          "chemistry": 85,
          "math": 82
        },
        {
          "id": 8,
          "name": "Rakibul Hasan",
          "physics": 69,
          "chemistry": 72,
          "math": 74
        },
        {
          "id": 9,
          "name": "Sumaiya Haque",
          "physics": 97,
          "chemistry": 95,
          "math": 98
        },
        {
          "id": 10,
          "name": "Adnan Chowdhury",
          "physics": 83,
          "chemistry": 80,
          "math": 86
        }
      ]
      
    return (
        <div>
            <LineChart width={500} height={400} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
                <Line dataKey='math'></Line>
                <Line dataKey='chemistry' stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;