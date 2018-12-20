
# Love.Image
> Provides an interface to decode encoded image data.

------------------------------------------------
#### Love.Image.NewImageData(System.String)

`Summary`: Creates a new [Love.Image](/module/Love.Image?id=loveimagedata) object.


`Arguments`

* `filename`: The filename of the image file.


`Returns`

The new ImageData object.




------------------------------------------------
#### Love.Image.NewCompressedData(System.String)

`Summary`: Create a new [undefined](/module/undefined?id=lovecompressedimagedata) object from a compressed image file. LÖVE supports several compressed texture formats, enumerated in the [Love.Pixel](/module/Love.Pixel?id=lovepixelformat) page.


`Arguments`

* `filename`: The filename of the compressed image file.


`Returns`

The new CompressedImageData object.




------------------------------------------------
#### Love.Image.NewImageData(Love.Vector4[0:,0:],Love.ImageDataPixelFormat)

`Summary`: Creates a new ImageData object.
             Vector4[x, y] - new Vector4(0.1f, 0.2f, 0.3f, 0.4f)


`Arguments`

* `rawData`: color data to set
* `format`: The pixel format of the ImageData.





------------------------------------------------
#### Love.Image.NewImageData(Love.Vector4[][],Love.ImageDataPixelFormat)

`Summary`: Creates a new ImageData object.


`Arguments`

* `rawData`: Optional raw byte data to load into the ImageData, in the format specified by format.
* `format`: The pixel format of the ImageData.





------------------------------------------------
#### Love.Image.IsCompressed(System.String)

`Summary`: Determines whether a file can be loaded as [undefined](/module/undefined?id=lovecompressedimagedata).


`Arguments`

* `filename`: The filename of the potentially compressed image file.


`Returns`

Whether the file can be loaded as [undefined](/module/undefined?id=lovecompressedimagedata) or not.




------------------------------------------------
#### Love.Image.NewImageData(System.UInt32,System.UInt32,Love.ImageDataPixelFormat,System.Byte[])

`Summary`: Creates a new [Love.Image](/module/Love.Image?id=loveimagedata) object.


`Arguments`

* `w`: The width of the ImageData.
* `h`: The height of the ImageData.
* `format`: The pixel format of the ImageData.
* `data`: Optional raw byte data to load into the ImageData, in the format specified by format.





------------------------------------------------
#### Love.Image.NewImageData(System.Int32,System.Int32,Love.ImageDataPixelFormat,System.Byte[])

`Summary`: Creates a new [Love.Image](/module/Love.Image?id=loveimagedata) object.


`Arguments`

* `w`: The width of the ImageData.
* `h`: The height of the ImageData.
* `format`: The pixel format of the ImageData.
* `data`: Optional raw byte data to load into the ImageData, in the format specified by format.





------------------------------------------------
#### Love.Image.NewImageData(Love.FileData)

`Summary`: Creates a new [Love.Image](/module/Love.Image?id=loveimagedata) object.


`Arguments`

* `data`: The encoded file data to decode into image data.





------------------------------------------------
#### Love.Image.NewCompressedData(Love.FileData)

`Summary`: Create a new [undefined](/module/undefined?id=lovecompressedimagedata) object from a compressed image file. LÖVE supports several compressed texture formats, enumerated in the [Love.Pixel](/module/Love.Pixel?id=lovepixelformat) page.


`Arguments`

* `data`: A FileData containing a compressed image.


`Returns`

The new CompressedImageData object.




------------------------------------------------
#### Love.Image.IsCompressed(Love.FileData)

`Summary`: Determines whether a file can be loaded as [undefined](/module/undefined?id=lovecompressedimagedata).


`Arguments`

* `data`: A FileData potentially containing a compressed image.


`Returns`

Whether the file can be loaded as [undefined](/module/undefined?id=lovecompressedimagedata) or not.




------------------------------------------------
#### Love.Image.#ctor

`Summary`: disable construct






------------------------------------------------
#### Love.Image.IsCompressed

`Summary`: Gets whether the Image was created from [undefined](/module/undefined?id=lovecompressedimagedata).






------------------------------------------------
#### Love.Image.ReplacePixels(Love.ImageData,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)

`Summary`: Replace the contents of an Image.


`Arguments`

* `imageData`: The new ImageData to replace the contents with.
* `slice`: Which cubemap face, array index, or volume layer to replace, if applicable.
* `mipmap`: The mimap level to replace, if the Image has mipmaps.
* `x`: The x-offset in pixels from the top-left of the image to replace. The given ImageData's width plus this value must not be greater than the pixel width of the Image's specified mipmap level.
* `y`: The y-offset in pixels from the top-left of the image to replace. The given ImageData's height plus this value must not be greater than the pixel height of the Image's specified mipmap level.
* `reloadmipmaps`: Whether to generate new mipmaps after replacing the Image's pixels. True by default if the Image was created with automatically generated mipmaps, false by default otherwise.





------------------------------------------------
#### Love.ImageData.MapPixel(Love.ImageData.MapPixelColorDelegate)

