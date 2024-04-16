const chatData = [
  {
    fullname: 'Hat',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: 'Yes, it is still available',
    time: '2h ago',
  },
  {
    fullname: 'John',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    message: 'Hey, how are you?',
    time: '1h ago',
  },
  {
    fullname: 'Jane',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    message: 'I am good, thanks? do yo..',
    time: '30m ago',
  },
]

const Messages = () => {
  return (
    <div className="container mt-10">
      <div className="flex gap-2 mb-8">
        <a href="/" className="text-primary-300">
          Home
        </a>
        <span>/</span>
        <span>Messages</span>
      </div>
      <div className="grid grid-cols-10 gap-10">
        {/* LEFT */}
        <div className="bg-white col-span-3  rounded-3xl shadow-xl p-8">
          <h3>Chats</h3>
          <div className="w-full h-px bg-neutral-300 mt-6" />
          {chatData.map((chat, index) => (
            <div
              key={index}
              className="border-b py-4 gap-4 border-neutral-300 flex flex-row items-center justify-start hover:bg-neutral-100 cursor-pointer"
            >
              <img src={chat.image} width={48} className="rounded-full" />
              <div className="flex flex-row gap-2 justify-between w-full items-end">
                <div className="flex flex-col gap-1">
                  <div className="font-semibold">{chat.fullname}</div>
                  <div className="text-neutral-500 text-sm">{chat.message}</div>
                </div>
                <span className="text-neutral-500 text-sm">{chat.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between bg-white col-span-7  rounded-3xl shadow-xl p-8 h-[600px]">
          <h4 className="text-center text-neutral-500 mt-16">
            No messages yet
          </h4>
          <p className="text-center text-neutral-500 w-[400px] mx-auto mt-4">
            Looks like you haven't initiated any conversations yet with any
            roommates.
          </p>
          <div className="relative flex p-2 border rounded-full border-neutral-300 h-16">
            <input
              type="text"
              id="sendMessage"
              name="sendMessage"
              placeholder="Write you message here..."
              className="w-full h-full outline-none pl-4 pr-24"
            ></input>
            <div className=" absolute right-1 top-1 py-4 px-6 bg-primary-300 inline-block rounded-full text-white">
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
