#Love2dCS


##Misc.Moonshine.Moonshine
            
Postprocessing effect repository for LÖVE. adapt from https://github.com/vrld/moonshine . more resource https://www.love2d.org/forums/viewtopic.php?t=3733 .
        
###Fields

####DoubleBufferCanvas.Front
The destination it should render into.
####DoubleBufferCanvas.Back
The previous result
####BoxBlur.Default
default BoxBlur
####Chromasep.Default
Default Effect
####ColorGradeSimple.Default
Default Effect
####CRT.Default
Default Effect
####Desaturate.Default
Default Effect
####DMG.GameBoyPalette.Default
Default color palette. Source: http://en.wikipedia.org/wiki/List_of_video_game_console_palettes#Original_Game_Boy
####DMG.GameBoyPalette.DarkYellow
Hardcore color profiles. Source: http://www.hardcoregaming101.net/gbdebate/gbcolours.htm
####DMG.Default
Default Effect
###Properties

####Effect.Enable
this effect is enabled
####FastGaussianBlur.Taps
Number of effective samples to take per pass. e.g. 3-tap is the current pixel and the neighbors each side. More taps = larger blur, but slower.
####FastGaussianBlur.Offset
Offset of each tap. For highest quality this should be <= 1 but if the image has low entropy we can approximate the blur with a number > 1 and less taps, for better performance.
####FastGaussianBlur.Type
Offset type, either 'weighted' or 'center'. 'weighted' gives a more accurate gaussian decay but can introduce modulation for high frequency details.
####FastGaussianBlur.Sigma
Sigma value for gaussian distribution. You don't normally need to set this.
###Methods


####DoubleBufferCanvas.Swap
Swap Front and Back. (Back, Front = Front, Back)

####DoubleBufferCanvas.Swap(Love.Shader)
Swap Front and Back with shader. (Back, Front = Front, Back)

####DrawWithShader(Love.Canvas,Love.Canvas,Love.Shader)
this function uses shader to draw the Source buffer to the Dest buffer with given Shader.
> #####Parameters
> **dest:** Canvas that ready to draw as target

> **source:** Canvas to draw

> **shader:** Shader used when draw source canvas to dest canvas


####China(Love.Misc.Moonshine.Moonshine.Effect)
Create MoonShine
> #####Parameters
> **w:** 

> **h:** 

> **e:** 

> #####Return value
> 

####Create(System.Int32,System.Int32,Love.Misc.Moonshine.Moonshine.Effect)
Create MoonShine With width and height
> #####Parameters
> **e:** 

> #####Return value
> 

####Constructor
default BoxBlur constructor

##Misc.Moonshine.Moonshine.BoxBlur
            
simple blurring
        
###Fields

####Default
default BoxBlur
###Methods


####Constructor
default BoxBlur constructor

##Misc.Moonshine.Moonshine.Chromasep
            
cheap/fake chromatic aberration
        
###Fields

####Default
Default Effect

##Misc.Moonshine.Moonshine.ColorGradeSimple
            
weighting of color channels
        
###Fields

####Default
Default Effect

##Misc.Moonshine.Moonshine.CRT
            
crt/barrel distortion
        
###Fields

####Default
Default Effect

##Misc.Moonshine.Moonshine.Desaturate
            
desaturation and tinting
        
###Fields

####Default
Default Effect

##Misc.Moonshine.Moonshine.DMG
            
Gameboy and other four color palettes
        
###Fields

####GameBoyPalette.Default
Default color palette. Source: http://en.wikipedia.org/wiki/List_of_video_game_console_palettes#Original_Game_Boy
####GameBoyPalette.DarkYellow
Hardcore color profiles. Source: http://www.hardcoregaming101.net/gbdebate/gbcolours.htm
####Default
Default Effect

##Misc.Moonshine.Moonshine.FastGaussianBlur
            
faster Gaussian blurring Bilinear Gaussian blur filter as detailed here: http://rastergrid.com/blog/2010/09/efficient-gaussian-blur-with-linear-sampling/ Produces near identical results to a standard Gaussian blur by using sub-pixel sampling, this allows us to do ~1/2 the number of pixel lookups. unroll convolution loop
        
###Properties

####Taps
Number of effective samples to take per pass. e.g. 3-tap is the current pixel and the neighbors each side. More taps = larger blur, but slower.
####Offset
Offset of each tap. For highest quality this should be <= 1 but if the image has low entropy we can approximate the blur with a number > 1 and less taps, for better performance.
####Type
Offset type, either 'weighted' or 'center'. 'weighted' gives a more accurate gaussian decay but can introduce modulation for high frequency details.
####Sigma
Sigma value for gaussian distribution. You don't normally need to set this.

##Misc.Moonshine.Moonshine.FilmGrain
            
image noise
        

##Misc.Moonshine.Moonshine.GaussianBlur
            
gaussian blur
        

##Misc.Moonshine.Moonshine.Glow
            
aka (light bloom)
        

##Misc.Moonshine.Moonshine.Godsray
            
aka light scattering
        

##Misc.Moonshine.Moonshine.Pixelate
            
sub-sampling (for that indie look)
        

##Misc.Moonshine.Moonshine.Posterize
            
restrict number of colors
        

##Misc.Moonshine.Moonshine.Scanlines
            
horizontal lines
        

##Misc.Moonshine.Moonshine.Sketch
            
simulate pencil drawings
        

##Misc.Moonshine.Moonshine.Vignette
            
shadow in the corners
        

##Misc.QuadTree.QuadrantEnum
            
一个矩形区域的象限划分： 0---------------------------> x | | | leftTop(0) | rightTopNode(1) | -----------------|--------- | leftBottomNode(2) | RightBottomNode(3) | | | \/ y 以下对该象限类型的枚举
        

##Misc.QuadTree.QuadTree
            
RectangleF based Quad tree
        
###Fields

####m_root
root node
####overFlowLeaf
left that out of word
###Methods


####
尝试插入 item 到此节点或者其子节点中，当 item 大于此区域插入失败
> #####Parameters
> **item:** 


####
当此节点不在所给 RectangleF 时返回 null
> #####Parameters
> **rect:** 

> #####Return value
> 

####
尝试从此节点里删除一个 item 当item不被此节点区域包含时删除失败 当集合里没有此 item 时也将删除失败
> #####Parameters
> **item:** 

> #####Return value
> 

####Add(Love.Misc.QuadTree.Leaf)
插入到四叉树中
> #####Parameters
> **item:** 

> #####Return value
> 

####QueryArea(Love.RectangleF)
区域查询
> #####Parameters
> **rect:** 

> #####Return value
> 

####Remove(Love.Misc.QuadTree.Leaf)
移除一个节点
> #####Parameters
> **item:** 

> #####Return value
> 

####Traverse(System.Action{Love.RectangleF,System.Collections.Generic.IEnumerable{Love.Misc.QuadTree.Leaf}})
便利所有节点
> #####Parameters
> **action:** 


####DrawDebug
绘制 Debug 信息

##Event
            
Manages events, like keypresses.
        
###Methods


####Poll(Love.Scene)
Returns an iterator for messages in the event queue.
> #####Parameters
> **scene:** event handler

> #####Return value
> 

####Wait(Love.Scene)
Like , but blocks until there is an event in the queue.
> #####Parameters
> **scene:** event handler

> #####Return value
> 

####Quit(System.Int32)
Exits the LÖVE program. Adds the quit event to the queue. The quit event is a signal for the event handler to close LÖVE. It's possible to abort the exit process with the love.quit callback.
> #####Parameters
> **exitStatus:** The program exit status to use when closing the application.


####PollOrWait(Love.Scene,System.Boolean)
poll or wait a event
> #####Parameters
> **poll_or_wait:** True: poll; False: wait

> #####Return value
> 

##Window
            
用于修改窗口和获取窗口信息。 Provides an interface for modifying and retrieving information about the program's window.
        
###Properties

####
Fullscreen (true), or windowed (false).
####
Choose between "DeskTop" fullscreen or "Exclusive" fullscreen mode
####
True if LÖVE should wait for vsync, false otherwise.
####
The number of antialiasing samples.
####
Whether a stencil buffer should be allocated. If true, the stencil buffer will have 8 bits.
####
The number of bits in the depth buffer.
####
Let the window be user-resizable
####
Remove all border visuals from the window
####
True if the window should be centered.
####
The index of the display to show the window in, if multiple monitors are available.
####
True if high-dpi mode should be used on Retina displays in macOS and iOS. Does nothing on non-Retina displays. Added in 0.9.1.
####
The minimum width of the window, if it's resizable. Cannot be less than 1.
####
The minimum height of the window, if it's resizable. Cannot be less than 1.
####
True if use the position params, false otherwise.
####
The x-coordinate of the window's position in the specified display. Added in 0.9.2.
####
We don't explicitly set the refresh rate, it's "read-only". The refresh rate of the screen's current display mode, in Hz. May be 0 if the value can't be determined. Added in 0.9.2.
###Methods


####SetFullscreen(System.Boolean)
Enters or exits fullscreen. The display to use when entering fullscreen is chosen based on which display the window is currently in, if multiple monitors are connected.
> #####Parameters
> **fullscreen:** Whether to enter or exit fullscreen mode.

> #####Return value
> True if an attempt to enter fullscreen was successful, false otherwise.

####GetFullscreen
Gets whether the window is fullscreen.
> #####Return value
> True if the window is fullscreen, false otherwise.

####GetDisplayCount
获取当前显示器的数量。 Gets the number of connected monitors.
> #####Return value
> 

####GetDisplayName(System.Int32)
获取显示器的名称。 Gets the name of a display.
> #####Parameters
> **displayindex:** 

> #####Return value
> 

####SetMode(System.Int32,System.Int32,Love.WindowSettings)
设置窗口的显示模式和属性。 如果width或height为0，则setMode将使用桌面的宽度和高度。 更改显示模式可能会产生副作用：例如，将清除 Canvas 并使用Shader：send发送到着色器的值将被删除。 如果需要，请务必事先保存 Canvas 的内容或之后重新绘制。 Sets the display mode and properties of the window. If width or height is 0, setMode will use the width and height of the desktop. Changing the display mode may have side effects: for example, canvases will be cleared and values sent to shaders with Shader:send will be erased. Make sure to save the contents of canvases beforehand or re-draw to them afterward if you need to.
> #####Parameters
> **width:** Display width.

> **height:** Display height.

> **flag:** 


####SetMode(Love.WindowSettings)
设置窗口的显示模式和属性。 如果width或height为0，则setMode将使用桌面的宽度和高度。 更改显示模式可能会产生副作用：例如，将清除 Canvas 并使用Shader：send发送到着色器的值将被删除。 如果需要，请务必事先保存 Canvas 的内容或之后重新绘制。 Sets the display mode and properties of the window. If width or height is 0, setMode will use the width and height of the desktop. Changing the display mode may have side effects: for example, canvases will be cleared and values sent to shaders with Shader:send will be erased. Make sure to save the contents of canvases beforehand or re-draw to them afterward if you need to.
> #####Parameters
> **flag:** 


####GetMode
Gets the display mode and properties of the window.
> #####Return value
> 

####GetMode(System.Int32@,System.Int32@)
Gets the display mode and properties of the window.
> #####Parameters
> **out_width:** Window width.

> **out_height:** Window height.

> #####Return value
> 

####GetFullscreenModes(System.Int32)
Gets a list of supported fullscreen modes.
> #####Parameters
> **displayindex:** The index of the display, if multiple monitors are available.

> #####Return value
> 

####SetFullscreen(System.Boolean,Love.FullscreenType)
Enters or exits fullscreen. The display to use when entering fullscreen is chosen based on which display the window is currently in, if multiple monitors are connected.
> #####Parameters
> **fullscreen:** Whether to enter or exit fullscreen mode.

> **fstype:** The type of fullscreen mode to use.

> #####Return value
> True if an attempt to enter fullscreen was successful, false otherwise.

####GetFullscreen(System.Boolean@,Love.FullscreenType@)
Gets whether the window is fullscreen.
> #####Parameters
> **out_fullscreen:** True if the window is fullscreen, false otherwise.

> **out_fstype:** The type of fullscreen mode used.


####IsOpen
True if the window is open, false otherwise.
> #####Return value
> 

####Close
Closes the window. It can be reopened with love.window.setMode. love.graphics functions and objects will cause a hard crash of LÖVE if used while the window is closed.

####GetDesktopDimensions(System.Int32)
Gets the width and height of the desktop.
> #####Parameters
> **displayIndex:** The index of the display, if multiple monitors are available.


####SetPosition(System.Int32,System.Int32,System.Int32)
Sets the position of the window on the screen.
> #####Parameters
> **x:** The x-coordinate of the window's position.

> **y:** The y-coordinate of the window's position.

> **displayindex:** The window position is in the coordinate space of the specified display.


####GetPosition
Gets the position of the window on the screen
> #####Return value
> 

####GetPosition(System.Int32@)
Gets the position of the window on the screen. And the index of the display that the window is in.
> #####Parameters
> **out_displayindex:** 

> #####Return value
> 

####SetIcon(Love.ImageData)
Sets the window icon until the game is quit. Not all operating systems support very large icon images.
> #####Parameters
> **imagedata:** The window icon image.

> #####Return value
> 

####GetIcon
The window icon imagedata, or nil if no icon has been set with love.window.setIcon.
> #####Return value
> 

####SetDisplaySleepEnabled(System.Boolean)
Sets whether the display is allowed to sleep while the program is running. Display sleep is disabled by default. Some types of input(e.g.joystick button presses) might not prevent the display from sleeping, if display sleep is allowed.
> #####Parameters
> **enable:** True to enable system display sleep, false to disable it.


####IsDisplaySleepEnabled
Gets whether the display is allowed to sleep while the program is running. Display sleep is disabled by default. Some types of input (e.g. joystick button presses) might not prevent the display from sleeping, if display sleep is allowed.
> #####Return value
> 

####SetTitle(System.Byte[])
Sets the window title. (UTF-8 byte array version) Constantly updating the window title can lead to issues on some systems and therefore is discouraged.
> #####Parameters
> **titleStr:** The new window title.(UTF-8 byte array)


####GetTitle
Gets the window title.
> #####Return value
> 

####HasFocus
Checks if the game window has keyboard focus.
> #####Return value
> True if the window has the focus or false if not.

####HasMouseFocus
Checks if the game window has mouse focus.
> #####Return value
> True if the window has mouse focus or false if not.

####IsVisible
Checks if the game window is visible. The window is considered visible if it's not minimized and the program isn't hidden.
> #####Return value
> 

####GetDPIScale
Gets the DPI scale factor associated with the window. The pixel density inside the window might be greater (or smaller) than the "size" of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.getDPIScale() would return 2.0 in that case. The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units. The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
> #####Return value
> The pixel scale factor associated with the window.

####ToPixels(System.Double)
Converts a number from density-independent units to pixels. The pixel density inside the window might be greater (or smaller) than the "size" of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.getDPIScale() would return 2.0 in that case. The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units. The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled. Most LÖVE functions return values and expect arguments in terms of pixels rather than density-independent units.
> #####Parameters
> **value:** A number in density-independent units to convert to pixels.

> #####Return value
> The converted number, in pixels.

####FromPixels(System.Double)
Converts a number from pixels to density-independent units. The pixel density inside the window might be greater (or smaller) than the "size" of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.getDPIScale() would return 2.0 in that case. The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units. The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled. Most LÖVE functions return values and expect arguments in terms of pixels rather than density-independent units.
> #####Parameters
> **pixelvalue:** A number in pixels to convert to density-independent units.

> #####Return value
> The converted number, in density-independent units.

####Minimize
Minimizes the window to the system's task bar / dock.

####Maximize
Makes the window as large as possible. This function has no effect if the window isn't resizable, since it essentially programmatically presses the window's "maximize" button.

####IsMaximized
Gets whether the Window is currently maximized. The window can be maximized if it is not fullscreen and is resizable, and either the user has pressed the window's Maximize button or love.window.maximize has been called.
> #####Return value
> True if the window is currently maximized in windowed mode, false otherwise.

####ShowMessageBox(System.Byte[],System.Byte[],Love.MessageBoxType,System.Boolean)
Displays a simple message box with a single 'OK' button. (UTF-8 byte array version) This function will pause all execution of the main thread until the user has clicked a button to exit the message box. Calling the function from a different thread may cause love to crash.
> #####Parameters
> **title:** The title of the message box. (UTF-8 byte array)

> **message:** The text inside the message box. (UTF-8 byte array)

> **msgbox_type:** The type of the message box.

> **attachToWindow:** Whether the message box should be attached to the love window or free-floating.

> #####Return value
> Whether the message box was successfully displayed.

####ShowMessageBox(System.String,System.String,System.String[],System.Int32,System.Int32,Love.MessageBoxType,System.Boolean)
Displays a message box with a customized list of buttons. This function will pause all execution of the main thread until the user has clicked a button to exit the message box. Calling the function from a different thread may cause love to crash.
> #####Parameters
> **title:** The title of the message box.

> **message:** The text inside the message box.

> **buttonName:** 

> **enterButtonIndex:** when the user presses 'enter', which button index should be return

> **escapebuttonIndex:** when the user presses 'escapeb', which button index should be return

> **msgbox_type:** The type of the message box.

> **attachToWindow:** Whether the message box should be attached to the love window or free-floating.

> #####Return value
> The index of the button pressed by the user. May be 0 if the message box dialog was closed without pressing a button.

