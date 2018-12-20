
# Love.Resource
> This module will create resource through starndard C# IO, 
            this means you can read a png file from path like C:/love-logo.png

------------------------------------------------
#### Love.Resource.NewSource(System.String,Love.SourceType)
Creates a new Source from file name. 
            

`Arguments`

* `filename`: The filepath to the audio file.
* `type`: Streaming or static source.





------------------------------------------------
#### Love.Resource.NewFileData(System.String)
Creates a new FileData object. This function will read file from standard C# IO File system.
            

`Arguments`

* `fileName`: file name, such as C:/love-logo.png 





------------------------------------------------
#### Love.Resource.Append(System.String,System.Byte[])
Append data to an existing file. 
            

`Arguments`

* `path`: The name (and path) of the file.
* `byteArray`: The data to append to the file.





------------------------------------------------
#### Love.Resource.Append(System.String,System.String)
Append data to an existing file. 
            

`Arguments`

* `path`: The name (and path) of the file.
* `content`: The string to append to the file.





------------------------------------------------
#### Love.Resource.Append(System.String,System.String,System.Text.Encoding)
Append data to an existing file. 
            

`Arguments`

* `path`: The name (and path) of the file.
* `content`: The string to append to the file.
* `encoding`: string encoding.





------------------------------------------------
#### Love.Resource.CreateDirectory(System.String)
Recursively creates a directory.
            When called with "a/b" it creates both "a" and "a/b", if they don't exist already.
            

`Arguments`

* `pathString`: The directory to create.


Returns: True if the directory was created, false if not.




------------------------------------------------
#### Love.Resource.GetDirectoryItems(System.String)
Returns a table with the names of files and subdirectories in the specified path. The array is not sorted in any way; the order is undefined.
            If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.
            

`Arguments`

* `path`: The directory.





------------------------------------------------
#### Love.Resource.GetInfo(System.String)
Gets information about the specified file or directory.
            

`Arguments`

* `path`: The file or directory path to check.





------------------------------------------------
#### Love.Resource.Lines(System.Action{System.String},System.String)
Iterate over the lines in a file.
            

`Arguments`

* `lineFunction`: 
* `path`: 





------------------------------------------------
#### Love.Resource.Read(System.String)
Read the all contents of a file.
            

`Arguments`

* `filename`: The name (and path) of the file.





------------------------------------------------
#### Love.Resource.Read(System.String,System.Int32)
Read the all contents of a file.
            

`Arguments`

* `filename`: The name (and path) of the file.
* `len`: How many bytes to read.





------------------------------------------------
#### Love.Resource.Remove(System.String)
Removes a file (or directory).
            

`Arguments`

* `path`: The file or directory to remove.





------------------------------------------------
#### Love.Resource.Write(System.String,System.Byte[])
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
            

`Arguments`

* `path`: The name (and path) of the file.
* `bytes`: The data to write to the file.





------------------------------------------------
#### Love.Resource.Write(System.String,System.String)
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
            

`Arguments`

* `filename`: The name (and path) of the file.
* `contents`: The string data to write to the file.





------------------------------------------------
#### Love.Resource.Write(System.String,System.String,System.Text.Encoding)
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
            

`Arguments`

* `filename`: The name (and path) of the file.
* `contents`: The string data to write to the file.
* `encoding`: string encodeing





------------------------------------------------
#### Love.Resource.NewRasterizer(System.String)
Creates a new Rasterizer.
            

`Arguments`

* `filename`: The font file.


Returns: The rasterizer.




------------------------------------------------
#### Love.Resource.NewFont(System.String,System.Int32,Love.HintingMode)
Create a new TrueType font.
            

`Arguments`

* `filename`: The filepath to the TrueType font file.
* `size`: The size of the font in pixels.
* `hinting`: True Type hinting mode.


Returns: A Font object which can be used to draw text on screen.




------------------------------------------------
#### Love.Resource.NewBMFont(System.String,System.String[])


`Arguments`

* `filename`: The filepath to the BMFont file.
* `imageFileName`: The filepath to the BMFont's image file.





------------------------------------------------
#### Love.Resource.NewImage(System.String,System.Boolean,System.Boolean)
Creates a new Image from a filepath.
            

`Arguments`

