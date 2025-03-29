export default function TabButton({children,onSelect ,isSelected}){
   console.log('tab  uttun')
    return(
        <li>
            <button  className={isSelected ? 'active' : undefined}onClick={onSelect}>{children}</button>
        </li>
    )
}