
const SmallPageWrapper = ({
    children
} : Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="min-h-screen border-[0.5px] mb-5 mx-5 border-[#E4E7EC] rounded-[8px] min-[1220px]:flex-1 min-[1220px]:mx-0 min-[1220px]:mb-0  py-[30px] px-5">
        {children}
    </div>
  )
}

export default SmallPageWrapper