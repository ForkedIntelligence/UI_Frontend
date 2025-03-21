import { useRouter } from "next/router";

function Header() {
    const router = useRouter();

    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Desktop navigation */}
                    <nav className="flex grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <a
                                    onClick={() =>
                                        router.push("/admin/auth")
                                    }
                                    className="btn-sm text-white  text- bg-[#38BDF8] hover:bg-gray-700 w-full sm:w-auto  sm:ml-3 cursor-pointer"
                                >
                                    Event Manager
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
