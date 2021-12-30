const expect = require('chai').expect
const progressBarPlugin = require('./index')

describe('progress-bar-plugin', () => {
    const md = require('markdown-it')().use(progressBarPlugin, {})

    it('should render single progress bar', () => {
        const rendered = md.render(
            '```progressbar\n [["a", 2]]\n```'
        )
        expect(rendered).to.equal('<p>\na ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2%\n</p>\n')
    })
    it('should render multiple progress bar', () => {
        const rendered = md.render(
            '```progressbar\n [["a", 2], ["b", 3], ["c", 40]]\n```'
        )
        expect(rendered).to.equal('<p>\na ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2%\n\nb ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 3%\n\nc ████████████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 40%\n</p>\n')
    })
})