import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";

export const Header = () => {

    return (
        <header className="bg-zinc-950 px-6 py-4">
            <div className="container mx-auto">
                <Link to="/" className='flex items-center gap-2 text-gray-200'>
                    <FaClipboardList />
                    TODO
                </Link>
            </div>
        </header>
    );
};
