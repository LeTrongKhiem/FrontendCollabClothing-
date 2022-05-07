const phones = (() => {
    const products = [
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/253582/apple-macbook-pro-16-m1-max-2021-600x600.jpg)',
            name: 'MacBook Pro 16 M1 Max 2021/32 core-GPU',
            price: '90.990.000₫',
            markerList: ['hot', 'new'],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/242201/msi-gf66-11uc-i7-224vn-600x600.jpg)',
            name: 'MSI Katana Gaming GF66 11UC i7 11800H (224VN)',
            price: '28.290.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/251418/asus-rog-zephyrus-gaming-g14-ga401qec-r9-k2064t-17-600x600.jpg)',
            name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H',
            price: '28.190.000₫',
            markerList: ['hot', 'new'],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/255561/lenovo-yoga-slim-7-14itl05-i5-82a300dpvn-021121-030538-600x600.jpg)',
            name: 'Lenovo Yoga Slim 7 14ITL05 i5 1135G7 (82A300DPVN)',
            price: '21.990.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/250518/acer-aspire-7-gaming-a715-42g-r6zr-r5-5500u-8gb-600x600.jpg)',
            name: 'Acer Aspire 7 Gaming A715 42G R6ZR R5 5500U',
            price: '21.160.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/260058/acer-nitro-5-gaming-an515-57-720a-i7-nhqeqsv004-171121-024959-600x600.jpg)',
            name: 'Acer Nitro 5 Gaming AN515 57 720A i7 11800H',
            price: '28.660.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/260156/gigabyte-gaming-g5-i5-10500h-16gb-512gb-6gb-171121-034937-600x600.jpg)',
            name: 'Gigabyte Gaming G5 i5 10500H (KC-5S11130SB)',
            price: '26.990.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/260054/acer-nitro-5-gaming-an515-57-71vv-i7-nhqensv005-171121-025028-600x600.jpg)',
            name: 'Acer Nitro 5 Gaming AN515 57 71VV i7 11800H',
            price: '27.240.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/255289/msi-katana-gf76-11uc-i7-441vn-600x600.jpg)',
            name: 'Acer Nitro 5 Gaming AN515 57 71VV i7 11800H',
            price: '27.240.000₫',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(https://cdn.tgdd.vn/Products/Images/44/255289/msi-katana-gf76-11uc-i7-441vn-600x600.jpg)',
            name: 'MSI Katana GF76 11UC i7 11800H (441VN)',
            price: '28.290.000₫',
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
                            Tặng Phiếu mua hàng 1.500.000đ
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

            document.querySelector('.laptop-products').innerHTML = htmlPhone;

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