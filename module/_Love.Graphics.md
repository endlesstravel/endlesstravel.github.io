# Graphics
The primary responsibility for the Love.Graphics module is the drawing of lines, shapes, text, Images and other Drawable objects onto the screen. Its secondary responsibilities include loading external files (including Images and Fonts) into memory, creating specialized objects (such as ParticleSystems or Canvases) and managing screen geometry.

LÖVE's coordinate system is rooted in the upper-left corner of the screen, which is at location (0, 0). The x axis is horizontal: larger values are further to the right. The y axis is vertical: larger values are further towards the bottom. It is worth noting that the location (0, 0) aligns with the upper-left corner of the pixel as well, meaning that for some functions you may encounter off-by-one problems in the render output when drawing 1 pixel wide lines. You can try aligning the coordinate system with the center of pixels rather than their upper-left corner. Do this by passing x+0.5 and y+0.5 or using Love.Graphics.Translate().


![love coordinate system](https://love2d.org/w/images/f/f5/lovecoordsystem.png)

In many cases, you draw images or shapes in terms of their upper-left corner (See the picture above).


A note about angles in LÖVE: Angles are expressed in terms of radians, with values in the range of 0 to 2Π (approximately 6.28); you may be more used to working in terms of degrees. Because of how the coordinate system is set up, with an origin in the upper left corner, angles in LÖVE may seem a bit backwards: 0 points right (along the X axis), ¼Π points diagonally down and to the right, ½Π points directly down (along the Y axis), with increasing values continuing clockwise.


Many of the functions are used to manipulate the graphics coordinate system, which is essentially the way coordinates are mapped to the display. You can change the position, scale, and even change rotation in this way.

## Enums

### DrawMode 

Controls whether shapes are drawn as an outline, or filled.

* Line : Draw outlined shape.
* Fill : Draw filled shape.

### ArcType
![ArcType](https://love2d.org/w/images/2/29/arcs.png)

Different types of arcs that can be drawn.

* Pie : The arc is drawn like a slice of pie, with the arc circle connected to the center at its end-points.
* Open : The arc circle's two end-points are unconnected when the arc is drawn as a line. Behaves like the "closed" arc type when the arc is drawn in filled mode.
* Closed : The arc circle's two end-points are connected to each other.

## Drawing

### Love.Graphics.Arc(DrawMode mode_type, ArcType arcmode_type, float x, float y, float radius, float angle1, float angle2)

Draws a filled or unfilled arc at position (x, y). The arc is drawn from angle1 to angle2 in radians. The segments parameter determines how many segments are used to draw the arc. The more segments, the smoother the edge.

``` C#
Graphics.Arc( DrawMode.Fill, 400, 300, 100, 0, 3.141592f )
```

### Love.Graphics.Circle(DrawMode mode_type, float x, float y, float radius, int points = 10)

Draws a circle.

``` C#
Graphics.Circle(DrawMode.Fill, 300, 300, 50, 100)
```

### Love.Graphics.Discard(bool discardColor = true, bool discardStencil = true)

Discards (trashes) the contents of the screen or active Canvas. This is a performance optimization function with niche use cases.

If the active Canvas has just been changed and the "replace" BlendMode is about to be used to draw something which covers the entire screen, calling love.graphics.discard rather than calling love.graphics.clear or doing nothing may improve performance on mobile devices.

On some desktop systems this function may do nothing.
       
> This function effectively replaces the contents of the screen or active Canvas with garbage. Most BlendModes, including the default "alpha" blend mode, blend what's drawn with the contents of the screen - which would cause unexpected glitches if this function is used inappropriately.

``` C#
Graphics.Discard()
```
### Love.Graphics.Draw(Drawable drawable, float x, float y, float angle = 0, float sx = 1, float sy = 1, float ox = 0, float oy = 0, float kx = 0, float ky = 0)

Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh, Text object, or Video) on the screen with optional rotation, scaling and shearing.

Objects are drawn relative to their local coordinate system. The origin is by default located at the top left corner of Image and Canvas. All scaling, shearing, and rotation arguments transform the object relative to that point. Also, the position of the origin can be specified on the screen coordinate system.

It's possible to rotate an object about its center by offsetting the origin to the center. Angles must be given in radians for rotation. One can also use a negative scaling factor to flip about its centerline.

Note that the offsets are applied before rotation, scaling, or shearing; scaling and shearing are applied before rotation.

The right and bottom edges of the object are shifted at an angle defined by the shearing factors.

``` C#
class Program : Love.Scene
{
    Image hamster;

    public override void Load()
    {
       hamster = Graphics.NewImage("hamster.png");
    }

    public override void Draw()
    {
        Graphics.Draw(hamster, 100, 100)
    }

    static void Main(string[] args)
    {
        Boot.Run(new Program());
    }
}
```

### Love.Graphics.Ellipse(DrawMode mode_type, float x, float y, float radiusX, float radiusY, int points = 10)

Draws an ellipse.

``` C#
Graphics.Ellipse(DrawMode.Fill, 300, 300, 75, 50, 100) // Draw white ellipse with 100 segments.
```

### Love.Graphics.Line(params Float2[] coords)

Draws lines between points.

``` C#
Graphics.Line(new Float2(200, 50), new Float2(400, 50), new Float2(500, 300), new Float2(100, 300), new Float2(200, 50));
```

### Love.Graphics.Points(params Float2[] coords)

Draws one or more points.

``` C#
Graphics.Points(new Float2(200, 50), new Float2(400, 50), new Float2(500, 300), new Float2(100, 300), new Float2(200, 50));
```

### Love.Graphics.Polygon(DrawMode mode_type, params Float2[] coords)

Draw a polygon.

Following the mode argument, this function can accept multiple numeric arguments or a single table of numeric arguments. In either case the arguments are interpreted as alternating x and y coordinates of the polygon's vertices.

> When in fill mode, the polygon must be convex and simple or rendering artifacts may occur. Love.Mathf.Triangulate and Love.Mathf.IsConvex can be used in 0.9.0+.

``` C#
// Triangle drawn using Love.Graphics.Polygon
Graphics.Polygon(new Float2(100, 100), new Float2(200, 100), new Float2(150, 200)); 
```

### Love.Graphics.Present()

Displays the results of drawing operations on the screen.

This function is used when writing your own Boot.Run function. It presents all the results of your drawing operations on the screen. See the example in Boot.Run for a typical use of this function.

### Love.Graphics.Print(ColoredString.ColoredStringItem[] coloredStr, float x, float y, float angle = 0, float sx = 1, float sy = 1, float ox = 0, float oy = 0, float kx = 0, float ky = 0)

Draws formatted text, with word wrap and alignment.

See additional notes in love.graphics.print.

In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.

In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.

> Aligning does not work as one might expect! It doesn't align to the x/y coordinates given, but in a rectangle, where the limit is the width.

> Text may appear blurry if it's rendered at non-integer pixel locations.

### Love.Graphics.Printf(ColoredString.ColoredStringItem[] coloredStr, float x, float y, float wrap, Font.AlignMode align_type = Font.AlignMode.Left, float angle = 0, float sx = 1, float sy = 1, float ox = 0, float oy = 0, float kx = 0, float ky = 0)

Same as Love.Graphics.Print, but it has two different `arguments` wrap and `align_type`

align_type : 

wrap : Wrap the line after this many horizontal pixels.

### Love.Graphics.Rectangle(DrawMode mode_type, float x, float y, float w, float h)

Draws a rectangle.

``` C#
// Draws a rectangle at 20,50 with a width of 60 and a height of 120
Graphics.Rectangle(Graphics.DrawMode.Fill, 20, 50, 60, 120);
```
### Love.Graphics.Stencil(Action actionFunc, StencilAction stencilAction = StencilAction.Replace, int value = 1, bool keepValue = false)

Draws geometry as a stencil.

The geometry drawn by the supplied function sets invisible stencil values of pixels, instead of setting pixel colors. The stencil buffer (which contains those stencil values) can act like a mask / stencil - love.graphics.setStencilTest can be used afterward to determine how further rendering is affected by the stencil values in each pixel.

Stencil values are integers within the range of [0, 255].

> Starting with version 11.0, a stencil buffer must be set or requested in Love.Graphics.SetCanvas when using stencils with a Canvas. Love.Graphics.SetCanvas{canvas, stencil=true} is an easy way to use an automatically provided temporary stencil buffer in that case.

``` C#
void DrawStencil()
        {
            // draw a rectangle as a stencil. Each pixel touched by the rectangle will have its stencil value set to 1. The rest will be 0.
            Graphics.Stencil(() =>
            {
                Graphics.Rectangle(Graphics.DrawMode.Fill,
                    rectX - 150,
                    rectY - 155, 
                    350, 310);
            }, Graphics.StencilAction.Replace, 1);
            Graphics.SetStencilTest(Graphics.CompareMode.Greater, 0);

            float r = 30;
            for (float x = 0; x < 800f ; x += r * 2)
            {
                for (float y = 0; y < 600f; y += r * 2)
                {
                    Graphics.SetColor((int)x, (int)y, (int)((x + y)%255));
                    Graphics.Circle(Graphics.DrawMode.Fill, x, y, r);
                }
            }

            Graphics.SetStencilTest();
        }
```


***

**More information please reference [love.graphics wiki](https://love2d.org/wiki/love.graphics)**
