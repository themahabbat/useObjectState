# useObjectState
useObjectState is a React hook that allows you to update a state object without having to pass the entire object to setState. It returns a tuple of the state object and a function that takes a partial state object and merges it with the current state.


## Usage
```ts
interface DialogState {
    open: boolean;
    title: string | null;
    content: string | null;
}

const [dialog, setDialog] = useObjectState<DialogState>({
    open: false,
    title: null,
    content: null,
})

...

setDialog({ open: true })       // { open: true, title: null, content: null }
setDialog({ title: 'Hello' })   // { open: true, title: 'Hello', content: null }
```
