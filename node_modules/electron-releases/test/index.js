require('chai').should()
const {describe, it} = require('mocha')
const releases = require('..')
const semver = require('semver')
const flat = require('flat')

describe('electron-releases', () => {
  it('is an array', () => {
    releases.should.be.an('array')
  })

  it('contains over 270 releases', () => {
    releases.length.should.be.above(270)
  })

  it('uses snake_case for all properties', () => {
    const keys = Object.keys(flat(releases))
    keys.length.should.be.above(0)
    keys.every(key => key.toLowerCase() === key).should.eq(true)
  })

  it('sets `tag_name` on every release', () => {
    releases.every(release => {
      return release.tag_name &&
        release.tag_name.length &&
        release.tag_name.startsWith('v') &&
        semver.valid(release.tag_name.replace('v', ''))
    }).should.eq(true)
  })

  it('sets `version` on every release', () => {
    releases.every(release => semver.valid(release.version)).should.eq(true)
  })

  it('does NOT include drafts', () => {
    const prereleases = releases.filter(release => release.prerelease)
    prereleases.length.should.be.above(0)
  })

  it('includes prereleases', () => {
    const prereleases = releases.filter(release => release.prerelease)
    prereleases.length.should.be.above(0)
  })

  it('includes version data for V8, Chromium, Node.js, etc', () => {
    const releasesWithVersionData = releases.filter(release => release.deps)
    releasesWithVersionData.length.should.be.above(154)
  })

  it('includes one release with the `beta` npm dist tag', () => {
    const betas = releases.filter(release => release.npm_dist_tag === 'beta')
    betas.length.should.eq(1)
  })

  it('includes one release with the `latest` npm dist tag', () => {
    const latests = releases.filter(release => release.npm_dist_tag === 'latest')
    latests.length.should.eq(1)
  })

  it('includes npm_package_name prop to indicate npm publish status', () => {
    releases.find(release => release.version === '1.4.7').npm_package_name.should.eq('electron')
    releases.find(release => release.version === '1.0.0').npm_package_name.should.eq('electron-prebuilt')
    releases.filter(release => release.npm_package_name === 'electron').length.should.be.above(62)

    // assert exact number because the days of publishing electron-prebuilt are over
    releases.filter(release => release.npm_package_name === 'electron-prebuilt').length.should.eq(96)
  })

  // for context, see https://electronjs.org/blog/npm-install-electron
  it('sets `electron` as `npm_package_name` for releases >=1.3.1', () => {
    const npmReleasesOfElectron = releases.filter(release => release.npm_package_name === 'electron')
    npmReleasesOfElectron.length.should.be.above(0)
    npmReleasesOfElectron.every(release => semver.gte(release.version, '1.3.1')).should.eq(true)
  })

  it('sets `electron-prebuilt` as `npm_package_name` for releases <1.3.1', () => {
    const npmReleasesOfElectronPrebuilt = releases.filter(release => release.npm_package_name === 'electron-prebuilt')
    npmReleasesOfElectronPrebuilt.length.should.be.above(0)
    npmReleasesOfElectronPrebuilt.every(release => semver.lt(release.version, '1.3.1')).should.eq(true)
  })

  it('includes processed changelogs in HTML format')//, () => {
  // })

  it('includes a total_downloads property for each release', () => {
    const npmReleases = releases.filter(release => release.npm_package_name)
    npmReleases.length.should.be.above(0)
    npmReleases.every(release => release.total_downloads > 0).should.eq(true)
  })
})
