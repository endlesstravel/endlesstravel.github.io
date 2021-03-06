![](/img/logo.png)
> [Love2dCS](https://github.com/endlesstravel/Love2dCS) is a C# wrapper for [LÖVE](https://love2d.org/), an awesome game framework. You can use it in your C#-based applications. (This document is still in the works.)

> Love2dCS was designed to be as close as possible to the original [LÖVE API](https://love2d.org/wiki/), as such [the documentation provided from LÖVE]((https://love2d.org/wiki/)) largely covers usage of Love2dCS.

## 🖥 Compatible table
|                     |widnows-x86/x64|  MacOS-x64    |ubuntu-16-x64  |ubuntu-18-x64  |ubuntu-19-x64  |
|---------------------|---------------|---------------|---------------|---------------|---------------|
|.net standard 1.0    |√              |√              |√              |√              |√              |
|.NET Framework 4.5.1+|√              |               |               |               |               |
|Mono 4.6+            |?              |?              |?              |?              |?              |
|.dotnet core 2.0+    |√              |√              |√              |√              |?              |

## 🎫 Function Modules

|module              | description                      |
|:-------------------|:-----------------------------------|
|[Love.Audio](/module/Love.Audio.md)  |Provides an interface to output sound to the user's speakers.
|[Love.Event](/module/Love.Event.md)	|Manages events, like key presses.
|[Love.Filesystem](/module/Love.Filesystem.md)	|Provides an interface to the user's filesystem.
|[Love.Font](/module/Love.Font.md)	|Allows you to work with fonts.
|[Love.Graphics](/module/Love.Graphics.md)	|Drawing of shapes and images, management of screen geometry.
|[Love.Image](/module/Love.Image.md)	|Provides an interface to decode encoded image data.
|[Love.Joystick](/module/Love.Joystick.md)	|Provides an interface to connected joysticks.
|[Love.Keyboard](/module/Love.Keyboard.md)	|Provides an interface to the user's keyboard.
|[Love.Mathf](/module/Love.Mathf.md)	|Provides system-independent mathematical functions.
|[Love.Mouse](/module/Love.Mouse.md)	|Provides an interface to the user's mouse.
|[Love.Sound](/module/Love.Sound.md)	|This module is responsible for decoding sound files.
|[Love.Timer](/module/Love.Timer.md)	|Provides high-resolution timing functionality.
|[Love.Touch](/module/Love.Touch.md)	|Provides an interface to touch-screen presses.
|[Love.Video](/module/Love.Video.md)	|This module is responsible for decoding and streaming video files.
|[Love.Window](/module/Love.Window.md)	|Provides an interface for the program's window.
|[Love.Resource](/module/Love.Resource.md) |save/load data utils
|[Love.Misc.Moonshine](/module/Love.Misc.Moonshine.md) |A post-processing effect repository for LÖVE.
|[Love.Misc.FPSGraph](/module/Love.Misc.FPSGraph.md) |A small FPS graphing utility for LÖVE.


> It’s pretty easy to get started with LÖVE! Just check out these code snippets.

🆚 Drawing text
```C#
    using Love;
    class TestScene : Scene
    {
        public override void Draw()
        {
            Graphics.Print("Hello, World!", 400, 300);
        }

        static void Main(string[] args)
        {
            Boot.Init();
            Boot.Run(new TestScene());
        }
    }
```

🖼 Drawing an image
```C#
    using Love;
    class TestScene : Scene
    {
        Image image = Graphics.NewImage("test.png");

        public override void Draw()
        {
            Graphics.Draw(image, 300, 200);
        }

        static void Main(string[] args)
        {
            Boot.Init();
            Boot.Run(new TestScene());
        }
    }
```


🎶 Playing a sound
```C#
    using Love;
    class TestScene : Scene
    {
        Source source = Audio.NewSource("test.mp3", SourceType.Stream);

        public override void Load()
        {
            source.Play();
        }

        static void Main(string[] args)
        {
            Boot.Init();
            Boot.Run(new TestScene());
        }
    }
```