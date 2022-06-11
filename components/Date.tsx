
import { DateProps } from '../types'
function Stats({ trait_type, value }: DateProps) {
    let date_String = new Date(value * 1000).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" })

    console.log(date_String)
    return (
        <div className="flex p-2 item-center justify-between">
            <div className="capitalize">{trait_type}</div>
            <div className="stats">{date_String}</div>
        </div>
    )
}

export default Stats