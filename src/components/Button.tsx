

const Button = ({children, color}) => {

  return (
	<button onClick={()=>{}} className={`hover:bg-[#F4F2EF] h-10 p-2 rounded-lg ${color === 'black' ? 'bg-blackCol text-[#fff] min-w-[117px] text-center hover:bg-blackCol hover:shadow-lg hover:shadow-indigo-500/40 duration-700' : ''}`}>{children}</button>
  )
}

export default Button