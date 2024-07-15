

import { Facebook, Twitter } from "lucide-react"

import {Link} from "react-router-dom"
import { Footer } from "./Footer"




const Footer1 = () => {
    return (
        <section className="w-full h-fit bg-slate-100 z-10 px-5 border-t pt-10 " >
            <div className=" flex flex-col sm:flex-row justify-between max-sm:gap-5" >
                <div className="flex flex-col gap-2  sm:gap-4 md:gap-4 lg:gap-6   " >
                    <div className="text-black text-4xl font-bold" >
                        <Link to="/">
                            UrbanNest.<span className="text-lg font-mono blue_gradient " >io</span>
                        </Link>
                    </div>
                    <div>
                        <img src="/partner.png" alt="partner" className="w-52" />
                    </div>

                </div>

                <div className=" flex justify-around items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14" >
                    <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-8" >
                        <h2 className="text-black text-sm sm:text-lg font-bold" >Real Estate Markets</h2>
                        <div className="flex flex-col justify-center items-center gap-2" >
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline text-center" >Alaska Real Estate</p>
                            </Link>
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline text-center" >Alaska Real Estate</p>
                            </Link>
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline text-center" >California Real Estate</p>
                            </Link>

                        </div>


                    </div>
                    <div className="flex flex-col justify-center items-center  gap-4 sm:gap-5 lg:gap-8" >

                        <h2 className="text-black text-sm sm:text-lg font-bold" >Popular Searches</h2>
                        <div className="flex flex-col justify-center items-center gap-2" >
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Houses for Sale Near Me by Owner</p>
                            </Link>
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Cheap Apartments for Rent Near Me</p>
                            </Link>
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Townhomes for Rent Near Me</p>
                            </Link>

                        </div>


                    </div>
                    <div className="flex flex-col justify-center items-center  gap-4 sm:gap-5 lg:gap-8" >
                        <h2 className="text-black text-sm sm:text-lg font-bold" >For Professionals</h2>
                        <div className="flex flex-col justify-center items-center gap-2" >
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Popular Counties</p>
                            </Link>
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Rental Communities</p>
                            </Link>
                            <Link to="/" >
                                <p className="text-sm text-muted-foreground hover:underline" >Real Estate Leads</p>
                            </Link>

                        </div>


                    </div>

                </div>

            </div>
            <hr className="mt-10 mb-10" />
            <div className="flex flex-col sm:flex-row justify-between max-sm:gap-5" >
                <div>
                    <p className="text-sm text-muted-foreground" >&copy; 2024 UrbanNest.<span className="text-xs font-mono blue_gradient" >io</span>™ All Rights Reserved</p>
                </div>
                <div className="flex justify-center items-center gap-3" >
                    <p className="text-sm text-muted-foreground" >Contact us</p>
                    <div className="flex justify-center items-center gap-2" >
                        <Link to="/" >
                            <Facebook className="w-5 h-5 fill-slate-500  " />
                        </Link>
                        <Link to="/" >
                            <Twitter className="w-5 h-5 fill-slate-500   " />
                        </Link>
                    </div>

                </div>

            </div>
            <Footer/>

        </section>
    )
}

export default Footer1