![](/img/logo.png) 
    
> Love2dCS is a C# Wrapper for LÖVE game engine, it can be used your C# based Application.

> It’s pretty easy to get started with LÖVE, just check out these code snippets.

Drawing text
```C#
    using Love;
    class TestScene : Scene
    {
        public override void Draw()
        {
            Graphics.Print("Hello World!", 400, 300);
        }

        static void Main(string[] args)
        {
            Boot.Init();
            Boot.Run(new TestScene());
        }
    }
```

Drawing an image
```C#
    using Love;
    class TestScene : Scene
    {
        Image image = Resource.NewImage("test.png");

        public override void Draw()
        {
            Graphics.Draw(image);
        }

        static void Main(string[] args)
        {
            Boot.Init();
            Boot.Run(new TestScene());
        }
    }
```


Playing a sound
```C#
    using Love;
    class TestScene : Scene
    {
        Source source = Resource.NewSource("test.mp3", SourceType.Static);

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