
# Love.Graphics
> 

------------------------------------------------
#### Love.Graphics.NewCanvas

`Summary`

Creates a new Canvas.
            This function can be slow if it is called repeatedly, such as from love.update or love.draw. If you need to use a specific resource often, create it once and store it somewhere it can be reused!



`Returns`

A new Canvas with dimensions equal to the window's size in pixels.




------------------------------------------------
#### Love.Graphics.NewText(Love.Font,System.String)

`Summary`

Creates a new drawable Text object.


`Arguments`

* `font`: The font to use for the text.
* `coloredStr`: The initial string of text that the new Text object will contain. May be nil.





------------------------------------------------
#### Love.Graphics.NewImage(System.String,System.Boolean,System.Boolean)

`Summary`

Creates a new Image from a filepath.


`Arguments`

* `filename`: The filepath to the image file .
* `flagMipmaps`: If true, mipmaps for the image will be automatically generated (or taken from the images's file if possible, if the image originated from a CompressedImageData). If this value is a table, it should contain a list of other filenames of images of the same format that have progressively half-sized dimensions, all the way down to 1x1. Those images will be used as this Image's mipmap levels.
* `flagLinear`: True if the image's pixels should be interpreted as being linear RGB rather than sRGB-encoded, if gamma-correct rendering is enabled. Has no effect otherwise.





------------------------------------------------
#### Love.Graphics.NewFont(System.Int32,Love.HintingMode)

`Summary`

Create a new instance of the default font (Vera Sans) with a custom size.






------------------------------------------------
#### Love.Graphics.NewBMFont(System.String,System.String[])


`Arguments`

* `filename`: The filepath to the BMFont file.
* `imageFileName`: The filepath to the BMFont's image file.





------------------------------------------------
#### Love.Graphics.NewBMFont(System.String)

`Summary`

Create a new BMFont. The filepath to the BMFont's image file specified inside the BMFont file will be used.


`Arguments`

* `filename`: The filepath to the BMFont file.





------------------------------------------------
#### Love.Graphics.NewImageFont(System.String,System.String,System.Int32)

`Summary`

Creates a new Font by loading a specifically formatted image.
            In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs string.
            	This function can be slow if it is called repeatedly, such as from Scene.Update. If you need to use a specific resource often, create it once and store it somewhere it can be reused!


`Arguments`

* `filename`: The filepath to the image file.
* `glyphs`: A string of the characters in the image in order from left to right.
* `extraspacing`: Additional spacing (positive or negative) to apply to each glyph in the Font.





------------------------------------------------
#### Love.Graphics.NewFont(System.String,System.Int32,Love.HintingMode)

`Summary`

Create a new TrueType font.


`Arguments`

* `filename`: The filepath to the TrueType font file.
* `size`: The size of the font in pixels.
* `hinting`: True Type hinting mode.


`Returns`

A Font object which can be used to draw text on screen.




------------------------------------------------
#### Love.Graphics.NewVideo(System.String,System.Boolean,System.Nullable{System.Single})

`Summary`

Creates a new drawable Video. Currently only Ogg Theora video files are supported.


`Arguments`

* `filename`: The file path to the Ogg Theora video file.
* `audio`: Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
* `dipScale`: The DPI scale factor of the video. if it was null, value will be Graphics.GetDPIScale()





------------------------------------------------
#### Love.Graphics.Clear

`Summary`

Clears the screen to transparent black (0, 0, 0, 0).






------------------------------------------------
#### Love.Graphics.SetColor(Love.Color)

`Summary`

Sets the color used for drawing.






------------------------------------------------
#### Love.Graphics.SetColor(Love.Vector4)

`Summary`

Sets the color used for drawing.






------------------------------------------------
#### Love.Graphics.Rectangle(Love.DrawMode,Love.RectangleF)

`Summary`

Draws a rectangle.


`Arguments`

* `mode`: How to draw the rectangle.
* `rect`: the rectangle to draw.





------------------------------------------------
#### Love.Graphics.Rectangle(Love.DrawMode,Love.Rectangle)

`Summary`

Draws a rectangle.


`Arguments`

* `mode`: How to draw the rectangle.
* `rect`: the rectangle to draw.





------------------------------------------------
#### Love.Graphics.Arc(Love.DrawMode,System.Single,System.Single,System.Single,System.Single,System.Single)

`Summary`

Draws an arc using the "pie" ArcType.


`Arguments`

* `draw_mode`: 
* `x`: The position of the center along x-axis.
* `y`: The position of the center along y-axis.
* `radius`: Radius of the arc.
* `angle1`: The angle at which the arc begins.
* `angle2`: The angle at which the arc terminates.





------------------------------------------------
#### Love.Graphics.Discard(System.Boolean,System.Boolean)

`Summary`

Discards (trashes) the contents of the screen or active Canvas. This is a performance optimization function with niche use cases.


`Arguments`

* `discardColor`: Whether to discard the texture(s) of the active Canvas(es) (the contents of the screen if no Canvas is active.)
* `discardStencil`: Whether to discard the contents of the stencil buffer of the screen / active Canvas.





------------------------------------------------
#### Love.Graphics.NewMesh(Love.Vertex[],Love.MeshDrawMode,Love.SpriteBatchUsage)

`Summary`

Creates a new Mesh.
            Use Mesh.SetTexture if the Mesh should be textured with an Image or Canvas when it's drawn.
            In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.


`Arguments`

* `vertices`: The array filled with vertex information tables for each vertex as follows:
* `drawMode`: How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
* `usage`: The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.


`Returns`

The new mesh.




------------------------------------------------
#### Love.Graphics.Printf(System.String,System.Single,System.Single,System.Single,Love.AlignMode,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)

`Summary`

Draws formatted text, with word wrap and alignment.
             See additional notes in love.graphics.print. 
            In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
            Aligning does not work as one might expect! It doesn't align to the x/y coordinates given, but in a rectangle, where the limit is the width.
            Text may appear blurry if it's rendered at non-integer pixel locations.


`Arguments`

* `text`: A text string.
* `x`: The position on the x-axis.
* `y`: The position on the y-axis.
* `wrap`: 
* `align_type`: Wrap the line after this many horizontal pixels.
* `angle`: Orientation (radians).
* `sx`: Scale factor (x-axis).
* `sy`: Scale factor (y-axis).
* `ox`: Origin offset (x-axis).
* `oy`: Origin offset (y-axis).
* `kx`: Shearing factor (x-axis).
* `ky`: Shearing factor (y-axis).





------------------------------------------------
#### Love.Graphics.SetStencilTest

`Summary`

Disables stencil testing.






------------------------------------------------
#### Love.Graphics.GetDimensions

`Summary`

Gets the width and height of the window.






------------------------------------------------
#### Love.Graphics.Line(System.Single[])

`Summary`

Draws lines between points.


`Arguments`

* `points`: must be an integer multiple of 2. [first(x, y), second(x, y) ....]





------------------------------------------------
#### Love.Graphics.Points(System.Single[])

`Summary`

Draws one or more points.


`Arguments`

* `points`: must be an integer multiple of 2. [first(x, y), second(x, y) ....]





------------------------------------------------
#### Love.Graphics.Polygon(Love.DrawMode,System.Single[])

`Summary`

Draw a polygon.


`Arguments`

* `mode`: How to draw the polygon.
* `points`: must be an integer multiple of 2. [first(x, y), second(x, y) ....]





------------------------------------------------
#### Love.Graphics.Scale(Love.Vector2)

`Summary`

以二维方式缩放坐标系。
            默认情况下，LÖVE中的坐标系在水平和垂直方向上一对一显示像素，x轴向右增加，y轴向下增加。 缩放坐标系会改变这种关系。
            在通过sx和sy进行缩放之后，所有坐标都被视为与sx和sy相乘。 绘图操作的每个结果也相应地缩放，例如按（2,2）缩放将意味着在x和y方向上使所有内容都变为两倍。 按负值缩放会使坐标系在相应的方向上翻转，所有内容都会被翻转或颠倒（或两者兼而有之）。 按零缩放没有意义。
            缩放(Scale)操作和平移(Translate)操作不是可交换操作，以不同的顺序调用它们会产生不同的结果。
            效果持续到 Scene.Draw 调用结束（每一帧画面绘制结束都会自动重置为1倍。）
            
            Scales the coordinate system in two dimensions. 
            By default the coordinate system in LÖVE corresponds to the display pixels in horizontal and vertical directions one-to-one, and the x-axis increases towards the right while the y-axis increases downwards. Scaling the coordinate system changes this relation.
            After scaling by sx and sy, all coordinates are treated as if they were multiplied by sx and sy. Every result of a drawing operation is also correspondingly scaled, so scaling by (2, 2) for example would mean making everything twice as large in both x- and y-directions. Scaling by a negative value flips the coordinate system in the corresponding direction, which also means everything will be drawn flipped or upside down, or both. Scaling by zero is not a useful operation.
            Scale and translate are not commutative operations, therefore, calling them in different orders will change the outcome.
            Scaling lasts until Scene.Draw exits.


`Arguments`

* `scale`: The scaling on each axis.





------------------------------------------------
#### Love.Graphics.NewCanvas(System.Int32,System.Int32,Love.Graphics.Settings)

`Summary`

Creates a new Canvas.
            This function can be slow if it is called repeatedly, such as from love.update or love.draw. If you need to use a specific resource often, create it once and store it somewhere it can be reused!


`Arguments`

* `width`: The desired width of the Canvas.
* `height`: The desired height of the Canvas.
* `format_type`: 
* `msaa`: 


`Returns`

A new Canvas with specified width and height.




------------------------------------------------
#### Love.Graphics.NewMesh(System.Int32,Love.MeshDrawMode,Love.SpriteBatchUsage)

`Summary`

Creates a standard Mesh with the specified number of vertices.


`Arguments`

* `count`: The total number of vertices the Mesh will use. Each vertex is initialized to position of (0,0), uv of (0,0), color of (1,1,1,1).
* `drawMode`: How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
* `usage`: The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.





------------------------------------------------
#### Love.Graphics.NewVideo(Love.VideoStream,System.Boolean,System.Nullable{System.Single})

`Summary`

Creates a new drawable Video. Currently only Ogg Theora video files are supported.


`Arguments`

* `videoStream`:  a VideoStream object 
* `audio`: Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
* `dipScale`: The DPI scale factor of the video. if it was null, value will be Graphics.GetDPIScale()





------------------------------------------------
#### Love.Graphics.Reset

`Summary`

Resets the current graphics settings.
            Calling reset makes the current drawing color white, the current background color black, disables any active Canvas or Shader, and removes any scissor settings. It sets the BlendMode to alpha, enables all color component masks, disables wireframe mode and resets the current graphics transformation to the origin. It also sets both the point and line drawing modes to smooth and their sizes to 1.0.






------------------------------------------------
#### Love.Graphics.IsActive

`Summary`

Gets whether the graphics module is able to be used.






------------------------------------------------
#### Love.Graphics.IsGammaCorrect

`Summary`

Gets whether gamma-correct rendering is enabled.
            
            Not all devices support gamma-correct rendering, in which case it will be automatically disabled and this function will return false. It is supported on desktop systems which have graphics cards that are capable of using OpenGL 3 / DirectX 10, and iOS devices that can use OpenGL ES 3.






------------------------------------------------
#### Love.Graphics.SetScissor

`Summary`

Disables scissor.






------------------------------------------------
#### Love.Graphics.SetScissor(System.Int32,System.Int32,System.Int32,System.Int32)

`Summary`

Sets scissor.
            The scissor limits the drawing area to a specified rectangle. This affects all graphics calls, including love.graphics.clear.
            The dimensions of the scissor is unaffected by graphical transformations(translate, scale, ...).


`Arguments`

* `x`: 
* `y`: 
* `w`: 
* `h`: 





------------------------------------------------
#### Love.Graphics.IntersectScissor(System.Int32,System.Int32,System.Int32,System.Int32)

`Summary`

设置 scissor 为所给矩形和现有 scissor 的交集（交集肯定还是个矩形）。如果之前没有设置 scissor，则相当于调用 [Love.Graphics](/module/Love.Graphics?id=lovegraphicssetscissor) 
            Sets the scissor to the rectangle created by the intersection of the specified rectangle with the existing scissor.
            The scissor limits the drawing area to a specified rectangle. This affects all graphics calls, including love.graphics.clear.
            The dimensions of the scissor is unaffected by graphical transformations(translate, scale, ...).


`Arguments`

* `x`: x coordinate of upper left corner.
* `y`: y coordinate of upper left corner.
* `w`: width of clipping rectangle.
* `h`: height of clipping rectangle.





------------------------------------------------
#### Love.Graphics.GetScissor

`Summary`

Gets the current scissor box.
             Int4:x The x-component of the top-left point of the box. 
             Int4:y The y-component of the top-left point of the box. 
             The width of the box. 
             The height of the box.






------------------------------------------------
#### Love.Graphics.SetStencilTest(Love.CompareMode,System.Int32)

`Summary`

Configures or disables stencil testing.
            When stencil testing is enabled, the geometry of everything that is drawn afterward will be clipped / stencilled out based on a comparison between the arguments of this function and the stencil value of each pixel that the geometry touches. The stencil values of pixels are affected via Graphics.Stencil.


`Arguments`

* `compare_type`: The type of comparison to make for each pixel.
* `compareValue`: The value to use when comparing with the stencil value of each pixel. 





------------------------------------------------
#### Love.Graphics.GetStencilTest(Love.CompareMode@,System.Int32@)

`Summary`

Gets the current stencil test configuration.
            When stencil testing is enabled, the geometry of everything that is drawn afterward will be clipped / stencilled out based on a comparison between the arguments of this function and the stencil value of each pixel that the geometry touches. The stencil values of pixels are affected via Graphics.Stencil.
            Each Canvas has its own per-pixel stencil values.


`Arguments`

* `out_compare_type`: The type of comparison that is made for each pixel. Will be "always" if stencil testing is disabled.
* `out_compareValue`: The value used when comparing with the stencil value of each pixel.





------------------------------------------------
#### Love.Graphics.SetColor(System.Single,System.Single,System.Single,System.Single)

`Summary`

Sets the color used for drawing.


`Arguments`

* `r`: 
* `g`: 
* `b`: 
* `a`: 





------------------------------------------------
#### Love.Graphics.GetColor

`Summary`

Gets the current color.






------------------------------------------------
#### Love.Graphics.SetBackgroundColor(System.Single,System.Single,System.Single,System.Single)

`Summary`

Sets the background color.


`Arguments`

* `r`: The red component (0-1).
* `g`: The green component (0-1).
* `b`: The blue component (0-1).
* `a`: The alpha component (0-1).





------------------------------------------------
#### Love.Graphics.GetBackgroundColor

`Summary`

Gets the current background color.






------------------------------------------------
#### Love.Graphics.SetFont(Love.Font)

`Summary`

set font used. pass null to use default font


`Arguments`

* `font`: 





------------------------------------------------
#### Love.Graphics.GetFont

`Summary`

Gets the current Font object.






------------------------------------------------
#### Love.Graphics.SetColorMask(System.Boolean,System.Boolean,System.Boolean,System.Boolean)

`Summary`

Sets the color mask. Enables or disables specific color components when rendering.


`Arguments`

* `r`: 
* `g`: 
* `b`: 
* `a`: 





------------------------------------------------
#### Love.Graphics.GetColorMask(System.Boolean@,System.Boolean@,System.Boolean@,System.Boolean@)

`Summary`

Gets the active color components used when drawing. Normally all 4 components are active unless [Love.Graphics](/module/Love.Graphics?id=lovegraphicssetcolormasksystembooleansystembooleansystembooleansystemboolean) has been used.
            The color mask determines whether individual components of the colors of drawn objects will affect the color of the screen. They affect [Love.Graphics](/module/Love.Graphics?id=lovegraphicsclear) as well.


`Arguments`

* `out_r`: Whether the red color component is active when rendering.
* `out_g`: Whether the red green component is active when rendering.
* `out_b`: Whether the red blue component is active when rendering.
* `out_a`: Whether the red alpha component is active when rendering.





------------------------------------------------
#### Love.Graphics.SetBlendMode(Love.BlendMode,Love.BlendAlphaMode)

`Summary`

Sets the blending mode.


`Arguments`

* `blendMode`: The blend mode to use.
* `blendAlphaMode`: What to do with the alpha of drawn objects when blending.





------------------------------------------------
#### Love.Graphics.GetBlendMode(Love.BlendMode@,Love.BlendAlphaMode@)

`Summary`

Gets the blending mode.


`Arguments`

* `out_blendMode_type`: The current blend mode.
* `out_blendAlphaMode_type`: The current blend alpha mode – it determines how the alpha of drawn objects affects blending.





------------------------------------------------
#### Love.Graphics.SetDefaultFilter(Love.FilterMode,Love.FilterMode,System.Int32)

`Summary`

Sets the default scaling filters used with Images, Canvases, and Fonts.


`Arguments`

* `filterModeMagMin_type`: Filter mode used when scaling the image down.
* `filterModeMag_type`: Filter mode used when scaling the image up.
* `anisotropy`: Maximum amount of Anisotropic Filtering used.





------------------------------------------------
#### Love.Graphics.GetDefaultFilter(Love.FilterMode@,Love.FilterMode@,System.Int32@)

`Summary`

Returns the default scaling filters used with Images, Canvases, and Fonts.


`Arguments`

* `out_filterModeMagMin_type`: Filter mode used when scaling the image down.
* `out_filterModeMag_type`: Filter mode used when scaling the image up.
* `out_anisotropy`: Maximum amount of Anisotropic Filtering used.





------------------------------------------------
#### Love.Graphics.SetLineWidth(System.Single)

`Summary`

Sets the line width.


`Arguments`

* `width`: 





------------------------------------------------
#### Love.Graphics.SetLineStyle(Love.LineStyle)

`Summary`

Sets the line style.


`Arguments`

* `style_type`: 





------------------------------------------------
#### Love.Graphics.SetLineJoin(Love.LineJoin)

`Summary`

Sets the line join style.


`Arguments`

* `join_type`: 





------------------------------------------------
#### Love.Graphics.GetLineWidth

`Summary`

Gets the current line width.






------------------------------------------------
#### Love.Graphics.GetLineStyle

`Summary`

Gets the line style.






------------------------------------------------
#### Love.Graphics.GetLineJoin

`Summary`

Gets the line join style.






------------------------------------------------
#### Love.Graphics.SetPointSize(System.Single)

`Summary`

Sets the point size.


`Arguments`

* `size`: 





------------------------------------------------
#### Love.Graphics.GetPointSize

`Summary`

Gets the point size.






------------------------------------------------
#### Love.Graphics.IsWireframe

`Summary`

是否使用线框模式绘图
            Gets whether wireframe mode is used when drawing.






------------------------------------------------
#### Love.Graphics.SetCanvas(Love.Canvas[])

`Summary`

Captures drawing operations to a Canvas
            Sets the render target to a specified Canvas. All drawing operations until the next love.graphics.setCanvas call will be redirected to the Canvas and not shown on the screen.
            if Length of canvas is zero, then resets the render target to the screen, i.e. re-enables drawing to the screen.


`Arguments`

* `canvas`: 





------------------------------------------------
#### Love.Graphics.GetCanvas

`Summary`

Returns the current target Canvas. Returns zero length array if drawing to the real screen.






------------------------------------------------
#### Love.Graphics.SetShader(Love.Shader)

`Summary`

Routes drawing operations through a shader.


`Arguments`

* `shader`: 





------------------------------------------------
#### Love.Graphics.SetShader

`Summary`

Disables shaders, allowing unfiltered drawing operations.






------------------------------------------------
#### Love.Graphics.GetShader

`Summary`

Gets the current Shader. Returns null if none is set.






------------------------------------------------
#### Love.Graphics.Push(Love.StackType)

`Summary`

Copies and pushes the current coordinate transformation to the transformation stack.


`Arguments`

* `stack`: 





------------------------------------------------
#### Love.Graphics.Pop

`Summary`

Pops the current coordinate transformation from the transformation stack.
            This function is always used to reverse a previous [Love.Graphics](/module/Love.Graphics?id=lovegraphicspushlovestacktype) operation. It returns the current transformation state to what it was before the last preceding push.






------------------------------------------------
#### Love.Graphics.Rotate(System.Single)

`Summary`

Rotates the coordinate system in two dimensions.
            Calling this function affects all future drawing operations by rotating the coordinate system around the origin by the given amount of radians. This change lasts until Scene.Draw exits.


`Arguments`

* `angle`: The amount to rotate the coordinate system in radians.





------------------------------------------------
#### Love.Graphics.Scale(System.Single,System.Single)

`Summary`

以二维方式缩放坐标系。
            默认情况下，LÖVE中的坐标系在水平和垂直方向上一对一显示像素，x轴向右增加，y轴向下增加。 缩放坐标系会改变这种关系。
            在通过sx和sy进行缩放之后，所有坐标都被视为与sx和sy相乘。 绘图操作的每个结果也相应地缩放，例如按（2,2）缩放将意味着在x和y方向上使所有内容都变为两倍。 按负值缩放会使坐标系在相应的方向上翻转，所有内容都会被翻转或颠倒（或两者兼而有之）。 按零缩放没有意义。
            缩放(Scale)操作和平移(Translate)操作不是可交换操作，以不同的顺序调用它们会产生不同的结果。
            效果持续到 Scene.Draw 调用结束（每一帧画面绘制结束都会自动重置为1倍。）
            
            Scales the coordinate system in two dimensions. 
            By default the coordinate system in LÖVE corresponds to the display pixels in horizontal and vertical directions one-to-one, and the x-axis increases towards the right while the y-axis increases downwards. Scaling the coordinate system changes this relation.
            After scaling by sx and sy, all coordinates are treated as if they were multiplied by sx and sy. Every result of a drawing operation is also correspondingly scaled, so scaling by (2, 2) for example would mean making everything twice as large in both x- and y-directions. Scaling by a negative value flips the coordinate system in the corresponding direction, which also means everything will be drawn flipped or upside down, or both. Scaling by zero is not a useful operation.
            Scale and translate are not commutative operations, therefore, calling them in different orders will change the outcome.
            Scaling lasts until Scene.Draw exits.


`Arguments`

* `sx`: The scaling in the direction of the x-axis.
* `sy`: The scaling in the direction of the y-axis.





------------------------------------------------
#### Love.Graphics.Translate(System.Single,System.Single)

`Summary`

Translates the coordinate system in two dimensions.
            When this function is called with two numbers, dx, and dy, all the following drawing operations take effect as if their x and y coordinates were x+dx and y+dy.
            Scale and translate are not commutative operations, therefore, calling them in different orders will change the outcome.
            This change lasts until Scene.Draw exits or else a [Love.Graphics](/module/Love.Graphics?id=lovegraphicspop) reverts to a previous [Love.Graphics](/module/Love.Graphics?id=lovegraphicspushlovestacktype) .
            Translating using whole numbers will prevent tearing/blurring of images and fonts draw after translating.


`Arguments`

* `x`: 
* `y`: 





------------------------------------------------
#### Love.Graphics.Shear(System.Single,System.Single)

`Summary`

Shears the coordinate system.


`Arguments`

* `kx`: 
* `ky`: 





------------------------------------------------
#### Love.Graphics.Origin

`Summary`

Resets the current coordinate transformation.






------------------------------------------------
#### Love.Graphics.Stencil(System.Action,Love.StencilAction,System.Int32,System.Boolean)

`Summary`

Draws geometry as a stencil.
             The geometry drawn by the supplied function sets invisible stencil values of pixels, instead of setting pixel colors. The stencil buffer (which contains those stencil values) can act like a mask / stencil - love.graphics.setStencilTest can be used afterward to determine how further rendering is affected by the stencil values in each pixel.
             Stencil values are integers within the range of [0, 255].
             Starting with version 11.0, a stencil buffer must be set or requested in love.graphics.setCanvas when using stencils with a Canvas. love.graphics.setCanvas{canvas, stencil=true} is an easy way to use an automatically provided temporary stencil buffer in that case.
            https://love2d.org/wiki/love.graphics.stencil


`Arguments`

* `actionFunc`: Function which draws geometry. The stencil values of pixels, rather than the color of each pixel, will be affected by the geometry.
* `stencilAction`: How to modify any stencil values of pixels that are touched by what's drawn in the stencil function.
* `value`: The new stencil value to use for pixels if the "replace" stencil action is used. Has no effect with other stencil actions. Must be between 0 and 255.
* `keepValue`: True to preserve old stencil values of pixels, false to re-set every pixel's stencil value to 0 before executing the stencil function. love.graphics.clear will also re-set all stencil values.





------------------------------------------------
#### Love.Graphics.Discard(System.Boolean[],System.Boolean)

`Summary`

Discards (trashes) the contents of the screen or active Canvas. This is a performance optimization function with niche use cases.


`Arguments`

* `discardColors`: An array containing boolean values indicating whether to discard the texture of each active Canvas, when multiple simultaneous Canvases are active.
* `discardStencil`: Whether to discard the contents of the stencil buffer of the screen / active Canvas.





------------------------------------------------
#### Love.Graphics.Present

`Summary`

Displays the results of drawing operations on the screen.
            This function is used when writing your own Boot.Run function. It presents all the results of your drawing operations on the screen. See the example in Boot.Run for a typical use of this function.






------------------------------------------------
#### Love.Graphics.Draw(Love.Drawable,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)

`Summary`

Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh, Text object, or Video) on the screen with optional rotation, scaling and shearing.


