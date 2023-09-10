import Image from "next/image"

export const Loader = () =>{
    return(
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-20 h-20 relative">
                <Image fill alt="loader" src="/infinite-loader.gif" />
            </div>
            <p className="text-sm text-muted-foreground" >
                Infinity is thinking...
            </p>
        </div>
    )
}