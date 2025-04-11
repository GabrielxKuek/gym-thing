const Comment = () => {
    return (
        <div>
            {/* user + comment info */}
            <div className="gap-5 flex content-start items-center">
                {/* profile pic */}
                <img src="https://cdn.mos.cms.futurecdn.net/SJjPrgUQJmBXd4s7N4bzjQ.jpg" alt="profile pic" width="50" className="aspect-square rounded-full" /> 

                {/* comment info */}
                <div className="">
                    <p className="font-bold">Jason Derulo</p>
                    <p className="italic">12 April 2025</p>
                </div>
            </div>

            {/* comment content */}
            <div className="rounded-tr-2xl rounded-bl-2xl rounded-br-2xl px-3 py-2 bg-bg-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}

export default Comment;