
# Love.Audio
> 

------------------------------------------------
#### Love.Audio.NewSource(Love.FileData,Love.SourceType)

`Summary`: Creates a new Source from file data.


`Arguments`

* `fdata`: The FileData to create a Source from.
* `type`: Streaming or static source.





------------------------------------------------
#### Love.Audio.NewSource(System.String,Love.SourceType)

`Summary`: Creates a new Source from file name.


`Arguments`

* `filename`: The filepath to the audio file.
* `type`: Streaming or static source.





------------------------------------------------
#### Love.Audio.GetOrientation

`Summary`: Returns the orientation of the listener.



`Returns`

tuple (Forward vector of the listener orientation, Up vector of the listener orientation.)




------------------------------------------------
#### Love.Audio.NewSource(Love.Decoder,Love.SourceType)

`Summary`: Creates a new Source from a Decoder.


`Arguments`

* `decoder`: The Decoder to create a Source from.
* `type`: Streaming or static source.





------------------------------------------------
#### Love.Audio.NewSource(Love.SoundData)

`Summary`: Sources created from SoundData are always static.


`Arguments`

* `sd`: The SoundData to create a Source from.





------------------------------------------------
#### Love.Audio.GetActiveSourceCount

`Summary`: Gets the current number of simultaneously playing sources.






------------------------------------------------
#### Love.Audio.Stop

`Summary`: Stops all currently played sources.






------------------------------------------------
#### Love.Audio.Stop(Love.Source[])

`Summary`: Stops specified source.






------------------------------------------------
#### Love.Audio.Pause

`Summary`: Pauses all currently played Sources.






------------------------------------------------
#### Love.Audio.Pause(Love.Source[])

`Summary`: Pauses specific played Sources.






------------------------------------------------
#### Love.Audio.Play(Love.Source[])

`Summary`: Plays the specified Source.


`Arguments`

* `sources`: 





------------------------------------------------
#### Love.Audio.SetVolume(System.Single)

`Summary`: Sets the master volume.


`Arguments`

* `v`: 1.0 is max and 0.0 is off.





------------------------------------------------
#### Love.Audio.GetVolume

`Summary`: Returns the master volume.






------------------------------------------------
#### Love.Audio.SetPosition(System.Single,System.Single,System.Single)

`Summary`: Sets the position of the listener.


`Arguments`

* `x`: 
* `y`: 
* `z`: 





------------------------------------------------
#### Love.Audio.GetPosition

`Summary`: Returns the position of the listener.






------------------------------------------------
#### Love.Audio.SetOrientation(Love.Vector3,Love.Vector3)

`Summary`: Sets the orientation of the listener.


`Arguments`

* `forward`: Forward vector of the listener orientation.
* `up`: Up vector of the listener orientation.





------------------------------------------------
#### Love.Audio.GetOrientation(Love.Vector3@,Love.Vector3@)

`Summary`: Returns the orientation of the listener.


`Arguments`

* `forward`: Forward vector of the listener orientation.
* `up`: Up vector of the listener orientation.





------------------------------------------------
#### Love.Audio.SetVelocity(System.Single,System.Single,System.Single)

`Summary`: Sets the velocity of the listener.


`Arguments`

* `x`: 
* `y`: 
* `z`: 





------------------------------------------------
#### Love.Audio.GetVelocity

`Summary`: Returns the velocity of the listener.






------------------------------------------------
#### Love.Audio.SetDopplerScale(System.Single)

`Summary`: Sets a global scale factor for doppler effects.


`Arguments`

* `scale`: The new doppler scale factor. The scale must be greater than 0.





------------------------------------------------
#### Love.Audio.GetDopplerScale

`Summary`: Gets the global scale factor for doppler effects.






------------------------------------------------
#### Love.Audio.SetDistanceModel(Love.DistanceModel)

`Summary`: Sets the distance attenuation model.


`Arguments`

* `distancemodel_type`: 





------------------------------------------------
#### Love.Audio.GetDistanceModel

`Summary`: Returns the distance attenuation model.






