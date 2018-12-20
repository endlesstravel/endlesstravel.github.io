# Timer
Provides high-resolution timing functionality.

### Love.Timer.GetAverageDelta()

Returns the average delta time over the last second.

``` C#
float delta = Timer.GetAverageDelta()
```

### Love.Timer.GetDelta()

Returns the time between the last two frames.

``` C#
float dt = Timer.GetDelta()
```

### Love.Timer.GetFPS()

Returns the current frames per second.

``` C#
float fps = Timer.GetFPS()
```

### Love.Timer.GetTime()

Returns the amount of time since some time in the past.

``` C#
float currentTime = Timer.GetTime()
```

### Love.Timer.Sleep()

Pauses the current thread for the specified amount of time.

``` C#
Timer.Sleep()
```

### Love.Timer.Step()

Measures the time between two frames.

``` C#
Timer.Step()
```