`Arguments`

* `drawable`: A drawable object.
* `x`: The position to draw the object (x-axis).
* `y`: The position to draw the object (y-axis).
* `angle`: Orientation (radians).
* `sx`: Scale factor (x-axis).
* `sy`: Scale factor (y-axis).
* `ox`: Origin offset (x-axis).
* `oy`: Origin offset (y-axis).
* `kx`: Shearing factor (x-axis).
* `ky`: Shearing factor (y-axis).





------------------------------------------------
#### Love.Graphics.Print(System.String,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)

`Summary`

Draws text on screen. If no Font is set, one will be created and set (once) if needed.
            As of LOVE 0.7.1, when using translation and scaling functions while drawing text, this function assumes the scale occurs first. If you don't script with this in mind, the text won't be in the right position, or possibly even on screen.
            Love.Graphics.Print and Love.Graphics.Printf both support UTF-8 encoding. You'll also need a proper Font for special characters.


`Arguments`

* `text`: The text to draw.
* `x`: The position to draw the object (x-axis).
* `y`: The position to draw the object (y-axis).
* `angle`: Orientation (radians).
* `sx`: Scale factor (x-axis).
* `sy`: Scale factor (y-axis).
* `ox`: Origin offset (x-axis).
* `oy`: Origin offset (y-axis).
* `kx`: Shearing factor (x-axis).
* `ky`: Shearing factor (y-axis).





