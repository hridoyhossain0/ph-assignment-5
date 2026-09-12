
const Loading = () => {
    return (
        <div className="flex items-center flex-col gap-4 justify-center ">
            <p className="text-3xl">Loading...</p>

            <span className="loading loading-spinner w-20 text-error"></span>
        </div>
    );
};

export default Loading;