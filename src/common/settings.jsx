export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 1470,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1270,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1070,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };