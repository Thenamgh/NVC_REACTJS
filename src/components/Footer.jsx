import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-8">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://maps.app.goo.gl/E35sAYgCtnmi65wP7" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>Hà Nội, Việt Nam</p></a>
                            <a href="tel:+84- 329328812"><p><i className="fa fa-phone"></i>+84- 329328812</p></a>
                            <a href="mailto:clbnangvungcao2023@gmail.com"><p><i className="fa fa-envelope"></i>clbnangvungcao2023@gmail.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="https://www.tiktok.com/@nangvungcao1406"><i class="fa-brands fa-tiktok"></i></a>
                                <a className="btn btn-custom" href="https://www.facebook.com/nangvungcao"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href=""><i className="fab fa-youtube"></i></a>
                                {/* <a className="btn btn-custom" href=""><i className=""></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">Về Nắng</a>
                            <a href="/contact">Liên hệ</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                            <a href="#">Latest Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="#">Terms of use</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Cookies</a>
                            <a href="#">Help</a>
                            <a href="#">FQAs</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Điền email tại đây" autoComplete='email' required />
                                <button className="btn btn-custom">Submit</button>
                                <h6>Yên tâm nhé, Nắng không làm phiền bạn bằng thư rác đâu!</h6>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">Nắng Vùng Cao</a> | 2024, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://www.instagram.com/2hi.april/">22.April</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}