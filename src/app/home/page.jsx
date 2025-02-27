export default function Home() {

    return (
        <>
            <main>
                <section>
                    <div className="pt-10 flex justify-center">
                        <h2 className="iphone16 mt-14 flex">iPhone 16<span className="highlighted">e</span></h2>
                    </div>
                    <div className="flex justify-center py-2">
                        <p className="font-normal text-3xl">Latest iPhone. Greatest price.</p>
                    </div>
                    <div className="flex justify-center ">
                        <p className="text-xl muted-text">Available starting 2.28</p>
                    </div>
                    <div className="flex justify-center py-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Pre-order</button>
                    </div>
                    <img src="/16e.png" alt="" />
                    <div className="flex justify-center pb-3">
                        <span className="highlighted text-xl font-medium mb-16">Built for Apple Intelligence.</span>
                    </div>
                </section>
                <section className="ip16pro">
                    <div className="pt-1 flex justify-center">
                        <h2 className="iphone16 mt-14 flex text-white">iPhone 16 Pro</h2>
                    </div>
                    <div className="flex justify-center py-2">
                        <p className="font-normal text-3xl text-white">Hello, Apple Intelligence.</p>
                    </div>
                    <div className="flex justify-center py-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Buy</button>
                    </div>
                    <img src="/16pro.png" className="mb-2" alt="" />
                </section>
                <section className="ip16">
                    <div className="pt-1 flex justify-center">
                        <h2 className="iphone16 mt-14 flex text-white">iPhone 16</h2>
                    </div>
                    <div className="flex justify-center py-2">
                        <p className="font-normal text-3xl text-white">Hello, Apple Intelligence.</p>
                    </div>
                    <div className="flex justify-center py-3">
                        <button className="bg-white hover:bg-white-300 text-black py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                        <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Buy</button>
                    </div>
                    <img src="/ip16.png" alt="" />
                </section>
                <section className="watch">
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div className="border watchbg">
                            <div className="mt-14 flex justify-center">
                                <img src="apple.svg" alt="" />
                                <h2 className="watch1 text-black mt-2">WATCH</h2>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-base tracking-widest font-medium">SERIES 10</span>
                            </div>
                            <div className="flex justify-center">
                                <p className="font-normal text-xl text-black">Thinstant classic.</p>
                            </div>
                            <div className="flex justify-center py-3">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Buy</button>
                            </div>
                            <img src="/watch1.png" className="size-57px" alt="" />
                        </div>

                        {/* <div className="border watchcontainer">
                            <img src="/watch2.png" alt="" />
                            <div class="top-right">
                                <h2 className="iphone16 mt-14 flex text-white watch1"><img src="applewhite.svg" alt="" />WATCH</h2>
                                <span className="text-base tracking-widest font-medium">Series 10</span>
                                <p className="font-normal text-3xl text-white">Thinstant clasic.</p>
                                <div className="flex justify-center py-3">
                                    <button className="bg-white hover:bg-white-300 text-black py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                                    <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Buy</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="border watchcontainer">
                            <img src="/watch2.png" alt="" />
                            <div className="top-right flex mt-14 flex-col w-1/2 items-center">
                                <div className="flex justify-center ">
                                    <img src="applewhite.svg" alt="" />
                                    <h2 className="mt-2 text-white watch1"> WATCH</h2>
                                </div>
                                <p className="font-normal text-xl text-white">Untited by rhythm. Discover the new Black Unity watch band and face</p>
                                <div className="flex justify-center py-3">
                                    <button className="bg-white hover:bg-white text-black py-2 px-5 border hover:border-transparent rounded-full">Buy</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="border">
                            <h2 className="iphone16 mt-14 flex text-white">Watch</h2>
                            <span>Series 10</span>
                            <p className="font-normal text-3xl text-white">Thinstant clasic.</p>
                            <div className="flex justify-center py-3">
                                <button className="bg-white hover:bg-white-300 text-black py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                                <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Buy</button>
                            </div>
                        </div>
                        <div className="border">
                            <h2 className="iphone16 mt-14 flex text-white">Watch</h2>
                            <span>Series 10</span>
                            <p className="font-normal text-3xl text-white">Thinstant clasic.</p>
                            <div className="flex justify-center py-3">
                                <button className="bg-white hover:bg-white-300 text-black py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                                <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Buy</button>
                            </div>
                        </div>
                        <div className="border">
                            <h2 className="iphone16 mt-14 flex text-white">Watch</h2>
                            <span>Series 10</span>
                            <p className="font-normal text-3xl text-white">Thinstant clasic.</p>
                            <div className="flex justify-center py-3">
                                <button className="bg-white hover:bg-white-300 text-black py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                                <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Buy</button>
                            </div>
                        </div>
                        <div className="border">
                            <h2 className="iphone16 mt-14 flex text-white">Watch</h2>
                            <span>Series 10</span>
                            <p className="font-normal text-3xl text-white">Thinstant clasic.</p>
                            <div className="flex justify-center py-3">
                                <button className="bg-white hover:bg-white-300 text-black py-2 px-5 rounded-full">Learn more</button> &nbsp; &nbsp; &nbsp;
                                <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-5 border border-blue-500 hover:border-transparent rounded-full">Buy</button>
                            </div>
                        </div> */}
                    </div>
                    <img src="/ip16 .png" alt="" />
                </section>
            </main>

            {/* Clone code Start */}
            {/* <nav className="navbar">
                <div className="globalnav-content">
                    <ul className="global-nav-list">
                        <li className="global-nav-item-apple">
                            <a className="apple" href="">
                                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                                </svg>
                            </a>
                        </li>
                        <li><a href="">Store</a></li>
                        <li><a href="">Mac</a></li>
                        <li><a href="">iPad</a></li>
                        <li><a href="">IPhone</a></li>
                        <li><a href="">Watch</a></li>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Airpods</a></li>
                        <li><a href="">Tv & Home</a></li>
                        <li><a href="">Entertainment</a></li>
                        <li><a href="">Accessories</a></li>
                        <li><a href="">Support</a></li>
                        <li className="search-logo">
                            <a href="">
                                <svg xmlns="" width="15px" height="44px" viewBox="0 0 15 44">
                                    <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="checkout-logo">
                            <a href="">
                                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            {/*  <main>
                <section>
                    <div>
                        <div className="Macbook-content">
                            <div className="unit-wrapper">
                                <a className="unit-link" href=""></a>
                                <div className="unit-image-wrapper">
                                    <h2 className="headline">MacBook Air</h2>
                                    <p className="subhead">Lean. Mean. M3 Machine</p>
                                    <div className="cta-links">
                                        <a className="button primary" href="">Learn More</a>
                                        <a className="button secondary" href="">Buy</a>
                                    </div>
                                </div>
                                <div className="unit-copy-wrapper">
                                    <figure className="unit-image-macbook-air-m3"></figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="iPhone15-Pro-content">
                            <div className="unit-wrapper">
                                <a href="unit-link"></a>
                                <div className="unit-copy-wrapper">
                                    <h2 className="headline light">iPhone 15 Pro</h2>
                                    <p className="subhead light">
                                        Titanium. So Strong. So light. So Pro.
                                    </p>
                                    <div className="cta-links">
                                        <a className="button primary" href="">Learn More</a>
                                        <a className="button secondary" href="">Buy</a>
                                    </div>
                                </div>
                                <div className="unit-image-wrapper">
                                    <figure className="unit-image-wrapper-iphone-15-pro"></figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="iPhone15-Content">
                            <div className="unit-wrapper">
                                <a className="unit-link" href=""></a>

                                <div className="unit-copy-wrapper">
                                    <h2 className="headline">iPhone 15</h2>
                                    <p className="subhead">New Camera. New Design. Newphoria.</p>
                                    <div className="cta-links">
                                        <a className="button primary" href="">Learn More</a>
                                        <a className="button secondary" href="">Buy</a>
                                    </div>
                                </div>
                                <div className="unit-image-wrapper">
                                    <figure className="unit-image-wrapper-iphone-15"></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-2">
                    <div className="apple-watch">
                        <div className="unit-wrapper">
                            <a className="unit-link" href=""></a>
                            <h3 className="logo-image-apple-watch"></h3>
                            <p className="subhead white">Smarter. Brighter. Mighter.</p>
                            <div className="cta-links">
                                <a className="button primary" href="">Learn More</a>
                                <a className="button secondary" href="">Buy</a>
                            </div>
                        </div>
                        <div className="unit-image-wrapper">
                            <figure className="unit-image-apple-watch-series-9"></figure>
                        </div>
                    </div>

                    <div className="wwdc-content">
                        <div clas="unit-wrapper column">
                            <a className="unit-link" href=""></a>
                            <div className="unit-copy-wrapper">
                                <h3 className="headline"></h3>
                                <p className="subhead white">
                                    Apple Worldwide Developers Conference. Join us online June 10-14
                                </p>
                                <div className="cta-links">
                                    <a className="button primary" href="">Learn More</a>
                                </div>
                            </div>
                            <div className="unit-image-wrapper">
                                <figure className="unit-image-wwdc24"></figure>
                            </div>
                        </div>
                    </div>

                    <div className="college-content">
                        <div className="unit-wrapper">
                            <a className="unit-link" href=""></a>
                            <div className="unit-copy-wrapper">
                                <h3 className="headline white">College Students</h3>
                                <p className="subhead white">Mac and iPad. Go further.</p>
                                <div className="cta-links">
                                    <a href="" className="button primary">Learn More</a>
                                </div>
                            </div>
                            <div className="unit-image-wrapper">
                                <figure className="unit-image-ipad"></figure>
                            </div>
                        </div>
                    </div>

                    <div className="airpod-content">
                        <div className="unit-wrapper">
                            <a className="unit-link" href=""></a>
                            <div className="unit-copy-wrapper">
                                <h3 className="headline white">Airpods Pro</h3>
                                <p className="subhead white">Adaptive Audio. Now Playing.</p>
                                <div className="cta-links">
                                    <a href="" className="button primary">Learn More</a>
                                    <a href="" className="button secondary">Buy</a>
                                </div>
                            </div>
                            <div className="unit-image-wrapper">
                                <figure className="unit-image-wrapper-airpods"></figure>
                            </div>
                        </div>
                    </div>

                    <div className="vision-pro-content">
                        <div className="unit-wrapper">
                            <a className="unit-link" href=""></a>
                            <h3 className="logo-image-apple-vision"></h3>
                            <p className="subhead">Welcome to the era of spatial computing.</p>
                            <div className="cta-links">
                                <a className="button primary" href="">Learn more</a>
                            </div>
                            <div className="unit-image-wrapper-apple-vision">
                                <figure className="unit-image-apple-vision"></figure>
                            </div>
                        </div>
                    </div>

                    <div className="apple-card-content">
                        <div className="unit-wrapper">
                            <a className="unit-link" href=""></a>
                            <div className="unit-copy-wrapper">
                                <h3 className="logo-image-apple-card"></h3>
                                <p className="subhead">
                                    Get up to 3% Daily Cash back with every purchase
                                </p>
                                <div className="cta-links">
                                    <a className="button primary" href="">Learn More</a>
                                    <a className="button secondary" href="">Apply now</a>
                                </div>
                            </div>
                            <div className="unit-image-wrapper">
                                <figure className="unit-image-apple-card"></figure>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <footer className="ac-globalfooter">
                <div className="ac-gf-content">
                    <section className="gf-sosumi">
                        <ul>
                            <li>
                                <span>
                                    1. Apple&nbsp;Fitness+ requires iPhone&nbsp;8 or later or
                                    Apple&nbsp;Watch Series&nbsp;3 or later paired with
                                    iPhone&nbsp;6s or later. New subscribers only. $9.99/month after
                                    free trial. Plan automatically renews after trial until
                                    cancelled. Terms apply.
                                </span>
                            </li>
                            <li>
                                <span className="trade-in-2024-legal">2. Get extra trade-in credit when you trade in an eligible
                                    iPhone and purchase a new eligible Apple device through June 3,
                                    2024. Additional terms from Apple or Apple’s trade-in partners
                                    may apply.</span>
                            </li>
                            <li>
                                Available in the U.S on <a href="">apple.com</a> in the Apple
                                Store app, and at Apple Stroes.
                            </li>
                            <li>
                                To access and use all Apple Card features and products available
                                only to Apple Card users, you must add Apple Card to Wallet on an
                                iPhone or iPad that supports and has the latest version of iOS or
                                iPadOS. Apple Card is subject to credit approval, available only
                                for qualifying applicants in the United States, and issued by
                                Goldman Sachs Bank USA, Salt Lake City Branch.
                            </li>
                            <li>
                                If you reside in the U.S. territories, please call Goldman Sachs
                                at 877-255-5923 with questions about Apple Card.
                            </li>
                            <li>
                                Learn more about how Apple Card applications are evaluated at
                                <a href="">support.apple.com/kb/HT209218</a>.
                            </li>
                            <li>
                                <span className="">A subscription is required for Apple TV+.</span>
                            </li>
                            <li>
                                <span className="">Major League Baseball trademarks and copyrights are used with
                                    permission of MLB Advanced Media, L.P. All rights
                                    reserved.</span>
                            </li>
                        </ul>
                    </section>

                    <nav className="gf-directory">
                        <div className="gf-column">
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">Shop and Learn</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Store</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Mac</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">iPad</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">iPhone</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Watch</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Vision</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">AirPods</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">TV & Home</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">AirTag</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Accessories</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Gift Cards</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">Apple Wallet</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Wallet</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Card</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Pay</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Cash</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="gf-column">
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">Account</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Store Account</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">iCloud.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">Entertainment</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple One</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple TV+ </a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Music</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Arcade</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Fitness+ </a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple News+ </a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Podcasts</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Books</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">App Store</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="gf-column">
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">Apple Store</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Genius Bar</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Today at Apple</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Camp</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Store App</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Certified Refurbished</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Trade In</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Financing</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Carrier Deals at Apple</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Order Status</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Shopping Help</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="gf-column">
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">For Business</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple and Business</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Shop for Business</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">For Education</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple and Education</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Shop for K-12</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Shop for College</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">For Healthcare</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple in Healthcare</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Health on Apple Watch</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Health Records on iPhone</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">For Government</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Shop for Government</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Shop for Veterans and Military</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="gf-column">
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">Apple Values</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Accessibility</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Education</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Environment</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Inclusion and Diversity</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Privacy</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Racial Equity and Justice</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Supplier Responsibility</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="gf-column-section">
                                <h3 className="gf-column-title">
                                    <span className="gf-column-title-text">About Apple</span>
                                </h3>
                                <ul>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Newsroom</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Apple Leadership</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Career Opportunities</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Investors</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Ethics & Compliance</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Events</a>
                                    </li>
                                    <li className="gf-directory-column-section-item">
                                        <a href="">Contact Apple</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <section className="gf-footer">
                        <div className="gf-footer-shop">
                            More ways to shop:
                            <a href="">Find an Apple Store</a>
                            or
                            <a href="">other retailer</a>
                            near you
                            <span className="nonwrap">or call 1-800-MY-APPLE.</span>
                        </div>

                        <div className="gf-legal-locale">
                            <a className="gf-locale-link">United States</a>
                        </div>

                        <div className="gf-footer-legal">
                            <div className="copyright">
                                Copyright © 2024 Apple Inc. All rights reserved.
                            </div>
                            <ul className="legal-links">
                                <li className="legal-links-item">
                                    <a className="legal-link" href="">Privacy Policy</a>
                                </li>
                                <li className="legal-links-item">
                                    <a className="legal-link" href="">Terms of Use</a>
                                </li>
                                <li className="legal-links-item">
                                    <a className="legal-link" href="">Sales and Refunds</a>
                                </li>
                                <li className="legal-links-item">
                                    <a className="legal-link" href="">Legal</a>
                                </li>
                                <li className="legal-links-item">
                                    <a className="legal-link" href="">Site Map</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </footer> */}
            {/* Clone Code End */}



        </>
    );

}