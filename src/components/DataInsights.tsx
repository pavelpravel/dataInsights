import React from 'react'
import PreviewButton from './PreviewButton'
import Button from './Button'

const DataInsights = () => {
  return (
	<div className='h-[372px] w-full flex justify-center flex-col items-center'>
		<PreviewButton/>
		<h1 className='text-[50px] leading-10 max-w-[405px] font-bold text-center py-6'>Data to <span className='text-secondary'>insights</span> in minutes</h1>
		<p className='text-par max-w-[310px] text-center pb-6'>Explore your data, build your dashboard, bring your team together.</p>
		<Button color='black'>Sign up</Button>
	</div>
  )
}

export default DataInsights