const phones = (() => {
    const products = [
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/54/236026/tai-nghe-bluetooth-airpods-pro-apple-mwp22-thumb-600x600.jpg)',
            name: 'Tai nghe Bluetooth AirPods Pro Wireless Charge Apple MWP22',
            price: '5.490.000₫',
            markerList: ['hot', 'new'],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-ava-600x600.jpg)',
            name: 'Tai nghe Bluetooth AirPods 2 Apple MV7N2',
            price: '3.590.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/54/230363/tai-nghe-bluetooth-true-wireless-mozard-ts13-thumb-600x600.jpg)',
            name: 'Tai nghe Bluetooth True Wireless Mozard TS13',
            price: '390.000₫',
            markerList: ['hot', 'new'],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/54/238028/bluetooth-true-wireless-hydrus-ts12bc-thumb-600x600.jpg)',
            name: 'Tai nghe Bluetooth True Wireless Hydrus TS12BC',
            price: '302.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/54/256512/bluetooth-true-wireless-ava-ds200a-wb-thumb-600x600.png)',
            name: 'Tai nghe Bluetooth True Wireless AVA+ DS200A-WB',
            price: '390.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/57/226142/sac-du-phong-polymer-10000mah-qc30-xmobile-p68d-avatar-1-600x600.jpg)',
            name: 'Xmobile P68D',
            price: '490.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/57/229275/sac-du-phong-10000mah-khong-day-xmobile-p106wd-avatar-1-600x600.jpg)',
            name: 'Xmobile PowerLite P106WD',
            price: '525.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/2162/236680/bluetooth-mozard-bt100-600x600.jpg)',
            name: 'Loa Bluetooth Mozard BT100 Mẫu mới',
            price: '1.432.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/2162/230265/loa-bluetooth-mozard-e8-600x600.jpg)',
            name: 'Loa Bluetooth Mozard E8',
            price: '760.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/2162/224541/loa-bluetooth-fenda-w5-plus-600x600.jpg)',
            name: 'Loa Bluetooth Fenda W5 Plus',
            price: '360.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },

    ];

    const banners = [
        {
            img: './assets/img/banner1.jpg',
            link: '#'
        },
        {
            img: './assets/img/banner2.jpg',
            link: '#'
        },
        {
            img: './assets/img/banner3.jpg',
            link: '#'
        },
    ]

    let currentBanner = 0;
    const prevBtn = document.querySelector('.phone-banner__btn-prev');
    const nextBtn = document.querySelector('.phone-banner__btn-next');
    let firstBanner;
    let bannerPaginationBtns;
    let setTimeChangeBanner;

    return {
        render() {
            const htmlPhone = products.map(product => {
                const markers = product.markerList.reduce((acc, curr) => {
                    return acc + `active-marker--${curr} `;
                }, '');
                return `
                <div class="col l-2-4 l-3-m m-4 c-6">
                    <div class="container-product__item">
                        <div class="container-product__item-heading">
                            <div class="container-product__item-img" style="background-image: ${product.img};"></div>
                    
                            <div class="container-product-guarantee">
                                <a href=${product.linkProduct} class="container-product__item-link">
                                    <div class="container-product-guarantee__heading">
                                        <img src="https://mobilecity.vn/public/assets/img/icon-mobilecity-care.png" alt="Guarantee" class="container-product-guarantee__heading-img">
                                        <h3 class="container-product-guarantee__heading-text">MobileCity Care</h3>
                                    </div>

                                    <ul class="container-product-guarantee__list">
                                        <li class="container-product-guarantee__item">BH 12 tháng nguồn, màn hình</li>
                                        <li class="container-product-guarantee__item">Đổi mới 30 ngày đầu tiên</li>
                                        <li class="container-product-guarantee__item">Tặng ốp lưng, dán cường lực</li>
                                        <li class="container-product-guarantee__item">Hỗ trợ phần mềm trọn đời máy</li>
                                    </ul>
                                </a>
                                <a href=${product.linkGuarantee} class="container-product-guarantee__btn">Bảo hành vàng</a>
                            </div>
                        </div>
                        <div class="container-product__item-wrap">
                            <div class="container-product__item-info">
                                <a href="#" class="container-product__item-name">
                                    ${product.name}
                                </a>
                                <i class="container-product__item-sale-icon fas fa-gift"></i>
                            </div>
                            <div class="container-product__item-buy">
                                <span class="container-product__item-price">
                                    ${product.price}
                                </span>
                                <a href=${product.linkProduct} class="container-product__item-btn">MUA</a>
                            </div>
                        </div>
                        <ul class="container-product__item-gifts-list">
                            <li class="container-product__item-gift">
                            <span class="container-product__item-span">KM</span>
                            Tặng Phiếu mua hàng 500.000đ
                            </li>
                           
                        </ul>
                        <ul class="container-product-marker__list ${markers}">
                            <li class="container-product-marker__item container-product-marker__item--new">Mới</li>
                            <li class="container-product-marker__item container-product-marker__item--hot">Hot</li>
                        </ul>
                    </div>
                </div>
                `;
            }).join('');

            document.querySelector('.phukien-products').innerHTML = htmlPhone;

            const percent = 100 / banners.length;
            const bannerPaginations = [];
            const htmlBanner = banners.map((banner, index) => {
                let first = '';
                if (index === 0) {
                    first = 'banner--first';
                    bannerPaginations.push(`<div data-set="${percent * index}%" class="phone-banner-pagination__item active"></div>`);
                } else {
                    bannerPaginations.push(`<div data-set="-${percent * index}%" class="phone-banner-pagination__item"></div>`);
                }
                return `
                    <a href=${banner.link} class="banner__link ${first}" style="width: ${percent}%">
                        <img src=${banner.img} alt="Banner ${index + 1}" class="banner__img">
                    </a>
                `
            }, '').join('');

            document.querySelector('.phone-banner__list').innerHTML = htmlBanner;
            document.querySelector('.phone-banner__list').style.width = `${banners.length * 100}%`;
            document.querySelector('.phone-banner-pagination').innerHTML = bannerPaginations.join('');
        },
        handleBanner() {
            const _this = this;
            firstBanner = document.querySelector('.banner--first');
            bannerPaginationBtns = document.querySelectorAll('.phone-banner-pagination__item');

            prevBtn.onclick = () => {
                this.prevBanner();
                this.autoChangeBanner(true);
            }

            nextBtn.onclick = () => {
                this.nextBanner();
                this.autoChangeBanner(true);
            }

            bannerPaginationBtns.forEach(function (btn, index) {
                btn.onclick = () => {
                    currentBanner = index;
                    firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
                    document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
                    bannerPaginationBtns[currentBanner].classList.add('active');
                    _this.autoChangeBanner(true);
                }
            });
        },
        prevBanner() {
            currentBanner -= 1;
            if (currentBanner < 0) {
                currentBanner = banners.length - 1;
            };
            firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
            document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
            bannerPaginationBtns[currentBanner].classList.add('active');
        },
        nextBanner() {
            currentBanner += 1;
            if (currentBanner > banners.length - 1) {
                currentBanner = 0;
            };
            firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
            document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
            bannerPaginationBtns[currentBanner].classList.add('active');
        },
        autoChangeBanner(isClick) {
            const _this = this;
            if (isClick) {
                clearInterval(setTimeChangeBanner);
                setTimeChangeBanner = setInterval(function () {
                    _this.nextBanner();
                }, 3000);
            } else {
                setTimeChangeBanner = setInterval(function () {
                    _this.nextBanner();
                }, 3000);
            }
        },
        init() {
            this.render();
            this.handleBanner();
            this.autoChangeBanner();
        }
    }
})();

phones.init();