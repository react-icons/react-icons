var sanitizeHtml = require('sanitize-html')
module.exports = function (html, options) {
  var config
  if (options && options.prefixHeadingIds) {
    config = Object.assign({}, getSanitizerConfig(options), {
      transformTags: {
        '*': prefixHTMLids,
        'td': sanitizeCellStyle,
        'th': sanitizeCellStyle
      }
    })
  } else {
    config = getSanitizerConfig(options)
  }
  return sanitizeHtml(html, config)
}

function getSanitizerConfig (options) {
  options = options || {
    headingAnchorClass: 'anchor',
    headingSvgClass: ['octicon', 'octicon-link']
  }
  return {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'dd', 'del', 'details', 'div', 'dl', 'dt', 'h1', 'h2', 'iframe', 'img', 'input', 'ins', 'meta', 'path', 'pre', 's', 'span', 'sub', 'summary', 'sup', 'svg'
    ]),
    allowedClasses: {
      a: [].concat(options.headingAnchorClass),
      div: [
        'highlight',
        'hljs',
        'bash',
        'css',
        'coffee',
        'coffeescript',
        'diff',
        'glsl',
        'http',
        'js',
        'javascript',
        'json',
        'jsx',
        'lang-html',
        'line',
        'sh',
        'shell',
        'typescript',
        'ts',
        'xml',
        'youtube-video'
      ],
      h1: ['package-name-redundant', 'package-description-redundant'],
      input: ['task-list-item-checkbox'],
      li: ['task-list-item'],
      ol: ['contains-task-list'],
      p: ['package-description-redundant'],
      pre: ['editor', 'editor-colors'],
      span: require('./highlights-tokens'),
      svg: [].concat(options.headingSvgClass),
      ul: ['contains-task-list']
    },
    allowedAttributes: {
      h1: ['id', 'align'],
      h2: ['id', 'align'],
      h3: ['id', 'align'],
      h4: ['id', 'align'],
      h5: ['id', 'align'],
      h6: ['id', 'align'],
      a: ['href', 'id', 'name', 'target', 'title', 'aria-hidden'],
      img: ['alt', 'id', 'src', 'width', 'height', 'align', 'valign', 'title', 'style'],
      p: ['align'],
      meta: ['name', 'content'],
      iframe: ['src', 'frameborder', 'allowfullscreen'],
      input: ['checked', 'class', 'disabled', 'type'],
      div: ['id'],
      span: [],
      pre: [],
      td: ['colspan', 'rowspan', 'style'],
      th: ['colspan', 'rowspan', 'style'],
      del: ['cite', 'datetime'],
      ins: ['cite', 'datetime'],
      path: ['d'],
      svg: ['aria-hidden', 'height', 'version', 'viewbox', 'width']
    },
    exclusiveFilter: function (frame) {
      // Allow Task List items
      if (frame.tag === 'input') {
        var isTaskItem = (frame.attribs.class && frame.attribs.class.indexOf('task-list-item-checkbox') > -1)
        var isCheckbox = (frame.attribs.type && frame.attribs.type === 'checkbox')
        var isDisabled = frame.attribs.hasOwnProperty('disabled')
        return !(isTaskItem && isCheckbox && isDisabled)
      }

      // Allow YouTube iframes
      if (frame.tag !== 'iframe') return false
      return !String(frame.attribs.src).match(/^(https?:)?\/\/(www\.)?youtube\.com/)
    },
    transformTags: {
      'td': sanitizeCellStyle,
      'th': sanitizeCellStyle
    }
  }
}

// Allow table cell alignment
function sanitizeCellStyle (tagName, attribs) {
  // if we don't add the 'style' to the allowedAttributes above, it will be
  // stripped out by the time we get here, so we have to filter out
  // everything but `text-align` in case something else tries to sneak in
  function cell (alignment) {
    var attributes = attribs
    if (alignment) {
      attributes.style = 'text-align:' + alignment
    } else {
      delete attributes.style
    }
    return {
      tagName: tagName,
      attribs: attributes
    }
  }

  // look for CSS `text-align` directives
  var alignmentRegEx = /text-align\s*:\s*(left|center|right)[\s;$]*/igm
  var result = alignmentRegEx.exec(attribs.style || '')
  return result ? cell(result[1]) : cell()
}

function prefixHTMLids (tagName, attribs) {
  if (attribs.id && !isAlreadyPrefixed(attribs.id, 'user-content-')) {
    attribs.id = 'user-content-' + attribs.id
  }
  return {
    tagName: tagName,
    attribs: attribs
  }
}

function isAlreadyPrefixed (id, prefix) {
  return id.includes(prefix) && id.length > prefix.length
}
