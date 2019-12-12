
# Love.FileSystem

 
> Provides an interface to the user's filesystem. his module provides access to files in specific places:
    1. The root folder of the source directory archive /
    2.  The root folder of the game's save directory. Files that are opened for write or append will always be created in the save directory. The same goes for other operations that involve writing to the filesystem, like [Love.FileSystem](/module/Love.FileSystem?id=lovefilesystemcreatedirectorysystembyte). It is recommended to set your game's identity first.  You can set it with [Love.FileSystem](/module/Love.FileSystem?id=lovefilesystemsetidentitysystembytesystemboolean) as well.

------------------------------------------------
#### Love.FileSystem.NewFileData(System.String)

`Summary`: Creates a new FileData from a file on the storage device.


`Arguments`

* `filename`: Path to the file.





------------------------------------------------
#### Love.FileSystem.NewFile(System.Byte[],Love.FileMode)

`Summary`: Creates a new File object. It needs to be opened before it can be accessed. (UTF-8 byte array version)


`Arguments`

* `filename`: The filename of the file.(UTF-8 byte array needed)
* `fmode_type`: The mode to open the file in.





------------------------------------------------
#### Love.FileSystem.NewFileData(System.Byte[],System.Byte[])

`Summary`: Creates a new FileData object.


`Arguments`

* `contents`: The contents of the file.
* `filename`: The name of the file.





------------------------------------------------
#### Love.FileSystem.NewFileData(Love.File)

`Summary`: Creates a new FileData object.


`Arguments`

* `file`: The file.





------------------------------------------------
#### Love.FileSystem.Init(System.Byte[])

`Summary`: Initializes FileSystem, will be called internally, so should not be used explictly.


`Arguments`

* `args`: 





------------------------------------------------
#### Love.FileSystem.IsFused

`Summary`: Gets whether the game is in fused mode or not.
            If a game is in fused mode, its save directory will be directly in the Appdata directory instead of Appdata/LOVE/. The game will also be able to load C Lua dynamic libraries which are located in the save directory.
            A game is in fused mode if the source .love has been fused to the executable (see Game Distribution), or if "--fused" has been given as a command-line argument when starting the game.






------------------------------------------------
#### Love.FileSystem.SetIdentity(System.Byte[],System.Boolean)

`Summary`: Sets the write directory for your game. Note that you can only set the name of the folder to store your files in, not the location.


`Arguments`

* `path`: The new identity that will be used as write directory.(UTF-8 byte array needed)
* `append`: Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently.
            TRUE: results in searching source before searching save directory; FALSE: results in searching game save directory before searching source directorymounted archives.





------------------------------------------------
#### Love.FileSystem.GetIdentity

`Summary`: Gets the write directory name for your game. Note that this only returns the name of the folder to store your files in, not the full path.






------------------------------------------------
#### Love.FileSystem.SetSource(System.Byte[])

`Summary`: Sets the source of the game, where the code is present. This function can only be called once, and is normally automatically done by LÖVE.


`Arguments`

* `path`: Absolute path to the game's source folder.(UTF-8 byte array needed)





------------------------------------------------
#### Love.FileSystem.GetSource

`Summary`: initially it was .exe folder 
            lua version: Returns the full path to the the .love file or directory. If the game is fused to the LÖVE executable, then the executable is returned.



`Returns`

The full platform-dependent path of the .love file or directory.




------------------------------------------------
#### Love.FileSystem.Mount(System.Byte[],System.Byte[],System.Boolean)

`Summary`: Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.


`Arguments`

* `archive`: The folder or zip file in the game's save directory to mount.(UTF-8 byte array needed)
* `mountpoint`: The new path the archive will be mounted to.(UTF-8 byte array needed)
* `appendToPath`: Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.





------------------------------------------------
#### Love.FileSystem.Unmount(System.Byte[])

`Summary`: Unmounts a zip file or folder previously mounted for reading with [Love.FileSystem](/module/Love.FileSystem?id=lovefilesystemmountsystembytesystembytesystemboolean).


`Arguments`

* `archive`: The folder or zip file in the game's save directory which is currently mounted.


