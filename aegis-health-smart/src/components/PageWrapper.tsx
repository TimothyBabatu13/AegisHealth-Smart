
const PageWrapper = ({
    children
} : Readonly<{
    children: React.ReactNode;
  }>) => {
 
  return (
    <main className={`mx-5 p-5 mb-5 rounded-[10px] border-[0.7px]  border-[#E4E7EC] min-[1220px]:w-[742px] min-[1220px]:mb-0`}>
      {children}    
    </main>
  )
}

export default PageWrapper