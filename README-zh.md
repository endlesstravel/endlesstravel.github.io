![](/img/logo.png)
> [Love2dCS](https://github.com/endlesstravel/Love2dCS) 是 [LÖVE](https://love2d.org/) 引擎的 C# 包装器。

> Love2dCS 设计上紧紧仿照于原始 [LÖVE API](https://love2d.org/wiki/) 定制, [LÖVE 引擎的文档百科]((https://love2d.org/wiki/))，大多数情况可以直接参考 LÖVE API 来使用

## 🖥 兼容表
|                     |widnows-x86/x64|  MacOS-x64    |ubuntu-16-x64  |ubuntu-18-x64  |ubuntu-19-x64  |
|---------------------|---------------|---------------|---------------|---------------|---------------|
|.net standard 1.0    |√              |√              |√              |√              |√              |
|.NET Framework 4.5.1+|√              |               |               |               |               |
|Mono 4.6+            |?              |?              |?              |?              |?              |
|.dotnet core 2.0+    |√              |√              |√              |√              |?              |

## 🎫 功能模块

|module              | description                      |
|:-------------------|:-----------------------------------|
|[Love.Audio](/module/Love.Audio.md)  | 提供声音输出接口
|[Love.Event](/module/Love.Event.md)	| 事件管理类
|[Love.Filesystem](/module/Love.Filesystem.md)	| 提供用户文件接口
|[Love.Font](/module/Love.Font.md)	| 提供字体相关
|[Love.Graphics](/module/Love.Graphics.md)	| 绘制图形图片，管理屏幕显示
|[Love.Image](/module/Love.Image.md)	| 为图像数据提供接口
|[Love.Joystick](/module/Love.Joystick.md)	| 提供控制器（手柄等）相关接口
|[Love.Keyboard](/module/Love.Keyboard.md)	| 提供键盘相关接口
|[Love.Mathf](/module/Love.Mathf.md)	| 独立的数学库
|[Love.Mouse](/module/Love.Mouse.md)	| 提供鼠标接口
|[Love.Sound](/module/Love.Sound.md)	| 播放声音的接口
|[Love.Timer](/module/Love.Timer.md)	| 时间相关接口
|[Love.Touch](/module/Love.Touch.md)	| 触屏相关接口
|[Love.Video](/module/Love.Video.md)	| 提供播放视频的接口
|[Love.Window](/module/Love.Window.md)	| 程序的窗口相关的接口
|[Love.Resource](/module/Love.Resource.md) | Love2dCS 特有的工具类
|[Love.Misc.Moonshine](/module/Love.Misc.Moonshine.md) | Love2dCS 特有的屏幕后处理类 LÖVE.
|[Love.Misc.FPSGraph](/module/Love.Misc.FPSGraph.md) | Love2dCS 特有的工具类，小巧的 LÖVE 帧数显示库.


>  使用 LÖVE 非常容易，请看下面的粒子

🆚 绘制文本
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

🖼 绘制图片
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


🎶 播放音乐
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