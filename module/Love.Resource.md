
# Love.Resource
> save/load data utils

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
             


