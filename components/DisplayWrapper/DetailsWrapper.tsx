import { Twitter, GitHub } from "@mui/icons-material"
// box that covers all properties
function DetailsWrapper() {
    return (
        <div className="rounded-b-md flex flex-col items-center justify-center border-[1px] border-black p-2">
            <span>
                made by @sharathkrml
            </span>
            <div>
                <a className="text-blue-600" href="https://github.com/sharathkrml"><GitHub /></a>
                <a className="text-blue-600 ml-2" href="https://twitter.com/sharathkrml"><Twitter /></a>
            </div>
        </div>
    )
}

export default DetailsWrapper