* `filename`: The filepath to the image file .
* `flagMipmaps`: If true, mipmaps for the image will be automatically generated (or taken from the images's file if possible, if the image originated from a CompressedImageData). If this value is a table, it should contain a list of other filenames of images of the same format that have progressively half-sized dimensions, all the way down to 1x1. Those images will be used as this Image's mipmap levels.
* `flagLinear`: True if the image's pixels should be interpreted as being linear RGB rather than sRGB-encoded, if gamma-correct rendering is enabled. Has no effect otherwise.





------------------------------------------------
#### Love.Resource.NewImageFont(System.String,System.String,System.Int32)
Creates a new Font by loading a specifically formatted image.
            In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs string.
            	This function can be slow if it is called repeatedly, such as from Scene.Update. If you need to use a specific resource often, create it once and store it somewhere it can be reused!
            

`Arguments`

* `filename`: The filepath to the image file.
* `glyphs`: A string of the characters in the image in order from left to right.
* `extraspacing`: Additional spacing (positive or negative) to apply to each glyph in the Font.





------------------------------------------------
#### Love.Resource.NewImageData(System.String)
Creates a new [Love.ImageData](#loveimagedata) object.
            

`Arguments`

* `filename`: The filename of the image file.


Returns: The new ImageData object.




------------------------------------------------
#### Love.Resource.NewCompressedData(System.String)
Create a new [Love.CompressedImageData](#lovecompressedimagedata) object from a compressed image file. LÖVE supports several compressed texture formats, enumerated in the [Love.PixelFormat](#lovepixelformat) page.
            

`Arguments`

* `filename`: The filename of the compressed image file.


Returns: The new CompressedImageData object.




------------------------------------------------
#### Love.Resource.EncodeToFile(System.String,Love.ImageData,Love.ImageFormat)
Encodes the ImageData and writes it to the path.
             

`Arguments`

* `path`: The filename to write the file to.
* `imageData`: The imageData to write the file to. 
* `format`: The format to encode the image as.



Example:

Draw red rectangle to canvas, and presss F12 to save png file at 'D:/a.png'
```C#

             class TestSavePngNew : Scene
             {
                 Canvas canvas = null;
            
                 public override void Load()
                 {
                     canvas = Graphics.NewCanvas();
                 }
            
                 public override void KeyPressed(KeyConstant key, Scancode scancode, bool isRepeat)
                 {
                     if (key == KeyConstant.F12)
                     {
                         Resource.EncodeToFile("D:/a.png", canvas.NewImageData(), ImageFormat.PNG);
                     }
                 }
            
                 public override void Draw()
                 {
                     Graphics.SetCanvas(canvas);
                     Graphics.SetColor(Color.Red);
                     Graphics.Rectangle(DrawMode.Fill, 100, 200, 300, 400);
                     Graphics.SetCanvas();
            
                     Graphics.Draw(canvas);
                 }
             }
```
             



------------------------------------------------
#### Love.Resource.NewCursor(System.String,System.Int32,System.Int32)
Creates a new hardware Cursor object from an image file or ImageData.
            Hardware cursors are framerate-independent and work the same way as normal operating system cursors. Unlike drawing an image at the mouse's current coordinates, hardware cursors never have visible lag between when the mouse is moved and when the cursor position updates, even at low framerates.
            The hot spot is the point the operating system uses to determine what was clicked and at what position the mouse cursor is. For example, the normal arrow pointer normally has its hot spot at the top left of the image, but a crosshair cursor might have it in the middle.
            

`Arguments`

* `filename`: Path to the image to use for the new Cursor.
* `hotX`: The x-coordinate in the image of the cursor's hot spot.
* `hotY`: The y-coordinate in the image of the cursor's hot spot.





------------------------------------------------
#### Love.Resource.NewDecoder(System.String,System.Int32)
Attempts to find a decoder for the encoded sound data in the specified file.
            

`Arguments`

* `filename`: The filename of the file with encoded sound data.
* `bufferSize`: The size of each decoded chunk, in bytes.





------------------------------------------------
#### Love.Resource.NewSoundData(System.String)
Creates a new SoundData.
            It's also possible to create SoundData with a custom sample rate, channel and bit depth.
            The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.
            

`Arguments`

* `filename`: The file name of the file to load.


Returns: A new SoundData object.




