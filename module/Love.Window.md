
# Love.Window
> 用于修改窗口和获取窗口信息。
            Provides an interface for modifying and retrieving information about the program's window.

------------------------------------------------
#### Love.Window.SetFullscreen(System.Boolean)

`Summary`: Enters or exits fullscreen. The display to use when entering fullscreen is chosen based on which display the window is currently in, if multiple monitors are connected.


`Arguments`

* `fullscreen`: Whether to enter or exit fullscreen mode.


`Returns`

True if an attempt to enter fullscreen was successful, false otherwise.




------------------------------------------------
#### Love.Window.GetFullscreen

`Summary`: Gets whether the window is fullscreen.



`Returns`

True if the window is fullscreen, false otherwise.




------------------------------------------------
#### Love.Window.GetDisplayCount

`Summary`: 获取当前显示器的数量。
            Gets the number of connected monitors.






------------------------------------------------
#### Love.Window.GetDisplayName(System.Int32)

`Summary`: 获取显示器的名称。
            Gets the name of a display.


`Arguments`

* `displayindex`: 





------------------------------------------------
#### Love.Window.SetMode(System.Int32,System.Int32,Love.WindowSettings)

`Summary`: 设置窗口的显示模式和属性。
            如果width或height为0，则setMode将使用桌面的宽度和高度。
            更改显示模式可能会产生副作用：例如，将清除 Canvas 并使用Shader：send发送到着色器的值将被删除。 如果需要，请务必事先保存 Canvas 的内容或之后重新绘制。
            Sets the display mode and properties of the window.
            If width or height is 0, setMode will use the width and height of the desktop.
            Changing the display mode may have side effects: for example, canvases will be cleared and values sent to shaders with Shader:send will be erased. Make sure to save the contents of canvases beforehand or re-draw to them afterward if you need to.


`Arguments`

* `width`: Display width.
* `height`: Display height.
* `flag`: 





------------------------------------------------
#### Love.Window.SetMode(Love.WindowSettings)

`Summary`: 设置窗口的显示模式和属性。
            如果width或height为0，则setMode将使用桌面的宽度和高度。
            更改显示模式可能会产生副作用：例如，将清除 Canvas 并使用Shader：send发送到着色器的值将被删除。 如果需要，请务必事先保存 Canvas 的内容或之后重新绘制。
            Sets the display mode and properties of the window.
            If width or height is 0, setMode will use the width and height of the desktop.
            Changing the display mode may have side effects: for example, canvases will be cleared and values sent to shaders with Shader:send will be erased. Make sure to save the contents of canvases beforehand or re-draw to them afterward if you need to.


`Arguments`

* `flag`: 





------------------------------------------------
#### Love.Window.GetMode

`Summary`: Gets the display mode and properties of the window.






------------------------------------------------
#### Love.Window.GetMode(System.Int32@,System.Int32@)

`Summary`: Gets the display mode and properties of the window.


`Arguments`

* `out_width`: Window width.
* `out_height`: Window height.





------------------------------------------------
#### Love.Window.GetFullscreenModes(System.Int32)

`Summary`: Gets a list of supported fullscreen modes.


`Arguments`

* `displayindex`: The index of the display, if multiple monitors are available.





------------------------------------------------
#### Love.Window.SetFullscreen(System.Boolean,Love.FullscreenType)

`Summary`: Enters or exits fullscreen. The display to use when entering fullscreen is chosen based on which display the window is currently in, if multiple monitors are connected.


`Arguments`

* `fullscreen`: Whether to enter or exit fullscreen mode.
* `fstype`: The type of fullscreen mode to use.


`Returns`

True if an attempt to enter fullscreen was successful, false otherwise.




------------------------------------------------
#### Love.Window.GetFullscreen(System.Boolean@,Love.FullscreenType@)

`Summary`: Gets whether the window is fullscreen.


`Arguments`