`Returns`

True if the archive was successfully unmounted, false otherwise.




------------------------------------------------
#### Love.FileSystem.GetWorkingDirectory

`Summary`: Gets the current working directory.






------------------------------------------------
#### Love.FileSystem.GetUserDirectory

`Summary`: Returns the path of the user's directory






------------------------------------------------
#### Love.FileSystem.GetAppdataDirectory

`Summary`: Returns the application data directory (could be the same as getUserDirectory






------------------------------------------------
#### Love.FileSystem.GetSaveDirectory

`Summary`: Gets the full path to the designated save directory. This can be useful if you want to use the standard io library (or something else) to read or write in the save directory.






------------------------------------------------
#### Love.FileSystem.GetRealDirectory(System.Byte[])

`Summary`: Gets the platform-specific absolute path of the directory containing a filepath.


`Arguments`

* `filename`: The filepath to get the directory of.(UTF-8 byte array needed)


`Returns`

The platform-specific full path of the directory containing the filepath.




------------------------------------------------
#### Love.FileSystem.GetExecutablePath

`Summary`: will be called internally, so should not be used explictly.






------------------------------------------------
#### Love.FileSystem.GetInfo(System.Byte[])

`Summary`: Gets information about the specified file or directory.


`Arguments`

* `path`: The file or directory path to check.





------------------------------------------------
#### Love.FileSystem.CreateDirectory(System.Byte[])

`Summary`: Recursively creates a directory.
            When called with "a/b" it creates both "a" and "a/b", if they don't exist already.


`Arguments`

* `name`: The directory to create. (UTF-8 byte array needed)


`Returns`

True if the directory was created, false if not.




------------------------------------------------
#### Love.FileSystem.Remove(System.Byte[])

`Summary`: Removes a file or empty directory.


`Arguments`

* `path`: The file or directory to remove.





------------------------------------------------
#### Love.FileSystem.Read(System.Byte[],System.Int64)

`Summary`: Read the contents of a file.


`Arguments`

* `filename`: The name (and path) of the file. (UTF-8 byte array needed)
* `len`: How many bytes to read. (-1 means all)





------------------------------------------------
#### Love.FileSystem.Write(System.Byte[],System.Byte[])

`Summary`: Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.


`Arguments`

* `filename`: The name (and path) of the file.(UTF-8 byte need)
* `input`: The data to write to the file.





------------------------------------------------
#### Love.FileSystem.Append(System.Byte[],System.Byte[])

`Summary`: Append data to an existing file. (UTF-8 byte array version)


`Arguments`

* `filename`: The name (and path) of the file.
* `input`: The data to append to the file.





------------------------------------------------
#### Love.FileSystem.GetDirectoryItems(System.Byte[])

`Summary`: Returns a table with the names of files and subdirectories in the specified path. The table is not sorted in any way; the order is undefined.
            If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.


`Arguments`

* `dir`: The directory.





------------------------------------------------
#### Love.FileSystem._GetLastModified(System.Byte[])

`Summary`: Deprecated in LÖVE 11.0
            Gets the last modification time of a file.


`Arguments`

* `filename`: 





------------------------------------------------
#### Love.FileSystem.AreSymlinksEnabled

`Summary`: Gets whether love.filesystem follows symbolic links.






------------------------------------------------
#### Love.FileSystem._GetSourceBaseDirectory

`Summary`: no need for C# version
            Returns the full path to the directory containing the .love file.






------------------------------------------------
#### Love.FileSystem._GetRequirePath

`Summary`: no need for C# version
            Gets the filesystem paths that will be searched when require is called.






------------------------------------------------
#### Love.FileSystem._SetRequirePath(System.Byte[])

`Summary`: no need for C# version
            Sets the filesystem paths that will be searched when require is called.
            The paths string given to this function is a sequence of path templates separated by semicolons. The argument passed to require will be inserted in place of any question mark ("?") character in each template (after the dot characters in the argument passed to require are replaced by directory separators.)
            The paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.


`Arguments`

* `paths`: 





------------------------------------------------
#### Love.FileSystem.NewFile(System.String,Love.FileMode)

`Summary`: Creates a new File object. It needs to be opened before it can be accessed.


`Arguments`

* `filename`: The filename of the file.
* `fmode_type`: The mode to open the file in.





------------------------------------------------
#### Love.FileSystem.NewFileData(System.String,System.String)

`Summary`: Creates a new FileData object.


`Arguments`

* `contents`: The contents of the file.
* `filename`: The name of the file.





------------------------------------------------
#### Love.FileSystem.NewFileData(System.Byte[],System.String)

`Summary`: Creates a new FileData object.


`Arguments`

* `contents`: The contents of the file.
* `filename`: The name of the file.





------------------------------------------------
#### Love.FileSystem.Init(System.String)

`Summary`: Initializes FileSystem, will be called internally, so should not be used explictly.


`Arguments`

* `args`: 





------------------------------------------------
#### Love.FileSystem.GetInfo(System.String)

`Summary`: Gets information about the specified file or directory.


`Arguments`

* `path`: The file or directory path to check.





------------------------------------------------
#### Love.FileSystem.SetIdentity(System.String,System.Boolean)

`Summary`: Sets the write directory for your game. Note that you can only set the name of the folder to store your files in, not the location.


`Arguments`

* `path`: The new identity that will be used as write directory.
* `append`: Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently.
            TRUE: results in searching source before searching save directory; FALSE: results in searching game save directory before searching source directorymounted archives.





------------------------------------------------
#### Love.FileSystem.SetSource(System.String)

`Summary`: Sets the source of the game, where the code is present. This function can only be called once, and is normally automatically done by LÖVE.


`Arguments`

* `path`: Absolute path to the game's source folder.





------------------------------------------------
#### Love.FileSystem.Mount(System.String,System.String,System.Boolean)

`Summary`: Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.


`Arguments`

* `archive`: The folder or zip file in the game's save directory to mount.
* `mountpoint`: The new path the archive will be mounted to.
* `appendToPath`: Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.





------------------------------------------------
#### Love.FileSystem.GetRealDirectory(System.String)

`Summary`: Gets the platform-specific absolute path of the directory containing a filepath.


`Arguments`

* `filename`: The filepath to get the directory of.


`Returns`

The platform-specific full path of the directory containing the filepath.




------------------------------------------------
#### Love.FileSystem.CreateDirectory(System.String)

`Summary`: Recursively creates a directory.
            When called with "a/b" it creates both "a" and "a/b", if they don't exist already.


`Arguments`

* `name`: The directory to create.


`Returns`

True if the directory was created, false if not.




------------------------------------------------
#### Love.FileSystem.Remove(System.String)

`Summary`: Removes a file (or directory).


`Arguments`

* `path`: The file or directory to remove.





------------------------------------------------
#### Love.FileSystem.Read(System.String,System.Int64)

`Summary`: Read the contents of a file.


`Arguments`

* `filename`: The name (and path) of the file.
* `len`: How many bytes to read. (-1 means all)





------------------------------------------------
#### Love.FileSystem.Write(System.String,System.Byte[])

`Summary`: Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.


`Arguments`

* `filename`: The name (and path) of the file.
* `input`: The data to write to the file.





------------------------------------------------
#### Love.FileSystem.Write(System.String,System.String)

`Summary`: Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
            encode with UTF-8


`Arguments`

* `filename`: The name (and path) of the file.
* `input`: The string data to write to the file.





------------------------------------------------
#### Love.FileSystem.Append(System.String,System.Byte[])

`Summary`: Append data to an existing file.


`Arguments`

* `filename`: The name (and path) of the file.
* `input`: The data to append to the file.





------------------------------------------------
#### Love.FileSystem.Append(System.String,System.String)

`Summary`: Append text to an existing file (encode with UTF-8).


`Arguments`

* `filename`: The name (and path) of the file.
* `txt`: string to append





------------------------------------------------
#### Love.FileSystem.GetDirectoryItems(System.String)

`Summary`: Returns a table with the names of files and subdirectories in the specified path. The array is not sorted in any way; the order is undefined.
            If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.


`Arguments`

* `dir`: The directory.





