
# Love.Font
> Allows you to work with fonts.
            Defines the shape of characters that can be drawn onto the screen.

------------------------------------------------
#### Love.Font.NewRasterizer(Love.FileData)

`Summary`: Creates a new Rasterizer.


`Arguments`

* `fileData`: The FileData of the font file.


`Returns`

The rasterizer.




------------------------------------------------
#### Love.Font.NewTrueTypeRasterizer(Love.Data,System.Int32,Love.HintingMode)

`Summary`: Create a TrueTypeRasterizer with the font data.


`Arguments`

* `data`: The data of to the TrueType font.
* `size`: The font size.
* `hinting`: True Type hinting mode.





------------------------------------------------
#### Love.Font.NewTrueTypeRasterizer(System.Int32,Love.HintingMode)

`Summary`: Create a TrueTypeRasterizer with the default font.


`Arguments`

* `size`: The font size.
* `hinting`: True Type hinting mode.





------------------------------------------------
#### Love.Font.NewBMFontRasterizer(Love.FileData,Love.ImageData[])

`Summary`: Creates a new BMFont Rasterizer.


`Arguments`

* `fileData`: The file data of the BMFont.
* `imageDatas`: The image data containing the drawable pictures of font glyphs.





------------------------------------------------
#### Love.Font.NewGlyphData(Love.Rasterizer,System.Byte[])

`Summary`: Creates a new GlyphData.


`Arguments`

* `rasterizer`: The Rasterizer containing the font.
* `glyph`: The character code of the glyph.





------------------------------------------------
#### Love.Font.NewGlyphData(Love.Rasterizer,System.Int32)

`Summary`: Creates a new GlyphData.


`Arguments`

* `rasterizer`: The Rasterizer containing the font.
* `glyphCode`: The character code of the glyph.





------------------------------------------------
#### Love.Font.#ctor

`Summary`: disable construct






------------------------------------------------
#### Love.Font.GetHeight

`Summary`: Gets the height of the Font in pixels.



`Returns`

The height of the Font in pixels.




------------------------------------------------
#### Love.Font.GetWidth(System.Byte[])

`Summary`: Determines the width of the given text. (UTF-8 byte array version)


`Arguments`

* `str`: A string. (UTF-8 byte array needed)


`Returns`

The width of the text.




------------------------------------------------
#### Love.Font.SetLineHeight(System.Single)

`Summary`: Sets the line height. When rendering the font in lines the actual height will be determined by the line height multiplied by the height of the font. The default is 1.0.


`Arguments`

* `h`: The new line height.





------------------------------------------------
#### Love.Font.GetLineHeight

`Summary`: Gets the line height. This will be the value previously set by [Love.Font](/module/Love.Font?id=lovefontsetlineheightsystemsingle), or 1.0 by default.



`Returns`

The current line height.




------------------------------------------------
#### Love.Font.SetFilter(Love.FilterMode,Love.FilterMode,System.Single)

`Summary`: Sets the filter mode for a font.


`Arguments`

* `min_type`: How to scale a font down.
* `mag_type`: How to scale a font up.
* `anisotropy`: Maximum amount of anisotropic filtering used.





------------------------------------------------
#### Love.Font.GetFilter(Love.FilterMode@,Love.FilterMode@,System.Single@)

`Summary`: Gets the filter mode for a font.


`Arguments`

* `min_type`: Filter mode used when minifying the font.
* `mag_type`: Filter mode used when magnifying the font.
* `out_anisotropy`: Maximum amount of anisotropic filtering used.





------------------------------------------------
#### Love.Font.GetAscent

`Summary`: Gets the ascent of the Font. The ascent spans the distance between the baseline and the top of the glyph that reaches farthest from the baseline.






------------------------------------------------
#### Love.Font.GetDescent

`Summary`: Gets the descent of the Font. The descent spans the distance between the baseline and the lowest descending glyph in a typeface.






------------------------------------------------
#### Love.Font.GetBaseline

`Summary`: Gets the baseline of the Font. Most scripts share the notion of a baseline: an imaginary horizontal line on which characters rest. In some scripts, parts of glyphs lie below the baseline.






------------------------------------------------
#### Love.Font.HasGlyphs(System.Byte[])

`Summary`: Gets whether the Font can render a character or string. (UTF-8 byte array version)


`Arguments`

* `str`: A string. (UTF-8 byte array needed)


`Returns`

Whether the font can render all characters in the string.




------------------------------------------------
#### Love.Font.SetFallbacks(Love.Font[])

`Summary`: Sets the fallback fonts. When the Font doesn't contain a glyph, it will substitute the glyph from the next subsequent fallback Fonts. This is akin to setting a "font stack" in Cascading Style Sheets (CSS).


`Arguments`

* `fallback`: [The first fallback Font to use, ...Additional fallback Fonts.]





------------------------------------------------
#### Love.Font.NewGlyphData(Love.Rasterizer,System.String)

`Summary`: Creates a new GlyphData.


`Arguments`

* `rasterizer`: The Rasterizer containing the font.
* `glyph`: The character code of the glyph.





------------------------------------------------
#### Love.Font.NewRasterizer(System.String)

`Summary`: Creates a new Rasterizer.


`Arguments`

* `filename`: The font file.


`Returns`

The rasterizer.




------------------------------------------------
#### Love.Font.GetWidth(System.String)

`Summary`: Determines the width of the given text.


`Arguments`

* `str`: A string.


`Returns`

The width of the text.




------------------------------------------------
#### Love.Font.HasGlyphs(System.String)

`Summary`: Gets whether the Font can render a character or string.


`Arguments`

* `str`: A string.


`Returns`

Whether the font can render all characters in the string.




------------------------------------------------
#### Love.Font.GetWrap(System.String,System.Single)

`Summary`: Gets formatting information for text, given a wrap limit.


`Arguments`

* `text`: The text that will be wrapped.
* `wrap_limit`: The maximum width in pixels of each line that text is allowed before wrapping.


`Returns`

(The maximum width of the wrapped text., A sequence containing each line of text that was wrapped.)




