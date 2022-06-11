
import { StatsProps } from '../types'
function Stats({ trait_type, value }: StatsProps) {
    return (
        <div className="flex p-2 item-center justify-between">
            <div className="name">{trait_type}</div>
            <div className="stats">{value} of 100</div>
        </div>
    )
}

export default Stats