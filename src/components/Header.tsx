import Button from './Button'

const Header = () => {
  return (
	<div className="h-[83px] flex justify-around text-center p-2 items-center">
		<div className="logo flex justify-center ">
			<img src='/public/logo.svg' className="h=[31px] w-[95px]"/>
		</div>
		<div className="flex gap-14 justify-center">
			<Button>Features</Button>
			<Button>Pricing</Button>
			<Button>Blog</Button>
			<Button>Changelog</Button>
			<Button>Careers</Button>
			<Button>Support</Button>
		</div>
		<div className='flex justify-center'>
			<p>Log in</p>
		</div>
	</div>
  )
}

export default Header