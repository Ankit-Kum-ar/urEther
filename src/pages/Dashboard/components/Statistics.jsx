import React from 'react'
import Graph from './Graph'
import BarChart from './BarChart';
import TrendingMarket from './TrendingMarketData';

const Statistics = () => {
    const spendingData = [50, 60, 45, 80, 100, 120];
    const savingData = [30, 40, 55, 70, 90, 110];
    const balanceData = [10, 20, 15, 30, 40, 60];
    return (
        <div className='p-7'>
            <div className='flex gap-5'>
                <div style={{ backgroundColor: '#2752E7', padding: '10px', borderRadius: '10px', color: 'white' }}>
                    <h2 className='font-semibold text-sm mb-2'>Balance</h2>
                    <h1 className='font-semibold'>$40,000.063</h1>
                    <p style={{ color: '#53D258', marginBottom: '12px' }}>+35.74%</p>
                    <Graph dataPoints={balanceData} color="green" label="Spending" xcolor="#ffffff"/>
                </div>
                <div style={{padding: '10px', borderRadius: '10px', color: 'black' }} className='bg-[#f0efef]'>
                    <h2 className='font-semibold text-sm mb-2'>Spending</h2>
                    <h1 className='font-semibold'>-$103,000</h1>
                    <p style={{ color: '#E25C5C', marginBottom: '12px'  }} className='font-semibold' >+10,74%</p>
                    <Graph dataPoints={spendingData} color="red" label="Spending" xcolor="#000000"/>
                </div>
                <div style={{padding: '10px', borderRadius: '10px', color: 'black' }} className='bg-[#f0efef]'>
                    <h2 className='font-semibold text-sm mb-2'>Saved</h2>
                    <h1 className='font-semibold'>$103,000</h1>
                    <p style={{ color: '#53D258', marginBottom: '12px'  }} className='font-semibold' >+10,74%</p>
                    <Graph dataPoints={savingData} color="green" label="Spending" xcolor="#000000"/>
                </div>
            </div>
            
            <div className="flex my-6 justify-center items-center ">
                <BarChart />
            </div>

            <div className="flex items-center justify-center my-6">
                <TrendingMarket />
            </div>

        </div>
    )
}

export default Statistics
