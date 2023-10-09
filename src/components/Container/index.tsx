import { Props } from "./types";

function Container({ children }: Props) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}

export default Container;