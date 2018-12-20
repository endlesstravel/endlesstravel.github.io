
# Love.Mathf
> 

------------------------------------------------
#### Love.Mathf.Random(System.Single,System.Single)

`Summary`: Get uniformly distributed pseudo-random integer within [min, max].


`Arguments`

* `min`: The minimum possible value it should return.
* `max`: The maximum possible value it should return.





------------------------------------------------
#### Love.Mathf.Random

`Summary`: Get uniformly distributed pseudo-random real number within [0, 1].






------------------------------------------------
#### Love.Mathf.NewRandomGenerator

`Summary`: Creates a new RandomGenerator object.






------------------------------------------------
#### Love.Mathf.NewBezierCurve(Love.Vector2[])

`Summary`: Creates a new BezierCurve object.
            The number of vertices in the control polygon determines the degree of the curve, e.g. three vertices define a quadratic (degree 2) Bézier curve, four vertices define a cubic (degree 3) Bézier curve, etc.


`Arguments`

* `points`: 





------------------------------------------------
#### Love.Mathf.Triangulate(Love.Vector2[])

`Summary`: Decomposes a simple polygon into triangles.


`Arguments`

* `points`: Polygon to triangulate. Must not intersect itself.





------------------------------------------------
#### Love.Mathf.IsConvex(Love.Vector2[])

`Summary`: Checks whether a polygon is convex.
            PolygonShapes in love.physics, some forms of Meshes, and polygons drawn with love.graphics.polygon must be simple convex polygons.


`Arguments`

* `points`: The vertices of the polygon as a table in the form of {(x1, y1), (x2, y2), (x3, y3), ...}.


`Returns`

Whether the given polygon is convex.




------------------------------------------------
#### Love.Mathf.GammaToLinear(System.Single)