* `out_fullscreen`: True if the window is fullscreen, false otherwise.
* `out_fstype`: The type of fullscreen mode used.





------------------------------------------------
#### Love.Window.IsOpen

`Summary`: True if the window is open, false otherwise.






------------------------------------------------
#### Love.Window.Close

`Summary`: Closes the window. It can be reopened with love.window.setMode.
            love.graphics functions and objects will cause a hard crash of LÖVE if used while the window is closed.






------------------------------------------------
#### Love.Window.GetDesktopDimensions(System.Int32)

`Summary`: Gets the width and height of the desktop.


`Arguments`

* `displayIndex`: The index of the display, if multiple monitors are available.





------------------------------------------------
#### Love.Window.SetPosition(System.Int32,System.Int32,System.Int32)

`Summary`: Sets the position of the window on the screen.


`Arguments`

* `x`: The x-coordinate of the window's position.
* `y`: The y-coordinate of the window's position.
* `displayindex`: The window position is in the coordinate space of the specified display.





------------------------------------------------
#### Love.Window.GetPosition

`Summary`: Gets the position of the window on the screen






------------------------------------------------
#### Love.Window.GetPosition(System.Int32@)

`Summary`: Gets the position of the window on the screen.
            And the index of the display that the window is in.


`Arguments`

* `out_displayindex`: 





------------------------------------------------
#### Love.Window.SetIcon(Love.ImageData)

`Summary`: Sets the window icon until the game is quit. Not all operating systems support very large icon images.


`Arguments`

* `imagedata`: The window icon image.





------------------------------------------------
#### Love.Window.GetIcon

`Summary`: The window icon imagedata, or nil if no icon has been set with love.window.setIcon.






------------------------------------------------
#### Love.Window.SetDisplaySleepEnabled(System.Boolean)

`Summary`: Sets whether the display is allowed to sleep while the program is running.
            Display sleep is disabled by default. Some types of input(e.g.joystick button presses) might not prevent the display from sleeping, if display sleep is allowed.


`Arguments`

* `enable`: True to enable system display sleep, false to disable it.





------------------------------------------------
#### Love.Window.IsDisplaySleepEnabled

`Summary`: Gets whether the display is allowed to sleep while the program is running.
            Display sleep is disabled by default. Some types of input (e.g. joystick button presses) might not prevent the display from sleeping, if display sleep is allowed.






------------------------------------------------
#### Love.Window.SetTitle(System.Byte[])

`Summary`: Sets the window title. (UTF-8 byte array version)
            Constantly updating the window title can lead to issues on some systems and therefore is discouraged.


`Arguments`

* `titleStr`: The new window title.(UTF-8 byte array)





------------------------------------------------
#### Love.Window.GetTitle

`Summary`: Gets the window title.






------------------------------------------------
#### Love.Window.HasFocus

`Summary`: Checks if the game window has keyboard focus.



`Returns`

True if the window has the focus or false if not.




------------------------------------------------
#### Love.Window.HasMouseFocus

`Summary`: Checks if the game window has mouse focus.



`Returns`

True if the window has mouse focus or false if not.




------------------------------------------------
#### Love.Window.IsVisible

`Summary`: Checks if the game window is visible.
            The window is considered visible if it's not minimized and the program isn't hidden.






------------------------------------------------
#### Love.Window.GetDPIScale

`Summary`: Gets the DPI scale factor associated with the window.
            The pixel density inside the window might be greater (or smaller) than the "size" of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.getDPIScale() would return 2.0 in that case.
            The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units.
            The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.



`Returns`

The pixel scale factor associated with the window.




------------------------------------------------
#### Love.Window.ToPixels(System.Double)

`Summary`: Converts a number from density-independent units to pixels.
            The pixel density inside the window might be greater (or smaller) than the "size" of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.getDPIScale() would return 2.0 in that case.
            The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units.
            The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
            Most LÖVE functions return values and expect arguments in terms of pixels rather than density-independent units.