####RequestAttention(System.Boolean)
Causes the window to request the attention of the user if it is not in the foreground. In Windows the taskbar icon will flash, and in OS X the dock icon will bounce.
> #####Parameters
> **continuous:** 


####SetTitle(System.String)
Sets the window title. Constantly updating the window title can lead to issues on some systems and therefore is discouraged.
> #####Parameters
> **titleStr:** The new window title.


####ShowMessageBox(System.String,System.String,Love.MessageBoxType,System.Boolean)
Displays a simple message box with a single 'OK' button. This function will pause all execution of the main thread until the user has clicked a button to exit the message box. Calling the function from a different thread may cause love to crash.
> #####Parameters
> **title:** The title of the message box.

> **message:** The text inside the message box.

> **msgbox_type:** The type of the message box.

> **attachToWindow:** Whether the message box should be attached to the love window or free-floating.

> #####Return value
> Whether the message box was successfully displayed.

##FileSystem
            
Provides an interface to the user's filesystem. This module provides access to files in specific places: 1. The root folder of the source directory archive / 2. The root folder of the game's save directory. Files that are opened for write or append will always be created in the save directory. The same goes for other operations that involve writing to the filesystem, like . It is recommended to set your game's identity first. You can set it with as well.
        
###Methods


####NewFileData(System.String)
Creates a new FileData from a file on the storage device.
> #####Parameters
> **filename:** Path to the file.

> #####Return value
> 

####NewFile(System.Byte[],Love.FileMode)
Creates a new File object. It needs to be opened before it can be accessed. (UTF-8 byte array version)
> #####Parameters
> **filename:** The filename of the file.(UTF-8 byte array needed)

> **fmode_type:** The mode to open the file in.

> #####Return value
> 

####NewFileData(System.Byte[],System.Byte[])
Creates a new FileData object.
> #####Parameters
> **contents:** The contents of the file.

> **filename:** The name of the file.

> #####Return value
> 

####NewFileData(Love.File)
Creates a new FileData object.
> #####Parameters
> **file:** The file.

> #####Return value
> 

####Init(System.Byte[])
Initializes FileSystem, will be called internally, so should not be used explictly.
> #####Parameters
> **args:** 

> #####Return value
> 

####IsFused
Gets whether the game is in fused mode or not. If a game is in fused mode, its save directory will be directly in the Appdata directory instead of Appdata/LOVE/. The game will also be able to load C Lua dynamic libraries which are located in the save directory. A game is in fused mode if the source .love has been fused to the executable (see Game Distribution), or if "--fused" has been given as a command-line argument when starting the game.
> #####Return value
> 

####SetIdentity(System.Byte[],System.Boolean)
Sets the write directory for your game. Note that you can only set the name of the folder to store your files in, not the location.
> #####Parameters
> **path:** The new identity that will be used as write directory.(UTF-8 byte array needed)

> **append:** Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently. TRUE: results in searching source before searching save directory; FALSE: results in searching game save directory before searching source directorymounted archives.


####GetIdentity
Gets the write directory name for your game. Note that this only returns the name of the folder to store your files in, not the full path.
> #####Return value
> 

####SetSource(System.Byte[])
Sets the source of the game, where the code is present. This function can only be called once, and is normally automatically done by LÖVE.
> #####Parameters
> **path:** Absolute path to the game's source folder.(UTF-8 byte array needed)


####GetSource
initially it was .exe folder lua version: Returns the full path to the the .love file or directory. If the game is fused to the LÖVE executable, then the executable is returned.
> #####Return value
> The full platform-dependent path of the .love file or directory.

####Mount(System.Byte[],System.Byte[],System.Boolean)
Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
> #####Parameters
> **archive:** The folder or zip file in the game's save directory to mount.(UTF-8 byte array needed)

> **mountpoint:** The new path the archive will be mounted to.(UTF-8 byte array needed)

> **appendToPath:** Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.

> #####Return value
> 

####Unmount(System.Byte[])
Unmounts a zip file or folder previously mounted for reading with .
> #####Parameters
> **archive:** The folder or zip file in the game's save directory which is currently mounted.

> #####Return value
> True if the archive was successfully unmounted, false otherwise.

####GetWorkingDirectory
Gets the current working directory.
> #####Return value
> 

####GetUserDirectory
Returns the path of the user's directory
> #####Return value
> 

