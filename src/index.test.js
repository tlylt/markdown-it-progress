const expect = require('chai').expect
const progressBarPlugin = require('./index')

describe('progress-bar-plugin', () => {
    const md = require('markdown-it')().use(progressBarPlugin, { 'render': 'svg' })
    it('should render single progress bar', () => {
        const rendered = md.render(
            '```progressBar\n[["a", 2]]\n```'
        )
        expect(rendered).to.equal('<div class="ProgressBar" style="display:flex;padding-bottom:5px;"><svg class="ProgressBar-svg" style="height:25px;width:300px;"><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity:0.2;fill:cadetblue;"/><rect class="ProgressBar-percentage" width="2%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity:0.6;fill:#4c90cf;"/></svg><span style="padding-left:5px;align-self:center;">a: 2%</span></div>')
    })
    it('should render multiple progress bar', () => {
        const rendered = md.render(
            '```progressBar\n[["a", 2], ["b", 3], ["c", 40]]\n```'
        )
        expect(rendered).to.equal('<div class="ProgressBar" style="display:flex;padding-bottom:5px;"><svg class="ProgressBar-svg" style="height:25px;width:300px;"><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity:0.2;fill:cadetblue;"/><rect class="ProgressBar-percentage" width="2%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity:0.6;fill:#4c90cf;"/></svg><span style="padding-left:5px;align-self:center;">a: 2%</span></div><div class="ProgressBar" style="display:flex;padding-bottom:5px;"><svg class="ProgressBar-svg" style="height:25px;width:300px;"><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity:0.2;fill:cadetblue;"/><rect class="ProgressBar-percentage" width="3%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity:0.6;fill:#4c90cf;"/></svg><span style="padding-left:5px;align-self:center;">b: 3%</span></div><div class="ProgressBar" style="display:flex;padding-bottom:5px;"><svg class="ProgressBar-svg" style="height:25px;width:300px;"><defs><clipPath id="ProgressBar-clipPath"><rect width="100%" height="100%" rx="15px" /></clipPath></defs><rect class="ProgressBar-background" width="100%" height="100%" rx="15px" style="fill-opacity:0.2;fill:cadetblue;"/><rect class="ProgressBar-percentage" width="40%" height="100%" clip-path="url(#ProgressBar-clipPath)" style="fill-opacity:0.6;fill:#4c90cf;"/></svg><span style="padding-left:5px;align-self:center;">c: 40%</span></div>')
    })
    it('should render other fence code as per normal', () => {
        const rendered = md.render(
            '```python\nprint("hello world")\n```'
        )
        expect(rendered).to.equal('<pre><code class="language-python">print(&quot;hello world&quot;)\n</code></pre>\n')
    })
})