`Arguments`

* `value`: A number in density-independent units to convert to pixels.


`Returns`

The converted number, in pixels.




------------------------------------------------
#### Love.Window.FromPixels(System.Double)

`Summary`: Converts a number from pixels to density-independent units.
            The pixel density inside the window might be greater (or smaller) than the "size" of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.getDPIScale() would return 2.0 in that case.
            The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units.
            The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
            Most LÖVE functions return values and expect arguments in terms of pixels rather than density-independent units.


`Arguments`

* `pixelvalue`: A number in pixels to convert to density-independent units.


`Returns`

The converted number, in density-independent units.




------------------------------------------------
#### Love.Window.Minimize

`Summary`: Minimizes the window to the system's task bar / dock.






------------------------------------------------
#### Love.Window.Maximize

`Summary`: Makes the window as large as possible.
            This function has no effect if the window isn't resizable, since it essentially programmatically presses the window's "maximize" button.






------------------------------------------------
#### Love.Window.IsMaximized

`Summary`: Gets whether the Window is currently maximized.
            The window can be maximized if it is not fullscreen and is resizable, and either the user has pressed the window's Maximize button or love.window.maximize has been called.



`Returns`

True if the window is currently maximized in windowed mode, false otherwise.




------------------------------------------------
#### Love.Window.ShowMessageBox(System.Byte[],System.Byte[],Love.MessageBoxType,System.Boolean)

`Summary`: Displays a simple message box with a single 'OK' button. (UTF-8 byte array version)
            	This function will pause all execution of the main thread until the user has clicked a button to exit the message box. Calling the function from a different thread may cause love to crash.


`Arguments`

* `title`: The title of the message box. (UTF-8 byte array)
* `message`: The text inside the message box. (UTF-8 byte array)
* `msgbox_type`: The type of the message box.
* `attachToWindow`: Whether the message box should be attached to the love window or free-floating.


`Returns`

Whether the message box was successfully displayed.




------------------------------------------------
#### Love.Window.ShowMessageBox(System.String,System.String,System.String[],System.Int32,System.Int32,Love.MessageBoxType,System.Boolean)

`Summary`: Displays a message box with a customized list of buttons.
            	This function will pause all execution of the main thread until the user has clicked a button to exit the message box. Calling the function from a different thread may cause love to crash.


`Arguments`

* `title`: The title of the message box.
* `message`: The text inside the message box.
* `buttonName`: 
* `enterButtonIndex`:  when the user presses 'enter', which button index should be return 
* `escapebuttonIndex`:  when the user presses 'escapeb', which button index should be return 
* `msgbox_type`: The type of the message box.
* `attachToWindow`: Whether the message box should be attached to the love window or free-floating.


`Returns`

The index of the button pressed by the user. May be 0 if the message box dialog was closed without pressing a button.




------------------------------------------------
#### Love.Window.RequestAttention(System.Boolean)

`Summary`: Causes the window to request the attention of the user if it is not in the foreground.
            In Windows the taskbar icon will flash, and in OS X the dock icon will bounce.


`Arguments`

* `continuous`: 





------------------------------------------------
#### Love.Window.SetTitle(System.String)

`Summary`: Sets the window title.
            Constantly updating the window title can lead to issues on some systems and therefore is discouraged.


`Arguments`

* `titleStr`: The new window title.





------------------------------------------------
#### Love.Window.ShowMessageBox(System.String,System.String,Love.MessageBoxType,System.Boolean)

`Summary`: Displays a simple message box with a single 'OK' button.
            	This function will pause all execution of the main thread until the user has clicked a button to exit the message box. Calling the function from a different thread may cause love to crash.


`Arguments`

* `title`: The title of the message box.
* `message`: The text inside the message box.
* `msgbox_type`: The type of the message box.
* `attachToWindow`: Whether the message box should be attached to the love window or free-floating.


`Returns`

Whether the message box was successfully displayed.




