import { OpenInNew, Refresh, Share, MoreVert } from "@mui/icons-material";
const ICONWRAPPER: string = "p-2 border-[#707A83]"
function ExternalLinkComponent() {
    return (
        <div className="flex items-center text-[#2078E2] justify-between">
            <span>Contract Name</span>
            <div className="flex border-2 text-[#625f5f] rounded-md border-[#707A83]">
                <div className={`${ICONWRAPPER} border-r-2 `}>
                    <Refresh color="inherit" />
                </div>
                <div className={`${ICONWRAPPER} border-r-2 text-white`}>
                    <OpenInNew color="inherit" />
                </div>
                <div className={`${ICONWRAPPER} border-r-2 `}>
                    <Share color="inherit" />
                </div>
                <div className={`${ICONWRAPPER}`}>
                    <MoreVert color="inherit" />
                </div>
            </div>
        </div>
    )
}

export default ExternalLinkComponent