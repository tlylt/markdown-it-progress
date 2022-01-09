{/* <div class="ProgressBar" style="display:flex;padding-bottom:5px;">
<svg class="ProgressBar-svg" style="height:25px;width:300px;">
<defs>
    <clipPath id="ProgressBar-clipPath">
        <rect width="100%" height="100%" rx="15px" />
    </clipPath>
</defs>
<rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity:0.2;fill:cadetblue;"/>
<rect class="ProgressBar-percentage" width="20%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity:0.6;fill:#4c90cf;"/>
</svg>                       
<span style="padding-left:5px;align-self:center;">c: 40%</span>
</div> */}
// if more than one, duplicate the above
function renderToSvg(key, percentage) {
    return `<div class="ProgressBar" style="display:flex;padding-bottom:5px;"><svg class="ProgressBar-svg" style="height:25px;width:300px;"><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity:0.2;fill:cadetblue;"/><rect class="ProgressBar-percentage" width="${percentage}%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity:0.6;fill:#4c90cf;"/></svg><span style="padding-left:5px;align-self:center;">${key}: ${percentage}%</span></div>`;
}

module.exports = {
    renderToSvg
}