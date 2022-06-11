import { Line } from 'rc-progress'
import { LevelProps } from '../types'
function Level({ trait_type, value, max_value }: LevelProps) {
    return (
        <div className='px-2'>
            <div className='flex justify-between py-2'>
                <div>{trait_type}</div>
                <div>{value} or {max_value ? max_value : value}</div>
            </div>
            <Line percent={max_value ? (value * 100 / max_value) : 100} trailWidth={2} strokeWidth={2} strokeColor="#2081E2" trailColor="#303339" />
        </div>
    )
}

export default Level