
  export function responsiveSettings(totalSlides){

    function slideToShowValue(value) {
      if(value > totalSlides){
        return totalSlides;
      }
      else{
        return value;
      }
    }

    function slideToScrollValue(value) {
      if(value > totalSlides){
        return Math.ceil((totalSlides) / 3);
      }
      else{
        return Math.ceil((value) / 3);
      }
    }

    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slideToShowValue(6),
      slidesToScroll: slideToScrollValue(6),
      responsive: [
        {
          breakpoint: 1470,
          settings: {
            slidesToShow: slideToShowValue(5),
            slidesToScroll: slideToScrollValue(5),
            infinite: true
          }
        },
        {
          breakpoint: 1270,
          settings: {
            slidesToShow: slideToShowValue(4),
            slidesToScroll: slideToScrollValue(4),
            infinite: true
          }
        },
        {
          breakpoint: 1070,
          settings: {
            slidesToShow: slideToShowValue(3),
            slidesToScroll: slideToScrollValue(3),
            infinite: true
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: slideToShowValue(2),
            slidesToScroll: slideToScrollValue(2),
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: slideToShowValue(1),
            slidesToScroll: slideToScrollValue(1),
          }
        }
      ]
    }
  }


// export const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 3,
//     responsive: [
//         {
//           breakpoint: 1470,
//           settings: {
//             slidesToShow: 5,
//             slidesToScroll: 3,
//             infinite: true
//           }
//         },
//         {
//           breakpoint: 1270,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 2,
//             infinite: true
//           }
//         },
//         {
//           breakpoint: 1070,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 2,
//             infinite: true
//           }
//         },
//         {
//           breakpoint: 765,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 560,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//   };

  // export function responsiveSettings(totalSlides){
  //   let reduceNumber = 0;
  //   if (totalSlides < 6){
  //     reduceNumber = 6 - totalSlides;
  //   }

  //   function slideToShowValue(value) {
  //     if((value - reduceNumber) < 1){
  //       return 1;
  //     }
  //     else{
  //       return value - reduceNumber;
  //     }
  //   }

  //   function slideToScrollValue(value) {
  //     if((Math.ceil((value - reduceNumber) / 2) ) < 1){
  //       return 1;
  //     }
  //     else{
  //       return Math.ceil((value - reduceNumber) / 2);
  //     }
  //   }

  //   return {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: slideToShowValue(6),
  //     slidesToScroll: slideToScrollValue(6),
  //     responsive: [
  //       {
  //         breakpoint: 1470,
  //         settings: {
  //           slidesToShow: slideToShowValue(5),
  //           slidesToScroll: slideToScrollValue(5),
  //           infinite: true
  //         }
  //       },
  //       {
  //         breakpoint: 1270,
  //         settings: {
  //           slidesToShow: slideToShowValue(4),
  //           slidesToScroll: slideToScrollValue(4),
  //           infinite: true
  //         }
  //       },
  //       {
  //         breakpoint: 1070,
  //         settings: {
  //           slidesToShow: slideToShowValue(3),
  //           slidesToScroll: slideToScrollValue(3),
  //           infinite: true
  //         }
  //       },
  //       {
  //         breakpoint: 765,
  //         settings: {
  //           slidesToShow: slideToShowValue(2),
  //           slidesToScroll: slideToScrollValue(2),
  //         }
  //       },
  //       {
  //         breakpoint: 560,
  //         settings: {
  //           slidesToShow: slideToShowValue(1),
  //           slidesToScroll: slideToScrollValue(1),
  //         }
  //       }
  //     ]
  //   }
  // }