####GetAppdataDirectory
Returns the application data directory (could be the same as getUserDirectory
> #####Return value
> 

####GetSaveDirectory
Gets the full path to the designated save directory. This can be useful if you want to use the standard io library (or something else) to read or write in the save directory.
> #####Return value
> 

####GetRealDirectory(System.Byte[])
Gets the platform-specific absolute path of the directory containing a filepath.
> #####Parameters
> **filename:** The filepath to get the directory of.(UTF-8 byte array needed)

> #####Return value
> The platform-specific full path of the directory containing the filepath.

####GetExecutablePath
will be called internally, so should not be used explictly.
> #####Return value
> 

####GetInfo(System.Byte[])
Gets information about the specified file or directory.
> #####Parameters
> **path:** The file or directory path to check.

> #####Return value
> 

####CreateDirectory(System.Byte[])
Recursively creates a directory. When called with "a/b" it creates both "a" and "a/b", if they don't exist already.
> #####Parameters
> **name:** The directory to create. (UTF-8 byte array needed)

> #####Return value
> True if the directory was created, false if not.

####Remove(System.Byte[])
Removes a file or empty directory.
> #####Parameters
> **path:** The file or directory to remove.


####Read(System.Byte[],System.Int64)
Read the contents of a file.
> #####Parameters
> **filename:** The name (and path) of the file. (UTF-8 byte array needed)

> **len:** How many bytes to read. (-1 means all)

> #####Return value
> 

####Write(System.Byte[],System.Byte[])
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
> #####Parameters
> **filename:** The name (and path) of the file.(UTF-8 byte need)

> **input:** The data to write to the file.


####Append(System.Byte[],System.Byte[])
Append data to an existing file. (UTF-8 byte array version)
> #####Parameters
> **filename:** The name (and path) of the file.

> **input:** The data to append to the file.


####GetDirectoryItems(System.Byte[])
Returns a table with the names of files and subdirectories in the specified path. The table is not sorted in any way; the order is undefined. If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.
> #####Parameters
> **dir:** The directory.

> #####Return value
> 

####_GetLastModified(System.Byte[])
Deprecated in LÖVE 11.0 Gets the last modification time of a file.
> #####Parameters
> **filename:** 

> #####Return value
> 

####AreSymlinksEnabled
Gets whether love.filesystem follows symbolic links.
> #####Return value
> 

####_GetSourceBaseDirectory
no need for C# version Returns the full path to the directory containing the .love file.
> #####Return value
> 

####_GetRequirePath
no need for C# version Gets the filesystem paths that will be searched when require is called.
> #####Return value
> 

####_SetRequirePath(System.Byte[])
no need for C# version Sets the filesystem paths that will be searched when require is called. The paths string given to this function is a sequence of path templates separated by semicolons. The argument passed to require will be inserted in place of any question mark ("?") character in each template (after the dot characters in the argument passed to require are replaced by directory separators.) The paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.
> #####Parameters
> **paths:** 


####NewFile(System.String,Love.FileMode)
Creates a new File object. It needs to be opened before it can be accessed.
> #####Parameters
> **filename:** The filename of the file.

> **fmode_type:** The mode to open the file in.

> #####Return value
> 

####NewFileData(System.String,System.String)
Creates a new FileData object.
> #####Parameters
> **contents:** The contents of the file.

> **filename:** The name of the file.

> #####Return value
> 

####NewFileData(System.Byte[],System.String)
Creates a new FileData object.
> #####Parameters
> **contents:** The contents of the file.

> **filename:** The name of the file.

> #####Return value
> 

####Init(System.String)
Initializes FileSystem, will be called internally, so should not be used explictly.
> #####Parameters
> **args:** 

> #####Return value
> 

####GetInfo(System.String)
Gets information about the specified file or directory.
> #####Parameters
> **path:** The file or directory path to check.

> #####Return value
> 

####SetIdentity(System.String,System.Boolean)
Sets the write directory for your game. Note that you can only set the name of the folder to store your files in, not the location.
> #####Parameters
> **path:** The new identity that will be used as write directory.

> **append:** Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently. TRUE: results in searching source before searching save directory; FALSE: results in searching game save directory before searching source directorymounted archives.


####SetSource(System.String)
Sets the source of the game, where the code is present. This function can only be called once, and is normally automatically done by LÖVE.
> #####Parameters
> **path:** Absolute path to the game's source folder.


####Mount(System.String,System.String,System.Boolean)
Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
> #####Parameters
> **archive:** The folder or zip file in the game's save directory to mount.

> **mountpoint:** The new path the archive will be mounted to.

> **appendToPath:** Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.

> #####Return value
> 

####GetRealDirectory(System.String)
Gets the platform-specific absolute path of the directory containing a filepath.
> #####Parameters
> **filename:** The filepath to get the directory of.

> #####Return value
> The platform-specific full path of the directory containing the filepath.

####CreateDirectory(System.String)
Recursively creates a directory. When called with "a/b" it creates both "a" and "a/b", if they don't exist already.
> #####Parameters
> **name:** The directory to create.

> #####Return value
> True if the directory was created, false if not.

####Remove(System.String)
Removes a file (or directory).
> #####Parameters
> **path:** The file or directory to remove.


####Read(System.String,System.Int64)
Read the contents of a file.
> #####Parameters
> **filename:** The name (and path) of the file.

> **len:** How many bytes to read. (-1 means all)

> #####Return value
> 

####Write(System.String,System.Byte[])
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
> #####Parameters
> **filename:** The name (and path) of the file.

> **input:** The data to write to the file.


####Write(System.String,System.String)
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents. encode with UTF-8
> #####Parameters
> **filename:** The name (and path) of the file.

> **input:** The string data to write to the file.


####Append(System.String,System.Byte[])
Append data to an existing file.
> #####Parameters
> **filename:** The name (and path) of the file.

> **input:** The data to append to the file.


####Append(System.String,System.String)
Append text to an existing file (encode with UTF-8).
> #####Parameters
> **filename:** The name (and path) of the file.

> **txt:** string to append


####GetDirectoryItems(System.String)
Returns a table with the names of files and subdirectories in the specified path. The array is not sorted in any way; the order is undefined. If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.
> #####Parameters
> **dir:** The directory.

> #####Return value
> 

##Image
            
Provides an interface to decode encoded image data.
        
###Fields

####
Targa image format.
####
PNG image format.
###Methods


####NewImageData(System.String)
Creates a new object.
> #####Parameters
> **filename:** The filename of the image file.

> #####Return value
> The new ImageData object.

####NewCompressedData(System.String)
Create a new object from a compressed image file. LÖVE supports several compressed texture formats, enumerated in the page.
> #####Parameters
> **filename:** The filename of the compressed image file.

> #####Return value
> The new CompressedImageData object.

####NewImageData(Love.Vector4[0:,0:],Love.ImageDataPixelFormat)
Creates a new ImageData object. Vector4[x, y] - new Vector4(0.1f, 0.2f, 0.3f, 0.4f)
> #####Parameters
> **rawData:** color data to set

> **format:** The pixel format of the ImageData.

> #####Return value
> 

####NewImageData(Love.Vector4[][],Love.ImageDataPixelFormat)
Creates a new ImageData object.
> #####Parameters
> **rawData:** Optional raw byte data to load into the ImageData, in the format specified by format.

> **format:** The pixel format of the ImageData.

> #####Return value
> 

####IsCompressed(System.String)
Determines whether a file can be loaded as .
> #####Parameters
> **filename:** The filename of the potentially compressed image file.

> #####Return value
> Whether the file can be loaded as or not.

####NewImageData(System.UInt32,System.UInt32,Love.ImageDataPixelFormat,System.Byte[])
Creates a new object.
> #####Parameters
> **w:** The width of the ImageData.

> **h:** The height of the ImageData.

> **format:** The pixel format of the ImageData.

> **data:** Optional raw byte data to load into the ImageData, in the format specified by format.

> #####Return value
> 

####NewImageData(System.Int32,System.Int32,Love.ImageDataPixelFormat,System.Byte[])
Creates a new object.
> #####Parameters
> **w:** The width of the ImageData.

> **h:** The height of the ImageData.

> **format:** The pixel format of the ImageData.

> **data:** Optional raw byte data to load into the ImageData, in the format specified by format.

> #####Return value
> 

####NewImageData(Love.FileData)
Creates a new object.
> #####Parameters
> **data:** The encoded file data to decode into image data.

> #####Return value
> 

####NewCompressedData(Love.FileData)
Create a new object from a compressed image file. LÖVE supports several compressed texture formats, enumerated in the page.
> #####Parameters
> **data:** A FileData containing a compressed image.

> #####Return value
> The new CompressedImageData object.

####IsCompressed(Love.FileData)
Determines whether a file can be loaded as .
> #####Parameters
> **data:** A FileData potentially containing a compressed image.

> #####Return value
> Whether the file can be loaded as or not.

####Constructor
disable construct

####IsCompressed
Gets whether the Image was created from .
> #####Return value
> 

####ReplacePixels(Love.ImageData,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
Replace the contents of an Image.
> #####Parameters
> **imageData:** The new ImageData to replace the contents with.

> **slice:** Which cubemap face, array index, or volume layer to replace, if applicable.

> **mipmap:** The mimap level to replace, if the Image has mipmaps.

> **x:** The x-offset in pixels from the top-left of the image to replace. The given ImageData's width plus this value must not be greater than the pixel width of the Image's specified mipmap level.

> **y:** The y-offset in pixels from the top-left of the image to replace. The given ImageData's height plus this value must not be greater than the pixel height of the Image's specified mipmap level.

> **reloadmipmaps:** Whether to generate new mipmaps after replacing the Image's pixels. True by default if the Image was created with automatically generated mipmaps, false by default otherwise.


####
Transform an image by applying a function to every pixel. This function is a higher-order function(https://en.wikipedia.org/wiki/Higher-order_function). It takes another function as a parameter, and calls it once for each pixel in the ImageData. The passed function is called with six parameters for each pixel in turn. The parameters are numbers that represent the x and y coordinates of the pixel and its red, green, blue and alpha values. The function should return the new red, green, blue, and alpha values for that pixel.
> #####Parameters
> **func:** Function to apply to every pixel.


####
Transform an image by applying a function to every pixel. This function is a higher-order function(https://en.wikipedia.org/wiki/Higher-order_function). It takes another function as a parameter, and calls it once for each pixel in the ImageData. The passed function is called with six parameters for each pixel in turn. The parameters are numbers that represent the x and y coordinates of the pixel and its red, green, blue and alpha values. The function should return the new red, green, blue, and alpha values for that pixel.
> #####Parameters
> **func:** Function to apply to every pixel.

> **sx:** The x-axis of the top-left corner of the area within the ImageData to apply the function to.

> **sy:** The y-axis of the top-left corner of the area within the ImageData to apply the function to.

> **w:** The width of the area within the ImageData to apply the function to.

> **h:** The height of the area within the ImageData to apply the function to.


####
Advance version of , if you don't know how to handle pixel format, please use if you need speed, consider use
> #####Parameters
> **func:** Function to apply to every pixel.

> **sx:** The x-axis of the top-left corner of the area within the ImageData to apply the function to.

> **sy:** The y-axis of the top-left corner of the area within the ImageData to apply the function to.

> **w:** The width of the area within the ImageData to apply the function to.

> **h:** The height of the area within the ImageData to apply the function to.


####
Advance version of , if you don't know how to handle pixel format, please use if you need speed, consider use
> #####Parameters
> **func:** Function to apply to every pixel.


####
get every pixel

####
get every pixel, as Float4 format
> #####Return value
> 

####
set every pixel with given data
> #####Parameters
> **data:** 


####
set every pixel with given data, function will convert Float4 to correct pixel format automatically
> #####Parameters
> **data:** color data to set


####Constructor
disable construct

####
Gets the width of the ImageData in pixels.
> #####Return value
> 

####
Gets the height of the ImageData in pixels.
> #####Return value
> 

####
Gets the color of a pixel at a specific position in the image.
> #####Parameters
> **x:** The position of the pixel on the x-axis.

> **y:** The position of the pixel on the y-axis.

> #####Return value
> 

####
Sets the color of a pixel at a specific position in the image.
> #####Parameters
> **x:** The position of the pixel on the x-axis.

> **y:** The position of the pixel on the y-axis.

> **pixel:** 


####
Gets the pixel format of the ImageData.
> #####Return value
> 

####
Paste into ImageData from another source ImageData.
> #####Parameters
> **src_imageData:** Source ImageData from which to copy.

> **dx:** Destination top-left position on x-axis.

> **dy:** Destination top-left position on y-axis.

> **sx:** Source top-left position on x-axis.

> **sy:** Source top-left position on y-axis.

> **sw:** Source width.

> **sh:** Source height.


####
Encodes the ImageData and optionally writes it to the save directory.
> #####Parameters
> **format_type:** The format to encode the image as.

> **writeToFile:** Whether to write to the specified file

> **filename:** The filename to write the file to. If null, no file will be written but the FileData will still be returned.

> #####Return value
> 

####
Encodes the ImageData and optionally writes it to the save directory.
> #####Parameters
> **format_type:** The format to encode the image as.

> **filename:** The filename to write the file to. If null, no file will be written but the FileData will still be returned.

> #####Return value
> 

####Constructor
disable construct

##Mouse
            
Provides an interface to the user's mouse.
        
###Methods


####NewCursor(System.String,System.Int32,System.Int32)
Creates a new hardware Cursor object from an image file or ImageData. Hardware cursors are framerate-independent and work the same way as normal operating system cursors. Unlike drawing an image at the mouse's current coordinates, hardware cursors never have visible lag between when the mouse is moved and when the cursor position updates, even at low framerates. The hot spot is the point the operating system uses to determine what was clicked and at what position the mouse cursor is. For example, the normal arrow pointer normally has its hot spot at the top left of the image, but a crosshair cursor might have it in the middle.
> #####Parameters
> **filename:** Path to the image to use for the new Cursor.

> **hotX:** The x-coordinate in the image of the cursor's hot spot.

> **hotY:** The y-coordinate in the image of the cursor's hot spot.

> #####Return value
> 

####GetPosition
Returns the current position of the mouse.
> #####Return value
> The position of the mouse.

####NewCursor(Love.ImageData,System.Int32,System.Int32)
Creates a new hardware Cursor object from an image file or ImageData. Hardware cursors are framerate-independent and work the same way as normal operating system cursors. Unlike drawing an image at the mouse's current coordinates, hardware cursors never have visible lag between when the mouse is moved and when the cursor position updates, even at low framerates. The hot spot is the point the operating system uses to determine what was clicked and at what position the mouse cursor is. For example, the normal arrow pointer normally has its hot spot at the top left of the image, but a crosshair cursor might have it in the middle.
> #####Parameters
> **imageData:** The ImageData to use for the new Cursor.

> **hotX:** The x-coordinate in the image of the cursor's hot spot.

> **hotY:** The y-coordinate in the image of the cursor's hot spot.

> #####Return value
> 

####GetSystemCursor(Love.SystemCursor)
Gets a Cursor object representing a system-native hardware cursor. Hardware cursors are framerate-independent and work the same way as normal operating system cursors. Unlike drawing an image at the mouse's current coordinates, hardware cursors never have visible lag between when the mouse is moved and when the cursor position updates, even at low framerates.
> #####Parameters
> **sysctype:** 

> #####Return value
> 

####SetCursor(Love.Cursor)
Sets the current mouse cursor.
> #####Parameters
> **cursor:** 


####GetCursor
Gets the current Cursor.
> #####Return value
> 

####IsCursorSupported
Gets whether cursor functionality is supported.
> #####Return value
> 

####GetXDouble
Returns the current x-position of the mouse.
> #####Return value
> 

####GetYDouble
Returns the current y-position of the mouse.
> #####Return value
> 

####GetX
Returns the current x-position of the mouse.
> #####Return value
> 

####GetY
Returns the current y-position of the mouse.
> #####Return value
> 

####GetPosition(System.Double@,System.Double@)
Returns the current x/y-position of the mouse.
> #####Return value
> 

####SetX(System.Double)
Sets the current X position of the mouse.
> #####Parameters
> **x:** 


####SetY(System.Double)
Sets the current Y position of the mouse.
> #####Parameters
> **y:** 


####SetPosition(System.Double,System.Double)
Sets the current X/Y position of the mouse.
> #####Parameters
> **x:** 

> **y:** 


####IsDown(System.Int32)
Checks whether a certain button is down. This function does not detect mouse wheel scrolling; you must use the love.wheelmoved (or love.mousepressed in version 0.9.2 and older) callback for that.
> #####Parameters
> **buttonIndex:** The index of a button to check. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependant.

> #####Return value
> True if any specified button is down.

####SetVisible(System.Boolean)
Sets the current visibility of the cursor.
> #####Parameters
> **visible:** 


####IsVisible
Checks if the cursor is visible.
> #####Return value
> 

####SetGrabbed(System.Boolean)
Grabs the mouse and confines it to the window.
> #####Parameters
> **grabbed:** 


####IsGrabbed
Checks if the mouse is grabbed.
> #####Return value
> 

####SetRelativeMode(System.Boolean)
WARNNING: THIS API NOT STABLE, IT WILL CRASHED! Sets whether relative mode is enabled for the mouse. When relative mode is enabled, the cursor is hidden and doesn't move when the mouse does, but relative mouse motion events are still generated via love.mousemoved. This lets the mouse move in any direction indefinitely without the cursor getting stuck at the edges of the screen. The reported position of the mouse may not be updated while relative mode is enabled, even when relative mouse motion events are generated.
> #####Parameters
> **enable:** True to enable relative mode, false to disable it.

> #####Return value
> 

####GetRelativeMode
Gets whether relative mode is enabled for the mouse.
> #####Return value
> True if relative mode is enabled, false if it's disabled.

##ParticleSystem
            
A ParticleSystem can be used to create particle effects like fire or smoke. The particle system has to be created using . Just like any other it can be drawn to the screen using love.graphics.draw. You also have to call in the update callback to see any changes in the particles emitted. The particle system won't create any particles unless you call and .
        
###Methods


####GetOffset
Get the offset position which the particle sprite is rotated around. If this function is not used, the particles rotate around their center.
> #####Return value
> The coordinate of the rotation offset.

####Constructor
disable construct

####Clone
Creates an identical copy of the ParticleSystem in the stopped state.
> #####Return value
> 

####SetTexture(Love.Texture)
Sets the texture (Image or Canvas) to be used for the particles.
> #####Parameters
> **texture:** An Image or Canvas to use for the particles.


####GetTexture
Gets the texture (Image or Canvas) used for the particles.
> #####Return value
> The Image or Canvas used for the particles.

####SetBufferSize(System.UInt32)
Sets the size of the buffer (the max allowed amount of particles in the system).
> #####Parameters
> **buffersize:** The buffer size.


####GetBufferSize
Gets the maximum number of particles the ParticleSystem can have at once.
> #####Return value
> The maximum number of particles.

####SetInsertMode(Love.ParticleInsertMode)
Sets the mode to use when the ParticleSystem adds new particles.
> #####Parameters
> **mode_type:** The mode to use when the ParticleSystem adds new particles.


####GetInsertMode
Gets the mode used when the ParticleSystem adds new particles.
> #####Return value
> The mode used when the ParticleSystem adds new particles.

####SetEmissionRate(System.Single)
Sets the amount of particles emitted per second.
> #####Parameters
> **rate:** The amount of particles per second.


####GetEmissionRate
Gets the amount of particles emitted per second.
> #####Return value
> The amount of particles per second.

####SetEmitterLifetime(System.Single)
Sets how long the particle system should emit particles (if -1 then it emits particles forever).
> #####Parameters
> **lifetime:** The lifetime of the emitter (in seconds).


####GetEmitterLifetime
Gets how long the particle system will emit particles (if -1 then it emits particles forever).
> #####Return value
> The lifetime of the emitter (in seconds).

####SetParticleLifetime(System.Single,System.Single)
Sets the lifetime of the particles.
> #####Parameters
> **min:** The minimum life of the particles (in seconds).

> **max:** The maximum life of the particles (in seconds).


####GetParticleLifetime(System.Int32@,System.Int32@)
Gets the lifetime of the particles.
> #####Parameters
> **out_min:** The minimum life of the particles (in seconds).

> **out_max:** The maximum life of the particles (in seconds).


####SetPosition(System.Single,System.Single)
Sets the position of the emitter.
> #####Parameters
> **x:** Position along x-axis.

> **y:** Position along y-axis.


####GetPosition
Gets the position of the emitter.
> #####Return value
> Position of the emitter.

####MoveTo(System.Single,System.Single)
Moves the position of the emitter. This results in smoother particle spawning behaviour than if ParticleSystem.SetPosition is used every frame.
> #####Parameters
> **x:** Position along x-axis.

> **y:** Position along y-axis.


####GetAreaSpread(Love.AreaSpreadDistribution@,System.Single@,System.Single@)
Gets the area-based spawn parameters for the particles.
> #####Parameters
> **out_distribution_type:** The type of distribution for new particles.

> **out_x:** 

> **out_y:** 


####SetEmissionArea(Love.AreaSpreadDistribution,System.Single,System.Single,System.Single,System.Boolean)
Sets area-based spawn parameters for the particles. Newly created particles will spawn in an area around the emitter based on the parameters to this function.
> #####Parameters
> **distribution:** The type of distribution for new particles.

> **dx:** The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.

> **dy:** The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.

> **angle:** The angle in radians of the emission area.

> **directionRelativeToCenter:** True if newly spawned particles will be oriented relative to the center of the emission area, false otherwise.


####SetDirection(System.Single)
Sets the direction the particles will be emitted in.
> #####Parameters
> **direction:** The direction of the particles(in radians).


####GetDirection
Gets the direction of the particle emitter (in radians).
> #####Return value
> The direction of the emitter (radians).

####SetSpread(System.Single)
Sets the amount of spread for the system.
> #####Parameters
> **spread:** The amount of spread (radians).


####GetSpread
Gets the amount of directional spread of the particle emitter (in radians).
> #####Return value
> The spread of the emitter (radians).

####SetSpeed(System.Single,System.Single)
Sets the speed of the particles.
> #####Parameters
> **min:** The minimum linear speed of the particles.

> **max:** The maximun linear speed of the particles.


####GetSpeed(System.Single@,System.Single@)
Gets the speed of the particles.
> #####Parameters
> **out_min:** The minimum linear speed of the particles.

> **out_max:** The maximum linear speed of the particles.


####SetLinearAcceleration(System.Single,System.Single,System.Single,System.Single)
Sets the linear acceleration (acceleration along the x and y axes) for particles. Every particle created will accelerate along the x and y axes between xmin,ymin and xmax,ymax.
> #####Parameters
> **xmin:** The minimum acceleration along the x axis.

> **ymin:** The minimum acceleration along the y axis.

> **xmax:** The maximum acceleration along the x axis.

> **ymax:** The maximum acceleration along the y axis.


####GetLinearAcceleration(System.Single@,System.Single@,System.Single@,System.Single@)
Gets the linear acceleration (acceleration along the x and y axes) for particles. Every particle created will accelerate along the x and y axes between xmin,ymin and xmax,ymax.
> #####Parameters
> **out_xmin:** The minimum acceleration along the x axis.

> **out_ymin:** The minimum acceleration along the y axis.

> **out_xmax:** The maximum acceleration along the x axis.

> **out_ymax:** The maximum acceleration along the y axis.


####SetRadialAcceleration(System.Single,System.Single)
Set the radial acceleration (away from the emitter).
> #####Parameters
> **min:** The minimum acceleration.

> **max:** The maximum acceleration.


####GetRadialAcceleration(System.Int32@,System.Int32@)
Gets the radial acceleration (away from the emitter).
> #####Parameters
> **out_min:** The minimum acceleration.

> **out_max:** The maximum acceleration.


####SetTangentialAcceleration(System.Single,System.Single)
Sets the tangential acceleration (acceleration perpendicular to the particle's direction).
> #####Parameters
> **min:** The minimum acceleration.

> **max:** The maximum acceleration.


####GetTangentialAcceleration(System.Int32@,System.Int32@)
Gets the tangential acceleration (acceleration perpendicular to the particle's direction).
> #####Parameters
> **out_min:** The minimum acceleration.

> **out_max:** The maximum acceleration.


####SetLinearDamping(System.Single,System.Single)
Sets the amount of linear damping (constant deceleration) for particles.
> #####Parameters
> **min:** The minimum amount of linear damping applied to particles.

> **max:** The maximum amount of linear damping applied to particles.


####GetLinearDamping(System.Int32@,System.Int32@)
Gets the amount of linear damping (constant deceleration) for particles.
> #####Parameters
> **out_min:** The minimum amount of linear damping applied to particles.

> **out_max:** The maximum amount of linear damping applied to particles.


####SetSizes(System.Single[])
Sets a series of sizes by which to scale a particle sprite. 1.0 is normal size. The particle system will interpolate between each size evenly over the particle's lifetime. At least one size must be specified.A maximum of eight may be used.
> #####Parameters
> **sizeArray:** The size array.


####GetSizes
Gets the series of sizes by which the sprite is scaled. 1.0 is normal size. The particle system will interpolate between each size evenly over the particle's lifetime.
> #####Return value
> The size array.

####SetSizeVariation(System.Single)
Sets the amount of size variation (0 meaning no variation and 1 meaning full variation between start and end).
> #####Parameters
> **variation:** The amount of variation (0 meaning no variation and 1 meaning full variation between start and end).


####GetSizeVariation
Gets the amount of size variation (0 meaning no variation and 1 meaning full variation between start and end).
> #####Return value
> The amount of variation (0 meaning no variation and 1 meaning full variation between start and end).

####SetRotation(System.Single,System.Single)
Sets the rotation of the image upon particle creation (in radians).
> #####Parameters
> **min:** The minimum initial angle (radians).

> **max:** The maximum initial angle (radians).


####GetRotation(System.Int32@,System.Int32@)
Gets the rotation of the image upon particle creation (in radians).
> #####Parameters
> **out_min:** The minimum initial angle (radians).

> **out_max:** The maximum initial angle (radians).


####SetSpin(System.Single,System.Single)
Sets the spin of the sprite.
> #####Parameters
> **start:** The minimum spin (radians per second).

> **end:** The maximum spin (radians per second).


####GetSpin(System.Single@,System.Single@)
Gets the spin of the sprite.
> #####Parameters
> **out_start:** The minimum spin (radians per second).

> **out_end:** The maximum spin (radians per second).


####SetSpinVariation(System.Single)
Sets the amount of spin variation (0 meaning no variation and 1 meaning full variation between start and end).
> #####Parameters
> **variation:** The amount of variation (0 meaning no variation and 1 meaning full variation between start and end).


####GetSpinVariation
Gets the amount of spin variation (0 meaning no variation and 1 meaning full variation between start and end).
> #####Return value
> The amount of variation (0 meaning no variation and 1 meaning full variation between start and end).

####SetOffset(System.Single,System.Single)
Set the offset position which the particle sprite is rotated around. If this function is not used, the particles rotate around their center.
> #####Parameters
> **x:** The x coordinate of the rotation offset.

> **y:** The y coordinate of the rotation offset.


####GetOffset(System.Single@,System.Single@)
Get the offset position which the particle sprite is rotated around. If this function is not used, the particles rotate around their center.
> #####Parameters
> **out_x:** The x coordinate of the rotation offset.

> **out_y:** The y coordinate of the rotation offset.


####SetColors(Love.Vector4[])
Sets a series of colors to apply to the particle sprite. The particle system will interpolate between each color evenly over the particle's lifetime. Arguments can be passed in groups of four, representing the components of the desired RGBA value, or as tables of RGBA component values, with a default alpha value of 1 if only three values are given. At least one color must be specified. A maximum of eight may be used.
> #####Parameters
> **colorArray:** 


####GetColors
Gets the series of colors applied to the particle sprite.
> #####Return value
> 

####SetQuads(Love.Quad[])
Sets a series of Quads to use for the particle sprites. Particles will choose a Quad from the list based on the particle's current lifetime, allowing for the use of animated sprite sheets with ParticleSystems.
> #####Parameters
> **quads:** The Quads to use.


####GetQuads
Gets the series of Quads used for the particle sprites.
> #####Return value
> 

####SetRelativeRotation(System.Boolean)
Sets whether particle angles and rotations are relative to their velocities. If enabled, particles are aligned to the angle of their velocities and rotate relative to that angle.
> #####Parameters
> **enable:** True to enable relative particle rotation, false to disable it.


####HasRelativeRotation
Gets whether particle angles and rotations are relative to their velocities. If enabled, particles are aligned to the angle of their velocities and rotate relative to that angle.
> #####Return value
> True if relative particle rotation is enabled, false if it's disabled.

####GetCount
Gets the number of particles that are currently in the system.
> #####Return value
> The current number of live particles.

####Start
Starts the particle emitter.

####Stop
Stops the particle emitter, resetting the lifetime counter.

####Pause
Pauses the particle emitter.

####Reset
Resets the particle emitter, removing any existing particles and resetting the lifetime counter.

####Emit(System.Int32)
Emits a burst of particles from the particle emitter.
> #####Parameters
> **num:** The amount of particles to emit. The number of emitted particles will be truncated if the particle system's max buffer size is reached.


####IsActive
Checks whether the particle system is actively emitting particles.
> #####Return value
> True if system is active, false otherwise.

####IsPaused
Checks whether the particle system is paused.
> #####Return value
> True if system is paused, false otherwise.

####IsStopped
Checks whether the particle system is stopped.
> #####Return value
> True if system is stopped, false otherwise.

####Update(System.Single)
Updates the particle system; moving, creating and killing particles.
> #####Parameters
> **dt:** The time (seconds) since last frame.


##Quad
            
A quadrilateral (a polygon with four sides and four corners) with texture coordinate information. Quads can be used to select part of a texture to draw. In this way, one large texture atlas can be loaded, and then split up into sub-images. Quads 'bleed' when scaled, rotated or drawn at non-integer coordinates, even within SpriteBatches, to compensate for this, use 1px borders around the textures inside the texture atlas (preferably with the same colors as the actual border)
        
###Methods


####GetViewport
Gets the texture coordinates according to a viewport.
> #####Return value
> The size of the viewport

####GetTextureDimensions
Gets reference texture dimensions initially specified in love.graphics.newQuad.
> #####Return value
> The Texture size used by the Quad.

####Constructor
disable construct

####SetViewport(System.Single,System.Single,System.Single,System.Single)
Sets the texture coordinates according to a viewport.
> #####Parameters
> **x:** The top-left corner along the x-axis.

> **y:** The top-right corner along the y-axis.

> **w:** The width of the viewport.

> **h:** The height of the viewport.


####GetViewport(System.Single@,System.Single@,System.Single@,System.Single@)
Gets the texture coordinates according to a viewport.
> #####Parameters
> **out_x:** The top-left corner along the x-axis.

> **out_y:** The top-right corner along the y-axis.

> **out_w:** The width of the viewport.

> **out_h:** The height of the viewport.


####GetTextureDimensions(System.Single@,System.Single@)
Gets reference texture dimensions initially specified in love.graphics.newQuad.
> #####Return value
> The Texture size used by the Quad.

##File
            
Represents a file on the filesystem. A function that takes a file path can also take a .
        
###Fields

####
Numbers will be -1 if they cannot be determined.
####
The file's last modification time in seconds since the unix epoch, or nil if it can't be determined.
####
The type of the object at the path (file, directory, symlink, etc.)
####
Do not open a file (represents a closed file.)
####
Open a file for read.
####
Open a file for write.
####
Open a file for append.
####
Regular file.
####
Directory.
####
Symbolic link.
####
Something completely different like a device.
###Methods


####
Creates a new FileData from a file on the storage device.
> #####Parameters
> **filename:** Path to the file.

> #####Return value
> 

####
Creates a new File object. It needs to be opened before it can be accessed. (UTF-8 byte array version)
> #####Parameters
> **filename:** The filename of the file.(UTF-8 byte array needed)

> **fmode_type:** The mode to open the file in.

> #####Return value
> 

####
Creates a new FileData object.
> #####Parameters
> **contents:** The contents of the file.

> **filename:** The name of the file.

> #####Return value
> 

####
Creates a new FileData object.
> #####Parameters
> **file:** The file.

> #####Return value
> 

####
Initializes FileSystem, will be called internally, so should not be used explictly.
> #####Parameters
> **args:** 

> #####Return value
> 

####
Gets whether the game is in fused mode or not. If a game is in fused mode, its save directory will be directly in the Appdata directory instead of Appdata/LOVE/. The game will also be able to load C Lua dynamic libraries which are located in the save directory. A game is in fused mode if the source .love has been fused to the executable (see Game Distribution), or if "--fused" has been given as a command-line argument when starting the game.
> #####Return value
> 

####
Sets the write directory for your game. Note that you can only set the name of the folder to store your files in, not the location.
> #####Parameters
> **path:** The new identity that will be used as write directory.(UTF-8 byte array needed)

> **append:** Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently. TRUE: results in searching source before searching save directory; FALSE: results in searching game save directory before searching source directorymounted archives.


####
Gets the write directory name for your game. Note that this only returns the name of the folder to store your files in, not the full path.
> #####Return value
> 

####
Sets the source of the game, where the code is present. This function can only be called once, and is normally automatically done by LÖVE.
> #####Parameters
> **path:** Absolute path to the game's source folder.(UTF-8 byte array needed)


####
initially it was .exe folder lua version: Returns the full path to the the .love file or directory. If the game is fused to the LÖVE executable, then the executable is returned.
> #####Return value
> The full platform-dependent path of the .love file or directory.

####
Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
> #####Parameters
> **archive:** The folder or zip file in the game's save directory to mount.(UTF-8 byte array needed)

> **mountpoint:** The new path the archive will be mounted to.(UTF-8 byte array needed)

> **appendToPath:** Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.

> #####Return value
> 

####
Unmounts a zip file or folder previously mounted for reading with .
> #####Parameters
> **archive:** The folder or zip file in the game's save directory which is currently mounted.

> #####Return value
> True if the archive was successfully unmounted, false otherwise.

####
Gets the current working directory.
> #####Return value
> 

####
Returns the path of the user's directory
> #####Return value
> 

####
Returns the application data directory (could be the same as getUserDirectory
> #####Return value
> 

####
Gets the full path to the designated save directory. This can be useful if you want to use the standard io library (or something else) to read or write in the save directory.
> #####Return value
> 

####
Gets the platform-specific absolute path of the directory containing a filepath.
> #####Parameters
> **filename:** The filepath to get the directory of.(UTF-8 byte array needed)

> #####Return value
> The platform-specific full path of the directory containing the filepath.

####
will be called internally, so should not be used explictly.
> #####Return value
> 

####
Gets information about the specified file or directory.
> #####Parameters
> **path:** The file or directory path to check.

> #####Return value
> 

####
Recursively creates a directory. When called with "a/b" it creates both "a" and "a/b", if they don't exist already.
> #####Parameters
> **name:** The directory to create. (UTF-8 byte array needed)

> #####Return value
> True if the directory was created, false if not.

####
Removes a file or empty directory.
> #####Parameters
> **path:** The file or directory to remove.


####
Read the contents of a file.
> #####Parameters
> **filename:** The name (and path) of the file. (UTF-8 byte array needed)

> **len:** How many bytes to read. (-1 means all)

> #####Return value
> 

####
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
> #####Parameters
> **filename:** The name (and path) of the file.(UTF-8 byte need)

> **input:** The data to write to the file.


####
Append data to an existing file. (UTF-8 byte array version)
> #####Parameters
> **filename:** The name (and path) of the file.

> **input:** The data to append to the file.


####
Returns a table with the names of files and subdirectories in the specified path. The table is not sorted in any way; the order is undefined. If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.
> #####Parameters
> **dir:** The directory.

> #####Return value
> 

####
Deprecated in LÖVE 11.0 Gets the last modification time of a file.
> #####Parameters
> **filename:** 

> #####Return value
> 

####
Gets whether love.filesystem follows symbolic links.
> #####Return value
> 

####
no need for C# version Returns the full path to the directory containing the .love file.
> #####Return value
> 

####
no need for C# version Gets the filesystem paths that will be searched when require is called.
> #####Return value
> 

####
no need for C# version Sets the filesystem paths that will be searched when require is called. The paths string given to this function is a sequence of path templates separated by semicolons. The argument passed to require will be inserted in place of any question mark ("?") character in each template (after the dot characters in the argument passed to require are replaced by directory separators.) The paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.
> #####Parameters
> **paths:** 


####
Creates a new File object. It needs to be opened before it can be accessed.
> #####Parameters
> **filename:** The filename of the file.

> **fmode_type:** The mode to open the file in.

> #####Return value
> 

####
Creates a new FileData object.
> #####Parameters
> **contents:** The contents of the file.

> **filename:** The name of the file.

> #####Return value
> 

####
Creates a new FileData object.
> #####Parameters
> **contents:** The contents of the file.

> **filename:** The name of the file.

> #####Return value
> 

####
Initializes FileSystem, will be called internally, so should not be used explictly.
> #####Parameters
> **args:** 

> #####Return value
> 

####
Gets information about the specified file or directory.
> #####Parameters
> **path:** The file or directory path to check.

> #####Return value
> 

####
Sets the write directory for your game. Note that you can only set the name of the folder to store your files in, not the location.
> #####Parameters
> **path:** The new identity that will be used as write directory.

> **append:** Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently. TRUE: results in searching source before searching save directory; FALSE: results in searching game save directory before searching source directorymounted archives.


####
Sets the source of the game, where the code is present. This function can only be called once, and is normally automatically done by LÖVE.
> #####Parameters
> **path:** Absolute path to the game's source folder.


####
Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
> #####Parameters
> **archive:** The folder or zip file in the game's save directory to mount.

> **mountpoint:** The new path the archive will be mounted to.

> **appendToPath:** Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.

> #####Return value
> 

####
Gets the platform-specific absolute path of the directory containing a filepath.
> #####Parameters
> **filename:** The filepath to get the directory of.

> #####Return value
> The platform-specific full path of the directory containing the filepath.

####
Recursively creates a directory. When called with "a/b" it creates both "a" and "a/b", if they don't exist already.
> #####Parameters
> **name:** The directory to create.

> #####Return value
> True if the directory was created, false if not.

####
Removes a file (or directory).
> #####Parameters
> **path:** The file or directory to remove.


####
Read the contents of a file.
> #####Parameters
> **filename:** The name (and path) of the file.

> **len:** How many bytes to read. (-1 means all)

> #####Return value
> 

####
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
> #####Parameters
> **filename:** The name (and path) of the file.

> **input:** The data to write to the file.


####
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents. encode with UTF-8
> #####Parameters
> **filename:** The name (and path) of the file.

> **input:** The string data to write to the file.


####
Append data to an existing file.
> #####Parameters
> **filename:** The name (and path) of the file.

> **input:** The data to append to the file.


####
Append text to an existing file (encode with UTF-8).
> #####Parameters
> **filename:** The name (and path) of the file.

> **txt:** string to append


####
Returns a table with the names of files and subdirectories in the specified path. The array is not sorted in any way; the order is undefined. If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.
> #####Parameters
> **dir:** The directory.

> #####Return value
> 

####Write(System.Byte[])
Write data to a file.
> #####Parameters
> **data:** 

> #####Return value
> Whether the operation was successful.

####Write(Love.Data)
Write data to a file.
> #####Parameters
> **data:** The Data object to write.

> #####Return value
> Whether the operation was successful.

####Constructor
disable no-param construct

####GetSize
Returns the file size(in byte).
> #####Return value
> 

####Open(Love.FileMode)
Open the file for write, read or append.
> #####Parameters
> **mode_type:** The mode to open the file in.


####Close
Closes a File.
> #####Return value
> Whether closing was successful.

####IsOpen
Gets whether the file is open.
> #####Return value
> True if the file is currently open, false otherwise.

####Read(System.Int64)
Read a number of bytes from a file
> #####Parameters
> **size:** The number of bytes to read.

> #####Return value
> 

####Write(System.Byte[],System.Int64)
Write data to a file.
> #####Parameters
> **data:** The byte data to write.

> **datasize:** How many bytes to write.

> #####Return value
> Whether the operation was successful.

####Write(Love.Data,System.Int64)
Write data to a file.
> #####Parameters
> **data:** The Data object to write.

> **datasize:** How many bytes to write.

> #####Return value
> Whether the operation was successful.

####Flush
Flushes any buffered written data in the file to disk.

####IsEOF
Gets whether end-of-file has been reached.
> #####Return value
> Whether EOF has been reached.

####Tell
Returns the position in the file.
> #####Return value
> The current position.

####Seek(System.Int64)
Seek to a position in a file
> #####Parameters
> **pos:** The position to seek to

> #####Return value
> Whether the operation was successful

####SetBuffer(Love.BufferMode,System.Int64)
Sets the buffer mode for a file opened for writing or appending. Files with buffering enabled will not write data to the disk until the buffer size limit is reached, depending on the buffer mode. will force any buffered data to be written to the disk.
> #####Parameters
> **bufmode_type:** The buffer mode to use.

> **size:** The maximum size in bytes of the file's buffer.

> #####Return value
> Whether the buffer mode was successfully set.

####GetBuffer(Love.BufferMode@,System.Int64@)
Gets the buffer mode of a file.
> #####Parameters
> **out_bufmode_type:** The current buffer mode of the file.

> **out_size:** The maximum size in bytes of the file's buffer.


####GetMode
Gets the the file has been opened with.
> #####Return value
> The mode this file has been opened with.

####GetFilename
Gets the filename that the File object was created with. If the file object originated from the callback, the filename will be the full platform-dependent file path.
> #####Return value
> 

####Constructor
disable no-param construct

####
Gets the filename of the FileData.
> #####Return value
> The name of the file the FileData represents.

####
Gets the extension of the FileData.
> #####Return value
> The extension of the file the FileData represents.

##Shader
            
A Shader is used for advanced hardware-accelerated pixel or vertex manipulation. These effects are written in a language based on GLSL (OpenGL Shading Language) with a few things simplified for easier coding. Potential uses for shaders include HDR/bloom, motion blur, grayscale/invert/sepia/any kind of color effect, reflection/refraction, distortions, bump mapping, and much more! Here is a collection of basic shaders and good starting point to learn: https://github.com/vrld/moonshine
        
###Methods


####SendVector2(System.String,Love.Vector2[])
Sends one or more Vector2 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Vector2 to send to the shader.

> **valueArray:** Vector2 to send to store in the uniform variable.


####SendVector3(System.String,Love.Vector3[])
Sends one or more Vector3 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Vector3 to send to the shader.

> **valueArray:** Vector3 to send to store in the uniform variable.


####SendVector4(System.String,Love.Vector4[])
Sends one or more Vector4 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Vector4 to send to the shader.

> **valueArray:** Vector4 to send to store in the uniform variable.


####Send(System.String,Love.Vector2[])
Sends one or more Vector2 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Vector2 to send to the shader.

> **valueArray:** Vector2 to send to store in the uniform variable.


####Send(System.String,Love.Vector3[])
Sends one or more Vector3 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Vector3 to send to the shader.

> **valueArray:** Vector3 to send to store in the uniform variable.


####Send(System.String,Love.Vector4[])
Sends one or more Vector4 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Vector4 to send to the shader.

> **valueArray:** Vector4 to send to store in the uniform variable.


####Send(System.String,System.Single[])
Sends one or more float values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the float to send to the shader.

> **valueArray:** Float to send to store in the uniform variable.


####Send(System.String,System.UInt32[])
Sends one or more uint values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the uint to send to the shader.

> **valueArray:** Uint to send to store in the uniform variable.


####Send(System.String,System.Int32[])
Sends one or more int values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the int to send to the shader.

> **valueArray:** Int to send to store in the uniform variable.


####Send(System.String,System.Boolean[])
Sends one or more boolean values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the boolean to send to the shader.

> **valueArray:** Boolean to send to store in the uniform variable.


####Send(System.String,Love.Matrix22[])
Sends one or more Matrix22 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Matrix22 to send to the shader.

> **valueArray:** Matrix22 to send to store in the uniform variable.


####Send(System.String,Love.Matrix33[])
Sends one or more Matrix33 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Matrix33 to send to the shader.

> **valueArray:** Matrix33 to send to store in the uniform variable.


####Send(System.String,Love.Matrix44[])
Sends one or more SendMatrix values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the SendMatrix to send to the shader.

> **valueArray:** SendMatrix to send to store in the uniform variable.


####Send(System.String,Love.Texture)
Sends one or more texture to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Texture to send to the shader.(UTF8 byte array)

> **texture:** Texture (Image or Canvas) to send to the uniform variable.


####Constructor
Use Graphics.NewShader(...) to create Shader !

####GetWarnings
Gets warning and error messages (if any).
> #####Return value
> 

####SendColors(System.Byte[],Love.Vector4[])
Sends one or more colors to a special (extern / uniform) vec3 or vec4 variable inside the shader. The color components must be in the range of [0, 1]. The colors are gamma-corrected if global gamma-correction is enabled.
> #####Parameters
> **name:** The name of the color extern variable to send to in the shader. (UTF8 byte array)

> **valueArray:** A array with red, green, blue, and alpha color components in the range of [0, 1] to send to the extern as a vector.


####SendFloats(System.Byte[],System.Single[])
Sends one or more float values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the float to send to the shader. (UTF8 byte array)

> **valueArray:** Float to send to store in the uniform variable.


####SendUints(System.Byte[],System.UInt32[])
Sends one or more uint values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the uint to send to the shader. (UTF8 byte array)

> **valueArray:** Uint to send to store in the uniform variable.


####SendInts(System.Byte[],System.Int32[])
Sends one or more int values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the int to send to the shader. (UTF8 byte array)

> **valueArray:** Int to send to store in the uniform variable.


####SendBooleans(System.Byte[],System.Boolean[])
Sends one or more boolean values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the boolean to send to the shader. (UTF8 byte array)

> **valueArray:** Boolean to send to store in the uniform variable.


####SendMatrix(System.Byte[],System.Single[],System.Int32,System.Int32,System.Int32)
WARNNING: incorrect use of this function can carsh program. params of valueArray.Length should equals columns * rows * count
> #####Parameters
> **name:** uniform variable name

> **valueArray:** each float consistute matrix array

> **columns:** matrix columns

> **rows:** matrix rows

> **count:** matrix count


####SendTexture(System.Byte[],Love.Texture[])
Sends one or more texture to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Texture to send to the shader.(UTF8 byte array)

> **texture:** Texture (Image or Canvas) to send to the uniform variable.


####SendColors(System.String,Love.Vector4[])
Sends one or more colors to a special (extern / uniform) vec3 or vec4 variable inside the shader. The color components must be in the range of [0, 1]. The colors are gamma-corrected if global gamma-correction is enabled.
> #####Parameters
> **name:** The name of the color extern variable to send to in the shader.

> **valueArray:** A array with red, green, blue, and alpha color components in the range of [0, 1] to send to the extern as a vector.


####SendFloats(System.String,System.Single[])
Sends one or more float values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the float to send to the shader.

> **valueArray:** Float to send to store in the uniform variable.


####SendUints(System.String,System.UInt32[])
Sends one or more uint values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the uint to send to the shader.

> **valueArray:** Uint to send to store in the uniform variable.


####SendInts(System.String,System.Int32[])
Sends one or more int values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the int to send to the shader.

> **valueArray:** Int to send to store in the uniform variable.


####SendBooleans(System.String,System.Boolean[])
Sends one or more boolean values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the boolean to send to the shader.

> **valueArray:** Boolean to send to store in the uniform variable.


####SendMatrix(System.String,System.Single[],System.Int32,System.Int32,System.Int32)
WARNNING: incorrect use of this function can carsh program. params of valueArray.Length should equals columns * rows * count
> #####Parameters
> **name:** uniform variable name

> **valueArray:** each float consistute matrix array

> **columns:** matrix columns

> **rows:** matrix rows

> **count:** matrix count


####SendMatrix(System.String,Love.Matrix22[])
Sends one or more Matrix22 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Matrix22 to send to the shader.

> **valueArray:** Matrix22 to send to store in the uniform variable.


####SendMatrix(System.String,Love.Matrix33[])
Sends one or more Matrix33 values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Matrix33 to send to the shader.

> **valueArray:** Matrix33 to send to store in the uniform variable.


####SendMatrix(System.String,Love.Matrix44[])
Sends one or more SendMatrix values to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the SendMatrix to send to the shader.

> **valueArray:** SendMatrix to send to store in the uniform variable.


####SendTexture(System.String,Love.Texture)
Sends one or more texture to a special (uniform) variable inside the shader.
> #####Parameters
> **name:** Name of the Texture to send to the shader.(UTF8 byte array)

> **texture:** Texture (Image or Canvas) to send to the uniform variable.


##Point
            
Represents an ordered pair of x and y coordinates that define a point in a two-dimensional plane.
        
###Fields

####Empty
Creates a new instance of the class with member data left uninitialized.
###Properties

####IsEmpty
Gets a value indicating whether this is empty.
####X
Gets the x-coordinate of this .
####Y
Gets the y-coordinate of this .
###Methods


####Constructor
Initializes a new instance of the class with the specified coordinates.

####Constructor
Initializes a new instance of the class from a .

####Constructor
Initializes a new instance of the Point class using coordinates specified by an integer value.

####op_Implicit(Love.Point)~Love.Vector2
Creates a with the coordinates of the specified

####op_Explicit(Love.Point)~Love.Size
Creates a with the coordinates of the specified .

####op_Addition(Love.Point,Love.Size)
Translates a by a given .

####op_Subtraction(Love.Point,Love.Size)
Translates a by the negative of a given .

####op_Equality(Love.Point,Love.Point)
Compares two objects. The result specifies whether the values of the and properties of the two objects are equal.

####op_Inequality(Love.Point,Love.Point)
Compares two objects. The result specifies whether the values of the or properties of the two objects are unequal.

####Add(Love.Point,Love.Size)
Translates a by a given .

####Subtract(Love.Point,Love.Size)
Translates a by the negative of a given .

####Ceiling(Love.Vector2)
Converts a PointF to a Point by performing a ceiling operation on all the coordinates.

####Truncate(Love.Vector2)
Converts a PointF to a Point by performing a truncate operation on all the coordinates.

####Round(Love.Vector2)
Converts a PointF to a Point by performing a round operation on all the coordinates.

####Equals(System.Object)
Specifies whether this contains the same coordinates as the specified .

####GetHashCode
Returns a hash code.

####Offset(System.Int32,System.Int32)
Translates this by the specified amount.

####Offset(Love.Point)
Translates this by the specified amount.

####ToString
Converts this to a human readable string.

##Rectangle
            
Stores the location and size of a rectangular region.
        
###Fields

####
Initializes a new instance of the class.
###Properties

####Location
Gets or sets the coordinates of the upper-left corner of the rectangular region represented by this .
####Size
Gets or sets the size of this .
####X
Gets or sets the x-coordinate of the upper-left corner of the rectangular region defined by this .
####Y
Gets or sets the y-coordinate of the upper-left corner of the rectangular region defined by this .
####Width
Gets or sets the width of the rectangular region defined by this .
####Height
Gets or sets the width of the rectangular region defined by this .
####Left
Gets the x-coordinate of the upper-left corner of the rectangular region defined by this .
####Top
Gets the y-coordinate of the upper-left corner of the rectangular region defined by this .
####Right
Gets the x-coordinate of the lower-right corner of the rectangular region defined by this .
####Bottom
Gets the y-coordinate of the lower-right corner of the rectangular region defined by this .
####IsEmpty
Tests whether this has a or a of 0.
####
Gets or sets the coordinates of the upper-left corner of the rectangular region represented by this .
####
Gets or sets the size of this .
####
Gets or sets the x-coordinate of the upper-left corner of the rectangular region defined by this .
####
Gets or sets the y-coordinate of the upper-left corner of the rectangular region defined by this .
####
Gets or sets the width of the rectangular region defined by this .
####
Gets or sets the height of the rectangular region defined by this .
####
Gets the x-coordinate of the upper-left corner of the rectangular region defined by this .
####
Gets the y-coordinate of the upper-left corner of the rectangular region defined by this .
####
Gets the x-coordinate of the lower-right corner of the rectangular region defined by this .
####
Gets the y-coordinate of the lower-right corner of the rectangular region defined by this .
####
Tests whether this has a or a of 0.
###Methods


####Constructor
Initializes a new instance of the class with the specified location and size.

####Constructor
Initializes a new instance of the Rectangle class with the specified location and size.

####FromLTRB(System.Int32,System.Int32,System.Int32,System.Int32)
Creates a new with the specified location and size.

####Equals(System.Object)
Tests whether is a with the same location and size of this Rectangle.

####op_Equality(Love.Rectangle,Love.Rectangle)
Tests whether two objects have equal location and size.

####op_Inequality(Love.Rectangle,Love.Rectangle)
Tests whether two objects differ in location or size.

####Ceiling(Love.RectangleF)
Converts a RectangleF to a Rectangle by performing a ceiling operation on all the coordinates.

####Truncate(Love.RectangleF)
Converts a RectangleF to a Rectangle by performing a truncate operation on all the coordinates.

####Round(Love.RectangleF)
Converts a RectangleF to a Rectangle by performing a round operation on all the coordinates.

####Contains(System.Int32,System.Int32)
Determines if the specified point is contained within the rectangular region defined by this .

####Contains(Love.Point)
Determines if the specified point is contained within the rectangular region defined by this .

####Contains(Love.Rectangle)
Determines if the rectangular region represented by is entirely contained within the rectangular region represented by this .

####Inflate(System.Int32,System.Int32)
Inflates this by the specified amount.

####Inflate(Love.Size)
Inflates this by the specified amount.

####Inflate(Love.Rectangle,System.Int32,System.Int32)
Creates a that is inflated by the specified amount.

####Intersect(Love.Rectangle)
Creates a Rectangle that represents the intersection between this Rectangle and rect.

####Intersect(Love.Rectangle,Love.Rectangle)
Creates a rectangle that represents the intersection between a and b. If there is no intersection, null is returned.

####IntersectsWith(Love.Rectangle)
Determines if this rectangle intersects with rect.

####Union(Love.Rectangle,Love.Rectangle)
Creates a rectangle that represents the union between a and b.

####Offset(Love.Point)
Adjusts the location of this rectangle by the specified amount.

####Offset(System.Int32,System.Int32)
Adjusts the location of this rectangle by the specified amount.

####ToString
Converts the attributes of this to a human readable string.

####Constructor
Initializes a new instance of the class with the specified location and size.

####Constructor
Initializes a new instance of the class with the specified location and size.

####
Creates a new with the specified location and size.

####
Tests whether is a with the same location and size of this .

####
Tests whether two objects have equal location and size.

####
Tests whether two objects differ in location or size.

####
Determines if the specified point is contained within the rectangular region defined by this .

####
Determines if the specified point is contained within the rectangular region defined by this .

####
Determines if the rectangular region represented by is entirely contained within the rectangular region represented by this .

####
Gets the hash code for this .

####
Inflates this by the specified amount.

####
Inflates this by the specified amount.

####
Creates a that is inflated by the specified amount.

####
Creates a Rectangle that represents the intersection between this Rectangle and rect.

####
Creates a rectangle that represents the intersection between a and b. If there is no intersection, null is returned.

####
Determines if this rectangle intersects with rect.

####
Creates a rectangle that represents the union between a and b.

####
Adjusts the location of this rectangle by the specified amount.

####
Adjusts the location of this rectangle by the specified amount.

####
Converts the specified to a .

####
Converts the and of this to a human-readable string.

##RectangleF
            
Stores the location and size of a rectangular region.
        
###Fields

####Empty
Initializes a new instance of the class.
###Properties

####Location
Gets or sets the coordinates of the upper-left corner of the rectangular region represented by this .
####Size
Gets or sets the size of this .
####X
Gets or sets the x-coordinate of the upper-left corner of the rectangular region defined by this .
####Y
Gets or sets the y-coordinate of the upper-left corner of the rectangular region defined by this .
####Width
Gets or sets the width of the rectangular region defined by this .
####Height
Gets or sets the height of the rectangular region defined by this .
####Left
Gets the x-coordinate of the upper-left corner of the rectangular region defined by this .
####Top
Gets the y-coordinate of the upper-left corner of the rectangular region defined by this .
####Right
Gets the x-coordinate of the lower-right corner of the rectangular region defined by this .
####Bottom
Gets the y-coordinate of the lower-right corner of the rectangular region defined by this .
####IsEmpty
Tests whether this has a or a of 0.
###Methods


####Constructor
Initializes a new instance of the class with the specified location and size.

####Constructor
Initializes a new instance of the class with the specified location and size.

####FromLTRB(System.Single,System.Single,System.Single,System.Single)
Creates a new with the specified location and size.

####Equals(System.Object)
Tests whether is a with the same location and size of this .

####op_Equality(Love.RectangleF,Love.RectangleF)
Tests whether two objects have equal location and size.

####op_Inequality(Love.RectangleF,Love.RectangleF)
Tests whether two objects differ in location or size.

####Contains(System.Single,System.Single)
Determines if the specified point is contained within the rectangular region defined by this .

####Contains(Love.Vector2)
Determines if the specified point is contained within the rectangular region defined by this .

####Contains(Love.RectangleF)
Determines if the rectangular region represented by is entirely contained within the rectangular region represented by this .

####GetHashCode
Gets the hash code for this .

####Inflate(System.Single,System.Single)
Inflates this by the specified amount.

####Inflate(Love.SizeF)
Inflates this by the specified amount.

####Inflate(Love.RectangleF,System.Single,System.Single)
Creates a that is inflated by the specified amount.

####Intersect(Love.RectangleF)
Creates a Rectangle that represents the intersection between this Rectangle and rect.

####Intersect(Love.RectangleF,Love.RectangleF)
Creates a rectangle that represents the intersection between a and b. If there is no intersection, null is returned.

####IntersectsWith(Love.RectangleF)
Determines if this rectangle intersects with rect.

####Union(Love.RectangleF,Love.RectangleF)
Creates a rectangle that represents the union between a and b.

####Offset(Love.Vector2)
Adjusts the location of this rectangle by the specified amount.

####Offset(System.Single,System.Single)
Adjusts the location of this rectangle by the specified amount.

####op_Implicit(Love.Rectangle)~Love.RectangleF
Converts the specified to a .

####ToString
Converts the and of this to a human-readable string.

##Resource
            
This module will create resource through starndard C# IO, this means you can read a png file from path like C:/love-logo.png
        
###Methods


####NewSource(System.String,Love.SourceType)
Creates a new Source from file name.
> #####Parameters
> **filename:** The filepath to the audio file.

> **type:** Streaming or static source.

> #####Return value
> 

####NewFileData(System.String)
Creates a new FileData object. This function will read file from standard C# IO File system.
> #####Parameters
> **fileName:** file name, such as C:/love-logo.png

> #####Return value
> 

####Append(System.String,System.Byte[])
Append data to an existing file.
> #####Parameters
> **path:** The name (and path) of the file.

> **byteArray:** The data to append to the file.


####Append(System.String,System.String)
Append data to an existing file.
> #####Parameters
> **path:** The name (and path) of the file.

> **content:** The string to append to the file.


####Append(System.String,System.String,System.Text.Encoding)
Append data to an existing file.
> #####Parameters
> **path:** The name (and path) of the file.

> **content:** The string to append to the file.

> **encoding:** string encoding.


####CreateDirectory(System.String)
Recursively creates a directory. When called with "a/b" it creates both "a" and "a/b", if they don't exist already.
> #####Parameters
> **pathString:** The directory to create.

> #####Return value
> True if the directory was created, false if not.

####GetDirectoryItems(System.String)
Returns a table with the names of files and subdirectories in the specified path. The array is not sorted in any way; the order is undefined. If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.
> #####Parameters
> **path:** The directory.

> #####Return value
> 

####GetInfo(System.String)
Gets information about the specified file or directory.
> #####Parameters
> **path:** The file or directory path to check.

> #####Return value
> 

####Lines(System.Action{System.String},System.String)
Iterate over the lines in a file.
> #####Parameters
> **lineFunction:** 

> **path:** 


####Read(System.String)
Read the all contents of a file.
> #####Parameters
> **filename:** The name (and path) of the file.

> #####Return value
> 

####Read(System.String,System.Int32)
Read the all contents of a file.
> #####Parameters
> **filename:** The name (and path) of the file.

> **len:** How many bytes to read.

> #####Return value
> 

####Remove(System.String)
Removes a file (or directory).
> #####Parameters
> **path:** The file or directory to remove.


####Write(System.String,System.Byte[])
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
> #####Parameters
> **path:** The name (and path) of the file.

> **bytes:** The data to write to the file.


####Write(System.String,System.String)
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
> #####Parameters
> **filename:** The name (and path) of the file.

> **contents:** The string data to write to the file.


####Write(System.String,System.String,System.Text.Encoding)
Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
> #####Parameters
> **filename:** The name (and path) of the file.

> **contents:** The string data to write to the file.

> **encoding:** string encodeing


####NewRasterizer(System.String)
Creates a new Rasterizer.
> #####Parameters
> **filename:** The font file.

> #####Return value
> The rasterizer.

####NewFont(System.String,System.Int32,Love.HintingMode)
Create a new TrueType font.
> #####Parameters
> **filename:** The filepath to the TrueType font file.

> **size:** The size of the font in pixels.

> **hinting:** True Type hinting mode.

> #####Return value
> A Font object which can be used to draw text on screen.

####NewBMFont(System.String,System.String[])

> #####Parameters
> **filename:** The filepath to the BMFont file.

> **imageFileName:** The filepath to the BMFont's image file.

> #####Return value
> 

####NewImage(System.String,System.Boolean,System.Boolean)
Creates a new Image from a filepath.
> #####Parameters
> **filename:** The filepath to the image file .

> **flagMipmaps:** If true, mipmaps for the image will be automatically generated (or taken from the images's file if possible, if the image originated from a CompressedImageData). If this value is a table, it should contain a list of other filenames of images of the same format that have progressively half-sized dimensions, all the way down to 1x1. Those images will be used as this Image's mipmap levels.

> **flagLinear:** True if the image's pixels should be interpreted as being linear RGB rather than sRGB-encoded, if gamma-correct rendering is enabled. Has no effect otherwise.

> #####Return value
> 

####NewImageFont(System.String,System.String,System.Int32)
Creates a new Font by loading a specifically formatted image. In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs string. This function can be slow if it is called repeatedly, such as from Scene.Update. If you need to use a specific resource often, create it once and store it somewhere it can be reused!
> #####Parameters
> **filename:** The filepath to the image file.

> **glyphs:** A string of the characters in the image in order from left to right.

> **extraspacing:** Additional spacing (positive or negative) to apply to each glyph in the Font.

> #####Return value
> 

####NewImageData(System.String)
Creates a new object.
> #####Parameters
> **filename:** The filename of the image file.

> #####Return value
> The new ImageData object.

####NewCompressedData(System.String)
Create a new object from a compressed image file. LÖVE supports several compressed texture formats, enumerated in the page.
> #####Parameters
> **filename:** The filename of the compressed image file.

> #####Return value
> The new CompressedImageData object.

####EncodeToFile(System.String,Love.ImageData,Love.ImageFormat)
Encodes the ImageData and writes it to the path.
> #####Parameters
> **path:** The filename to write the file to.

> **imageData:** The imageData to write the file to.

> **format:** The format to encode the image as.

> #####Return value
> 
> #####Example
> 
             Draw red rectangle to canvas, and presss F12 to save png file at 'D:/a.png'
             
```

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
                         Resource.EncodeToFile("D:/a.png", canvas, ImageFormat.PNG);
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
             

####NewCursor(System.String,System.Int32,System.Int32)
Creates a new hardware Cursor object from an image file or ImageData. Hardware cursors are framerate-independent and work the same way as normal operating system cursors. Unlike drawing an image at the mouse's current coordinates, hardware cursors never have visible lag between when the mouse is moved and when the cursor position updates, even at low framerates. The hot spot is the point the operating system uses to determine what was clicked and at what position the mouse cursor is. For example, the normal arrow pointer normally has its hot spot at the top left of the image, but a crosshair cursor might have it in the middle.
> #####Parameters
> **filename:** Path to the image to use for the new Cursor.

> **hotX:** The x-coordinate in the image of the cursor's hot spot.

> **hotY:** The y-coordinate in the image of the cursor's hot spot.

> #####Return value
> 

####NewDecoder(System.String,System.Int32)
Attempts to find a decoder for the encoded sound data in the specified file.
> #####Parameters
> **filename:** The filename of the file with encoded sound data.

> **bufferSize:** The size of each decoded chunk, in bytes.

> #####Return value
> 

####NewSoundData(System.String)
Creates a new SoundData. It's also possible to create SoundData with a custom sample rate, channel and bit depth. The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.
> #####Parameters
> **filename:** The file name of the file to load.

> #####Return value
> A new SoundData object.

##Size
            Represents a dimension in 2D coordinate space
            
Represents the size of a rectangular region with an ordered pair of width and height.
        
###Fields

####Empty
Initializes a new instance of the class.
####
Initializes a new instance of the class.
###Properties

####IsEmpty
Tests whether this has zero width and height.
####Width
Horizontal dimension Represents the horizontal component of this .
####Height
Vertical dimension Represents the vertical component of this .
####
Tests whether this has zero width and height.
####
Horizontal dimension Represents the horizontal component of this .
####
Vertical dimension Represents the vertical component of this .
###Methods


####Constructor
Initializes a new instance of the class from the specified .

####Constructor
Initializes a new instance of the class from the specified dimensions.

####op_Implicit(Love.Size)~Love.SizeF
Converts the specified to a .

####op_Addition(Love.Size,Love.Size)
Performs vector addition of two objects.

####op_Subtraction(Love.Size,Love.Size)
Contracts a by another

####op_Multiply(System.Int32,Love.Size)
Multiplies a by an producing .
> #####Parameters
> **left:** Multiplier of type .

> **right:** Multiplicand of type .

> #####Return value
> Product of type .

####op_Multiply(Love.Size,System.Int32)
Multiplies by an producing .
> #####Parameters
> **left:** Multiplicand of type .

> **right:** Multiplier of type .

> #####Return value
> Product of type .

####op_Division(Love.Size,System.Int32)
Divides by an producing .
> #####Parameters
> **left:** Dividend of type .

> **right:** Divisor of type .

> #####Return value
> Result of type .

####op_Multiply(System.Single,Love.Size)
Multiplies by a producing .
> #####Parameters
> **left:** Multiplier of type .

> **right:** Multiplicand of type .

> #####Return value
> Product of type .

####op_Multiply(Love.Size,System.Single)
Multiplies by a producing .
> #####Parameters
> **left:** Multiplicand of type .

> **right:** Multiplier of type .

> #####Return value
> Product of type .

####op_Division(Love.Size,System.Single)
Divides by a producing .
> #####Parameters
> **left:** Dividend of type .

> **right:** Divisor of type .

> #####Return value
> Result of type .

####op_Equality(Love.Size,Love.Size)
Tests whether two objects are identical.

####op_Inequality(Love.Size,Love.Size)
Tests whether two objects are different.

####op_Explicit(Love.Size)~Love.Point
Converts the specified to a .

####Add(Love.Size,Love.Size)
Performs vector addition of two objects.

####Ceiling(Love.SizeF)
Converts a SizeF to a Size by performing a ceiling operation on all the coordinates.

####Subtract(Love.Size,Love.Size)
Contracts a by another .

####Truncate(Love.SizeF)
Converts a SizeF to a Size by performing a truncate operation on all the coordinates.

####Round(Love.SizeF)
Converts a SizeF to a Size by performing a round operation on all the coordinates.

####Equals(System.Object)
Tests to see whether the specified object is a with the same dimensions as this .

####GetHashCode
Returns a hash code.

####ToString
Creates a human-readable string that represents this .

####Multiply(Love.Size,System.Int32)
Multiplies by an producing .
> #####Parameters
> **size:** Multiplicand of type .

> **multiplier:** Multiplier of type .

> #####Return value
> Product of type .

####Multiply(Love.Size,System.Single)
Multiplies by a producing .
> #####Parameters
> **size:** Multiplicand of type .

> **multiplier:** Multiplier of type .

> #####Return value
> Product of type SizeF.

####Constructor
Initializes a new instance of the class from the specified existing .

####Constructor
Initializes a new instance of the class from the specified .

####Constructor
Initializes a new instance of the class from the specified dimensions.

####
Performs vector addition of two objects.

####
Contracts a by another

####
Multiplies by a producing .
> #####Parameters
> **left:** Multiplier of type .

> **right:** Multiplicand of type .

> #####Return value
> Product of type .

####
Multiplies by a producing .
> #####Parameters
> **left:** Multiplicand of type .

> **right:** Multiplier of type .

> #####Return value
> Product of type .

####
Divides by a producing .
> #####Parameters
> **left:** Dividend of type .

> **right:** Divisor of type .

> #####Return value
> Result of type .

####
Tests whether two objects are identical.

####
Tests whether two objects are different.

####
Converts the specified to a .

####
Performs vector addition of two objects.

####
Contracts a by another .

####
Tests to see whether the specified object is a with the same dimensions as this .

####
Creates a human-readable string that represents this .

####
Multiplies by a producing .
> #####Parameters
> **size:** Multiplicand of type .

> **multiplier:** Multiplier of type .

> #####Return value
> Product of type SizeF.

##SizeF
            Represents a dimension in 2D coordinate space
            
Represents the size of a rectangular region with an ordered pair of width and height.
        
###Fields

####Empty
Initializes a new instance of the class.
###Properties

####IsEmpty
Tests whether this has zero width and height.
####Width
Horizontal dimension Represents the horizontal component of this .
####Height
Vertical dimension Represents the vertical component of this .
###Methods


####Constructor
Initializes a new instance of the class from the specified existing .

####Constructor
Initializes a new instance of the class from the specified .

####Constructor
Initializes a new instance of the class from the specified dimensions.

####op_Addition(Love.SizeF,Love.SizeF)
Performs vector addition of two objects.

####op_Subtraction(Love.SizeF,Love.SizeF)
Contracts a by another

####op_Multiply(System.Single,Love.SizeF)
Multiplies by a producing .
> #####Parameters
> **left:** Multiplier of type .

> **right:** Multiplicand of type .

> #####Return value
> Product of type .

####op_Multiply(Love.SizeF,System.Single)
Multiplies by a producing .
> #####Parameters
> **left:** Multiplicand of type .

> **right:** Multiplier of type .

> #####Return value
> Product of type .

####op_Division(Love.SizeF,System.Single)
Divides by a producing .
> #####Parameters
> **left:** Dividend of type .

> **right:** Divisor of type .

> #####Return value
> Result of type .

####op_Equality(Love.SizeF,Love.SizeF)
Tests whether two objects are identical.

####op_Inequality(Love.SizeF,Love.SizeF)
Tests whether two objects are different.

####op_Explicit(Love.SizeF)~Love.Vector2
Converts the specified to a .

####Add(Love.SizeF,Love.SizeF)
Performs vector addition of two objects.

####Subtract(Love.SizeF,Love.SizeF)
Contracts a by another .

####Equals(System.Object)
Tests to see whether the specified object is a with the same dimensions as this .

####ToString
Creates a human-readable string that represents this .

####Multiply(Love.SizeF,System.Single)
Multiplies by a producing .
> #####Parameters
> **size:** Multiplicand of type .

> **multiplier:** Multiplier of type .

> #####Return value
> Product of type SizeF.

##WindowSettings
            
窗口属性
        
###Properties

####Fullscreen
Fullscreen (true), or windowed (false).
####FullscreenType
Choose between "DeskTop" fullscreen or "Exclusive" fullscreen mode
####Vsync
True if LÖVE should wait for vsync, false otherwise.
####MSAA
The number of antialiasing samples.
####Stencil
Whether a stencil buffer should be allocated. If true, the stencil buffer will have 8 bits.
####Depth
The number of bits in the depth buffer.
####Resizable
Let the window be user-resizable
####Borderless
Remove all border visuals from the window
####Centered
True if the window should be centered.
####Display
The index of the display to show the window in, if multiple monitors are available.
####HighDpi
True if high-dpi mode should be used on Retina displays in macOS and iOS. Does nothing on non-Retina displays. Added in 0.9.1.
####MinWidth
The minimum width of the window, if it's resizable. Cannot be less than 1.
####MinHeight
The minimum height of the window, if it's resizable. Cannot be less than 1.
####UsePosition
True if use the position params, false otherwise.
####X
The x-coordinate of the window's position in the specified display. Added in 0.9.2.
####Refreshrate
We don't explicitly set the refresh rate, it's "read-only". The refresh rate of the screen's current display mode, in Hz. May be 0 if the value can't be determined. Added in 0.9.2.

##Vertex
            
for Mesh function
        
###Fields

####pos
The position of the vertex .
####uv
The u and v texture coordinate of the vertex. Texture coordinates are normally in the range of [0, 1], but can be greater or less (see WrapMode.)
####color
The vertex color.
###Methods


####Constructor
Mesh vertex.
> #####Parameters
> **pos:** The position of the vertex.


####Constructor
Mesh vertex.
> #####Parameters
> **pos:** The position of the vertex.

> **uv:** The u and vtexture coordinate of the vertex. Texture coordinates are normally in the range of [0, 1], but can be greater or less (see ) https://love2d.org/wiki/WrapMode

> **color:** The vertex color.


##Common
            

        
###Methods


####GetVersion
Gets the current running version of LÖVE.
> #####Return value
> 

####GetVersionCodeName
Gets the current running version code of LÖVE.
> #####Return value
> 

##Timer
            
提供高精度计时功能。 Provides high-resolution timing functionality.
        
###Methods


####Step
Measures the time between two frames.

####GetDelta
Returns the time between the last two frames.
> #####Return value
> 

####GetFPS
Returns the current frames per second.
> #####Return value
> 

####GetAverageDelta
Returns the average delta time over the last second.
> #####Return value
> 

####Sleep(System.Single)
Pauses the current thread for the specified amount of time.
> #####Parameters
> **t:** 


####GetTime
Returns the amount of time since some time in the past.
> #####Return value
> 

##Font
            
Allows you to work with fonts. Defines the shape of characters that can be drawn onto the screen.
        
###Methods


####NewRasterizer(Love.FileData)
Creates a new Rasterizer.
> #####Parameters
> **fileData:** The FileData of the font file.

> #####Return value
> The rasterizer.

####NewTrueTypeRasterizer(Love.Data,System.Int32,Love.HintingMode)
Create a TrueTypeRasterizer with the font data.
> #####Parameters
> **data:** The data of to the TrueType font.

> **size:** The font size.

> **hinting:** True Type hinting mode.

> #####Return value
> 

####NewTrueTypeRasterizer(System.Int32,Love.HintingMode)
Create a TrueTypeRasterizer with the default font.
> #####Parameters
> **size:** The font size.

> **hinting:** True Type hinting mode.

> #####Return value
> 

####NewBMFontRasterizer(Love.FileData,Love.ImageData[])
Creates a new BMFont Rasterizer.
> #####Parameters
> **fileData:** The file data of the BMFont.

> **imageDatas:** The image data containing the drawable pictures of font glyphs.

> #####Return value
> 

####NewGlyphData(Love.Rasterizer,System.Byte[])
Creates a new GlyphData.
> #####Parameters
> **rasterizer:** The Rasterizer containing the font.

> **glyph:** The character code of the glyph.

> #####Return value
> 

####NewGlyphData(Love.Rasterizer,System.Int32)
Creates a new GlyphData.
> #####Parameters
> **rasterizer:** The Rasterizer containing the font.

> **glyphCode:** The character code of the glyph.

> #####Return value
> 

####Constructor
disable construct

####GetHeight
Gets the height of the Font in pixels.
> #####Return value
> The height of the Font in pixels.

####GetWidth(System.Byte[])
Determines the width of the given text. (UTF-8 byte array version)
> #####Parameters
> **str:** A string. (UTF-8 byte array needed)

> #####Return value
> The width of the text.

####SetLineHeight(System.Single)
Sets the line height. When rendering the font in lines the actual height will be determined by the line height multiplied by the height of the font. The default is 1.0.
> #####Parameters
> **h:** The new line height.


####GetLineHeight
Gets the line height. This will be the value previously set by , or 1.0 by default.
> #####Return value
> The current line height.

####SetFilter(Love.FilterMode,Love.FilterMode,System.Single)
Sets the filter mode for a font.
> #####Parameters
> **min_type:** How to scale a font down.

> **mag_type:** How to scale a font up.

> **anisotropy:** Maximum amount of anisotropic filtering used.


####GetFilter(Love.FilterMode@,Love.FilterMode@,System.Single@)
Gets the filter mode for a font.
> #####Parameters
> **min_type:** Filter mode used when minifying the font.

> **mag_type:** Filter mode used when magnifying the font.

> **out_anisotropy:** Maximum amount of anisotropic filtering used.

> #####Return value
> 

####GetAscent
Gets the ascent of the Font. The ascent spans the distance between the baseline and the top of the glyph that reaches farthest from the baseline.
> #####Return value
> 

####GetDescent
Gets the descent of the Font. The descent spans the distance between the baseline and the lowest descending glyph in a typeface.
> #####Return value
> 

####GetBaseline
Gets the baseline of the Font. Most scripts share the notion of a baseline: an imaginary horizontal line on which characters rest. In some scripts, parts of glyphs lie below the baseline.
> #####Return value
> 

####HasGlyphs(System.Byte[])
Gets whether the Font can render a character or string. (UTF-8 byte array version)
> #####Parameters
> **str:** A string. (UTF-8 byte array needed)

> #####Return value
> Whether the font can render all characters in the string.

####SetFallbacks(Love.Font[])
Sets the fallback fonts. When the Font doesn't contain a glyph, it will substitute the glyph from the next subsequent fallback Fonts. This is akin to setting a "font stack" in Cascading Style Sheets (CSS).
> #####Parameters
> **fallback:** [The first fallback Font to use, ...Additional fallback Fonts.]


####NewGlyphData(Love.Rasterizer,System.String)
Creates a new GlyphData.
> #####Parameters
> **rasterizer:** The Rasterizer containing the font.

> **glyph:** The character code of the glyph.

> #####Return value
> 

####NewRasterizer(System.String)
Creates a new Rasterizer.
> #####Parameters
> **filename:** The font file.

> #####Return value
> The rasterizer.

####GetWidth(System.String)
Determines the width of the given text.
> #####Parameters
> **str:** A string.

> #####Return value
> The width of the text.

####HasGlyphs(System.String)
Gets whether the Font can render a character or string.
> #####Parameters
> **str:** A string.

> #####Return value
> Whether the font can render all characters in the string.

####GetWrap(System.String,System.Single)
Gets formatting information for text, given a wrap limit.
> #####Parameters
> **text:** The text that will be wrapped.

> **wrap_limit:** The maximum width in pixels of each line that text is allowed before wrapping.

> #####Return value
> (The maximum width of the wrapped text., A sequence containing each line of text that was wrapped.)

##Scene
            
继承本类，作为 Boot.Run 的启动参数。 Inherit this class as the startup parameter for Boot.Run()
        
###Methods


####KeyPressed(Love.KeyConstant,Love.Scancode,System.Boolean)
Triggered when a key is pressed.
> #####Parameters
> **key:** Character of the pressed key.

> **scancode:** The scancode representing the pressed key.

> **isRepeat:** Whether this keypress event is a repeat. The delay between key repeats depends on the user's system settings.


####KeyReleased(Love.KeyConstant,Love.Scancode)
Triggered when a keyboard key is released.
> #####Parameters
> **key:** Character of the pressed key.

> **scancode:** The scancode representing the pressed key.


####MouseMoved(System.Single,System.Single,System.Single,System.Single,System.Boolean)
Callback function triggered when the mouse is moved.
> #####Parameters
> **x:** The mouse position on the x-axis.

> **y:** The mouse position on the y-axis.

> **dx:** The amount moved along the x-axis since the last time love.mousemoved was called.

> **dy:** The amount moved along the y-axis since the last time love.mousemoved was called.

> **isTouch:** True if the mouse button press originated from a touchscreen touch-press.


####MousePressed(System.Single,System.Single,System.Int32,System.Boolean)
Callback function triggered when a mouse button is pressed.
> #####Parameters
> **x:** Mouse x position, in pixels.

> **y:** Mouse y position, in pixels.

> **button:** The button index that was pressed. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependent.

> **isTouch:** True if the mouse button press originated from a touchscreen touch-press.


####MouseReleased(System.Single,System.Single,System.Int32,System.Boolean)
Callback function triggered when a mouse button is released.
> #####Parameters
> **x:** Mouse x position, in pixels.

> **y:** Mouse y position, in pixels.

> **button:** The button index that was pressed. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependent.

> **isTouch:** True if the mouse button press originated from a touchscreen touch-press.


####MouseFocus(System.Boolean)
Callback function triggered when window receives or loses mouse focus.
> #####Parameters
> **focus:** Whether the window has mouse focus or not.


####WheelMoved(System.Int32,System.Int32)
Callback function triggered when the mouse wheel is moved.
> #####Parameters
> **x:** Amount of horizontal mouse wheel movement. Positive values indicate movement to the right.

> **y:** Amount of vertical mouse wheel movement. Positive values indicate upward movement.


####JoystickPressed(Love.Joystick,System.Int32)
Called when a joystick button is pressed.
> #####Parameters
> **joystick:** The joystick object.

> **button:** The button number.


####JoystickReleased(Love.Joystick,System.Int32)
Called when a joystick button is released.
> #####Parameters
> **joystick:** The joystick object.

> **button:** The button number.


####JoystickAxis(Love.Joystick,System.Single,System.Single)
Called when a joystick axis moves.
> #####Parameters
> **joystick:** The joystick object.

> **axis:** The axis number.

> **value:** The new axis value.


####JoystickHat(Love.Joystick,System.Int32,Love.JoystickHat)
Called when a joystick hat direction changes.
> #####Parameters
> **joystick:** The joystick object.

> **hat:** The hat number.

> **direction:** The new hat direction.


####JoystickGamepadPressed(Love.Joystick,Love.GamepadButton)
Called when a Joystick's virtual gamepad button is pressed.
> #####Parameters
> **joystick:** The joystick object.

> **button:** The virtual gamepad button.


####JoystickGamepadReleased(Love.Joystick,Love.GamepadButton)
Called when a Joystick's virtual gamepad button is released.
> #####Parameters
> **joystick:** The joystick object.

> **button:** The virtual gamepad button.


####JoystickGamepadAxis(Love.Joystick,Love.GamepadAxis,System.Single)
Called when a Joystick's virtual gamepad axis is moved.
> #####Parameters
> **joystick:** The joystick object.

> **axis:** The virtual gamepad axis.

> **value:** The new axis value.


####JoystickAdded(Love.Joystick)
Called when a Joystick is connected.
> #####Parameters
> **joystick:** The newly connected Joystick object.


####JoystickRemoved(Love.Joystick)
Called when a Joystick is disconnected.
> #####Parameters
> **joystick:** The now-disconnected Joystick object.


####TouchMoved(System.Int64,System.Single,System.Single,System.Single,System.Single,System.Single)
Callback function triggered when a touch press moves inside the touch screen.
> #####Parameters
> **id:** The identifier for the touch press.

> **x:** The x-axis position of the touch inside the window, in pixels.

> **y:** The y-axis position of the touch inside the window, in pixels.

> **dx:** The x-axis movement of the touch inside the window, in pixels.

> **dy:** The y-axis movement of the touch inside the window, in pixels.

> **pressure:** The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.


####TouchPressed(System.Int64,System.Single,System.Single,System.Single,System.Single,System.Single)
Callback function triggered when the touch screen is touched.
> #####Parameters
> **id:** The identifier for the touch press.

> **x:** The x-axis position of the touch inside the window, in pixels.

> **y:** The y-axis position of the touch inside the window, in pixels.

> **dx:** The x-axis movement of the touch inside the window, in pixels.

> **dy:** The y-axis movement of the touch inside the window, in pixels.

> **pressure:** The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.


####TouchReleased(System.Int64,System.Single,System.Single,System.Single,System.Single,System.Single)
Callback function triggered when the touch screen stops being touched.
> #####Parameters
> **id:** The identifier for the touch press.

> **x:** The x-axis position of the touch inside the window, in pixels.

> **y:** The y-axis position of the touch inside the window, in pixels.

> **dx:** The x-axis movement of the touch inside the window, in pixels.

> **dy:** The y-axis movement of the touch inside the window, in pixels.

> **pressure:** The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.


####TextEditing(System.String,System.Int32,System.Int32)
Called when the candidate text for an IME has changed.
> #####Parameters
> **text:** The UTF-8 encoded unicode candidate text.

> **start:** The start cursor of the selected candidate text.

> **end:** The length of the selected candidate text. May be 0.


####TextInput(System.String)
Called when text has been entered by the user.
> #####Parameters
> **text:** The UTF-8 encoded unicode text.


####WindowFocus(System.Boolean)
Callback function triggered when window receives or loses focus.
> #####Parameters
> **focus:** True if the window gains focus, false if it loses focus.


####WindowVisible(System.Boolean)
Callback function triggered when window is shown or hidden.
> #####Parameters
> **visible:** True if the window is visible, false if it isn't.


####WindowResize(System.Int32,System.Int32)
Called when the window is resized, for example if the user resizes the window, or if Love.Window.SetMode is called with an unsupported width or height in fullscreen and the window chooses the closest appropriate size.
> #####Parameters
> **w:** The new width, in pixels.

> **h:** The new height, in pixels.


####DirectoryDropped(System.String)
Callback function triggered when a directory is dragged and dropped onto the window.
> #####Parameters
> **path:** The full platform-dependent path to the directory. It can be used as an argument to love.filesystem.mount, in order to gain read access to the directory with love.filesystem.


####FileDropped(Love.File)
Callback function triggered when a file is dragged and dropped onto the window.
> #####Parameters
> **file:** The unopened File object representing the file that was dropped.


####Quit
Callback function triggered when the game is closed.
> #####Return value
> Abort quitting. If true, do not close the game.

####LowMemory
Callback function triggered when the system is running out of memory on mobile devices.

####Load
This function is called exactly once at the beginning of the game.

####Update(System.Single)
Callback function used to update the state of the game every frame.
> #####Parameters
> **dt:** Time since the last update in seconds.


####Draw
Callback function used to draw on the screen every frame.

####ErrorHandler(System.Exception)
Callback function when exception occur. Return true means exit error screen. This function will be called each error screen render frame.

##BootConfig
            
Boot class start params
        
###Fields

####WindowWidth
The window width(height)
####WindowHeight
The window width(height)
####WindowTitle
The window title
####WindowBorderless
Remove all border visuals from the window
####WindowResizable
Let the window be user-resizable
####WindowMinWidth
Minimum window width if the window is resizable
####WindowMinHeight
Minimum window height if the window is resizable
####WindowFullscreen
Choose between "DeskTop" fullscreen or "Exclusive" fullscreen mode
####WindowVsync
Vertical sync mode
####WindowMSAA
The number of samples to use with multi-sampled antialiasing
####WindowDisplay
Index of the monitor to show the window in
####WindowHighdpi
Enable high-dpi mode for the window on a Retina display
####WindowX
The x-coordinate(y-coordinate) of the window's position in the specified display
####WindowY
The x-coordinate(y-coordinate) of the window's position in the specified display

##Boot
            
LÖVE engine entrance class LÖVE 引擎入口类
        
###Fields

####
The window width(height)
####
The window width(height)
####
The window title
####
Remove all border visuals from the window
####
Let the window be user-resizable
####
Minimum window width if the window is resizable
####
Minimum window height if the window is resizable
####
Choose between "DeskTop" fullscreen or "Exclusive" fullscreen mode
####
Vertical sync mode
####
The number of samples to use with multi-sampled antialiasing
####
Index of the monitor to show the window in
####
Enable high-dpi mode for the window on a Retina display
####
The x-coordinate(y-coordinate) of the window's position in the specified display
####
The x-coordinate(y-coordinate) of the window's position in the specified display
###Methods


####Run(Love.Scene,Love.BootConfig)
LÖVE engine entrance function
> #####Parameters
> **scene:** The way to run LÖVE engine

> **bootConfig:** LÖVE engine boot config


##Pixel
            
union Pixel { uint8 rgba8 [4]; uint16 rgba16 [4]; half rgba16f [4]; float rgba32f [4]; };
        
###Methods


####FromFloat4(Love.Vector4,Love.PixelFormat)
Create pixel with given Float4 value and format
> #####Parameters
> **value:** 

> **format:** 

> #####Return value
> 

##HintingMode
            
True Type hinting mode. See True Type official document for more information.
        

##GamepadButton
            
Virtual gamepad buttons.
        
###Fields

####LeftStick
Left stick click button.
####RightStick
Right stick click button.
####LeftShoulder
Left bumper.
####RightShoulder
Right bumper.
####DPadUp
D-pad up.
####DPadDown
D-pad down.
####DPadLeft
D-pad left.
####DPadRight
D-pad right.

##GamepadAxis
            
Virtual gamepad axes.
        

##ParticleInsertMode
            
How newly created particles are added to the ParticleSystem.
        
###Fields

####Top
Particles are inserted at the top of the ParticleSystem's list of particles.
####Bottom
Particles are inserted at the bottom of the ParticleSystem's list of particles.
####Random
Particles are inserted at random positions in the ParticleSystem's list of particles.

##WrapMode
            
How the image wraps inside a Quad with a larger quad size than image size. This also affects how Meshes with texture coordinates which are outside the range of [0, 1] are drawn, and the color returned by the Texel Shader function when using it to sample from texture coordinates outside of the range of [0, 1]. https://love2d.org/wiki/WrapMode
        
###Fields

####Clamp
Clamp the texture. Appears only once. The area outside the texture's normal range is colored based on the edge pixels of the texture.
####ClampZero
Clamp the texture. Fills the area outside the texture's normal range with transparent black (or opaque black for textures with no alpha channel.)
####Repeat
Repeat the texture. Fills the whole available extent.
####MirroredRepeat
Repeat the texture, flipping it each time it repeats. May produce better visual results than the mode when the texture doesn't seamlessly tile.

##FilterMode
            
How the image is filtered when scaling.
        
###Fields

####Linear
Scale image with linear interpolation. (default)
####Nearest
Scale image with nearest neighbor interpolation.

##AlignMode
            
Text alignment.
        
###Fields

####Left
Align text left.
####Center
Align text center.
####Right
Align text right.
####Justify
Align text both left and right.

##ImageDataPixelFormat
            
Provide for custom image data, not all Pixel format support to create new custom imageData;
        

##ImageFormat
            
Encoded image formats.
        
###Fields

####TGA
Targa image format.
####PNG
PNG image format.

##FileMode
            
The different modes you can open a File in.
        
###Fields

####Closed
Do not open a file (represents a closed file.)
####Read
Open a file for read.
####Write
Open a file for write.
####Append
Open a file for append.

##BufferMode
            
Buffer modes for File objects.
        
###Fields

####None
No buffering. The result of write and append operations appears immediately.
####Line
Line buffering. Write and append operations are buffered until a newline is output or the buffer size limit is reached.
####Full
Full buffering. Write and append operations are always buffered until the buffer size limit is reached.

##FileType
            
The type of a file.
        
###Fields

####File
Regular file.
####Directory
Directory.
####SymLink
Symbolic link.
####Other
Something completely different like a device.

##DistanceModel
            
The different distance models. Extended information can be found in the chapter "3.4. Attenuation By Distance" of the OpenAL 1.1 specification.( https://www.openal.org/documentation/openal-1.1-specification.pdf )
        
###Fields

####None
Sources do not get attenuated.
####Inverse
Inverse distance attenuation.
####InverseClamped
Inverse distance attenuation. Gain is clamped. In version 0.9.2 and older this is named inverse clamped.
####Linear
Linear attenuation.
####LinearClamped
Linear attenuation. Gain is clamped. In version 0.9.2 and older this is named linear clamped.
####Exponent
Exponential attenuation.
####ExponentClamped
Exponential attenuation. Gain is clamped. In version 0.9.2 and older this is named exponent clamped.

##SystemCursor
            
Types of cursors.
        
###Fields

####Arrow
An arrow pointer.
####Ibeam
An I-beam, normally used when mousing over editable or selectable text.
####Wait
Wait graphic.
####Crosshair
Crosshair symbol.
####WaitArrow
Small wait cursor with an arrow pointer.
####SizeNWSE
Double arrow pointing to the top-left and bottom-right.
####SizeNESW
Double arrow pointing to the top-right and bottom-left.
####SizeWE
Double arrow pointing left and right.
####SizeNS
Double arrow pointing up and down.
####SizeAll
Four-pointed arrow pointing up, down, left, and right.
####No
Slashed circle or crossbones.
####Hand
Hand symbol.

##TimeUnit
            
Units that represent time.
        
###Fields

####Seconds
Regular seconds.
####Samples
Audio samples.

##KeyConstant
            
All the keys you can press. Note that some keys may not be available on your keyboard or system.
        

##Scancode
            
Scancodes are keyboard layout-independent, so the scancode "w" will be generated if the key in the same place as the "w" key on an American QWERTY keyboard ( https://en.wikipedia.org/wiki/Keyboard_layout#/media/File:ISO_keyboard_(105)_QWERTY_UK.svg ) is pressed, no matter what the key is labelled or what the user's operating system settings are. Using scancodes, rather than keycodes, is useful because keyboards with layouts differing from the US/UK layout(s) might have keys that generate 'unknown' keycodes, but the scancodes will still be detected. This however would necessitate having a list for each keyboard layout one would choose to support. One could use textinput or textedited instead, but those only give back the end result of keys used, i.e. you can't get modifiers on their own from it, only the final symbols that were generated.
        

##SourceType
            
Types of audio sources. A good rule of thumb is to use Stream for music files and Static for all short sound effects. Basically, you want to avoid loading large files into memory at once.
        
###Fields

####Static
Decode the entire sound at once.
####Stream
Stream the sound; decode it gradually.

##FullscreenType
            
全屏模式的类型。 Types of fullscreen modes.
        
###Fields

####Exclusive
Standard exclusive-fullscreen mode. Changes the display mode (actual resolution) of the monitor.
####DeskTop
Sometimes known as borderless fullscreen windowed mode. A borderless screen-sized window is created which sits on top of all desktop UI elements. The window is automatically resized to match the dimensions of the desktop, and its size cannot be changed.

##MessageBoxType
            
消息框对话框的类型。 Types of message box dialogs.
        
###Fields

####Error
Error dialog.
####Warning
Warning dialog.
####Info
Informational dialog.

##ArcType
            
Different types of arcs that can be drawn.
        
###Fields

####Open
The arc circle's two end-points are unconnected when the arc is drawn as a line. Behaves like the "closed" arc type when the arc is drawn in filled mode.
####Closed
The arc circle's two end-points are connected to each other.
####Pie
The arc is drawn like a slice of pie, with the arc circle connected to the center at its end-points.

##BlendMode
            
Different ways to do color blending. See BlendAlphaMode and the BlendMode Formulas for additional notes.
        
###Fields

####Alpha
Alpha blending (normal). The alpha of what's drawn determines its opacity.
####Add
The pixel colors of what's drawn are added to the pixel colors already on the screen. The alpha of the screen is not modified.
####Subtract
The pixel colors of what's drawn are subtracted from the pixel colors already on the screen. The alpha of the screen is not modified.
####Multiply
The pixel colors of what's drawn are multiplied with the pixel colors already on the screen (darkening them). The alpha of drawn objects is multiplied with the alpha of the screen rather than determining how much the colors on the screen are affected, even when the BlendAlphaMode is used.
####Lighten
The pixel colors of what's drawn are compared to the existing pixel colors, and the larger of the two values for each color component is used. Only works when the "premultiplied" BlendAlphaMode is used in
####Darken
The pixel colors of what's drawn are compared to the existing pixel colors, and the smaller of the two values for each color component is used. Only works when the "premultiplied" BlendAlphaMode is used in
####Screen
'Screen' blending.
####Replace
The colors of what's drawn completely replace what was on the screen, with no additional blending. The BlendAlphaMode specified in love.graphics.setBlendMode still affects what happens.

##BlendAlphaMode
            
The "premultiplied" constant should generally be used when drawing a Canvas to the screen, because the RGB values of the Canvas' texture had previously been multiplied by its alpha values when drawing content to the Canvas itself. The "alphamultiply" constant does not affect the "multiply" BlendMode.Similarly, the "screen" BlendMode's math is only correct if the "premultiplied" alpha mode is used and the alpha of drawn objects has already been multiplied with its RGB values previously (possibly inside a shader). https://love2d.org/wiki/BlendAlphaMode
        
###Fields

####Multiply
The RGB values of what's drawn are multiplied by the alpha values of those colors during blending. This is the default alpha mode.
####PreMultiplied
The RGB values of what's drawn are not multiplied by the alpha values of those colors during blending. For most blend modes to work correctly with this alpha mode, the colors of a drawn object need to have had their RGB values multiplied by their alpha values at some point previously ("premultiplied alpha").

##LineStyle
            
The styles in which lines are drawn.
        
###Fields

####Rough
Draw rough lines.
####Smooth
Draw smooth lines.

##LineJoin
            
https://love2d.org/wiki/LineJoin
        
###Fields

####None
No cap applied to the ends of the line segments. https://love2d.org/wiki/LineJoin
####Miter
The ends of the line segments beveled in an angle so that they join seamlessly. https://love2d.org/wiki/LineJoin
####Bevel
Flattens the point where line segments join together. https://love2d.org/wiki/LineJoin

##StencilAction
            
How a stencil function modifies the stencil values of pixels it touches. https://love2d.org/wiki/StencilAction
        
###Fields

####Replace
The stencil value of a pixel will be replaced by the value specified in love.graphics.stencil, if any object touches the pixel.
####Increment
The stencil value of a pixel will be incremented by 1 for each object that touches the pixel. If the stencil value reaches 255 it will stay at 255.
####Decrement
The stencil value of a pixel will be decremented by 1 for each object that touches the pixel. If the stencil value reaches 0 it will stay at 0.
####IncrementWrap
The stencil value of a pixel will be incremented by 1 for each object that touches the pixel. If a stencil value of 255 is incremented it will be set to 0.
####DecrementWrap
The stencil value of a pixel will be decremented by 1 for each object that touches the pixel. If the stencil value of 0 is decremented it will be set to 255.
####Invert
The stencil value of a pixel will be bitwise-inverted for each object that touches the pixel. If a stencil value of 0 is inverted it will become 255.

##CompareMode
            
Different types of per-pixel stencil test comparisons. The pixels of an object will be drawn if the comparison succeeds, for each pixel that the object touches. https://love2d.org/wiki/CompareMode
        
###Fields

####Less
The stencil value of the pixel must be less than the supplied value.
####LEqual
The stencil value of the pixel must be less than or equal to the supplied value.
####Equal
The stencil value of the pixel must be equal to the supplied value.
####GEqual
The stencil value of the pixel must be greater than or equal to the supplied value.
####Greater
The stencil value of the pixel must be greater than the supplied value.
####NotEqual
The stencil value of the pixel must not be equal to the supplied value.

##Feature
            
https://love2d.org/wiki/GraphicsFeature Graphics features that can be checked for with love.graphics.getSupported.
        
###Fields

####MultiCanvasFormats
Whether multiple Canvases with different formats can be used in the same love.graphics.setCanvas call. multicanvasformats is supported on OpenGL 3-capable desktop systems, and OpenGL ES 3-capable mobile devices.
####ClampZero
Whether the "clampzero" WrapMode is supported. clampzero is supported on all desktop systems, but only some mobile devices. If it's not supported and it's attempted to be set, the "clamp" wrap mode will automatically be used instead.
####Lighten
Whether the "lighten" and "darken" BlendModes are supported. lighten is supported on all desktop systems, and OpenGL ES 3-capable mobile devices.
####FullNPOT
Whether textures with non-power-of-two dimensions can use mipmapping and the 'repeat' WrapMode (Texture:setMipmapFilter).
####PixelShaderHighp
Whether pixel shaders can use "highp" 32 bit floating point numbers (as opposed to just 16 bit or lower precision).
####ShaderDerivatives

####GLSL3
Whether GLSL 3 Shaders can be used.
####Instancing
Whether mesh instancing (love.graphics.drawInstanced) is supported.

##AreaSpreadDistribution
            
Type of distribution new particles are drawn from: None, uniform, normal, ellipse, borderellipse, borderrectangle. https://love2d.org/wiki/AreaSpreadDistribution
        
###Fields

####Uniform
Uniform distribution.
####Normal
Normal (gaussian) distribution.
####Ellipse
Uniform distribution in an ellipse.
####BorderEllipse
Distribution in an ellipse with particles spawning at the edges of the ellipse.
####BorderRectangle
Distribution in a rectangle with particles spawning at the edges of the rectangle.

##DrawMode
            
Controls whether shapes are drawn as an outline, or filled.
        
###Fields

####Line
Draw outlined shape.
####Fill
Draw filled shape.

##MeshDrawMode
            
https://love2d.org/wiki/MeshDrawMode
        
###Fields

####Trangles
The vertices create a "fan" shape with the first vertex acting as the hub point. Can be easily used to draw simple convex polygons.
####Strip
The vertices create a series of connected triangles using vertices 1, 2, 3, then 3, 2, 4 (note the order), then 3, 4, 5, and so on.
####Fan
The vertices create a "fan" shape with the first vertex acting as the hub point. Can be easily used to draw simple convex polygons.
####Points
The vertices are drawn as unconnected points (see love.graphics.setPointSize.)

##PixelFormat
            
Pixel formats for Textures, ImageData, and CompressedImageData. https://love2d.org/wiki/PixelFormat
        

##CanvasMipmapMode
            
https://love2d.org/wiki/CanvasMipmapMode
        
###Fields

####None
Do not enable mipmap.
####Manual
Let user manually generate mipmap.
####Auto
Automatically generate mipmap.

##TextureType
            
Types of textures (2D, cubemap, etc.)
        
###Fields

####TEXTURE_2D
Regular 2D texture with width and height.
####TEXTURE_VOLUME
3D texture with width, height, and depth. Requires a custom shader to use. Volume textures can have texture filtering applied along the 3rd axis.
####TEXTURE_2D_ARRAY
Several same-size 2D textures organized into a single object. Similar to a texture atlas / sprite sheet, but avoids sprite bleeding and other issues.
####TEXTURE_CUBE
Cubemap texture with 6 faces. Requires a custom shader (and Shader:send) to use. Sampling from a cube texture in a shader takes a 3D direction vector instead of a texture coordinate.

##LoveObject
            
LÖVE 引擎对象
        
###Methods


####Equals(System.Object)
如果两个 LoveObject 指向的非托管对象一样，那么则返回相等
> #####Parameters
> **obj:** 

> #####Return value
> 

####GetHashCode
返回此实例的 IntPtr p 的哈希代码。
> #####Return value
> 

##Source
            
A Source represents audio you can play back. You can do interesting things with Sources, like set the volume, pitch, and its position relative to the listener. Please note that positional audio only works for mono (i.e. non-stereo) sources.
        
###Fields

####
Decode the entire sound at once.
####
Stream the sound; decode it gradually.
###Methods


####Constructor
disable no-param construct

####Clone
Creates an identical copy of the Source in the stopped state. Static Sources will use significantly less memory and take much less time to be created if is used to create them instead of Audio.NewSource, so this method should be preferred when making multiple Sources which play the same sound.
> #####Return value
> 

####Play
Plays a source.
> #####Return value
> Whether the Source was able to successfully start playing.

####Stop
Stops a source.

####Pause
Pauses the Source.

####SetPitch(System.Single)
Sets the pitch of the Source.
> #####Parameters
> **pitch:** Calculated with regard to 1 being the base pitch. Each reduction by 50 percent equals a pitch shift of -12 semitones (one octave reduction). Each doubling equals a pitch shift of 12 semitones (one octave increase). Zero is not a legal value.


####GetPitch
Gets the current pitch of the Source.
> #####Return value
> The pitch, where 1.0 is normal.

####SetVolume(System.Single)
Sets the current volume of the Source.
> #####Parameters
> **volume:** The volume for a Source, where 1.0 is normal volume. Volume cannot be raised above 1.0.


####GetVolume
Gets the current volume of the Source.
> #####Return value
> The volume of the Source, where 1.0 is normal volume.

####Seek(System.Single,Love.TimeUnit)
Sets the currently playing position of the Source.
> #####Parameters
> **offset:** The position to seek to.

> **unit_type:** The unit of the position value.


####Tell(Love.TimeUnit)
Gets the currently playing position of the Source.
> #####Parameters
> **unit_type:** The type of unit for the return value.

> #####Return value
> The currently playing position of the Source.

####GetDuration(Love.TimeUnit)
Gets the duration of the Source.
> #####Parameters
> **unit_type:** The time unit for the return value.

> #####Return value
> The duration of the Source, or -1 if it cannot be determined.

####SetPosition(System.Single,System.Single,System.Single)
Sets the position of the Source.
> #####Parameters
> **x:** The X position of the Source.

> **y:** The Y position of the Source.

> **z:** The Z position of the Source.


####GetPosition
Gets the position of the Source.
> #####Return value
> 

####SetVelocity(System.Single,System.Single,System.Single)
Sets the velocity of the Source.
> #####Parameters
> **x:** The X part of the velocity vector.

> **y:** The Y part of the velocity vector.

> **z:** The Z part of the velocity vector.


####GetVelocity
Gets the velocity of the Source.
> #####Return value
> 

####SetDirection(System.Single,System.Single,System.Single)
Sets the direction of the Source.
> #####Parameters
> **x:** The X part of the direction vector.

> **y:** The Y part of the direction vector.

> **z:** The Z part of the direction vector.


####GetDirection
Gets the direction of the Source.
> #####Return value
> 

####SetCone(System.Single,System.Single,System.Single)
Sets the Source's directional volume cones.
> #####Parameters
> **innerAngle:** The inner angle from the Source's direction, in radians. The Source will play at normal volume if the listener is inside the cone defined by this angle.

> **outerAngle:** The outer angle from the Source's direction, in radians. The Source will play at a volume between the normal and outer volumes, if the listener is in between the cones defined by the inner and outer angles.

> **outerVolume:** The Source's volume when the listener is outside both the inner and outer cone angles.


####GetCone(System.Single@,System.Single@,System.Single@)
Gets the Source's directional volume cones.
> #####Parameters
> **out_innerAngle:** 

> **out_outerAngle:** 

> **out_outerVolume:** 


####SetRelative(System.Boolean)
Sets whether the Source's position and direction are relative to the listener. By default, all sources are absolute and therefore relative to the origin of love's coordinate system [0, 0, 0]. Only absolute sources are affected by the position of the listener. Please note that positional audio only works for mono (i.e. non-stereo) sources.
> #####Parameters
> **relative:** True to make the position, velocity, direction and cone angles relative to the listener, false to make them absolute.


####IsRelative
Gets whether the Source's position and direction are relative to the listener.
> #####Return value
> True if the position, velocity, direction and cone angles are relative to the listener, false if they're absolute.

####SetLooping(System.Boolean)
Sets whether the Source should loop.
> #####Parameters
> **looping:** True if the source should loop, false otherwise.


####IsLooping
Returns whether the Source will loop.
> #####Return value
> True if the Source will loop, false otherwise.

####IsPlaying
Returns whether the Source is playing.
> #####Return value
> True if the Source is playing, false otherwise.

####SetVolumeLimits(System.Single,System.Single)
Sets the volume limits of the source.
> #####Parameters
> **vmin:** The minimum volume.

> **vmax:** The maximum volume.


####GetVolumeLimits(System.Single@,System.Single@)
Returns the volume limits of the source.
> #####Parameters
> **out_vmin:** The minimum volume.

> **out_vmax:** The minimum volume.


####SetAttenuationDistances(System.Single,System.Single)
Sets the reference and maximum attenuation distances of the Source. The parameters, combined with the current DistanceModel, affect how the Source's volume attenuates based on distance. Distance attenuation is only applicable to Sources based on mono (rather than stereo) audio.
> #####Parameters
> **dref:** The new reference attenuation distance. If the current is clamped, this is the minimum attenuation distance.

> **dmax:** 


####GetAttenuationDistances(System.Single@,System.Single@)
Gets the reference and maximum attenuation distances of the Source. The values, combined with the current DistanceModel, affect how the Source's volume attenuates based on distance from the listener.
> #####Parameters
> **out_dref:** The current reference attenuation distance. If the current is clamped, this is the minimum distance before the Source is no longer attenuated.

> **out_dmax:** The current maximum attenuation distance.


####SetRolloff(System.Single)
Sets the rolloff factor which affects the strength of the used distance attenuation. see Extended information and detailed formulas can be found in the chapter "3.4. Attenuation By Distance" of OpenAL 1.1 specification(https://www.openal.org/documentation/openal-1.1-specification.pdf).
> #####Parameters
> **rolloff:** The new rolloff factor.


####GetRolloff
Returns the rolloff factor of the source.
> #####Return value
> The rolloff factor.

####GetChannelCount
Gets the number of channels in the Source. Only 1-channel (mono) Sources can use directional and positional effects.
> #####Return value
> 1 for mono, 2 for stereo.

####GetSourceType
Gets the type of the Source.
> #####Return value
> The type of the source.

##FileData
            
representing the contents of a file.
        
###Methods


####Constructor
disable no-param construct

####GetFilename
Gets the filename of the FileData.
> #####Return value
> The name of the file the FileData represents.

####GetExtension
Gets the extension of the FileData.
> #####Return value
> The extension of the file the FileData represents.

##GlyphData
            
A GlyphData represents a drawable symbol of a font Rasterizer.
        
###Methods


####Constructor
disable no-param construct

##Rasterizer
            
A Rasterizer handles font rendering, containing the font data (image or TrueType font) and drawable glyphs.
        
###Methods


####Constructor
disable no-param construct

####GetHeight
Get font height
> #####Return value
> 

##Canvas
            
A Canvas is used for off-screen rendering. Think of it as an invisible screen that you can draw to, but that will not be visible until you draw it to the actual visible screen. It is also known as "render to texture". By drawing things that do not change position often (such as background items) to the Canvas, and then drawing the entire Canvas instead of each item, you can reduce the number of draw operations performed each frame. When drawing content to a Canvas using regular alpha blending, the alpha values of the content get multiplied with its RGB values. Therefore the Canvas' pixel colors will have premultiplied alpha once it has been drawn to, so when drawing the Canvas to the screen or to another Canvas you must use premultiplied alpha blending – Graphics.SetBlendMode(BlendMode.Alpha, BlendAlphaMode.PreMultiplied).
        
###Fields

####
Do not enable mipmap.
####
Let user manually generate mipmap.
####
Automatically generate mipmap.
###Methods


####Constructor
disable no-param construct

####NewImageData
Generates ImageData from the contents of the Canvas.
> #####Return value
> 

####NewImageData(System.Int32,System.Int32)
Generates ImageData from the contents of the Canvas.
> #####Parameters
> **slice:** The cubemap face index, array index, or depth layer for cubemap, array, or volume type Canvases, respectively. This argument is ignored for regular 2D canvases.

> **mipmap:** he mipmap index to use, for Canvases with mipmaps. https://love2d.org/wiki/CanvasMipmapMode

> #####Return value
> 

####NewImageData(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
Generates ImageData from the contents of the Canvas.
> #####Parameters
> **slice:** The cubemap face index, array index, or depth layer for cubemap, array, or volume type Canvases, respectively. This argument is ignored for regular 2D canvases.

> **mipmap:** he mipmap index to use, for Canvases with mipmaps. (default is 0) https://love2d.org/wiki/CanvasMipmapMode

> **x:** 

> **y:** 

> **w:** 

> **h:** 

> #####Return value
> 

####GetFormat
Gets the texture format of the Canvas.
> #####Return value
> 

####GetMSAA
Gets the number of MSAA samples used when drawing to the Canvas.
> #####Return value
> 

##Mesh
            
Mesh in Love2d CS is different from love2d lua.
        
###Fields

####
The vertices create a "fan" shape with the first vertex acting as the hub point. Can be easily used to draw simple convex polygons.
####
The vertices create a series of connected triangles using vertices 1, 2, 3, then 3, 2, 4 (note the order), then 3, 4, 5, and so on.
####
The vertices create a "fan" shape with the first vertex acting as the hub point. Can be easily used to draw simple convex polygons.
####
The vertices are drawn as unconnected points (see love.graphics.setPointSize.)
###Methods


####Constructor
disable construct

####SetVertices(Love.Vertex[],System.Int32)
Replaces a range of vertices in the Mesh with new ones.
> #####Parameters
> **vertices:** each vertex

> **startVertex:** The index of the first vertex to replace.


####GetVertex(System.Int32)

##SpriteBatch
            
Using a single image, draw any number of identical copies of the image using a single call to Love.Graphics.Draw(). This can be used, for example, to draw repeating copies of a single background image with high performance. A SpriteBatch can be even more useful when the underlying image is a texture atlas (a single image file containing many independent images); by adding Quads to the batch, different sub-images from within the atlas can be drawn.
        
###Fields

####
The object data will always change between draws.
####
The object's data will change occasionally during its lifetime.
####
The object will not be modified after initial sprites or vertices are added.
###Methods


####Constructor
disable construct

##Texture
            
Superclass for drawable objects which represent a texture. All Textures can be drawn with Quads. This is an abstract type that can't be created directly.
        
###Fields

####
Regular 2D texture with width and height.
####
3D texture with width, height, and depth. Requires a custom shader to use. Volume textures can have texture filtering applied along the 3rd axis.
####
Several same-size 2D textures organized into a single object. Similar to a texture atlas / sprite sheet, but avoids sprite bleeding and other issues.
####
Cubemap texture with 6 faces. Requires a custom shader (and Shader:send) to use. Sampling from a cube texture in a shader takes a 3D direction vector instead of a texture coordinate.
###Methods


####Constructor
disable construct

####SetMipmapFilter(Love.FilterMode,System.Single)
Sets the mipmap filter mode for a Texture. Mipmapping(https://en.wikipedia.org/wiki/Mipmap) is useful when drawing a texture at a reduced scale. It can improve performance and reduce aliasing issues. The texture must be created with the mipmaps flag enabled for the mipmap filter to have any effect. On mobile devices (Android and iOS), the sharpness parameter is not supported and will do nothing. You can use a custom Shader instead, and specify the mipmap sharpness in the optional third parameter to the Texel function in the shader (a negative value makes the texture use a more detailed mipmap level.)
> #####Parameters
> **mipmap_type:** The filter mode to use in between mipmap levels. "nearest" will often give better performance.

> **sharpness:** A positive sharpness value makes the texture use a more detailed mipmap level when drawing, at the expense of performance. A negative value does the reverse.


####GetMipmapFilter(Love.FilterMode@,System.Single@)
Gets the mipmap filter mode for a Texture.
> #####Parameters
> **out_mipmap_type:** The filter mode used in between mipmap levels. nil if mipmap filtering is not enabled.

> **out_sharpness:** Value used to determine whether the image should use more or less detailed mipmap levels than normal when drawing.


####GetWidth
Gets the width of the Texture.
> #####Return value
> 

####GetHeight
Gets the height of the Texture.
> #####Return value
> 

####SetFilter(Love.FilterMode,Love.FilterMode,System.Single)
Sets the filter mode of the Texture.
> #####Parameters
> **filtermin_type:** Filter mode to use when minifying the texture (rendering it at a smaller size on-screen than its size in pixels).

> **filtermag_type:** Filter mode to use when magnifying the texture (rendering it at a larger size on-screen than its size in pixels).

> **anisotropy:** Maximum amount of anisotropic filtering to use.


####GetFilter(Love.FilterMode@,Love.FilterMode@,System.Single@)
Gets the filter mode of the Texture.
> #####Parameters
> **out_filtermin_type:** Filter mode to use when minifying the texture (rendering it at a smaller size on-screen than its size in pixels).

> **out_filtermag_type:** Filter mode to use when magnifying the texture (rendering it at a smaller size on-screen than its size in pixels).

> **out_anisotropy:** Maximum amount of anisotropic filtering used.


####SetWrap(Love.WrapMode,Love.WrapMode)
Sets the wrapping properties of a Texture. This function sets the way a Texture is repeated when it is drawn with a Quad that is larger than the texture's extent, or when a custom Shader is used which uses texture coordinates outside of [0, 1]. A texture may be clamped or set to repeat in both horizontal and vertical directions. Clamped textures appear only once (with the edges of the texture stretching to fill the extent of the Quad), whereas repeated ones repeat as many times as there is room in the Quad.
> #####Parameters
> **wraphoriz_type:** Horizontal wrapping mode of the texture.

> **wrapvert_type:** Vertical wrapping mode of the texture.


####GetWrap(Love.WrapMode@,Love.WrapMode@)
Gets the wrapping properties of a Texture. This function returns the currently set horizontal and vertical wrapping modes for the texture.
> #####Parameters
> **out_wraphoriz_type:** Horizontal wrapping mode of the texture.

> **out_wrapvert_type:** Vertical wrapping mode of the texture.
