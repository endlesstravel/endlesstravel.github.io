
# Love.Event
> Manages events, like keypresses.

------------------------------------------------
#### Love.Event.Poll(Love.Scene)

`Summary`: Returns an iterator for messages in the event queue.


`Arguments`

* `scene`: event handler





------------------------------------------------
#### Love.Event.Wait(Love.Scene)

`Summary`: Like [Love.Event](/module/Love.Event?id=loveeventpolllovescene), but blocks until there is an event in the queue.


`Arguments`

* `scene`: event handler





------------------------------------------------
#### Love.Event.Quit(System.Int32)

`Summary`: Exits the LÖVE program.
            Adds the quit event to the queue.
            The quit event is a signal for the event handler to close LÖVE. It's possible to abort the exit process with the love.quit callback.


`Arguments`

* `exitStatus`: The program exit status to use when closing the application.





------------------------------------------------
#### Love.Event.PollOrWait(Love.Scene,System.Boolean)

`Summary`: poll or wait a event


`Arguments`

* `poll_or_wait`: True: poll; False: wait





