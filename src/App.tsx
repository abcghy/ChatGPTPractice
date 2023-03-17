import { Component, createSignal } from 'solid-js';

const LeftChat: Component<{ message: string }> = ({ message }) => {
  return (
    <div class='bg-red rounded text-white px-2 py-1 self-start mr-40'>
      {message}
    </div>
  )
}

const RightChat: Component<{ message: string }> = ({ message }) => {
  return (
    <div class='bg-blue rounded text-white px-2 py-1 self-end ml-40'>
      {message}
    </div>
  )
}

const ChatArea: Component = () => {
  return (
    <div class='flex flex-col gap-2 p-2'>
      <RightChat message="hello, Please tell me your name" />
      <LeftChat message='Ok, My name is ChatGPT'/>
      <RightChat message="What do you think of current world situation?" />
      <LeftChat message="Well I'm just an AI model I can't give such infomation. But if you really wanna know about this. I'm just gonna say. It's not that good though." />
      <RightChat message="hello, Please tell me your name" />
      <LeftChat message='Ok, My name is ChatGPT'/>
      <RightChat message="What do you think of current world situation?" />
      <LeftChat message="Well I'm just an AI model I can't give such infomation. But if you really wanna know about this. I'm just gonna say. It's not that good though." />
      <RightChat message="hello, Please tell me your name" />
      <LeftChat message='Ok, My name is ChatGPT'/>
      <RightChat message="What do you think of current world situation?" />
      <LeftChat message="Well I'm just an AI model I can't give such infomation. But if you really wanna know about this. I'm just gonna say. It's not that good though." />
      <RightChat message='Hello' />
    </div>
  )
}

const BottomPrompt: Component = () => {
  const [prompt, setPrompt] = createSignal("")
  return (
    <div class='flex gap-2 h-10'>
      <input class='flex-1' placeholder='input your prompt!' />
      <button>Send</button>
    </div>
  )
}


const App: Component = () => {
  return (
    <div class='flex flex-col items-center h-screen'>
      <div class='flex-1 w-screen overflow-y-scroll'>
        <ChatArea />
      </div>
      <div class='w-full'>
        <BottomPrompt />
      </div>
    </div>
  );
};

export default App;
