
# Love.Sound
> 

------------------------------------------------
#### Love.Sound.NewDecoder(System.String,System.Int32)

`Summary`: Attempts to find a decoder for the encoded sound data in the specified file.


`Arguments`

* `filename`: The filename of the file with encoded sound data.
* `bufferSize`: The size of each decoded chunk, in bytes.





------------------------------------------------
#### Love.Sound.NewSoundData(Love.File)

`Summary`: Creates a new SoundData.
            It's also possible to create SoundData with a custom sample rate, channel and bit depth.
            The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.


`Arguments`

* `file`: A File pointing to an audio file.


`Returns`

A new SoundData object.




------------------------------------------------
#### Love.Sound.NewSoundData(System.String)

`Summary`: Creates a new SoundData.
            It's also possible to create SoundData with a custom sample rate, channel and bit depth.
            The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.


`Arguments`

* `filename`: The file name of the file to load.


`Returns`

A new SoundData object.




------------------------------------------------
#### Love.Sound.NewDecoder(Love.FileData,System.Int32)

`Summary`: Attempts to find a decoder for the encoded sound data in the specified file.


`Arguments`

* `fdata`: The file data with encoded sound data.
* `buffersize`: The size of each decoded chunk, in bytes.





------------------------------------------------
#### Love.Sound.NewDecoder(Love.File,System.Int32)

`Summary`: Attempts to find a decoder for the encoded sound data in the specified file.


`Arguments`

* `file`: The file with encoded sound data.
* `buffersize`: The size of each decoded chunk, in bytes.





------------------------------------------------
#### Love.Sound.NewSoundData(Love.Decoder)

`Summary`: Creates a new SoundData.
            It's also possible to create SoundData with a custom sample rate, channel and bit depth.
            The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.


`Arguments`

* `decoder`: Decode data from this Decoder until EOF.


`Returns`

A new SoundData object.




------------------------------------------------
#### Love.Sound.NewSoundData(System.Int32,System.Int32,System.Int32,System.Int32)

`Summary`: Creates a new SoundData.
            It's also possible to create SoundData with a custom sample rate, channel and bit depth.
            The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.


`Arguments`

* `samples`: Total number of samples.
* `sampleRate`: Number of samples per second
* `bits`: Bits per sample (8 or 16).
* `channels`: Either 1 for mono or 2 for stereo.


`Returns`

A new SoundData object.




------------------------------------------------
#### Love.SoundData.#ctor

`Summary`: disable construct






