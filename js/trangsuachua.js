const unlock = (() => {
    const products = [
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2016/12/w300/thay-man-hinh-oppo-joy-neo-yoyo-find-find-way-r.jpg)',
            name: 'Thay màn hình Oppo',
            price: '150.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2018/12/w300/ava-thay-mat-kinh-iphone-x.jpg)',
            name: 'Ép, thay mặt kính, cảm ứng iPhone X | XR | XS | XS Max',
            price: '500.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2021/01/w300/iphone-6s.jpg)',
            name: 'Thay màn hình, mặt kính cảm ứng iPhone 6 | 6S Plus & IP 6S (Tặng dán Cường lực)',
            price: '200.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2019/07/w300/ava-thay-mat-kinh-iphone-7.jpg)',
            name: 'Thay mặt kính iPhone 7, 7 Plus (Tặng dán Cường lực)',
            price: '200.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2021/01/w300/iphone-8-1.jpg)',
            name: 'Thay màn hình iPhone 8 | 8 Plus (Tặng dán Cường lực)',
            price: '200.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2019/03/w300/ava-thay-mat-kinh-truoc-sau-iphone-8.jpg)',
            name: 'Thay mặt kính (Trước, Lưng Sau) iPhone 8, 8 Plus (Tặng dán Cường lực)',
            price: '200.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2021/01/w300/iphone-x.jpg)',
            name: 'Thay màn hình iPhone Xs Max, iPhone Xs, iPhone Xr',
            price: '1.350.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2019/03/w300/thay-kinh-lung-sau-iphone-x.jpg)',
            name: 'Thay mặt kính sau lưng iPhone X | XR | XS Max',
            price: '300.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2017/03/w300/thay-pin-iPhone--7-Plus-thumnail.jpg)',
            name: 'Thay pin iPhone 7, 7 Plus',
            price: '200.000₫',
            link: '#',
        },
        {
            img: 'url(https://cdn.mobilecity.vn/mobilecity-vn/images/2016/11/w300/thay-pin-iphone-6s-plus-1.jpg)',
            name: 'Thay pin iPhone 6S Plus, iPhone 6S',
            price: '200.000₫',
            link: '#',
        },
    ];

    return {
        render() {
            const htmlUnlock = products.map((product) => {
                return `
                <div class="col l-2-4 l-3-m m-4 c-6">
                    <div class="container-product__item">
                        <div class="container-product__item-heading">
                            <a href=${product.link} class="container-product__item-link">
                                <div class="container-product__item-img" style="background-image: ${product.img};"></div>
                            </a>
                    
                            <div class="container-product-guarantee container-product-guarantee--fix-unlock">
                                <a href=${product.link} class="container-product__item-link">
                                    <ul class="container-product-guarantee__list">
                                        <li class="container-product-guarantee__item">Miễn phí cài đặt phần mềm</li>
                                        <li class="container-product-guarantee__item">Tặng tấm dán màn hình chống xước</li>
                                        <li class="container-product-guarantee__item">
                                            Tặng Gift Cards giảm giá sửa chữa
                                            <span class="text--highlight-red">50.000 đ</span> 
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        </div>
                        <div class="container-product__item-wrap">
                            <div class="container-product__item-info">
                                <a href="#" class="container-product__item-name">
                                    ${product.name}
                                </a>
                            </div>
                            <div class="container-product__item-buy">
                                <span class="container-product__item-price">
                                    ${product.price}
                                </span>
                                <a href=${product.link} class="container-product__item-btn">MUA</a>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }, '').join('');

            document.querySelector('.suachua-products').innerHTML = htmlUnlock;
        },
        init() {
            this.render();
        }
    }
})();

unlock.init();