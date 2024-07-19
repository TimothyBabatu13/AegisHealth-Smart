
const SmallPageWrapper = ({
    children
} : Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="border-[0.5px] border-[#E4E7EC] rounded-[8px]  py-[30px] px-5">
        {children}
    </div>
  )
}

export default SmallPageWrapper