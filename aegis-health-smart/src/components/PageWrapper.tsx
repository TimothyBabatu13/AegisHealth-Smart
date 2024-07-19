const PageWrapper = ({
    children
} : Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main className="mx-5 p-5 rounded-[10px] border-[0.7px] border-[#E4E7EC] w-[742px] overflow-x-hidden">
      {children}    
    </main>
  )
}

export default PageWrapper