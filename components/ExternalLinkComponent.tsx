import { OpenInNew, Refresh, Share, MoreVert } from "@mui/icons-material";
import Tooltip from '@mui/material/Tooltip';

const ICONWRAPPER: string = "p-2 border-[#707A83]"
function ExternalLinkComponent({external_url}:{external_url:string}) {
    return (
        <div className="flex items-center text-[#2078E2] justify-between">
            <span>Contract Name</span>
            <div className="flex border-2 text-[#625f5f] rounded-md border-[#707A83]">
                <div className={`${ICONWRAPPER} border-r-2 `}>
                    <Refresh color="inherit" />
                </div>
                <div className={`${ICONWRAPPER} border-r-2 text-white`}><a target="_blank" href={external_url} rel="noopener noreferrer">
                <Tooltip title={external_url} placement="top" open={!!external_url}>
                    <OpenInNew className="hover:scale-110" color="inherit" />
                </Tooltip>
                </a>
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