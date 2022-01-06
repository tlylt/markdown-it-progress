const expect = require('chai').expect
const progressBarPlugin = require('./index')

describe('progress-bar-plugin', () => {
    const md = require('markdown-it')().use(progressBarPlugin, { 'render': 'svg' })

    it('should render single progress bar', () => {
        const rendered = md.render(
            '```progressBar\n[["a", 2]]\n```'
        )
        expect(rendered).to.equal('<svg class="ProgressBar" style="height:25px;width: 300px;display: inline;"><g><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity: 0.2;fill: cadetblue;"/><rect class="ProgressBar-percentage" width="2%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity: 0.6;fill: #4c90cf;"/><text x="100" y="20" font-size="20" fill="black">a: 2%</text></g></svg>')
    })
    it('should render multiple progress bar', () => {
        const rendered = md.render(
            '```progressBar\n[["a", 2], ["b", 3], ["c", 40]]\n```'
        )
        expect(rendered).to.equal('<svg class="ProgressBar" style="height:25px;width: 300px;display: inline;"><g><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity: 0.2;fill: cadetblue;"/><rect class="ProgressBar-percentage" width="2%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity: 0.6;fill: #4c90cf;"/><text x="100" y="20" font-size="20" fill="black">a: 2%</text></g></svg><br><svg class="ProgressBar" style="height:25px;width: 300px;display: inline;"><g><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity: 0.2;fill: cadetblue;"/><rect class="ProgressBar-percentage" width="3%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity: 0.6;fill: #4c90cf;"/><text x="100" y="20" font-size="20" fill="black">b: 3%</text></g></svg><br><svg class="ProgressBar" style="height:25px;width: 300px;display: inline;"><g><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity: 0.2;fill: cadetblue;"/><rect class="ProgressBar-percentage" width="40%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity: 0.6;fill: #4c90cf;"/><text x="100" y="20" font-size="20" fill="black">c: 40%</text></g></svg>')
    })
})