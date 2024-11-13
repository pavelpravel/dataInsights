import React from 'react'
import Button from './Button'
import CardSuper from './CardSuper'

const SuperCart = () => {
  return (
	<div>
		<div className='flex justify-between'>
			<div className='flex items-center gap-2'>
				<img className='inline-block ml-2'  src='/public/horizontal-lines.svg' width={25} height={20}/>
				<p>Supercart</p>
			</div>
			<div className='flex items-center'>
				<div className='flex mr-20'>
					<div className='absolute flex ml-5'>
						<img src='/public/user.svg' width={25} height={25} className='relative top-0 left-0 bottom-0 right-0'/>
						<img src='/public/user.svg' width={25} height={25} className='relative top-0 bottom-0 right-2.5'/>
						<img src='/public/user.svg' width={25} height={25} className='relative top-0 bottom-0 right-5'/>
					</div>
					<p className=''>+1</p>
				</div>
				<Button>Add</Button>
				<img src='/public/dots.svg' width={25} height={10} className='mr-2'/>
			</div>
		</div>

		<div className='grid grid-cols-4 grid-rows-2'>
			<CardSuper title='User signups' type='signups' styles='col-start-1 col-span-1'/>
			<CardSuper title='Revenue by city' type='total' styles='col-start-2 col-span-2'/>
			<CardSuper title='User signups' type='signups' styles='col-start-4 col-span-1'/>
			<CardSuper title='User signups' type='signups' styles='row-start-2 row-end-3 col-start-1 col-span-2'/>
			<CardSuper title='Number of orders by city' type='barChart' styles='row-start-2 row-end-3 col-start-3 col-end-5'/>
		</div>
	</div>
  )
}

export default SuperCart