------------------------------------------------
#### Love.Graphics.Print(Love.ColoredStringArray,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)

`Summary`

Same as Love.Graphics.Print(string...), but coloredStr used to show text in different color.


`Arguments`

* `coloredStr`: colors and strings 





------------------------------------------------
#### Love.Graphics.Rectangle(Love.DrawMode,System.Single,System.Single,System.Single,System.Single)

`Summary`

Draws a rectangle.


`Arguments`

* `mode_type`: How to draw the rectangle.
* `x`: The position of top-left corner along the x-axis.
* `y`: The position of top-left corner along the y-axis.
* `w`: Width of the rectangle.
* `h`: Height of the rectangle.





------------------------------------------------
#### Love.Graphics.Rectangle(Love.DrawMode,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Int32)

`Summary`

Draws a rectangle with rounded corners.


`Arguments`

* `mode_type`: How to draw the rectangle.
* `x`: The position of top-left corner along the x-axis.
* `y`: The position of top-left corner along the y-axis.
* `w`: Width of the rectangle.
* `h`: Height of the rectangle.
* `rx`: The x-axis radius of each round corner. Cannot be greater than half the rectangle's width.
* `ry`: The y-axis radius of each round corner. Cannot be greater than half the rectangle's height.
* `points`: The number of segments used for drawing the round corners. A default amount will be chosen if no number is given.





