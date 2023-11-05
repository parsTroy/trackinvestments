"use client";

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Banknote, CircleDollarSign, DollarSign, LineChart, LockIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const metrics = [
  {
    label: "Portfolio Yield",
    icon: CircleDollarSign,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    value: "2.45%"
  },
  {
    label: "Yield On Cost",
    icon: DollarSign,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    value: "3.24%"
  },
  {
    label: "Annual Income",
    icon: Banknote,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    value: "$11,000"
  },
  {
    label: "Portfolio Beta",
    icon: LineChart,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    value: "0.9"
  },
]

const tools = [
  {
    label: "Portfolio Yield",
    icon: CircleDollarSign,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "Yield On Cost",
    icon: DollarSign,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
  {
    label: "Annual Income",
    icon: Banknote,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  },
  {
    label: "Portfolio Beta",
    icon: LineChart,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video"
  },
  {
    label: "Lock",
    icon: LockIcon,
    color: "text-blue-400"
  }
]

const Dashboard = () => {

  const router = useRouter();

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>$160,986</h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>Summary ACCOUNTNAME + Add Account</p>
      </div>

      <div className='flex justify-center align-middle'>
        <div className='grid grid-cols-2 border rounded-md uppercase font-semibold text-xs gap-8 p-4 m-4 w-full'>
          {metrics.map((metric) => (
            <div className='border-b'>
              <div className='flex justify-between text-gray-500'>
                {metric.label}
                <div className={cn("rounded-md", metric.bgColor)}>
                  <metric.icon className={cn("w-4 h-4", metric.color)} />
                </div>
              </div>
              <p className='mt-1 text-lg font-semibold'>{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='border overflow-x-auto rounded-md flex m-4'>
        <table className='table-auto overflow-scroll'>
          <thead className='bg-slate-200'>
            <tr>
              <th>Ticker</th>
              <th>Shares</th>
              <th>Price</th>
              <th>Change</th>
              <th>Average Cost</th>
              <th>Profit Loss</th>
              <th>Dividend Yield</th>
              <th>Yield on Cost</th>
              <th>Annual Income</th>
              <th>Dividend Safety</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <p className='text-blue-600'>AAPL</p>
                  <p>Apple Inc</p>
                </div>
              </td>
              <td>500</td>
              <td>$170.65</td>
              <td>
                <div className='flex'>
                  <p className={`text-red-400`}>$-0.92</p>
                  <p className={`text-red-400 p-1 ml-2 bg-red-200 rounded-md text-xs`}>-0.52%</p>
                </div>
              </td>
              <td>$125.17</td>
              <td className={`text-green-400`}>$25,740.00</td>
              <td>0.54%</td>
              <td>0.77%</td>
              <td>$480.00</td>
              <td className='text-blue-600'>{<LockIcon className='w-[25px] h-[25px] p-1 bg-blue-200 rounded-xl' />}</td>
            </tr>

            <tr>
              <td>
                <div>
                  <p className='text-blue-600'>MMM</p>
                  <p>3M Co.</p>
                </div>
              </td>
              <td>1000</td>
              <td>$93.86</td>
              <td>
                <div className='flex'>
                  <p className={`text-green-400`}>$1.55</p>
                  <p className={`text-green-400 p-1 ml-2 bg-green-200 rounded-md text-xs`}>1.65%</p>
                </div>
              </td>
              <td>$68.45</td>
              <td className={`text-green-400`}>$25,410.00</td>
              <td>6.39%</td>
              <td>8.77%</td>
              <td>$6000.00</td>
              <td className='text-blue-600'>{<LockIcon className='w-[25px] h-[25px] p-1 bg-blue-200 rounded-xl' />}</td>
            </tr>

            <tr>
              <td>
                <div>
                  <p className='text-blue-600'>SBUX</p>
                  <p>Starbucks Corp.c</p>
                </div>
              </td>
              <td>100</td>
              <td>$102.65</td>
              <td>
                <div className='flex'>
                  <p className={`text-green-400`}>$2.64</p>
                  <p className={`text-green-400 p-1 ml-2 bg-green-200 rounded-md text-xs`}>2.57%</p>
                </div>
              </td>
              <td>$66.73</td>
              <td className={`text-green-400`}>$3,592.00</td>
              <td>2.22%</td>
              <td>3.42%</td>
              <td>$228.00</td>
              <td className='text-blue-600'>{<LockIcon className='w-[25px] h-[25px] p-1 bg-blue-200 rounded-xl' />}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'>
            <div className='flex items-center gap-x-4'>
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className='font-semibold'>
                {tool.label}
              </div>
            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        ))}
      </div> */}
    </div>
  )
}

export default Dashboard