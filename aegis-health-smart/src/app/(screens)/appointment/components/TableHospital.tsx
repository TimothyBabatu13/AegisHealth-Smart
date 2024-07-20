
const TableHospital = ({ hospital, address, width=false } : {
    hospital : string,
    address: string,
    width?: boolean
}) => {
  return (
    <div>
        <h3 className={`text-[#344054] ${width && 'w-[201px]'} overflow-x-hidden whitespace-nowrap overflow-ellipsis text-sm font-medium leading-[20.3px]`}>{hospital}</h3>
        <h4 className={`text-[#667185] ${width && 'w-[201px]'} overflow-x-hidden whitespace-nowrap overflow-ellipsis text-sm font-normal leading-[20.3px]`}>{address}</h4>
    </div>
  )
}

export default TableHospital