------------------------------------------------
#### Love.Graphics.Circle(Love.DrawMode,System.Single,System.Single,System.Single,System.Int32)

`Summary`

Draws a circle.


`Arguments`

* `mode_type`: How to draw the circle.
* `x`: The position of the center along x-axis.
* `y`: The position of the center along y-axis.
* `radius`: The radius of the circle.
* `points`: The number of segments used for drawing the circle. Note: The default variable for the segments parameter varies between different versions of LÖVE.





------------------------------------------------
#### Love.Graphics.Ellipse(Love.DrawMode,System.Single,System.Single,System.Single,System.Single,System.Int32)

`Summary`

Draws an ellipse.


`Arguments`

* `mode_type`: How to draw the ellipse.
* `x`: he position of the center along x-axis.
* `y`: he position of the center along y-axis.
* `radiusX`: The radius of the ellipse along the x-axis (half the ellipse's width).
* `radiusY`: The radius of the ellipse along the y-axis (half the ellipse's height).
* `points`: The number of segments used for drawing the ellipse.





------------------------------------------------
#### Love.Graphics.Points(Love.Vector2[])

`Summary`

Draws one or more points.


`Arguments`

* `coords`: The position of the each point





------------------------------------------------
#### Love.Graphics.Line(Love.Vector2[])

`Summary`

Draws lines between points.


`Arguments`

* `coords`: A array of point positions.





------------------------------------------------
#### Love.Graphics.Polygon(Love.DrawMode,Love.Vector2[])

`Summary`

Draw a polygon.
            When in fill mode, the polygon must be convex and simple or rendering artifacts may occur. Love.Mathf.Triangulate and Love.Mathf.IsConvex can be used in 0.9.0+.


`Arguments`

* `mode_type`: How to draw the polygon.
* `coords`: The vertices of the polygon.





------------------------------------------------
#### Love.Graphics.GetDPIScale

`Summary`

Gets the DPI scale factor of the window.
            The DPI scale factor represents relative pixel density. The pixel density inside the window might be greater (or smaller) than the "size" of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.graphics.getDPIScale() would return 2 in that case.
            The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units.
            The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.






------------------------------------------------
#### Love.Graphics.GetWidth

`Summary`

Gets the width in pixels of the window.






------------------------------------------------
#### Love.Graphics.GetHeight

`Summary`

Gets the height in pixels of the window.






------------------------------------------------
#### Love.Graphics.GetSupported(Love.Feature)

`Summary`

Gets the optional graphics features and whether they're supported.


`Arguments`

* `feature_type`: 





------------------------------------------------
#### Love.Graphics.GetCanvasFormats(Love.PixelFormat)

`Summary`

Gets the available Canvas formats, and whether each is supported.


`Arguments`

* `format_type`: 





------------------------------------------------
#### Love.Graphics.GetRendererInfo(System.String@,System.String@,System.String@,System.String@)

`Summary`

Gets information about the system's video card and drivers.
             Almost everything returned by this function is highly dependent on the system running the code and should probably not be used to make run-time decisions


`Arguments`

* `name`: The name of the renderer, e.g. "OpenGL" or "OpenGL ES".
* `version`: The version of the renderer with some extra driver-dependent version info, e.g. "2.1 INTEL-8.10.44".
* `vendor`: The name of the graphics card vendor, e.g. "Intel Inc".
* `device`: The name of the graphics card, e.g. "Intel HD Graphics 3000 OpenGL Engine".





------------------------------------------------
#### Love.Graphics.GetSystemLimits(Love.Graphics.SystemLimit)

`Summary`

Gets the system-dependent maximum values for love.graphics features.


`Arguments`

* `limit_type`: 





------------------------------------------------
#### Love.Graphics.GetStats(System.Int32@,System.Int32@,System.Int32@,System.Int32@,System.Int32@,System.Int32@,System.Int32@)

`Summary`

Gets performance-related rendering statistics.
            	The per-frame metrics (drawcalls, canvasswitches, shaderswitches) are reset by love.graphics.present, which for the default implementation of [Love.Boot](/module/Love.Boot?id=lovebootrunlovescenelovebootconfig) is called right after the execution of Scene.Draw. Therefore this function should probably be called at the end of Scene.Draw.


`Arguments`

* `out_drawCalls`: The number of draw calls made so far during the current frame.
* `out_canvasSwitches`: The number of times the active Canvas has been switched so far during the current frame.
* `out_shaderSwitches`: The number of times the active Shader has been changed so far during the current frame.
* `out_canvases`: The number of Canvas objects currently loaded.
* `out_images`: The number of Image objects currently loaded.
* `out_fonts`: The number of Font objects currently loaded.
* `out_textureMemory`: The estimated total size in bytes of video memory used by all loaded Images, Canvases, and Fonts.





