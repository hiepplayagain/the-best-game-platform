import { useState } from "react";
import gameBgIllu from "../assets/bgs/game-illu-bg.png";
import googleLogo from "../assets/logos/gg.png";
import { useThemeStore } from "../stores/useThemeStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Auth = () => {
    // State để chuyển đổi giữa Login và Register (true = Login, false = Register)
    const [isLogin, setIsLogin] = useState(true);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    return (
        <div className="flex flex-col md:flex-row w-screen h-screen bg-white dark:bg-black transition-colors">
            {/* Cột trái: Giới thiệu & Khung ảnh */}
            <div className="hidden md:flex flex-col items-center justify-center w-full h-full bg-[#E0F2FE] dark:bg-slate-950 p-8">
                <div className="w-fit h-fit self-start text-black dark:text-white text-5xl font-bold translate-x-20">
                    <p>IndieG</p>
                </div>
                <img
                    src={gameBgIllu}
                    className="w-full max-w-lg h-auto my-4"
                    alt="Game Illustration"
                />
                <div className="w-fit h-fit text-black dark:text-white text-3xl font-bold -translate-x-20 pb-4">
                    <p>Connect Your Squad</p>
                </div>
                <div className="w-fit h-fit text-black dark:text-white text-3xl font-bold translate-x-20">
                    <p>Elevate your game</p>
                </div>
            </div>

            {/* Cột phải: Form xử lý Đăng nhập / Đăng ký */}
            {/* Đã thêm overflow-y-auto để an toàn trên màn hình nhỏ */}
            <div className="flex flex-col items-center justify-center w-full h-full bg-[#F8FAFC] dark:bg-gray-900 p-6 overflow-y-auto">

                {/* Tiêu đề: Giảm mb-4 xuống mb-2, font thu nhỏ một chút cho gọn */}
                <div className="w-full max-w-sm text-center md:text-left mb-2 mt-4 md:mt-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white transition-all">
                        {isLogin ? "Welcome!" : "Join Us!"}
                    </h1>
                </div>

                {/* Form chính: Giảm gap-4 xuống gap-3 */}
                <form className="flex flex-col gap-3 w-full max-w-sm">

                    {/* TRƯỜNG USERNAME */}
                    {!isLogin && (
                        <div className="flex flex-col gap-1 group">
                            <label htmlFor="username" className="text-sm font-semibold text-[#475569] dark:text-gray-300">
                                Username
                            </label>
                            {/* Giảm h-12 -> h-10 */}
                            <div className="flex flex-row items-center w-full rounded-md h-10 border border-[#374151] bg-white dark:bg-gray-800 px-3 transition-all group-focus-within:border-[#FF4A75] group-focus-within:ring-1 group-focus-within:ring-[#FF4A75]">
                                <input
                                    id="username"
                                    type="text"
                                    className="text-base w-full h-full focus:outline-none bg-transparent text-black dark:text-white"
                                    required={!isLogin}
                                />
                            </div>
                        </div>
                    )}

                    {/* TRƯỜNG EMAIL */}
                    <div className="flex flex-col gap-1 group">
                        <label htmlFor="email" className="text-sm font-semibold text-[#475569] dark:text-gray-300">
                            Email
                        </label>
                        <div className="flex flex-row items-center w-full rounded-md h-10 border border-[#374151] bg-white dark:bg-gray-800 px-3 transition-all group-focus-within:border-[#FF4A75] group-focus-within:ring-1 group-focus-within:ring-[#FF4A75]">
                            <input
                                id="email"
                                type="email"
                                className="text-base w-full h-full focus:outline-none bg-transparent text-black dark:text-white"
                                required
                            />
                        </div>
                    </div>

                    {/* TRƯỜNG PASSWORD */}
                    <div className="flex flex-col gap-1 group">
                        <label htmlFor="password" className="text-sm font-semibold text-[#475569] dark:text-gray-300">
                            Password
                        </label>
                        <div className="flex flex-row items-center w-full rounded-md h-10 border border-[#374151] bg-white dark:bg-gray-800 px-3 transition-all group-focus-within:border-[#FF4A75] group-focus-within:ring-1 group-focus-within:ring-[#FF4A75]">
                            <input
                                id="password"
                                type="password"
                                className="text-base w-full h-full focus:outline-none bg-transparent text-black dark:text-white"
                                required
                            />
                            <FontAwesomeIcon icon={faEyeSlash} color="text-gray-300"/>
                        </div>

                        {/* BẢNG RULES VÀ ĐỘ MẠNH (DẠNG NGANG GỌN NHẸ) */}
                        {!isLogin && (
                            <div className="flex flex-col gap-2 mt-1 p-2.5 rounded-md border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/40 text-[11px]">
                                {/* Thanh đo độ mạnh */}
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-gray-400 font-medium shrink-0">Strength: <span className="text-orange-500 font-bold">Medium</span></span>
                                    <div className="grid grid-cols-4 gap-1 h-1 w-full max-w-[150px]">
                                        <div className="h-full rounded-full bg-red-500" />
                                        <div className="h-full rounded-full bg-orange-500" />
                                        <div className="h-full rounded-full bg-gray-200 dark:bg-gray-700" />
                                        <div className="h-full rounded-full bg-gray-200 dark:bg-gray-700" />
                                    </div>
                                </div>

                                {/* Các quy tắc (Flex wrap) */}
                                <div className="flex flex-wrap gap-x-3 gap-y-1 text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-1.5">
                                    <span className="text-green-600 dark:text-green-400">✓ 8+ chars</span>
                                    <span>• 1 Uppercase</span>
                                    <span>• 1 Number/Special</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* TRƯỜNG CONFIRM PASSWORD */}
                    {!isLogin && (
                        <div className="flex flex-col gap-1 group">
                            <label htmlFor="confirmPassword" className="text-sm font-semibold text-[#475569] dark:text-gray-300">
                                Confirm Password
                            </label>
                            <div className="flex flex-row items-center w-full rounded-md h-10 border border-[#374151] bg-white dark:bg-gray-800 px-3 transition-all group-focus-within:border-[#FF4A75] group-focus-within:ring-1 group-focus-within:ring-[#FF4A75]">
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    className="text-base w-full h-full focus:outline-none bg-transparent text-black dark:text-white"
                                    required={!isLogin}
                                />
                            </div>
                        </div>
                    )}

                    {/* QUÊN MẬT KHẨU */}
                    {isLogin && (
                        <div className="text-xs self-end text-[#475569] dark:text-gray-400 cursor-pointer hover:underline hover:underline-offset-2">
                            <p>Forgot your password?</p>
                        </div>
                    )}

                    {/* NÚT SUBMIT: Giảm h-12 -> h-11 */}
                    <button
                        type="submit"
                        className="w-full rounded-md h-11 text-base font-semibold text-white cursor-pointer bg-[#FF4A75] hover:bg-[#e13b63] transition-colors shadow-md mt-1"
                    >
                        {isLogin ? "Go!" : "Create Account"}
                    </button>

                    {/* CHUYỂN ĐỔI LOGIN / REGISTER: Chuyển xuống text-xs */}
                    <div className="text-xs text-center md:text-left text-[#475569] dark:text-gray-400 mt-1">
                        {isLogin ? (
                            <p>
                                Don't have an account?{" "}
                                <span
                                    onClick={() => setIsLogin(false)}
                                    className="text-[#FF4A75] font-semibold cursor-pointer underline underline-offset-2"
                                >
                                    Register now!
                                </span>
                            </p>
                        ) : (
                            <p>
                                Already have an account?{" "}
                                <span
                                    onClick={() => setIsLogin(true)}
                                    className="text-[#FF4A75] font-semibold cursor-pointer underline underline-offset-2"
                                >
                                    Sign In
                                </span>
                            </p>
                        )}
                    </div>
                </form>

                {/* ĐƯỜNG CHIA "OR": Giảm py-6 -> py-4 */}
                <div className="relative w-full max-w-sm py-4 flex items-center justify-center">
                    <div className="w-full h-px bg-[#CBD5E1] dark:bg-gray-700" />
                    <div className="absolute bg-[#F8FAFC] dark:bg-gray-900 text-xs font-medium text-[#475569] dark:text-gray-400 px-3">
                        or
                    </div>
                </div>

                {/* NÚT GOOGLE: Giảm h-12 -> h-11, thu nhỏ icon w-4 h-4 */}
                <button
                    type="button"
                    className="flex flex-row justify-center items-center gap-3 w-full max-w-sm rounded-md h-11 text-sm font-medium text-gray-700 dark:text-gray-200 cursor-pointer border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm mb-4 md:mb-0"
                >
                    <img src={googleLogo} className="w-4 h-4" alt="Google" />
                    <p>{isLogin ? "Sign in with Google" : "Sign up with Google"}</p>
                </button>
                <button onClick={() => toggleTheme()} className="text-white">Click</button>
            </div>
        </div>
    );
};

export default Auth;