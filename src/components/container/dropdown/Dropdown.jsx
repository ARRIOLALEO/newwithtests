
function Dropdown({valueDropDown,setDropdownValue}){
    return (<><select  value={valueDropDown} onChange={(e)=> setDropdownValue(e.target.value) } >
        <option value="business">business</option>
        <option value="technology">technology</option>
        </select></>)
}
export default Dropdown