`Summary`: Converts a color from gamma-space (sRGB) to linear-space (RGB).
            This is useful when doing gamma-correct rendering and you need to do math in linear RGB in the few cases where LÖVE doesn't handle conversions automatically.
            Read more about gamma-correct rendering here(https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch24.html), here(http://filmicgames.com/archives/299), and here(http://renderwonk.com/blog/index.php/archive/adventures-with-gamma-correct-rendering/).


`Arguments`

* `gama`: The sRGB color to convert.


`Returns`

The color in gamma RGB space.




------------------------------------------------
#### Love.Mathf.LinearToGamma(System.Single)

`Summary`: Converts a color from linear-space (RGB) to gamma-space (sRGB). This is useful when storing linear RGB color values in an image, because the linear RGB color space has less precision than sRGB for dark colors, which can result in noticeable color banding when drawing.
            Read more about gamma-correct rendering here(https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch24.html), here(http://filmicgames.com/archives/299), and here(http://renderwonk.com/blog/index.php/archive/adventures-with-gamma-correct-rendering/).


`Arguments`

* `liner`: The RGB color to convert.


`Returns`

The color in gamma sRGB space.




------------------------------------------------
#### Love.Mathf.Noise(System.Single)

`Summary`: Generates Simplex noise from 1 dimension.
            Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value will always be the same, given the same arguments.
            Simplex noise(http://en.wikipedia.org/wiki/Simplex_noise) is closely related to Perlin noise(http://en.wikipedia.org/wiki/Perlin_noise). It is widely used for procedural content generation.
            There are many webpages(http://libnoise.sourceforge.net/noisegen/) which discuss Perlin and Simplex noise in detail.
            The return value might be constant if only integer arguments are used. Avoid solely passing in integers, to get varying return values.


`Arguments`

* `x`: The number used to generate the noise value.


`Returns`

The noise value in the range of [0, 1].




------------------------------------------------
#### Love.Mathf.Noise(System.Single,System.Single)

`Summary`: Generates Simplex noise from 2 dimension.
            Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value will always be the same, given the same arguments.
            Simplex noise(http://en.wikipedia.org/wiki/Simplex_noise) is closely related to Perlin noise(http://en.wikipedia.org/wiki/Perlin_noise). It is widely used for procedural content generation.
            There are many webpages(http://libnoise.sourceforge.net/noisegen/) which discuss Perlin and Simplex noise in detail.
            The return value might be constant if only integer arguments are used. Avoid solely passing in integers, to get varying return values.


`Arguments`

* `x`: The first value of the 2-dimensional vector used to generate the noise value.
* `y`: The second value of the 2-dimensional vector used to generate the noise value.


`Returns`

The noise value in the range of [0, 1].




------------------------------------------------
#### Love.Mathf.Noise(System.Single,System.Single,System.Single)

`Summary`: Generates Simplex noise from 3 dimension.
            Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value will always be the same, given the same arguments.
            Simplex noise(http://en.wikipedia.org/wiki/Simplex_noise) is closely related to Perlin noise(http://en.wikipedia.org/wiki/Perlin_noise). It is widely used for procedural content generation.
            There are many webpages(http://libnoise.sourceforge.net/noisegen/) which discuss Perlin and Simplex noise in detail.
            The return value might be constant if only integer arguments are used. Avoid solely passing in integers, to get varying return values.


`Arguments`

* `x`: The first value of the 3-dimensional vector used to generate the noise value.
* `y`: The second value of the 3-dimensional vector used to generate the noise value.
* `z`: The third value of the 3-dimensional vector used to generate the noise value.


`Returns`

The noise value in the range of [0, 1].




------------------------------------------------
#### Love.Mathf.Noise(System.Single,System.Single,System.Single,System.Single)

`Summary`: Generates Simplex noise from 4 dimension.
            Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value will always be the same, given the same arguments.
            Simplex noise(http://en.wikipedia.org/wiki/Simplex_noise) is closely related to Perlin noise(http://en.wikipedia.org/wiki/Perlin_noise). It is widely used for procedural content generation.
            There are many webpages(http://libnoise.sourceforge.net/noisegen/) which discuss Perlin and Simplex noise in detail.
            The return value might be constant if only integer arguments are used. Avoid solely passing in integers, to get varying return values.


`Arguments`

* `x`: The first value of the 4-dimensional vector used to generate the noise value.
* `y`: The second value of the 4-dimensional vector used to generate the noise value.
* `z`: The third value of the 4-dimensional vector used to generate the noise value.
* `w`: The fourth value of the 4-dimensional vector used to generate the noise value.


`Returns`

The noise value in the range of [0, 1].




------------------------------------------------
#### Love.Mathf.Abs(System.Int32)

`Summary`: Returns the absolute value of a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Abs(System.Single)

`Summary`: Returns the absolute value of a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Acos(System.Single)

`Summary`: Returns the arc-cosine of a - the angle in radians whose cosine is a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Approximately(System.Single,System.Single)

`Summary`: Returns if the two values are approximately close to eachother


`Arguments`

* `a`: First value
* `b`: Second value





------------------------------------------------
#### Love.Mathf.Asin(System.Single)

`Summary`: Returns the arc-sine of a - the angle in radians whose sine is a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Atan(System.Single)

`Summary`: Returns the arc-tangent of a - the angle in radians whose tangent is a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Atan2(System.Single,System.Single)

`Summary`: Returns the angle in radians whose Tan is y/x.


`Arguments`

* `y`: The y value
* `x`: The x value





------------------------------------------------
#### Love.Mathf.Ceil(System.Single)

`Summary`: Returns the smallest integer greater to or equal to a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.CeilToInt(System.Single)

`Summary`: Returns the smallest integer greater to or equal to a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Clamp(System.Int32,System.Int32,System.Int32)

`Summary`: Clamps a value between a minimum int and maximum int value.


`Arguments`

* `value`: The value
* `min`: The minimum value
* `max`: The maximum value





------------------------------------------------
#### Love.Mathf.Clamp(System.Single,System.Single,System.Single)

`Summary`: Clamps a value between a minimum float and maximum float value.


`Arguments`

* `value`: The value
* `min`: The minimum value
* `max`: The maximum value





------------------------------------------------
#### Love.Mathf.Clamp01(System.Single)

`Summary`: Clamps value between 0 and 1 and returns value.


`Arguments`

* `value`: The value





------------------------------------------------
#### Love.Mathf.ClosestPowerOfTwo(System.Int32)

`Summary`: Returns the closest power of two to a value.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Cos(System.Single)

`Summary`: Returns the cosine of angle f in radians.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Exp(System.Single)

`Summary`: Returns e raised to the specified power.


`Arguments`

* `power`: The power





------------------------------------------------
#### Love.Mathf.Floor(System.Single)

`Summary`: Returns the largest integer smaller to or equal to a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.FloorToInt(System.Single)

`Summary`: Returns the largest integer smaller to or equal to a.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.IsPowerOfTwo(System.Int32)

`Summary`: Returns if the value is powered by two.


`Arguments`

* `value`: A value





------------------------------------------------
#### Love.Mathf.Lerp(System.Single,System.Single,System.Single)

`Summary`: Interpolates between from and to by t. t is clamped between 0 and 1.


`Arguments`

* `from`: The from value
* `to`: The to value
* `t`: The t value





------------------------------------------------
#### Love.Mathf.Log(System.Single)

`Summary`: Returns the natural (base e) logarithm of a specified value.


`Arguments`

* `value`: The value





------------------------------------------------
#### Love.Mathf.Log10(System.Single)

`Summary`: Returns the base 10 logarithm of a specified value.


`Arguments`

* `value`: The value





------------------------------------------------
#### Love.Mathf.Max(System.Int32,System.Int32)

`Summary`: Returns the largest of two integer values.


`Arguments`

* `a`: First value
* `b`: Second value





------------------------------------------------
#### Love.Mathf.Max(System.Single,System.Single)

`Summary`: Returns the largest of two float values.


`Arguments`

* `a`: First value
* `b`: Second value





------------------------------------------------
#### Love.Mathf.Max(System.Int32[])

`Summary`: Returns the largest of a set of integer values.


`Arguments`

* `values`: The set of values





------------------------------------------------
#### Love.Mathf.Max(System.Single[])

`Summary`: Returns the largest of a set of float values.


`Arguments`

* `values`: The set of values





------------------------------------------------
#### Love.Mathf.Min(System.Int32,System.Int32)

`Summary`: Returns the smaller of two integer values.


`Arguments`

* `a`: First value
* `b`: Second value





------------------------------------------------
#### Love.Mathf.Min(System.Single,System.Single)

`Summary`: Returns the smaller of two float values.


`Arguments`

* `a`: First value
* `b`: Second value





------------------------------------------------
#### Love.Mathf.NextPowerOfTwo(System.Int32)

`Summary`: Get the next power of two after a value.


`Arguments`

* `a`: The value





------------------------------------------------
#### Love.Mathf.Pow(System.Single,System.Single)

`Summary`: Returns f raised to power p.


`Arguments`

* `f`: The value to raise
* `p`: The power





------------------------------------------------
#### Love.Mathf.RoughlyEqual(System.Single,System.Single,System.Single)

`Summary`: Compares two floating point values if they are similar.


`Arguments`

* `a`: First value
* `b`: Second value
* `threshold`: The threshold of similarity


`Returns`

True if the values are similar, otherwise false.




------------------------------------------------
#### Love.Mathf.Round(System.Single)

`Summary`: Returns f rounded to the nearest integer.


`Arguments`

* `f`: The value





------------------------------------------------
#### Love.Mathf.Round(System.Single,System.Int32)

`Summary`: Rounds a floating-point value to a specified number of fractional digits.


`Arguments`

* `f`: The value
* `decimals`: The number of fractional digits to round to





------------------------------------------------
#### Love.Mathf.Round(System.Single,System.Int32,System.MidpointRounding)

`Summary`: Rounds a floating-point value to a specified number of fractional digits. A parameter specifies how to round a value if it is midway between two other numbers.


`Arguments`

* `f`: The value
* `decimals`: The number of fractional digits to round to
* `mode`: The rounding mode to use





------------------------------------------------
#### Love.Mathf.RoundToInt(System.Single)

`Summary`: Returns f rounded to the nearest integer.


`Arguments`

* `f`: The value to round





------------------------------------------------
#### Love.Mathf.RoundToInt(System.Single,System.MidpointRounding)

`Summary`: Rounds a floating-point value. A parameter specifies how to round a value if it is midway between two other numbers.


`Arguments`

* `f`: The value
* `mode`: The rounding mode to use





------------------------------------------------
#### Love.Mathf.Sign(System.Single)

`Summary`: Returns the sign of f.


`Arguments`

* `f`: The value





------------------------------------------------
#### Love.Mathf.Sin(System.Single)

`Summary`: Returns the sine of angle f in radians.


`Arguments`

* `f`: The value





------------------------------------------------
#### Love.Mathf.Sqrt(System.Single)

`Summary`: Returns square root of f.


`Arguments`

* `f`: The value





------------------------------------------------
#### Love.Mathf.Tan(System.Single)

`Summary`: Returns the tangent of angle f in radians.


`Arguments`

* `f`: The value





------------------------------------------------
#### Love.Mathf.SmoothStep(System.Single,System.Single,System.Single)

`Summary`: Interpolates between min and max with smoothing at the limits.
            This function interpolates between min and max in a similar way to Lerp.
            However, the interpolation will gradually speed up from the start and slow down toward the end.
            This is useful for creating natural-looking animation, fading and other transitions.


`Arguments`

* `value1`: 
* `value2`: 
* `amount`: 





------------------------------------------------
#### Love.Mathf.CatmullRom(System.Single,System.Single,System.Single,System.Single,System.Single)

`Summary`: Using formula from http://www.mvps.org/directx/articles/catmull/


`Arguments`

* `value1`: 
* `value2`: 
* `value3`: 
* `value4`: 
* `amount`: 





