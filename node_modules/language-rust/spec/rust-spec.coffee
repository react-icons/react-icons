describe 'Rust grammar', ->
  grammar = null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage('language-rust')
    runs ->
      grammar = atom.grammars.grammarForScopeName('source.rust')

  it 'parses the grammar', ->
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe 'source.rust'

  #
  # Comments
  #

  it 'tokenizes block comments', ->
    tokens = grammar.tokenizeLines('text\ntext /* this is a\nblock comment */ text')
    expect(tokens[0][0]).toEqual value: 'text', scopes: ['source.rust']
    expect(tokens[1][0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1][2]).toEqual value: ' this is a', scopes: ['source.rust', 'comment.block.rust']
    expect(tokens[2][0]).toEqual value: 'block comment ', scopes: ['source.rust', 'comment.block.rust']
    expect(tokens[2][2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes nested block comments', ->
    {tokens} = grammar.tokenizeLine('text /* this is a /* nested */ block comment */ text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: ' this is a ', scopes: ['source.rust', 'comment.block.rust']
    expect(tokens[4]).toEqual value: ' nested ', scopes: ['source.rust', 'comment.block.rust', 'comment.block.rust']
    expect(tokens[6]).toEqual value: ' block comment ', scopes: ['source.rust', 'comment.block.rust']
    expect(tokens[8]).toEqual value: ' text', scopes: ['source.rust']

  it 'does not tokenize strings or numbers in block comments', ->
    {tokens} = grammar.tokenizeLine('/* comment "string" 42 0x18 0b01011 u32 as i16 if impl */')
    expect(tokens[1]).toEqual value: ' comment "string" 42 0x18 0b01011 u32 as i16 if impl ', scopes: ['source.rust', 'comment.block.rust']

  it 'tokenizes block doc comments', ->
    for src in ['/** this is a\nblock doc comment */', '/*! this is a\nblock doc comment */']
      tokens = grammar.tokenizeLines(src)
      expect(tokens[0][1]).toEqual value: ' this is a', scopes: ['source.rust', 'comment.block.documentation.rust']
      expect(tokens[1][0]).toEqual value: 'block doc comment ', scopes: ['source.rust', 'comment.block.documentation.rust']

  it 'tokenizes line comments', ->
    {tokens} = grammar.tokenizeLine('text // line comment')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: ' line comment', scopes: ['source.rust', 'comment.line.double-slash.rust']

  it 'does not tokenize strings or numbers in line comments', ->
    {tokens} = grammar.tokenizeLine('// comment "string" 42 0x18 0b01011 u32 as i16 if impl')
    expect(tokens[1]).toEqual value: ' comment "string" 42 0x18 0b01011 u32 as i16 if impl', scopes: ['source.rust', 'comment.line.double-slash.rust']

  it 'tokenizes line doc comments', ->
    for src in ['/// line doc comment', '//! line doc comment']
      {tokens} = grammar.tokenizeLine(src)
      expect(tokens[1]).toEqual value: ' line doc comment', scopes: ['source.rust', 'comment.line.documentation.rust']

  #
  # Attributes
  #

  it 'tokenizes attributes', ->
    {tokens} = grammar.tokenizeLine('#![main] text')
    expect(tokens[1]).toEqual value: 'main', scopes: ['source.rust', 'meta.attribute.rust']
    expect(tokens[3]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes attributes with options', ->
    {tokens} = grammar.tokenizeLine('#![allow(great_algorithms)] text')
    expect(tokens[1]).toEqual value: 'allow(great_algorithms)', scopes: ['source.rust', 'meta.attribute.rust']
    expect(tokens[3]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes attributes with negations', ->
    {tokens} = grammar.tokenizeLine('#![!resolve_unexported] text')
    expect(tokens[1]).toEqual value: '!resolve_unexported', scopes: ['source.rust', 'meta.attribute.rust']
    expect(tokens[3]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes item attributes', ->
    {tokens} = grammar.tokenizeLine('#[deny(silly_comments)] text')
    expect(tokens[1]).toEqual value: 'deny(silly_comments)', scopes: ['source.rust', 'meta.attribute.rust']
    expect(tokens[3]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes attributes with values', ->
    {tokens} = grammar.tokenizeLine('#[doc = "The docs"]')
    expect(tokens[1]).toEqual value: 'doc = ', scopes: ['source.rust', 'meta.attribute.rust']
    expect(tokens[3]).toEqual value: 'The docs', scopes: ['source.rust', 'meta.attribute.rust', 'string.quoted.double.rust']

  it 'tokenizes attributes with special characters in values', ->
    {tokens} = grammar.tokenizeLine('#[doc = "This attribute contains ] an attribute ending character"]')
    expect(tokens[1]).toEqual value: 'doc = ', scopes: ['source.rust', 'meta.attribute.rust']
    expect(tokens[3]).toEqual value: 'This attribute contains ] an attribute ending character', scopes: ['source.rust', 'meta.attribute.rust', 'string.quoted.double.rust']

  #
  # Strings
  #

  it 'tokenizes strings', ->
    {tokens} = grammar.tokenizeLine('text "This is a string" text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: 'This is a string', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[4]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes strings with escaped characters', ->
    {tokens} = grammar.tokenizeLine('text "string\\nwith\\x20escaped\\"characters" text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: 'string', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[3]).toEqual value: '\\n', scopes: ['source.rust', 'string.quoted.double.rust', 'constant.character.escape.rust']
    expect(tokens[4]).toEqual value: 'with', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[5]).toEqual value: '\\x20', scopes: ['source.rust', 'string.quoted.double.rust', 'constant.character.escape.rust']
    expect(tokens[6]).toEqual value: 'escaped', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[7]).toEqual value: '\\"', scopes: ['source.rust', 'string.quoted.double.rust', 'constant.character.escape.rust']
    expect(tokens[8]).toEqual value: 'characters', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[10]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes strings with comments inside', ->
    {tokens} = grammar.tokenizeLine('text "string with // comment /* inside" text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: 'string with // comment /* inside', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[4]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes multiline strings', ->
    tokens = grammar.tokenizeLines('text "strings can\nspan multiple lines" text')
    expect(tokens[0][0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[0][2]).toEqual value: 'strings can', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[1][0]).toEqual value: 'span multiple lines', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[1][2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes raw strings', ->
    {tokens} = grammar.tokenizeLine('text r"This is a raw string" text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: 'This is a raw string', scopes: ['source.rust', 'string.quoted.double.raw.rust']
    expect(tokens[4]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes raw strings with multiple surrounding characters', ->
    {tokens} = grammar.tokenizeLine('text r##"This is a ##"# valid raw string"## text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: 'This is a ##"# valid raw string', scopes: ['source.rust', 'string.quoted.double.raw.rust']
    expect(tokens[4]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes byte strings', ->
    {tokens} = grammar.tokenizeLine('text b"This is a bytestring" text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: 'This is a bytestring', scopes: ['source.rust', 'string.quoted.double.rust']
    expect(tokens[4]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes raw byte strings', ->
    {tokens} = grammar.tokenizeLine('text br"This is a raw bytestring" text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value: 'This is a raw bytestring', scopes: ['source.rust', 'string.quoted.double.raw.rust']
    expect(tokens[4]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes multiline raw strings', ->
    tokens = grammar.tokenizeLines('text r"Raw strings can\nspan multiple lines" text')
    expect(tokens[0][0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[0][2]).toEqual value: 'Raw strings can', scopes: ['source.rust', 'string.quoted.double.raw.rust']
    expect(tokens[1][0]).toEqual value: 'span multiple lines', scopes: ['source.rust', 'string.quoted.double.raw.rust']
    expect(tokens[1][2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes characters', ->
    {tokens} = grammar.tokenizeLine('text \'c\' text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '\'c\'', scopes: ['source.rust', 'string.quoted.single.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes escaped characters', ->
    {tokens} = grammar.tokenizeLine('text \'\\n\' text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '\'\\n\'', scopes: ['source.rust', 'string.quoted.single.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes bytes character', ->
    {tokens} = grammar.tokenizeLine('text b\'b\' text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: 'b\'b\'', scopes: ['source.rust', 'string.quoted.single.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes escaped bytes characters', ->
    {tokens} = grammar.tokenizeLine('text b\'\\x20\' text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: 'b\'\\x20\'', scopes: ['source.rust', 'string.quoted.single.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  #
  # Numbers
  #

  it 'tokenizes decimal integers', ->
    {tokens} = grammar.tokenizeLine('text 42 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '42', scopes: ['source.rust', 'constant.numeric.integer.decimal.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes hex integers', ->
    {tokens} = grammar.tokenizeLine('text 0xf00b text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '0xf00b', scopes: ['source.rust', 'constant.numeric.integer.hexadecimal.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes octal integers', ->
    {tokens} = grammar.tokenizeLine('text 0o755 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '0o755', scopes: ['source.rust', 'constant.numeric.integer.octal.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes binary integers', ->
    {tokens} = grammar.tokenizeLine('text 0b101010 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '0b101010', scopes: ['source.rust', 'constant.numeric.integer.binary.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes integers with type suffix', ->
    {tokens} = grammar.tokenizeLine('text 42u8 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '42u8', scopes: ['source.rust', 'constant.numeric.integer.decimal.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes integers with underscores', ->
    {tokens} = grammar.tokenizeLine('text 4_2 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '4_2', scopes: ['source.rust', 'constant.numeric.integer.decimal.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes integers with underscores and type suffix', ->
    {tokens} = grammar.tokenizeLine('text 4_2_u8 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '4_2_u8', scopes: ['source.rust', 'constant.numeric.integer.decimal.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes floats', ->
    {tokens} = grammar.tokenizeLine('text 42.1415 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '42.1415', scopes: ['source.rust', 'constant.numeric.float.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes floats with exponent', ->
    {tokens} = grammar.tokenizeLine('text 42e18 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '42e18', scopes: ['source.rust', 'constant.numeric.float.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes floats with signed exponent', ->
    {tokens} = grammar.tokenizeLine('text 42e+18 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '42e+18', scopes: ['source.rust', 'constant.numeric.float.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes floats with dot and exponent', ->
    {tokens} = grammar.tokenizeLine('text 42.1415e18 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '42.1415e18', scopes: ['source.rust', 'constant.numeric.float.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes floats with dot and signed exponent', ->
    {tokens} = grammar.tokenizeLine('text 42.1415e+18 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '42.1415e+18', scopes: ['source.rust', 'constant.numeric.float.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes floats with type suffix', ->
    {tokens} = grammar.tokenizeLine('text 42.1415f32 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '42.1415f32', scopes: ['source.rust', 'constant.numeric.float.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes floats with underscores', ->
    {tokens} = grammar.tokenizeLine('text 4_2.141_5 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '4_2.141_5', scopes: ['source.rust', 'constant.numeric.float.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes floats with underscores and type suffix', ->
    {tokens} = grammar.tokenizeLine('text 4_2.141_5_f32 text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: '4_2.141_5_f32', scopes: ['source.rust', 'constant.numeric.float.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  #
  # Booleans
  #

  it 'tokenizes boolean false', ->
    {tokens} = grammar.tokenizeLine('text false text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: 'false', scopes: ['source.rust', 'constant.language.boolean.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes boolean true', ->
    {tokens} = grammar.tokenizeLine('text true text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: 'true', scopes: ['source.rust', 'constant.language.boolean.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  #
  # Language
  #

  it 'tokenizes control keywords', ->
    for t in ['break', 'continue', 'else', 'if', 'in', 'for', 'loop', 'match', 'return', 'while']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'keyword.control.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes keywords', ->
    for t in ['crate', 'extern', 'mod', 'let', 'ref', 'use', 'super', 'move']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'keyword.other.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes reserved keywords', ->
    for t in ['abstract', 'alignof', 'become', 'do', 'final', 'macro', 'offsetof', 'override', 'priv', 'proc', 'pure', 'sizeof', 'typeof', 'virtual', 'yield']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'invalid.deprecated.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes unsafe keyword', ->
    {tokens} = grammar.tokenizeLine('text unsafe text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: 'unsafe', scopes: ['source.rust', 'keyword.other.unsafe.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes self keyword', ->
    {tokens} = grammar.tokenizeLine('text self text')
    expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
    expect(tokens[1]).toEqual value: 'self', scopes: ['source.rust', 'variable.language.rust']
    expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes sigils', ->
    {tokens} = grammar.tokenizeLine('*var &var')
    expect(tokens[0]).toEqual value: '*', scopes: ['source.rust', 'keyword.operator.sigil.rust']
    expect(tokens[2]).toEqual value: '&', scopes: ['source.rust', 'keyword.operator.sigil.rust']

  #
  # Core
  #

  it 'tokenizes core types', ->
    for t in ['bool', 'char', 'usize', 'isize', 'u8', 'u16', 'u32', 'u64', 'i8', 'i16', 'i32', 'i64', 'f32', 'f64', 'str', 'Self', 'Option', 'Result']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'storage.type.core.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes core variants', ->
    for t in ['Some', 'None', 'Ok', 'Err']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'support.constant.core.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes core trait markers', ->
    for t in ['Copy', 'Send', 'Sized', 'Sync']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'support.type.marker.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes core traits', ->
    for t in ['Drop', 'Fn', 'FnMut', 'FnOnce', 'Clone', 'PartialEq', 'PartialOrd', 'Eq', 'Ord', 'AsRef', 'AsMut', 'Into', 'From', 'Default', 'Iterator', 'Extend', 'IntoIterator', 'DoubleEndedIterator', 'ExactSizeIterator']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'support.type.core.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  #
  # Std
  #

  it 'tokenizes std types', ->
    for t in ['Box', 'String', 'Vec', 'Path', 'PathBuf']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'storage.class.std.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  it 'tokenizes std traits', ->
    for t in ['ToOwned', 'ToString']
      {tokens} = grammar.tokenizeLine("text #{t} text")
      expect(tokens[0]).toEqual value: 'text ', scopes: ['source.rust']
      expect(tokens[1]).toEqual value: t, scopes: ['source.rust', 'support.type.std.rust']
      expect(tokens[2]).toEqual value: ' text', scopes: ['source.rust']

  #
  # Snippets
  #

  it 'tokenizes imports', ->
    tokens = grammar.tokenizeLines('''
      extern crate foo;
      use std::slice;
      use std::{num, str};
      use self::foo::{bar, baz};
      ''')
    expect(tokens[0][0]).toEqual value: 'extern', scopes: ['source.rust', 'keyword.other.rust']
    expect(tokens[0][2]).toEqual value: 'crate', scopes: ['source.rust', 'keyword.other.rust']
    expect(tokens[1][0]).toEqual value: 'use', scopes: ['source.rust', 'keyword.other.rust']
    expect(tokens[1][2]).toEqual value: '::', scopes: ['source.rust', 'keyword.operator.misc.rust']
    expect(tokens[2][0]).toEqual value: 'use', scopes: ['source.rust', 'keyword.other.rust']
    expect(tokens[2][2]).toEqual value: '::', scopes: ['source.rust', 'keyword.operator.misc.rust']
    expect(tokens[3][0]).toEqual value: 'use', scopes: ['source.rust', 'keyword.other.rust']
    expect(tokens[3][2]).toEqual value: 'self', scopes: ['source.rust', 'variable.language.rust']
    expect(tokens[3][3]).toEqual value: '::', scopes: ['source.rust', 'keyword.operator.misc.rust']
    expect(tokens[3][5]).toEqual value: '::', scopes: ['source.rust', 'keyword.operator.misc.rust']

  it 'tokenizes enums', ->
    tokens = grammar.tokenizeLines('''
      pub enum MyEnum {
          One,
          Two
      }
      ''')
    expect(tokens[0][0]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']
    expect(tokens[0][2]).toEqual value: 'enum', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[0][4]).toEqual value: 'MyEnum', scopes: ['source.rust', 'entity.name.type.rust']

  it 'tokenizes structs', ->
    tokens = grammar.tokenizeLines('''
      pub struct MyStruct<'foo> {
          pub one: u32,
          two: Option<'a, MyEnum>,
          three: &'foo i32,
      }
      ''')
    expect(tokens[0][0]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']
    expect(tokens[0][2]).toEqual value: 'struct', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[0][4]).toEqual value: 'MyStruct', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[0][5]).toEqual value: '<', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[0][6]).toEqual value: '\'', scopes: ['source.rust', 'meta.type_params.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[0][7]).toEqual value: 'foo', scopes: ['source.rust', 'meta.type_params.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']
    expect(tokens[1][1]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']
    expect(tokens[2][3]).toEqual value: '\'', scopes: ['source.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[2][4]).toEqual value: 'a', scopes: ['source.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']
    expect(tokens[3][2]).toEqual value: '\'', scopes: ['source.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[3][3]).toEqual value: 'foo', scopes: ['source.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']

  it 'tokenizes tuple structs', ->
    {tokens} = grammar.tokenizeLine('pub struct MyTupleStruct(pub i32, u32);')
    expect(tokens[0]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']
    expect(tokens[2]).toEqual value: 'struct', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[4]).toEqual value: 'MyTupleStruct', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[6]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']

  it 'tokenizes unions', ->
    tokens = grammar.tokenizeLines('''
      pub union MyUnion<'foo> {
          pub one: u32,
          two: Option<'a, MyEnum>,
          three: &'foo i32,
      }
      ''')
    expect(tokens[0][0]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']
    expect(tokens[0][2]).toEqual value: 'union', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[0][4]).toEqual value: 'MyUnion', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[0][5]).toEqual value: '<', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[0][6]).toEqual value: '\'', scopes: ['source.rust', 'meta.type_params.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[0][7]).toEqual value: 'foo', scopes: ['source.rust', 'meta.type_params.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']
    expect(tokens[1][1]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']
    expect(tokens[2][3]).toEqual value: '\'', scopes: ['source.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[2][4]).toEqual value: 'a', scopes: ['source.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']
    expect(tokens[3][2]).toEqual value: '\'', scopes: ['source.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[3][3]).toEqual value: 'foo', scopes: ['source.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']


  it 'tokenizes type aliases', ->
    {tokens} = grammar.tokenizeLine('type MyType = u32;')
    expect(tokens[0]).toEqual value: 'type', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[2]).toEqual value: 'MyType', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[4]).toEqual value: 'u32', scopes: ['source.rust', 'storage.type.core.rust']

  it 'tokenizes constants', ->
    {tokens} = grammar.tokenizeLine('static MY_CONSTANT: &str = "hello";')
    expect(tokens[0]).toEqual value: 'static', scopes: ['source.rust', 'storage.modifier.static.rust']
    expect(tokens[2]).toEqual value: '&', scopes: ['source.rust', 'keyword.operator.sigil.rust']
    expect(tokens[3]).toEqual value: 'str', scopes: ['source.rust', 'storage.type.core.rust']

  it 'tokenizes traits', ->
    tokens = grammar.tokenizeLines('''
      pub trait MyTrait {
          fn create_something (param: &str, mut other_param: u32) -> Option<Self>;
          fn do_whatever<T: Send+Share+Whatever, U: Freeze> (param: &T, other_param: u32) -> Option<U>;
          fn do_all_the_work (&mut self, param: &str, mut other_param: u32) -> bool;
          fn do_even_more<'a, T: Send+Whatever, U: Something<T>+Freeze> (&'a mut self, param: &T) -> &'a U;
      }
      ''')
    expect(tokens[0][0]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']
    expect(tokens[0][2]).toEqual value: 'trait', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[0][4]).toEqual value: 'MyTrait', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[1][1]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[1][12]).toEqual value: 'Option', scopes: ['source.rust', 'storage.type.core.rust']
    expect(tokens[1][14]).toEqual value: 'Self', scopes: ['source.rust', 'meta.type_params.rust', 'storage.type.core.rust']
    expect(tokens[2][1]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[2][6]).toEqual value: 'Send', scopes: ['source.rust', 'meta.type_params.rust', 'support.type.marker.rust']
    expect(tokens[2][7]).toEqual value: '+Share+Whatever, U: Freeze', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[3][1]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[4][1]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[4][5]).toEqual value: '\'', scopes: ['source.rust', 'meta.type_params.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[4][6]).toEqual value: 'a', scopes: ['source.rust', 'meta.type_params.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']
    expect(tokens[4][11]).toEqual value: 'T', scopes: ['source.rust', 'meta.type_params.rust', 'meta.type_params.rust']

  it 'tokenizes impls', ->
    tokens = grammar.tokenizeLines('''
      impl MyTrait {
          fn do_something () { unimplemented!() }
      }
      ''')
    expect(tokens[0][0]).toEqual value: 'impl', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[0][2]).toEqual value: 'MyTrait', scopes: ['source.rust', 'entity.name.type.rust']

  it 'tokenizes trait impls', ->
    tokens = grammar.tokenizeLines('''
      impl MyTrait for MyStruct {
          fn create_something (param: &str, mut other_param: u32) -> Option<Self> { unimplemented!() }
          fn do_whatever<T: Send+Share+Whatever, U: Freeze> (param: &T, other_param: u32) -> Option<U> { unimplemented!() }
          fn do_all_the_work (&mut self, param: &str, mut other_param: u32) -> bool { unimplemented!() }
          fn do_even_more<'a, T: Send+Whatever, U: Something<T>+Freeze> (&'a mut self, param: &T) -> &'a U { unimplemented!() }
      }
      ''')
    expect(tokens[0][0]).toEqual value: 'impl', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[0][2]).toEqual value: 'MyTrait', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[0][4]).toEqual value: 'for', scopes: ['source.rust', 'storage.type.rust']
    expect(tokens[0][6]).toEqual value: 'MyStruct', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[1][1]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[1][12]).toEqual value: 'Option', scopes: ['source.rust', 'storage.type.core.rust']
    expect(tokens[1][14]).toEqual value: 'Self', scopes: ['source.rust', 'meta.type_params.rust', 'storage.type.core.rust']
    expect(tokens[2][1]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[2][6]).toEqual value: 'Send', scopes: ['source.rust', 'meta.type_params.rust', 'support.type.marker.rust']
    expect(tokens[2][7]).toEqual value: '+Share+Whatever, U: Freeze', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[3][1]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[4][1]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[4][5]).toEqual value: '\'', scopes: ['source.rust', 'meta.type_params.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[4][6]).toEqual value: 'a', scopes: ['source.rust', 'meta.type_params.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']
    expect(tokens[4][11]).toEqual value: 'T', scopes: ['source.rust', 'meta.type_params.rust', 'meta.type_params.rust']

  it 'tokenizes generics and lifetimes in enums'  # TODO

  it 'tokenizes generics and lifetimes in structs'  # TODO

  it 'tokenizes generics and lifetimes in impls'  # TODO

  it 'tokenizes generics and lifetimes in functions'  # TODO

  it 'tokenizes function defintions'  # TODO

  it 'tokenizes function calls'   # TODO

  it 'tokenizes closures'   # TODO

  #
  # Issues
  #

  it 'tokenizes loop expression labels (issue \\#2)', ->
    tokens = grammar.tokenizeLines('''
      infinity: loop {
          do_serious_stuff();
          use_a_letter('Z');
          break 'infinity;
      }
      ''')
    # FIXME: Missing label detection?
    expect(tokens[0][0]).toEqual value: 'infinity: ', scopes: ['source.rust']
    expect(tokens[2][3]).toEqual value: '\'Z\'', scopes: ['source.rust', 'string.quoted.single.rust']
    expect(tokens[3][3]).toEqual value: '\'', scopes: ['source.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[3][4]).toEqual value: 'infinity', scopes: ['source.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']

  it 'tokenizes isize/usize type suffixes (issue \\#22)', ->
    for t in ['isize', 'usize']
      {tokens} = grammar.tokenizeLine("let x = 123#{t};")
      expect(tokens[4]).toEqual value: "123#{t}", scopes: ['source.rust', 'constant.numeric.integer.decimal.rust']

  it 'tokenizes float literals without +/- after E (issue \\#30)', ->
    {tokens} = grammar.tokenizeLine('let x = 1.2345e6;')
    expect(tokens[4]).toEqual value: '1.2345e6', scopes: ['source.rust', 'constant.numeric.float.rust']

  it 'tokenizes nested generics (issue \\#33, \\#37)', ->
    {tokens} = grammar.tokenizeLine('let x: Vec<Vec<u8>> = Vec::new();')
    # FIXME: < and > are tokenized as comparison keywords? :(
    #expect(tokens[3]).toEqual value: 'Vec<', scopes: ['source.rust', 'storage.class.std.rust']
    #expect(tokens[4]).toEqual value: 'Vec<', scopes: ['source.rust', 'storage.class.std.rust']
    #expect(tokens[5]).toEqual value: 'u8', scopes: ['source.rust', 'storage.type.core.rust']

  it 'tokenizes == properly (issue \\#40)', ->
    tokens = grammar.tokenizeLines('''
      struct Foo { x: i32 }
      if x == 1 { }
      ''')
    expect(tokens[1][2]).toEqual value: '==', scopes: ['source.rust', 'keyword.operator.comparison.rust']

  it 'tokenizes const function parameters (issue \\#52)', ->
    tokens = grammar.tokenizeLines('''
      fn foo(bar: *const i32) {
        let _ = 1234 as *const u32;
      }
      ''')
    expect(tokens[0][4]).toEqual value: '*', scopes: ['source.rust', 'keyword.operator.sigil.rust']
    expect(tokens[0][5]).toEqual value: 'const', scopes: ['source.rust', 'storage.modifier.const.rust']
    expect(tokens[1][9]).toEqual value: '*', scopes: ['source.rust', 'keyword.operator.sigil.rust']
    expect(tokens[1][10]).toEqual value: 'const', scopes: ['source.rust', 'storage.modifier.const.rust']

  it 'tokenizes keywords and known types in wrapper structs (issue \\#56)', ->
    {tokens} = grammar.tokenizeLine('pub struct Foobar(pub Option<bool>);')
    expect(tokens[6]).toEqual value: 'pub', scopes: ['source.rust', 'storage.modifier.visibility.rust']
    expect(tokens[8]).toEqual value: 'Option', scopes: ['source.rust', 'storage.type.core.rust']
    # FIXME: < and > are tokenized as comparison keywords? :(
    expect(tokens[10]).toEqual value: 'bool', scopes: ['source.rust', 'storage.type.core.rust']

  it 'tokenizes lifetimes in associated type definitions (issue \\#55)', ->
    tokens = grammar.tokenizeLines('''
      trait Foo {
        type B: A + 'static;
      }
    ''')
    expect(tokens[1][5]).toEqual value: '\'', scopes: ['source.rust', 'storage.modifier.lifetime.rust']
    expect(tokens[1][6]).toEqual value: 'static', scopes: ['source.rust', 'storage.modifier.lifetime.rust', 'entity.name.lifetime.rust']

  it 'tokenizes unsafe keywords in function arguments (issue \\#73)', ->
    tokens = grammar.tokenizeLines('''
      unsafe fn foo();
      fn foo(f: unsafe fn());
    ''')
    expect(tokens[0][0]).toEqual value: 'unsafe', scopes: ['source.rust', 'keyword.other.unsafe.rust']
    expect(tokens[1][4]).toEqual value: 'unsafe', scopes: ['source.rust', 'keyword.other.unsafe.rust']

  it 'tokenizes where clauses (issue \\#57)', ->
    tokens = grammar.tokenizeLines('''
      impl Foo<A, B> where text { }
      impl Foo<A, B> for C where text { }
      impl Foo<A, B> for C {
          fn foo<A, B> -> C where text { }
      }
      fn foo<A, B> -> C where text { }
      struct Foo<A, B> where text { }
      trait Foo<A, B> : C where { }
    ''')
    expect(tokens[0][7]).toEqual value: 'where', scopes: ['source.rust', 'keyword.other.where.rust']
    expect(tokens[1][11]).toEqual value: 'where', scopes: ['source.rust', 'keyword.other.where.rust']
    expect(tokens[3][8]).toEqual value: 'where', scopes: ['source.rust', 'keyword.other.where.rust']
    expect(tokens[5][7]).toEqual value: 'where', scopes: ['source.rust', 'keyword.other.where.rust']
    expect(tokens[6][7]).toEqual value: 'where', scopes: ['source.rust', 'keyword.other.where.rust']
    expect(tokens[7][7]).toEqual value: 'where', scopes: ['source.rust', 'keyword.other.where.rust']

  it 'tokenizes comments in attributes (issue \\#95)', ->
    tokens = grammar.tokenizeLines('''
      #[
      /* block comment */
      // line comment
      derive(Debug)]
      struct D { }
    ''')
    expect(tokens[0][0]).toEqual value: '#[', scopes: ['source.rust', 'meta.attribute.rust']
    expect(tokens[1][1]).toEqual value: ' block comment ', scopes: ['source.rust', 'meta.attribute.rust', 'comment.block.rust']
    expect(tokens[2][1]).toEqual value: ' line comment', scopes: ['source.rust', 'meta.attribute.rust', 'comment.line.double-slash.rust']
    expect(tokens[3][0]).toEqual value: 'derive(Debug)', scopes: ['source.rust', 'meta.attribute.rust']
    expect(tokens[4][0]).toEqual value: 'struct', scopes: ['source.rust', 'storage.type.rust']

  it 'does not tokenize `fn` in argument name as a keyword incorrectly (issue \\#99)', ->
    {tokens} = grammar.tokenizeLine('fn foo(fn_x: ()) {}')
    expect(tokens[0]).toEqual value: 'fn', scopes: ['source.rust', 'keyword.other.fn.rust']
    expect(tokens[1]).toEqual value: ' ', scopes: ['source.rust']
    expect(tokens[2]).toEqual value : 'foo', scopes : [ 'source.rust', 'entity.name.function.rust' ]
    expect(tokens[3]).toEqual value : '(fn_x: ()) ', scopes : [ 'source.rust' ]

  it 'tokenizes function calls with type arguments (issue \\#98)', ->
    tokens = grammar.tokenizeLines('''
      fn main() {
      foo::bar::<i32, ()>();
      _func::<i32, ()>();
      }
    ''')
    expect(tokens[1][0]).toEqual value: 'foo', scopes: ['source.rust']
    expect(tokens[1][1]).toEqual value: '::', scopes: ['source.rust', 'keyword.operator.misc.rust']
    expect(tokens[1][2]).toEqual value: 'bar', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[1][3]).toEqual value: '::', scopes: ['source.rust', 'keyword.operator.misc.rust']
    expect(tokens[1][4]).toEqual value: '<', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[1][5]).toEqual value: 'i32', scopes: ['source.rust', 'meta.type_params.rust', 'storage.type.core.rust']
    expect(tokens[1][6]).toEqual value: ', ()', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[1][7]).toEqual value: '>', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[1][8]).toEqual value: '(', scopes: ['source.rust']
    expect(tokens[1][9]).toEqual value: ');', scopes: ['source.rust']

    expect(tokens[2][0]).toEqual value: '_func', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[2][1]).toEqual value: '::', scopes: ['source.rust', 'keyword.operator.misc.rust']
    expect(tokens[2][2]).toEqual value: '<', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[2][3]).toEqual value: 'i32', scopes: ['source.rust', 'meta.type_params.rust', 'storage.type.core.rust']
    expect(tokens[2][4]).toEqual value: ', ()', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[2][5]).toEqual value: '>', scopes: ['source.rust', 'meta.type_params.rust']
    expect(tokens[2][6]).toEqual value: '(', scopes: ['source.rust']
    expect(tokens[2][7]).toEqual value: ');', scopes: ['source.rust']

  it 'tokenizes function calls without type arguments (issue \\#98)', ->
    tokens = grammar.tokenizeLines('''
      fn main() {
      foo.call();
      }
    ''')
    expect(tokens[1][0]).toEqual value: 'foo.', scopes: ['source.rust']
    expect(tokens[1][1]).toEqual value: 'call', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[1][2]).toEqual value: '(', scopes: ['source.rust']
    expect(tokens[1][3]).toEqual value: ');', scopes: ['source.rust']

  it 'tokenizes function names correctly (issue \\#98)', ->
    tokens = grammar.tokenizeLines('''
      fn main() {
      a();
      a1();
      a_();
      a_1();
      a1_();
      _a();
      _0();
      _a0();
      _0a();
      __();
      }
    ''')
    expect(tokens[1][0]).toEqual value: 'a', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[2][0]).toEqual value: 'a1', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[3][0]).toEqual value: 'a_', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[4][0]).toEqual value: 'a_1', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[5][0]).toEqual value: 'a1_', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[6][0]).toEqual value: '_a', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[7][0]).toEqual value: '_0', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[8][0]).toEqual value: '_a0', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[9][0]).toEqual value: '_0a', scopes: ['source.rust', 'entity.name.function.rust']
    expect(tokens[10][0]).toEqual value: '__', scopes: ['source.rust', 'entity.name.function.rust']

  it 'tokenizes `as` as an operator (issue \\#110)', ->
    {tokens} = grammar.tokenizeLine('let i = 10 as f32;')
    expect(tokens[0]).toEqual value: 'let', scopes: ['source.rust', 'keyword.other.rust']
    expect(tokens[2]).toEqual value: '=', scopes: ['source.rust', 'keyword.operator.assignment.rust']
    expect(tokens[4]).toEqual value: '10', scopes: ['source.rust', 'constant.numeric.integer.decimal.rust']
    expect(tokens[6]).toEqual value: 'as', scopes: ['source.rust', 'keyword.operator.misc.rust']
    expect(tokens[8]).toEqual value: 'f32', scopes: ['source.rust', 'storage.type.core.rust']

  it 'tokenizes a reserved keyword as deprecated (issue \\#94)', ->
    {tokens} = grammar.tokenizeLine('let priv = 10;')
    expect(tokens[0]).toEqual value: 'let', scopes: ['source.rust', 'keyword.other.rust']
    expect(tokens[2]).toEqual value: 'priv', scopes: ['source.rust', 'invalid.deprecated.rust']
    expect(tokens[4]).toEqual value: '=', scopes: ['source.rust', 'keyword.operator.assignment.rust']
    expect(tokens[6]).toEqual value: '10', scopes: ['source.rust', 'constant.numeric.integer.decimal.rust']

  it 'tokenizes types in `impl` statements correctly (issue \\#7)', ->
    tokens = grammar.tokenizeLines('''
      struct MyObject<'a> {
          mystr: &'a str
      }
      impl<'a> MyObject<'a> {
          fn print(&self) {}
      }
      impl<'a> Clone for MyObject<'a> {
          fn clone(&self) {}
      }
    ''')
    expect(tokens[0][2]).toEqual value: 'MyObject', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[3][6]).toEqual value: 'MyObject', scopes: ['source.rust', 'entity.name.type.rust']
    expect(tokens[6][6]).toEqual value: 'Clone', scopes: ['source.rust', 'support.type.core.rust']
    expect(tokens[6][10]).toEqual value: 'MyObject', scopes: ['source.rust', 'entity.name.type.rust']