`Summary`: Transform an image by applying a function to every pixel. 
             This function is a higher-order function(https://en.wikipedia.org/wiki/Higher-order_function). It takes another function as a parameter, and calls it once for each pixel in the ImageData. 
            The passed function is called with six parameters for each pixel in turn. The parameters are numbers that represent the x and y coordinates of the pixel and its red, green, blue and alpha values. The function should return the new red, green, blue, and alpha values for that pixel.


`Arguments`

* `func`: Function to apply to every pixel.





------------------------------------------------
#### Love.ImageData.MapPixel(Love.ImageData.MapPixelColorDelegate,System.Int32,System.Int32,System.Int32,System.Int32)

`Summary`: Transform an image by applying a function to every pixel. 
             This function is a higher-order function(https://en.wikipedia.org/wiki/Higher-order_function). It takes another function as a parameter, and calls it once for each pixel in the ImageData. 
            The passed function is called with six parameters for each pixel in turn. The parameters are numbers that represent the x and y coordinates of the pixel and its red, green, blue and alpha values. The function should return the new red, green, blue, and alpha values for that pixel.


`Arguments`

* `func`: Function to apply to every pixel.
* `sx`: The x-axis of the top-left corner of the area within the ImageData to apply the function to.
* `sy`: The y-axis of the top-left corner of the area within the ImageData to apply the function to.
* `w`: The width of the area within the ImageData to apply the function to.
* `h`: The height of the area within the ImageData to apply the function to.





------------------------------------------------
#### Love.ImageData.MapPixel(Love.ImageData.MapPixelDelegate,System.Int32,System.Int32,System.Int32,System.Int32)

`Summary`: Advance version of [Love.Image](/module/Love.Image?id=loveimagedatamappixelloveimagedatamappixelcolordelegatesystemint32systemint32systemint32systemint32),
            if you don't know how to handle pixel format, please use [Love.Image](/module/Love.Image?id=loveimagedatamappixelloveimagedatamappixelcolordelegatesystemint32systemint32systemint32systemint32) 
            if you need speed, consider use [Love.Image](/module/Love.Image?id=loveimagedatasetpixelslovepixel)


`Arguments`

* `func`: Function to apply to every pixel.
* `sx`: The x-axis of the top-left corner of the area within the ImageData to apply the function to.
* `sy`: The y-axis of the top-left corner of the area within the ImageData to apply the function to.
* `w`: The width of the area within the ImageData to apply the function to.
* `h`: The height of the area within the ImageData to apply the function to.





------------------------------------------------
#### Love.ImageData.MapPixel(Love.ImageData.MapPixelDelegate)

`Summary`: Advance version of [Love.Image](/module/Love.Image?id=loveimagedatamappixelloveimagedatamappixelcolordelegatesystemint32systemint32systemint32systemint32),
            if you don't know how to handle pixel format, please use [Love.Image](/module/Love.Image?id=loveimagedatamappixelloveimagedatamappixelcolordelegatesystemint32systemint32systemint32systemint32) 
            if you need speed, consider use [Love.Image](/module/Love.Image?id=loveimagedatasetpixelslovepixel)


`Arguments`

* `func`: Function to apply to every pixel.





------------------------------------------------
#### Love.ImageData.GetPixels

`Summary`: get every pixel






------------------------------------------------
#### Love.ImageData.GetPixelsFloat

`Summary`: get every pixel, as Float4 format






------------------------------------------------
#### Love.ImageData.SetPixels(Love.Pixel[])

`Summary`: set every pixel with given data


`Arguments`

* `data`: 





------------------------------------------------
#### Love.ImageData.SetPixelsFloat(Love.Vector4[])

`Summary`: set every pixel with given data, function will convert Float4 to correct pixel format automatically


`Arguments`

* `data`: color data to set





------------------------------------------------
#### Love.ImageData.#ctor

`Summary`: disable construct






------------------------------------------------
#### Love.ImageData.GetWidth

`Summary`: Gets the width of the ImageData in pixels.






------------------------------------------------
#### Love.ImageData.GetHeight

`Summary`: Gets the height of the ImageData in pixels.






------------------------------------------------
#### Love.ImageData.GetPixel(System.Int32,System.Int32)

`Summary`: Gets the color of a pixel at a specific position in the image.


`Arguments`

* `x`: The position of the pixel on the x-axis.
* `y`: The position of the pixel on the y-axis.





------------------------------------------------
#### Love.ImageData.SetPixel(System.Int32,System.Int32,Love.Pixel)

`Summary`: Sets the color of a pixel at a specific position in the image.


`Arguments`

* `x`: The position of the pixel on the x-axis.
* `y`: The position of the pixel on the y-axis.
* `pixel`: 





------------------------------------------------
#### Love.ImageData.GetFormat

`Summary`: Gets the pixel format of the ImageData.






------------------------------------------------
#### Love.ImageData.Paste(Love.ImageData,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)

`Summary`: Paste into ImageData from another source ImageData.


`Arguments`

* `src_imageData`: Source ImageData from which to copy.
* `dx`: Destination top-left position on x-axis.
* `dy`: Destination top-left position on y-axis.
* `sx`: Source top-left position on x-axis.
* `sy`: Source top-left position on y-axis.
* `sw`: Source width.
* `sh`: Source height.





------------------------------------------------
#### Love.ImageData.Encode(Love.ImageFormat,System.Boolean,System.Byte[])

`Summary`: Encodes the ImageData and optionally writes it to the save directory.


`Arguments`

* `format_type`: The format to encode the image as.
* `writeToFile`: Whether to write to the specified file
* `filename`: The filename to write the file to. If null, no file will be written but the FileData will still be returned.





------------------------------------------------
#### Love.ImageData.Encode(Love.ImageFormat,System.String)

`Summary`: Encodes the ImageData and optionally writes it to the save directory.


`Arguments`

* `format_type`: The format to encode the image as.
* `filename`: The filename to write the file to. If null, no file will be written but the FileData will still be returned.





------------------------------------------------
#### Love.ImageDataBase.#ctor

`Summary`: disable construct






