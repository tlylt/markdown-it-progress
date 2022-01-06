// `<svg class="ProgressBar" style="height:25px;width: 300px;display: inline;">
// <g>
// <defs>
//     <clipPath id="ProgressBar-clipPath">
//         <rect width="100%" height="100%" rx="15px" />
//     </clipPath>
// </defs>
// <rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity: 0.2;fill: cadetblue;"/>
// <rect class="ProgressBar-percentage" width="${percentage}%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity: 0.6;fill: #4c90cf;"/>
// <text x="100" y="20" font-size="20" fill="black">${key}: ${percentage}%</text>
// </g>
// </svg>`
// if more than one, each svg is joined by <br
function renderToSvg(key, percentage) {
    return `<svg class="ProgressBar" style="height:25px;width: 300px;display: inline;"><g><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity: 0.2;fill: cadetblue;"/><rect class="ProgressBar-percentage" width="${percentage}%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity: 0.6;fill: #4c90cf;"/><text x="100" y="20" font-size="20" fill="black">${key}: ${percentage}%</text></g></svg>`;
}

module.exports = {
    renderToSvg
}